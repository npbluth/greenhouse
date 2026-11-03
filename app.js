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

/* ---------- screens ---------- */
function vHome() {
  const d = daysLeft();
  const chip = d === null || d < 0 ? "" : `<span class="chip">${d === 0 ? "Test day. You've got this." : d === 1 ? "1 day to your test" : d + " days to your test"}</span>`;
  return `<div class="top"><span class="logo">${LOGO}Greenhouse</span></div>
  <section class="hero rise"><div>${chip}</div><h1>${esc(SET.title.replace(/^AP World History: /, ""))}</h1><p class="muted">${esc(SET.subtitle)}</p></section>
  <section class="card"><h2>Practice round</h2><p class="muted small">${PRACTICE_SIZE} mixed questions, about 8 minutes. You see the answer right away, and misses come back at the end.</p><button class="btn" data-act="practice">Start practicing</button></section>
  <section class="card"><h2>Readiness check</h2><p class="muted small">${CHECK_SIZE} questions across every topic, with no hints. At the end you get a score for each topic, so you know where you stand.</p><button class="btn alt" data-act="check">Take the check</button></section>
  <section style="display:grid;gap:12px"><h3>Practice one topic</h3><div class="chips">${SET.topics.map((t) => `<button class="topicchip" data-topic="${esc(t.id)}">${esc(t.name)}</button>`).join("")}</div></section>
  <p class="small muted">Every answer links to its source. If something looks wrong, tap <b>Looks wrong</b> and send it to Dad.</p>`;
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
  <button class="btn" data-act="${q.topic ? "topic:" + esc(q.topic) : "practice"}">Another round</button>
  <button class="btn alt" data-act="home">Home</button>`;
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
  ${weakest && weakest.right < weakest.total ? `<button class="btn" data-act="topic:${esc(weakest.id)}">Practice ${esc(weakest.name)}</button>` : ""}
  ${missed.length ? `<section class="card"><h3>What you missed</h3>${missed.map((it) => `<div class="missed"><span class="topicname">${esc(it.topicName)}</span><p><b>${esc(it.q)}</b></p>
    ${it.type === "mc" && q.answers[it.id] !== undefined ? `<p class="small"><span class="muted">You picked:</span> ${esc(it.options[q.answers[it.id]])}</p>` : it.type === "short" ? `<p class="small"><span class="muted">You wrote:</span> ${esc(q.answers[it.id] || "(nothing)")}</p>` : ""}
    <p class="small"><span class="muted">Answer:</span> <b>${esc(GH.answerText(it))}</b></p><p class="small">${esc(it.why)}</p>
    <div class="source"><a class="link small" href="${esc(it.src.url)}" target="_blank" rel="noopener">Source: ${esc(it.src.label)}</a>${flagLink(it)}</div></div>`).join("")}</section>` : ""}
  <button class="btn alt" data-act="home">Home</button>`;
}

/* ---------- flow ---------- */
function startQuiz(mode, topic = null) {
  const base = mode === "check" ? GH.buildCheck(SET, CHECK_SIZE) : GH.buildPractice(SET, PRACTICE_SIZE, Math.random, topic);
  s = { view: "quiz", quiz: { mode, topic, base, queue: [...base], i: 0, orders: {}, answers: {}, first: {}, final: {}, self: {}, result: null, stage: "ask", combo: 0, cheer: "", justBloomed: null } };
  render();
}

function grade(pass) {
  const q = s.quiz, it = q.queue[q.i];
  q.result = pass;
  q.stage = "shown";
  if (q.first[it.id] === undefined) {
    q.first[it.id] = pass;
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
  const views = { home: vHome, quiz: vQuiz, practiceDone: vPracticeDone, selfCheck: vSelfCheck, checkDone: vCheckDone };
  app.innerHTML = views[s.view]();
  bind();
  if (s.view !== "quiz" || (s.quiz.result === null && s.quiz.stage === "ask")) window.scrollTo(0, 0);
  const inp = $("shortA");
  if (inp && window.matchMedia("(pointer: fine)").matches) inp.focus();
}

function act(a) {
  if (a === "practice") startQuiz("practice");
  else if (a === "check") startQuiz("check");
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
