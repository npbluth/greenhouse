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

  const api = { shuffle, normalize, editDistance, matches, interleave, allItems, buildPractice, buildCheck, scoreCheck, flagLink, answerText };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.GH = Object.assign(root.GH || {}, api);
})(typeof globalThis !== "undefined" ? globalThis : this);
