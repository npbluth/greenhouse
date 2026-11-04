/* Greenhouse screens. All learning rules live in logic.js. */
"use strict";
const SET = globalThis.GH_SETS[0];
const DAY = 864e5;
const PRACTICE_SIZE = 12, CHECK_SIZE = 20;
const CHEERS = ["Nailed it!", "Yes!", "Exactly right.", "Look at you go.", "Sharp!", "That's the one.", "Correct!", "Got it!"];
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const calm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let s = { view: "home" }; // the whole screen state

/* ---------- saved progress (this phone only) ---------- */
const KEY = "greenhouse.progress.v1";
let saveOK = true;
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    localStorage.setItem(KEY + ".test", "1");
    localStorage.removeItem(KEY + ".test");
    if (raw) return JSON.parse(raw);
  } catch (e) { saveOK = false; }
  return GH.emptyProgress();
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(P)); saveOK = true; } catch (e) { saveOK = false; }
}
const P = load();
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
const SP = () => GH.setProgress(P, SET.id);
function recordAnswer(it, pass) { GH.record(P, SET, it, pass, Date.now()); save(); }
const saveWarning = () => saveOK ? "" : `<p class="notice" role="alert">This browser isn't saving your progress. In Safari, turn off Private Browsing, or add Greenhouse to your Home Screen.</p>`;

/* ---------- drawing ---------- */
const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="currentColor"/><path d="M16 25V13" stroke="var(--panel)" stroke-width="2.5" stroke-linecap="round"/><path d="M16 15c0-4 3-6 7-6 0 4-3 6-7 6zM16 18c0-3-2-5-6-5 0 3 2 5 6 5z" fill="var(--panel)"/></svg>`;

/* state: "seed" (not yet), "sprout" (answered, missed first try), "bloom" (right first try), "now" (current) */
function pot(state, isNew) {
  const soil = `<path d="M5 30h20l-3 8H8z" fill="#c9764a"/>`;
  let g = "";
  if (state === "seed" || state === "now") g = `<ellipse cx="15" cy="29" rx="3.5" ry="2.2" fill="${state === "now" ? "var(--leaf)" : "#a88457"}"/>`;
  if (state === "sprout") g = `<path d="M15 30v-9" stroke="var(--leaf)" stroke-width="2.4" stroke-linecap="round"/><path d="M15 23c0-3 2-4 5-4 0 3-2 4-5 4z" fill="var(--leaf)"/>`;
  if (state === "bloom") {
    g = `<path d="M15 30V14" stroke="var(--leaf)" stroke-width="2.4" stroke-linecap="round"/><path d="M15 24c0-3 2-4 5-4 0 3-2 4-5 4zM15 26c0-3-2-4-5-4 0 3 2 4 5 4z" fill="var(--leaf)"/>`;
    for (let a = 0; a < 5; a++) g += `<ellipse cx="15" cy="6.5" rx="3" ry="4.6" fill="var(--petal)" transform="rotate(${a * 72} 15 11)"/>`;
    g += `<circle cx="15" cy="11" r="2.8" fill="var(--sun)"/>`;
  }
  return `<div class="pot"><svg viewBox="0 0 30 40" aria-hidden="true"><g class="${isNew ? "bloom" : ""}">${g}</g>${soil}</svg></div>`;
}

function garden() {
  const q = s.quiz;
  const pots = q.base.map((it, k) => {
    const r = q.first[it.id];
    if (r === undefined) return pot(k === q.i && q.i < q.base.length ? "now" : "seed");
    if (q.mode === "check") return pot("sprout");
    return pot(r ? "bloom" : "sprout", it.id === q.justBloomed);
  });
  const done = Object.keys(q.first).length;
  return `<div class="garden" role="img" aria-label="${done} of ${q.base.length} answered">${pots.join("")}</div>`;
}

