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
      // Allowed when the overlap is deliberate (the worksheet asks two questions with the same answer).
      if (a !== b && !a.accept.some((x) => GH.normalize(x) === GH.normalize(b.accept[0])))
        assert.ok(!GH.matches(b.accept[0], a.accept), `${a.id} accepts ${b.id}'s answer "${b.accept[0]}"`);
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
  const r = GH.buildPractice(SET, 12, seeded(3), "31-russia");
  assert.ok(r.length > 0 && r.every((i) => i.topic === "31-russia"));
});

test("readiness check: 20 questions spread across every topic", () => {
  for (const seed of [1, 2, 3, 99]) {
    const r = GH.buildCheck({ ...SET, checkFocus: undefined }, 20, seeded(seed));
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
    { topic: "31-russia", pass: true }, { topic: "31-russia", pass: false },
    { topic: "31-eastasia", pass: true }, { topic: "31-eastasia", pass: true },
  ];
  const s = GH.scoreCheck(SET, results);
  assert.equal(s.right, 3);
  assert.equal(s.total, 4);
  assert.equal(s.pct, 75);
  // JSON round trip: the set is loaded in a separate sandbox, so its arrays fail strict comparison.
  assert.deepEqual(JSON.parse(JSON.stringify(s.topics.map((t) => [t.id, t.right, t.total]))), [["31-russia", 1, 2], ["31-eastasia", 2, 2]]);
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

test("definitions: word for word passes, a missing or changed word fails, and the diff says which", () => {
  const d = "refers to a structure being closer to the head or higher than another structure in the body.";
  assert.ok(GH.checkDefinition("Refers to a structure being closer to the head or higher than another structure in the body", d).pass);
  const missing = GH.checkDefinition("refers to a structure closer to the head or higher than another structure in the body", d);
  assert.ok(!missing.pass);
  assert.deepEqual(missing.tokens.filter((t) => t.s === "missing").map((t) => t.w), ["being"]);
  const swapped = GH.checkDefinition("refers to a structure being closer to the head or higher than other structure in the body", d);
  assert.ok(!swapped.pass && swapped.off === 2);
  assert.ok(!GH.checkDefinition("", d).pass);
});

test("definitions: small typos in long words are fine, a slash counts as a space", () => {
  assert.ok(GH.checkDefinition("refers to a structre being closer to the head", "refers to a structure being closer to the head").pass);
  assert.ok(GH.checkDefinition("toward the front belly", "toward the front/belly.").pass);
  assert.ok(!GH.checkDefinition("toward the bak", "toward the back.").pass, "no typos allowed in short words");
});

test("definitions: starting with the term, or 'is defined as', is accepted", () => {
  const d = "when the body is divided into EQUAL right and left portions.";
  assert.ok(GH.checkDefinition("Midsagittal plane is when the body is divided into equal right and left portions", d, "Midsagittal plane").pass);
  assert.ok(GH.checkDefinition("Anatomical position is defined as standing erect, with the palms and feet facing forward",
    "standing erect, with the palms and feet facing forward", "Anatomical position").pass);
  assert.ok(!GH.checkDefinition("the body is divided into equal halves", d, "Midsagittal plane").pass);
});

test("every set's word-for-word definitions pass when typed exactly", () => {
  for (const set of loadSets()) for (const i of GH.allItems(set))
    if (i.type === "define") assert.ok(GH.checkDefinition(i.answer, i.answer, i.q).pass, i.id);
});

test("matching board: five different definition items", () => {
  const med = loadSets().find((x) => x.id === "sm-medterm");
  const b = GH.buildMatch(med, 5, seeded(4));
  assert.equal(b.length, 5);
  assert.ok(b.every((i) => i.type === "define"));
  assert.equal(new Set(b.map((i) => i.id)).size, 5);
});

test("short answers: an opposite answer is never accepted as a typo", () => {
  assert.ok(!GH.matches("decentralized power", ["centralized power"]));
  assert.ok(!GH.matches("religious intolerance", ["religious tolerance"]));
  assert.ok(!GH.matches("unsuccessful", ["successful"]));
  assert.ok(!GH.matches("world war ii", ["world war i"]));
  assert.ok(!GH.matches("world war two", ["world war one"]));
  assert.ok(GH.matches("centralised power", ["centralized power"]), "spelling variants still pass");
});

test("readiness check: a set can ask for half its questions from one topic", () => {
  const focused = { ...SET, checkFocus: { topic: SET.topics[0].id, share: 0.5 } };
  const r = GH.buildCheck(focused, 20, seeded(11));
  assert.equal(r.length, 20);
  assert.equal(r.filter((i) => i.topic === SET.topics[0].id).length, Math.min(10, SET.topics[0].items.length));
  assert.equal(new Set(r.map((i) => i.id)).size, 20);
});
