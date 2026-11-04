/* Greenhouse logic: no screen code here, so the tests can run it directly. */
(function (root) {
  "use strict";

  function shuffle(list, rand = Math.random) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* Lowercase, drop punctuation and leading "the", collapse spaces. */
  function normalize(s) {
    return String(s ?? "")
      .toLowerCase()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/^the /, "");
  }

  function editDistance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++)
      for (let j = 1; j <= b.length; j++)
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[a.length][b.length];
  }

  /* A typed answer counts if it matches an accepted answer, allowing one
     typo in answers of 6+ letters and two in answers of 10+. Numbers must match exactly. */
  function matches(typed, accept) {
    const t = normalize(typed);
    if (!t) return false;
    return accept.some((x) => {
      const a = normalize(x);
      if (t === a) return true;
      if (/\d/.test(a)) return false;
      const allowed = a.length >= 10 ? 2 : a.length >= 6 ? 1 : 0;
      return allowed > 0 && editDistance(t, a) <= allowed;
    });
  }

  /* Interleave topics so no two neighbours share a topic when it can be avoided. */
  function interleave(items) {
    const groups = {};
    items.forEach((x) => (groups[x.topic] = groups[x.topic] || []).push(x));
    const queues = Object.values(groups).sort((a, b) => b.length - a.length);
    const out = [];
    while (queues.some((q) => q.length)) queues.forEach((q) => q.length && out.push(q.shift()));
    return out;
  }

  function allItems(set) {
    const out = [];
    set.topics.forEach((t) => t.items.forEach((i) => out.push({ ...i, topic: t.id, topicName: t.name })));
    return out;
  }

  /* Practice round: a shuffled, topic-mixed handful. Optional topic filter. */
  function buildPractice(set, size = 12, rand = Math.random, topicId = null) {
    const pool = allItems(set).filter((i) => !topicId || i.topic === topicId);
    return interleave(shuffle(pool, rand)).slice(0, size);
  }

  /* Readiness check: spread evenly across topics, then mixed. */
  function buildCheck(set, size = 20, rand = Math.random) {
    const byTopic = set.topics.map((t) => shuffle(t.items.map((i) => ({ ...i, topic: t.id, topicName: t.name })), rand));
    const picked = [];
    while (picked.length < size && byTopic.some((q) => q.length))
      byTopic.forEach((q) => { if (q.length && picked.length < size) picked.push(q.shift()); });
    return interleave(shuffle(picked, rand));
  }

  /* Results of a readiness check, per topic, in set order. */
  function scoreCheck(set, results) {
    const total = results.length, right = results.filter((r) => r.pass).length;
    const topics = set.topics
      .map((t) => {
        const mine = results.filter((r) => r.topic === t.id);
        return { id: t.id, name: t.name, right: mine.filter((r) => r.pass).length, total: mine.length };
      })
      .filter((t) => t.total > 0);
    return { right, total, pct: total ? Math.round((right / total) * 100) : 0, topics };
  }

  /* Text-message link for "Looks wrong". No phone number: she picks the recipient. */
  function flagLink(set, item) {
    const q = item.q || item.front || "";
    const body = `Greenhouse "Looks wrong" report\nSet: ${set.title}\nQuestion (${item.id}): ${q}\nApp's answer: ${answerText(item)}\nWhat looks wrong: `;
    return "sms:?&body=" + encodeURIComponent(body);
  }

  function answerText(item) {
    return item.type === "mc" ? item.options[item.answer] : item.answer;
  }

  /* ---------- Phase 2: saved progress and spaced review ----------
     Scheduling is the FSRS library (vendor/ts-fsrs). We only decide what counts as a pass,
     cap review gaps before the test, and define "solid". */
  const F = root.FSRS || (typeof require === "function" ? require("./vendor/ts-fsrs-5.4.2.umd.js") : null);
  const scheduler = F.fsrs(F.generatorParameters({ enable_short_term: false, enable_fuzz: false, request_retention: 0.9 }));
  const DAY = 864e5, SOLID_DAYS = 7, ROUND = 12, ROUND_MAX = 15, NEW_MIN = 3;

  function dayKey(d) {
    d = new Date(d);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function testTime(set) { return set.testDate ? new Date(set.testDate + "T08:00:00").getTime() : null; }

  function emptyProgress() { return { version: 1, sets: {} }; }
  function setProgress(progress, setId) {
    return (progress.sets[setId] = progress.sets[setId] || { items: {}, checks: [] });
  }

  /* Cards are saved as JSON, so dates come back as strings. */
  function toCard(saved) {
    return { ...saved, due: new Date(saved.due), last_review: saved.last_review ? new Date(saved.last_review) : undefined };
  }
  function fromCard(card) {
    return { ...card, due: card.due.toISOString(), last_review: card.last_review ? new Date(card.last_review).toISOString() : null };
  }

  /* Record one answer. A miss resets the "different days" count. */
  function record(progress, set, item, pass, now) {
    const sp = setProgress(progress, set.id);
    const e = sp.items[item.id] || { card: null, days: [], reps: 0 };
    const card = e.card ? toCard(e.card) : F.createEmptyCard(new Date(now));
    const next = scheduler.next(card, new Date(now), pass ? F.Rating.Good : F.Rating.Again).card;
    e.card = fromCard(next);
    e.reps++;
    e.last = pass;
    if (!pass) e.days = [];
    else if (item.type === "short" && !e.days.includes(dayKey(now))) e.days.push(dayKey(now));
    sp.items[item.id] = e;
    return e;
  }

  /* Chance she'd recall it at that moment. Unseen counts as zero. */
  function recall(entry, at) {
    if (!entry || !entry.card || !entry.card.last_review) return 0;
    return scheduler.get_retrievability(toCard(entry.card), new Date(at), false);
  }

  /* What a question adds to confidence: its recall chance, or zero if she missed it last time. */
  function known(entry, at) { return entry && entry.last === false ? 0 : recall(entry, at); }

  /* When it's next due. Before a test, no gap is longer than half the time left to it. */
  function dueAt(entry, set) {
    const due = new Date(entry.card.due).getTime(), last = new Date(entry.card.last_review).getTime(), t = testTime(set);
    if (!t || last >= t) return due;
    return Math.min(due, last + Math.max(DAY, (t - last) / 2));
  }

  /* Solid: typed recall on two different days, expected to hold a week, and not faded since. */
  function isSolid(item, entry, now) {
    return item.type === "short" && !!entry && !!entry.card && entry.days.length >= 2 &&
      entry.card.stability >= SOLID_DAYS && recall(entry, now) >= 0.8;
  }

  /* Today's round: what's due (most faded first), plus a few new questions, topics mixed.
     Never longer than ROUND_MAX, so a missed week never turns into a pile. */
  function buildToday(set, progress, now, rand = Math.random) {
    const sp = setProgress(progress, set.id), all = allItems(set);
    const due = all
      .filter((i) => sp.items[i.id] && sp.items[i.id].card && dueAt(sp.items[i.id], set) <= now)
      .sort((a, b) => recall(sp.items[a.id], now) - recall(sp.items[b.id], now));
    const unseen = interleave(shuffle(all.filter((i) => !sp.items[i.id]), rand));
    const fresh = unseen.slice(0, Math.max(NEW_MIN, ROUND - Math.min(due.length, ROUND)));
    const reviews = due.slice(0, ROUND_MAX - fresh.length);
    return interleave(shuffle([...reviews, ...fresh], rand));
  }

  function topicStats(set, progress, now) {
    const sp = setProgress(progress, set.id);
    return set.topics.map((t) => {
      const seen = t.items.filter((i) => sp.items[i.id]);
      const recallItems = t.items.filter((i) => i.type === "short");
      const score = t.items.reduce((a, i) => a + known(sp.items[i.id], now), 0) / t.items.length;
      const faded = seen.filter((i) => dueAt(sp.items[i.id], set) <= now).length; // past their review date
      return {
        id: t.id, name: t.name, score, seen: seen.length, total: t.items.length,
        solid: recallItems.filter((i) => isSolid(i, sp.items[i.id], now)).length, recallTotal: recallItems.length,
        needsWater: seen.length > 0 && faded / seen.length >= 0.25,
      };
    });
  }

  /* Test confidence: estimated share of all questions she'd get right right now.
     Unseen and last-missed questions count as zero. */
  function confidence(set, progress, now) {
    const sp = setProgress(progress, set.id), all = allItems(set);
    const sum = all.reduce((a, i) => a + known(sp.items[i.id], now), 0);
    const recallItems = all.filter((i) => i.type === "short");
    return {
      pct: Math.round((sum / all.length) * 100),
      seen: all.filter((i) => sp.items[i.id]).length,
      total: all.length,
      solid: recallItems.filter((i) => isSolid(i, sp.items[i.id], now)).length,
      recallTotal: recallItems.length,
    };
  }

  function minutesFor(items) {
    return Math.max(2, Math.round(items.reduce((a, i) => a + (i.type === "mc" ? 0.5 : 0.75), 0)));
  }

  /* Backup code for moving progress to another device. */
  function exportCode(progress) {
    const json = JSON.stringify(progress);
    return "GH1:" + (typeof btoa === "function" ? btoa(unescape(encodeURIComponent(json))) : Buffer.from(json).toString("base64"));
  }
  function importCode(code) {
    const raw = String(code || "").trim();
    if (!raw.startsWith("GH1:")) throw new Error("not a Greenhouse code");
    const json = decodeURIComponent(escape(atob(raw.slice(4))));
    const p = JSON.parse(json);
    if (!p || p.version !== 1 || typeof p.sets !== "object") throw new Error("not a Greenhouse code");
    return p;
  }

  const api = { shuffle, normalize, editDistance, matches, interleave, allItems, buildPractice, buildCheck, scoreCheck, flagLink, answerText,
    dayKey, emptyProgress, setProgress, record, recall, dueAt, isSolid, buildToday, topicStats, confidence, minutesFor, exportCode, importCode };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.GH = Object.assign(root.GH || {}, api);
})(typeof globalThis !== "undefined" ? globalThis : this);