function burst(el) {
  if (calm() || !el) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const kinds = ["leaf", "petal", "sun"];
  for (let n = 0; n < 18; n++) {
    const p = document.createElement("span");
    p.className = "burst " + kinds[n % 3];
    document.body.appendChild(p);
    const ang = Math.random() * Math.PI * 2, dist = 60 + Math.random() * 90, rot = Math.random() * 540 - 270;
    const dx = Math.cos(ang) * dist, dy = Math.sin(ang) * dist - 40;
    p.animate(
      [
        { transform: `translate(${cx}px,${cy}px) rotate(0deg) scale(1)`, opacity: 1 },
        { transform: `translate(${cx + dx}px,${cy + dy + 60}px) rotate(${rot}deg) scale(.6)`, opacity: 0 },
      ],
      { duration: 700 + Math.random() * 400, easing: "cubic-bezier(.15,.7,.3,1)" }
    ).onfinish = () => p.remove();
  }
  if (navigator.vibrate) navigator.vibrate(12);
}

function daysLeft() {
  if (!SET.testDate) return null;
  const t = new Date(SET.testDate + "T00:00:00"), now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.round((t - now) / DAY);
}

/* Confidence ring: the number fills in from zero when the screen opens. */
function ring(pct, size = 140) {
  const r = 52, c = 2 * Math.PI * r;
  return `<div class="ring" style="width:${size}px;height:${size}px"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--sunk)" stroke-width="12"/>
    <circle class="ringfill" cx="60" cy="60" r="${r}" fill="none" stroke="var(--leaf)" stroke-width="12" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c}" data-off="${c * (1 - pct / 100)}" transform="rotate(-90 60 60)"/></svg>
    <span class="ringnum"><b>${pct}</b><small>%</small></span></div>`;
}

function lastCheck() {
  const c = SP().checks[SP().checks.length - 1];
  if (!c) return "";
  const when = new Date(c.at).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  return `<p class="small muted">Last readiness check: <b>${c.right} of ${c.total}</b> on ${when}</p>`;
}

/* ---------- screens ---------- */
function vHome() {
  const d = daysLeft(), now = Date.now();
  const chip = d === null || d < 0 ? "" : `<span class="chip">${d === 0 ? "Test day. You've got this." : d === 1 ? "1 day to your test" : d + " days to your test"}</span>`;
  const conf = GH.confidence(SET, P, now);
  const today = GH.buildToday(SET, P, now);
  const due = today.filter((i) => SP().items[i.id]).length, fresh = today.length - due;
  const mix = [due ? `${due} to review` : "", fresh ? `${fresh} new` : ""].filter(Boolean).join(" and ");
  const confLine = conf.seen === 0
    ? "Start today's round and watch this grow."
    : `If the test were today, you'd likely get about <b>${conf.pct}%</b> of these questions right.`;
  return `<div class="top"><span class="logo">${LOGO}Greenhouse</span><button class="link small" data-act="progress">Progress</button></div>
  ${saveWarning()}
  <section class="hero rise"><div>${chip}</div><h1>${esc(SET.title.replace(/^AP World History: /, ""))}</h1><p class="muted">${esc(SET.subtitle)}</p></section>
  <section class="card conf"><div class="confrow">${ring(conf.pct, 112)}<div style="display:grid;gap:6px;min-width:0"><h2>Test confidence</h2><p class="small">${confLine}</p></div></div>
    <p class="small muted">${conf.solid} of ${conf.recallTotal} typed answers solid · ${conf.seen} of ${conf.total} questions seen</p>${lastCheck()}</section>
  ${today.length
    ? `<section class="card"><h2>Today's round</h2><p class="muted small">About ${GH.minutesFor(today)} minutes: ${mix}. Misses come back at the end.</p><button class="btn" data-act="today">Start today's round</button></section>`
    : `<section class="card"><h2>All watered for today.</h2><p class="muted small">Nothing is due right now. Spacing it out is what makes it stick, so check back tomorrow.</p><button class="btn alt" data-act="practice">Practice anyway</button></section>`}
  <section class="card"><h2>Readiness check</h2><p class="muted small">${CHECK_SIZE} questions across every topic, with no hints. At the end you get a score for each topic, so you know where you stand.</p><button class="btn alt" data-act="check">Take the check</button></section>
  <section style="display:grid;gap:12px"><h3>Practice one topic</h3><div class="chips">${SET.topics.map((t) => `<button class="topicchip" data-topic="${esc(t.id)}">${esc(t.name)}</button>`).join("")}</div></section>
  <p class="small muted">Every answer links to its source. If something looks wrong, tap <b>Looks wrong</b> and send it to Dad.</p>`;
}

