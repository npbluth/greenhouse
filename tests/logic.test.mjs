// Run with: node --test tests/
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { loadSets, checkSet } from "../tools/check-set.mjs";

const require = createRequire(import.meta.url);
const GH = require("../logic.js");
const [SET] = loadSets();

// Seeded random numbers so results repeat exactly.
function seeded(n) { return () => ((n = (n * 16807) % 2147483647) / 2147483647); }

test("short answers: exact, case, punctuation and leading 'the' all match", () => {
  assert.ok(GH.matches("Constantinople", ["constantinople"]));
  assert.ok(GH.matches("  the CONSTANTINOPLE! ", ["constantinople"]));
  assert.ok(GH.matches("St. Petersburg", ["st petersburg"]));
  assert.ok(GH.matches("Shi'a", ["shia"]));
  assert.ok(GH.matches("Süleyman", ["suleyman"]));
});

test("short answers: one typo allowed in longer words, none in short ones", () => {
  assert.ok(GH.matches("janisaries", ["janissaries"]));
  assert.ok(GH.matches("constantinopel", ["constantinople"]));
  assert.ok(!GH.matches("yuen", ["yuan"]));
  assert.ok(!GH.matches("ming", ["yuan"]));
});

test("short answers: wrong or empty answers never match", () => {
  assert.ok(!GH.matches("", ["babur"]));
  assert.ok(!GH.matches("   ", ["babur"]));
  assert.ok(!GH.matches("akbar", ["babur", "babar"]));
  assert.ok(!GH.matches("ottoman", ["safavid"]));
});

test("short answers: numbers must match exactly", () => {
  assert.ok(GH.matches("Louis 14", ["louis 14"]));
  assert.ok(!GH.matches("Louis 13", ["louis 14"]));
  assert.ok(!GH.matches("ivan 3", ["ivan 4"]));
});

test("every short answer in the set matches its own accepted answers", () => {
  for (const t of SET.topics) for (const i of t.items)
    if (i.type === "short") for (const a of i.accept) assert.ok(GH.matches(a, i.accept), `${i.id}: ${a}`);
});

test("no short answer accepts another question's answer in the same topic", () => {
  for (const t of SET.topics) {
    const shorts = t.items.filter((i) => i.type === "short");
    for (const a of shorts) for (const b of shorts)
      if (a !== b) assert.ok(!GH.matches(b.accept[0], a.accept), `${a.id} accepts ${b.id}'s answer "${b.accept[0]}"`);
  }
});

test("practice round: 12 questions, no repeats, topics mixed", () => {
  const r = GH.buildPractice(SET, 12, seeded(7));
  assert.equal(r.length, 12);
  assert.equal(new Set(r.map((i) => i.id)).size, 12);
  let same = 0;
  for (let k = 1; k < r.length; k++) if (r[k].topic === r[k - 1].topic) same++;
  assert.ok(same <= 1, `neighbours share a topic ${same} times`);
});

test("practice round: one topic only when a topic is picked", () => {
  const r = GH.buildPractice(SET, 12, seeded(3), "russia");
  assert.ok(r.length > 0 && r.every((i) => i.topic === "russia"));
});

test("readiness check: 20 questions spread across every topic", () => {
  for (const seed of [1, 2, 3, 99]) {
    const r = GH.buildCheck(SET, 20, seeded(seed));
    assert.equal(r.length, 20);
    assert.equal(new Set(r.map((i) => i.id)).size, 20);
    const per = {};
    r.forEach((i) => (per[i.topic] = (per[i.topic] || 0) + 1));
    assert.equal(Object.keys(per).length, SET.topics.length, "every topic appears");
    const counts = Object.values(per);
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1, "topics are evenly spread");
  }
});

test("readiness check score: totals and per-topic results", () => {
  const results = [
    { topic: "russia", pass: true }, { topic: "russia", pass: false },
    { topic: "china", pass: true }, { topic: "china", pass: true },
  ];
  const s = GH.scoreCheck(SET, results);
  assert.equal(s.right, 3);
  assert.equal(s.total, 4);
  assert.equal(s.pct, 75);
  // JSON round trip: the set is loaded in a separate sandbox, so its arrays fail strict comparison.
  assert.deepEqual(JSON.parse(JSON.stringify(s.topics.map((t) => [t.id, t.right, t.total]))), [["russia", 1, 2], ["china", 2, 2]]);
});

test("Looks wrong: opens a text with the question, and no phone number", () => {
  const item = SET.topics[1].items[0];
  const link = GH.flagLink(SET, { ...item });
  assert.ok(link.startsWith("sms:?&body="));
  const body = decodeURIComponent(link.slice("sms:?&body=".length));
  assert.ok(body.includes(item.id) && body.includes(item.q));
  assert.ok(!/\d{7,}/.test(body.replace(item.q, "")), "no phone number in the link");
});

test("the study set passes every format check", () => {
  const r = checkSet(SET);
  assert.deepEqual(r.problems, []);
});

test("the format check catches a missing source and a biased answer", () => {
  const broken = structuredClone(SET);
  delete broken.topics[0].items[0].src;
  broken.topics.forEach((t) => t.items.forEach((i) => { if (i.type === "mc") i.options[i.answer] += " and much longer than the rest"; }));
  const r = checkSet(broken);
  assert.ok(r.problems.some((p) => p.includes("source")));
  assert.ok(r.problems.some((p) => p.includes("longest")));
});