function vProgress() {
  const now = Date.now(), conf = GH.confidence(SET, P, now), stats = GH.topicStats(SET, P, now), checks = SP().checks.slice(-5).reverse();
  return `<div class="top"><button class="link small" data-act="home">‹ Home</button></div>
  ${saveWarning()}
  <section class="hero rise" style="justify-items:center;text-align:center">${ring(conf.pct, 120)}<h1 style="font-size:34px">Your progress</h1><p class="muted small">${conf.solid} of ${conf.recallTotal} typed answers solid · ${conf.seen} of ${conf.total} questions seen</p></section>
  <section class="card"><h3>By topic</h3>${stats.map((t) => `<div class="trow"><div class="row"><span>${esc(t.name)}${t.needsWater ? ` <span class="chip" style="font-size:12px;padding:2px 8px">Needs water</span>` : ""}</span><b>${Math.round(t.score * 100)}%</b></div><div class="bar"><i data-w="${Math.round(t.score * 100)}"></i></div><p class="small muted">${t.solid} of ${t.recallTotal} typed answers solid · ${t.seen} of ${t.total} seen</p></div>`).join("")}</section>
  <section class="card"><h3>How test confidence works</h3><p class="small">It's the app's estimate of the share of all ${conf.total} questions you'd get right today, based on your own answers. Questions you haven't seen count as zero. It fades a little between reviews, and today's round brings it back.</p></section>
  <section class="card"><h3>What "solid" means</h3><p class="small">You typed the right answer from memory on at least two different days, and it should hold for a week or more. Multiple choice helps you practice and counts toward confidence, but it never makes a question solid, because recognizing an answer is easier than recalling it.</p></section>
  ${checks.length ? `<section class="card"><h3>Readiness checks</h3>${checks.map((c) => `<div class="row" style="justify-content:space-between"><span>${new Date(c.at).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}</span><b>${c.right} of ${c.total}</b></div>`).join("")}</section>` : ""}
  <details class="card"><summary><b>Move to another device</b></summary><div style="display:grid;gap:12px;margin-top:12px">
    <p class="small">Your progress lives on this device only. To move it, copy this code here, then paste it into Greenhouse on the other device.</p>
    <button class="btn alt" data-act="copycode">Copy my code</button>
    <label class="small muted" for="restore">Paste a code from another device</label><input type="text" id="restore" autocomplete="off" autocapitalize="off" spellcheck="false">
    <button class="btn alt" data-act="restore">Load progress</button><p class="small" id="codemsg" role="status"></p></div></details>`;
}

function vQuiz() {
  const q = s.quiz, it = q.queue[q.i];
  const counter = q.mode === "check" ? `Question ${Math.min(q.i + 1, q.base.length)} of ${q.base.length}` : q.i >= q.base.length ? "Second try" : "";
  let body = "";
  if (it.type === "mc") body = mcBody(it, q);
  else body = shortBody(it, q);
  return `<div class="qtop">${garden()}<button class="link small" data-act="stop">Stop</button></div>
  <section class="rise" style="display:grid;gap:18px" id="qcard">
    <div style="display:grid;gap:8px"><span class="topicname">${esc(it.topicName)}${counter ? " · " + counter : ""}</span><h2>${esc(it.q)}</h2></div>
    ${body}
  </section>`;
}

function optionOrder(it, q) {
  q.orders[it.id] = q.orders[it.id] || GH.shuffle(it.options.map((t, k) => ({ t, k })));
  return q.orders[it.id];
}

function mcBody(it, q) {
  const o = optionOrder(it, q), letters = "ABCD";
  if (q.mode === "check") {
    const chosen = q.answers[it.id];
    return `<div class="options">${o.map((a, n) => `<button class="option${chosen === a.k ? " pick" : ""}" data-pick="${a.k}" aria-pressed="${chosen === a.k}"><span class="mark">${letters[n]}</span><span>${esc(a.t)}</span></button>`).join("")}</div>
    <button class="btn" data-act="next"${chosen === undefined ? " disabled" : ""}>${q.i === q.queue.length - 1 ? "Finish" : "Next"}</button>`;
  }
  if (q.result === null) return `<div class="options">${o.map((a, n) => `<button class="option" data-pick="${a.k}"><span class="mark">${letters[n]}</span><span>${esc(a.t)}</span></button>`).join("")}</div>`;
  const picked = q.answers[it.id];
  return `<div class="options">${o.map((a, n) => {
    const cls = a.k === it.answer ? "right" : a.k === picked ? "wrong" : "dim";
    const mark = a.k === it.answer ? "✓" : a.k === picked ? "✕" : letters[n];
    return `<div class="option ${cls}" id="${a.k === it.answer ? "rightopt" : a.k === picked ? "wrongopt" : ""}"><span class="mark">${mark}</span><span>${esc(a.t)}</span></div>`;
  }).join("")}</div>${feedback(it, q)}`;
}

function shortBody(it, q) {
  if (q.mode === "check") {
    return `<form id="shortForm" style="display:grid;gap:12px"><label class="small muted" for="shortA">Type your answer</label><input type="text" id="shortA" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="next" value="${esc(q.answers[it.id] || "")}">
    <button class="btn">${q.i === q.queue.length - 1 ? "Finish" : "Next"}</button></form>`;
  }
  if (q.stage === "ask") {
    return `<form id="shortForm" style="display:grid;gap:12px"><label class="small muted" for="shortA">Type your answer</label><input type="text" id="shortA" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done">
    <div class="row"><button class="btn">Check</button><button type="button" class="btn alt" data-act="dunno">No idea</button></div></form>`;
  }
  if (q.stage === "compare") {
    return `<div class="card" style="gap:10px"><p class="small muted">You wrote</p><p style="font-size:19px;font-weight:600">${esc(q.answers[it.id])}</p><p class="small muted">The answer</p><p style="font-size:19px;font-weight:600">${esc(it.answer)}</p></div>
    <p class="small muted">Close enough? Be honest. It only helps you.</p>
    <div class="row"><button class="btn alt" data-self="1">I had it</button><button class="btn alt" data-self="0">I missed it</button></div>`;
  }
  const typed = q.answers[it.id];
  return `${typed && q.result === false ? `<p class="small muted">You wrote: ${esc(typed)}</p>` : ""}<div class="card" style="gap:6px"><p class="small muted">Answer</p><p style="font-size:20px;font-weight:700" id="${q.result ? "rightopt" : "wrongopt"}">${esc(it.answer)}</p></div>${feedback(it, q)}`;
}

function feedback(it, q) {
  const yes = q.result;
  const words = yes ? (q.combo >= 3 ? `${q.combo} in a row!` : q.cheer) : "Not this time.";
  const later = !yes && q.i < q.base.length ? " It'll come back at the end of this round." : "";
  return `<div class="feedback ${yes ? "yes" : "no"} rise" role="status"><p class="verdict">${esc(words)}</p>
    <p>${esc(it.why)}${esc(later)}</p>
    <div class="source"><a class="link" href="${esc(it.src.url)}" target="_blank" rel="noopener">Source: ${esc(it.src.label)}</a>${flagLink(it)}</div>
    <button class="btn" data-act="next" id="nextBtn">${q.i === q.queue.length - 1 ? "Finish" : "Next"}</button></div>`;
}

function flagLink(it) {
  return `<a class="link small" href="${esc(GH.flagLink(SET, it))}" data-flag>Looks wrong</a>`;
}

function vSelfCheck() {
  const q = s.quiz;
  const todo = q.selfQueue;
  return `<div class="top"><span class="logo">${LOGO}Greenhouse</span></div>
  <section class="hero rise"><h1>Almost there.</h1><p class="muted">The app couldn't match ${todo.length === 1 ? "this answer" : "these answers"} exactly. Compare and be honest. It only helps you.</p></section>
  ${todo.map((it) => `<section class="card self"><span class="topicname">${esc(it.topicName)}</span><h3>${esc(it.q)}</h3>
    <p class="small"><span class="muted">You wrote:</span> <b>${esc(q.answers[it.id] || "(nothing)")}</b></p>
    <p class="small"><span class="muted">Answer:</span> <b>${esc(it.answer)}</b></p>
    <div class="row"><button class="btn${q.self[it.id] === true ? "" : " alt"}" data-judge="${esc(it.id)}" data-v="1" aria-pressed="${q.self[it.id] === true}">I had it</button><button class="btn${q.self[it.id] === false ? "" : " alt"}" data-judge="${esc(it.id)}" data-v="0" aria-pressed="${q.self[it.id] === false}">I missed it</button></div></section>`).join("")}
  <button class="btn" data-act="score"${todo.every((it) => q.self[it.id] !== undefined) ? "" : " disabled"}>See my score</button>`;
}

function vPracticeDone() {
  const q = s.quiz, ids = q.base.map((i) => i.id), right = ids.filter((id) => q.first[id]).length;
  const head = right === ids.length ? "A full garden!" : right >= ids.length * 0.7 ? "Nice round." : "Good work.";
  return `<div class="top"><span class="logo">${LOGO}Greenhouse</span></div>
  <section class="hero rise" style="text-align:center;justify-items:center"><div class="garden big">${q.base.map((it) => pot(q.first[it.id] ? "bloom" : "sprout", true)).join("")}</div>
  <h1 id="donehead">${head}</h1><p class="muted">${right} of ${ids.length} right on the first try${right < ids.length ? ", and you went back over every miss." : "."}</p></section>
  ${confChange(q.before)}
  <button class="btn" data-act="home">Back to the greenhouse</button>
  <button class="btn alt" data-act="${q.topic ? "topic:" + esc(q.topic) : "practice"}">Practice more</button>`;
}

function confChange(before) {
  const after = GH.confidence(SET, P, Date.now()).pct, up = after - before;
  return `<section class="card conf"><div class="confrow">${ring(after, 110)}<div style="display:grid;gap:4px"><h3>Test confidence</h3>
    <p class="small">${up > 0 ? `Up ${up} points, from ${before}% to <b>${after}%</b>.` : `Now <b>${after}%</b>. The questions you missed will come back sooner, which is how they stick.`}</p></div></div></section>`;
}

function vCheckDone() {
  const q = s.quiz, r = q.score;
  const weakest = [...r.topics].sort((a, b) => a.right / a.total - b.right / b.total)[0];
  const missed = q.base.filter((it) => !q.final[it.id]);
  const note = r.pct >= 85 ? "You're in great shape." : r.pct >= 70 ? "Solid. A few topics to tighten up." : "Now you know exactly where to focus.";
  return `<div class="top"><span class="logo">${LOGO}Greenhouse</span></div>
  <section class="hero rise" style="text-align:center;justify-items:center"><p class="score"><span id="countup">0</span>/${r.total}</p><h2>${note}</h2>
  <p class="small muted">This is your score on these ${r.total} questions, answered from memory. It's a real signal, not a grade prediction.</p></section>
  <section class="card"><h3>By topic</h3>${r.topics.map((t) => `<div class="trow"><div class="row"><span>${esc(t.name)}</span><b>${t.right} of ${t.total}</b></div><div class="bar"><i data-w="${Math.round((t.right / t.total) * 100)}"></i></div></div>`).join("")}</section>
  ${confChange(q.before)}
  ${weakest && weakest.right < weakest.total ? `<button class="btn" data-act="topic:${esc(weakest.id)}">Practice ${esc(weakest.name)}</button>` : ""}
  ${missed.length ? `<section class="card"><h3>What you missed</h3>${missed.map((it) => `<div class="missed"><span class="topicname">${esc(it.topicName)}</span><p><b>${esc(it.q)}</b></p>
    ${it.type === "mc" && q.answers[it.id] !== undefined ? `<p class="small"><span class="muted">You picked:</span> ${esc(it.options[q.answers[it.id]])}</p>` : it.type === "short" ? `<p class="small"><span class="muted">You wrote:</span> ${esc(q.answers[it.id] || "(nothing)")}</p>` : ""}
    <p class="small"><span class="muted">Answer:</span> <b>${esc(GH.answerText(it))}</b></p><p class="small">${esc(it.why)}</p>
    <div class="source"><a class="link small" href="${esc(it.src.url)}" target="_blank" rel="noopener">Source: ${esc(it.src.label)}</a>${flagLink(it)}</div></div>`).join("")}</section>` : ""}
  <button class="btn alt" data-act="home">Home</button>`;
}

/* ---------- flow ---------- */
function startQuiz(mode, topic = null) {
  const base = mode === "check" ? GH.buildCheck(SET, CHECK_SIZE)
    : mode === "today" ? GH.buildToday(SET, P, Date.now())
    : GH.buildPractice(SET, PRACTICE_SIZE, Math.random, topic);
  if (!base.length) { s = { view: "home" }; render(); return; }
  const before = GH.confidence(SET, P, Date.now()).pct;
  // "today" plays exactly like practice; only the question picking differs.
  s = { view: "quiz", quiz: { mode: mode === "check" ? "check" : "practice", round: mode, topic, before, base, queue: [...base], i: 0, orders: {}, answers: {}, first: {}, final: {}, self: {}, result: null, stage: "ask", combo: 0, cheer: "", justBloomed: null } };
  render();
}

function grade(pass) {
  const q = s.quiz, it = q.queue[q.i];
  q.result = pass;
  q.stage = "shown";
  if (q.first[it.id] === undefined) {
    q.first[it.id] = pass;
    recordAnswer(it, pass); // only the first try counts toward the schedule
    if (pass) q.justBloomed = it.id;
    if (!pass) q.queue.push(it); // misses come back once, at the end of the round
  }
  q.combo = pass ? q.combo + 1 : 0;
  q.cheer = CHEERS[Math.floor(Math.random() * CHEERS.length)];
  render();
  if (pass) {
    const el = $("rightopt");
    el && el.closest(".option") ? el.classList.add("pop") : null;
    burst(el);
  } else {
    const el = $("wrongopt");
    if (el) el.classList.add("shake");
  }
  const nb = $("nextBtn");
  if (nb) {
    nb.focus({ preventScroll: true });
    // Let the celebration play, then bring the explanation and Next button into view.
    setTimeout(() => nb.closest(".feedback").scrollIntoView({ behavior: calm() ? "auto" : "smooth", block: "end" }), calm() ? 0 : 450);
  }
}

function next() {
  const q = s.quiz;
  if (q.mode === "check") {
    if (q.i < q.queue.length - 1) { q.i++; render(); return; }
    finishCheck();
    return;
  }
  q.i++;
  q.result = null;
  q.stage = "ask";
  q.justBloomed = null;
  if (q.i >= q.queue.length) {
    s.view = "practiceDone";
    render();
    const right = q.base.filter((it) => q.first[it.id]).length;
    if (right >= q.base.length * 0.7) setTimeout(() => burst($("donehead")), 250);
    return;
  }
  render();
}

function finishCheck() {
  const q = s.quiz;
  q.selfQueue = [];
  q.base.forEach((it) => {
    if (it.type === "mc") q.final[it.id] = q.answers[it.id] === it.answer;
    else if (GH.matches(q.answers[it.id], it.accept)) q.final[it.id] = true;
    else if (!(q.answers[it.id] || "").trim()) q.final[it.id] = false;
    else q.selfQueue.push(it);
  });
  if (q.selfQueue.length) { s.view = "selfCheck"; render(); return; }
  showScore();
}

function showScore() {
  const q = s.quiz;
  q.selfQueue.forEach((it) => (q.final[it.id] = q.self[it.id] === true));
  q.score = GH.scoreCheck(SET, q.base.map((it) => ({ topic: it.topic, pass: q.final[it.id] })));
  if (!q.saved) {
    const now = Date.now();
    q.base.forEach((it) => GH.record(P, SET, it, q.final[it.id], now));
    SP().checks.push({ at: now, right: q.score.right, total: q.score.total });
    save();
    q.saved = true;
  }
  s.view = "checkDone";
  render();
  const target = q.score.right, el = $("countup");
  requestAnimationFrame(() => document.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w + "%")));
  if (calm()) { el.textContent = target; return; }
  let n = 0;
  const tick = () => { el.textContent = n; if (n++ < target) setTimeout(tick, Math.max(30, 600 / Math.max(target, 1))); else if (q.score.pct >= 70) burst(el); };
  tick();
}

/* ---------- render and events ---------- */
function render() {
  const app = $("app");
  const views = { home: vHome, progress: vProgress, quiz: vQuiz, practiceDone: vPracticeDone, selfCheck: vSelfCheck, checkDone: vCheckDone };
  app.innerHTML = views[s.view]();
  bind();
  // Fill rings and topic bars from zero, so changes are visible.
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll(".ringfill").forEach((c) => (c.style.strokeDashoffset = c.dataset.off));
    if (s.view !== "checkDone") document.querySelectorAll(".bar i").forEach((b) => (b.style.width = b.dataset.w + "%"));
  }));
  if (s.view !== "quiz" || (s.quiz.result === null && s.quiz.stage === "ask")) window.scrollTo(0, 0);
  const inp = $("shortA");
  if (inp && window.matchMedia("(pointer: fine)").matches) inp.focus();
}

function act(a) {
  if (a === "practice") startQuiz("practice");
  else if (a === "today") startQuiz("today");
  else if (a === "check") startQuiz("check");
  else if (a === "progress") { s = { view: "progress" }; render(); }
  else if (a === "copycode") {
    const code = GH.exportCode(P), msg = $("codemsg");
    const done = () => (msg.textContent = "Copied. Paste it into Greenhouse on your other device.");
    const fallback = () => { const inp = $("restore"); inp.value = code; inp.select(); msg.textContent = "Select the code above and copy it."; };
    navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(code).then(done, fallback) : fallback();
  }
  else if (a === "restore") {
    const msg = $("codemsg");
    try {
      const incoming = GH.importCode($("restore").value);
      if (!confirm("Replace the progress on this device with the progress from that code?")) return;
      Object.keys(P).forEach((k) => delete P[k]);
      Object.assign(P, incoming);
      save();
      s = { view: "progress" };
      render();
      $("codemsg") && ($("codemsg").textContent = "Progress loaded.");
    } catch (e) { msg.textContent = "That code didn't work. Copy the whole thing and try again."; }
  }
  else if (a.startsWith("topic:")) startQuiz("practice", a.slice(6));
  else if (a === "home" || a === "stop") { s = { view: "home" }; render(); }
  else if (a === "next") next();
  else if (a === "dunno") { s.quiz.answers[s.quiz.queue[s.quiz.i].id] = ""; grade(false); }
  else if (a === "score") showScore();
}

function bind() {
  document.querySelectorAll("[data-act]").forEach((b) => (b.onclick = () => act(b.dataset.act)));
  document.querySelectorAll("[data-topic]").forEach((b) => (b.onclick = () => startQuiz("practice", b.dataset.topic)));
  document.querySelectorAll("[data-pick]").forEach((b) => (b.onclick = () => {
    const q = s.quiz, it = q.queue[q.i], k = +b.dataset.pick;
    q.answers[it.id] = k;
    if (q.mode === "check") { q.first[it.id] = true; render(); return; }
    grade(k === it.answer);
  }));
  document.querySelectorAll("[data-self]").forEach((b) => (b.onclick = () => grade(b.dataset.self === "1")));
  document.querySelectorAll("[data-judge]").forEach((b) => (b.onclick = () => { s.quiz.self[b.dataset.judge] = b.dataset.v === "1"; render(); }));
  document.querySelectorAll("[data-flag]").forEach((a) => a.addEventListener("click", () => setTimeout(() => (a.textContent = "Thanks. Send that text to Dad."), 300)));
  const sf = $("shortForm");
  if (sf) sf.onsubmit = (e) => {
    e.preventDefault();
    const q = s.quiz, it = q.queue[q.i], v = $("shortA").value.trim();
    q.answers[it.id] = v;
    if (q.mode === "check") { q.first[it.id] = true; next(); return; }
    if (!v) return;
    if (GH.matches(v, it.accept)) grade(true);
    else { q.stage = "compare"; render(); }
  };
}

render();
