// Spaced review and mastery rules, on fixed example dates. Test date in the set: 2026-11-14.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { loadSets } from "../tools/check-set.mjs";

const require = createRequire(import.meta.url);
const GH = require("../logic.js");
const [SET] = loadSets();
const DAY = 864e5;
const at = (s) => new Date(s).getTime(); // local time
const items = GH.allItems(SET);
const short = items.find((i) => i.type === "short");
const mc = items.find((i) => i.type === "mc");
const entry = (p, i) => p.sets[SET.id].items[i.id];
function seeded(n) { return () => ((n = (n * 16807) % 2147483647) / 2147483647); }

test("a first right answer is due again in a few days", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  const due = GH.dueAt(entry(p, short), SET);
  const days = (due - at("2026-11-04T16:00")) / DAY;
  assert.ok(days >= 2 && days <= 5, `due in ${days} days`);
});

test("a miss comes back the next day", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, false, at("2026-11-04T16:00"));
  const days = (GH.dueAt(entry(p, short), SET) - at("2026-11-04T16:00")) / DAY;
  assert.ok(days <= 1.01, `due in ${days} days`);
});

test("review gaps tighten as the test gets close", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  GH.record(p, SET, short, true, at("2026-11-07T16:00"));
  GH.record(p, SET, short, true, at("2026-11-12T16:00"));
  const e = entry(p, short);
  const fsrsDays = (new Date(e.card.due) - at("2026-11-12T16:00")) / DAY;
  const ourDays = (GH.dueAt(e, SET) - at("2026-11-12T16:00")) / DAY;
  assert.ok(fsrsDays > 7, `FSRS alone would wait ${fsrsDays} days, past the test`);
  assert.ok(ourDays <= 1.01, `but it comes back in ${ourDays} days, before the test`);
});

test("solid needs right answers on two different days", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  GH.record(p, SET, short, true, at("2026-11-04T20:00"));
  assert.ok(!GH.isSolid(short, entry(p, short), at("2026-11-05T09:00")), "same day twice is not solid");
  GH.record(p, SET, short, true, at("2026-11-06T16:00"));
  assert.ok(GH.isSolid(short, entry(p, short), at("2026-11-06T17:00")), "two different days is solid");
});

test("a miss resets solid", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  GH.record(p, SET, short, true, at("2026-11-06T16:00"));
  GH.record(p, SET, short, false, at("2026-11-08T16:00"));
  assert.ok(!GH.isSolid(short, entry(p, short), at("2026-11-08T17:00")));
  assert.equal(entry(p, short).days.length, 0);
});

test("multiple choice never counts as solid", () => {
  const p = GH.emptyProgress();
  for (const d of ["2026-11-01", "2026-11-03", "2026-11-06", "2026-11-10"]) GH.record(p, SET, mc, true, at(d + "T16:00"));
  assert.ok(!GH.isSolid(mc, entry(p, mc), at("2026-11-10T17:00")));
});

test("solid fades if left too long", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  GH.record(p, SET, short, true, at("2026-11-06T16:00"));
  assert.ok(GH.isSolid(short, entry(p, short), at("2026-11-06T17:00")));
  assert.ok(!GH.isSolid(short, entry(p, short), at("2027-01-15T17:00")), "two months later it needs review");
});

test("confidence: starts at zero, unseen counts as zero, rises with right answers", () => {
  const p = GH.emptyProgress();
  assert.equal(GH.confidence(SET, p, at("2026-11-04T16:00")).pct, 0);
  items.slice(0, 10).forEach((i) => GH.record(p, SET, i, true, at("2026-11-04T16:00")));
  const c = GH.confidence(SET, p, at("2026-11-04T16:05"));
  assert.equal(c.seen, 10);
  assert.ok(c.pct > 0 && c.pct <= Math.round((10 / items.length) * 100), `got ${c.pct}`);
});

test("confidence: a miss never raises it, and counts as zero until answered right", () => {
  const p = GH.emptyProgress();
  items.slice(0, 5).forEach((i) => GH.record(p, SET, i, true, at("2026-11-04T16:00")));
  const before = GH.confidence(SET, p, at("2026-11-04T16:01")).pct;
  items.slice(5, 15).forEach((i) => GH.record(p, SET, i, false, at("2026-11-04T16:02")));
  assert.equal(GH.confidence(SET, p, at("2026-11-04T16:03")).pct, before);
  const missedStill = GH.confidence(SET, p, at("2026-11-05T16:01")).pct;
  items.slice(5, 15).forEach((i) => GH.record(p, SET, i, true, at("2026-11-05T16:00")));
  const afterFix = GH.confidence(SET, p, at("2026-11-05T16:01")).pct;
  assert.ok(afterFix > missedStill, `${missedStill} -> ${afterFix}`);
});

test("confidence fades when she stops reviewing", () => {
  const p = GH.emptyProgress();
  items.forEach((i) => GH.record(p, SET, i, true, at("2026-11-04T16:00")));
  const now = GH.confidence(SET, p, at("2026-11-04T16:05")).pct;
  const later = GH.confidence(SET, p, at("2026-11-12T16:00")).pct;
  assert.ok(now >= 95, `right after: ${now}`);
  assert.ok(later < now, `a week later: ${later}`);
});

test("today's round: first day is all new questions, mixed topics", () => {
  const r = GH.buildToday(SET, GH.emptyProgress(), at("2026-11-04T16:00"), seeded(5));
  assert.equal(r.length, 12);
  assert.ok(new Set(r.map((i) => i.topic)).size >= 6, "spread across topics");
});

test("today's round: due reviews first, a few new ones, never more than 15", () => {
  const p = GH.emptyProgress();
  items.slice(0, 40).forEach((i) => GH.record(p, SET, i, false, at("2026-11-04T16:00")));
  const r = GH.buildToday(SET, p, at("2026-11-06T16:00"), seeded(9));
  const sp = p.sets[SET.id].items;
  const fresh = r.filter((i) => !sp[i.id]).length;
  assert.ok(r.length <= 15, `round is ${r.length}`);
  assert.equal(fresh, 3, "three new questions");
  assert.equal(r.length - fresh, 12, "twelve reviews");
});

test("today's round: nothing due and nothing new means an empty round", () => {
  const p = GH.emptyProgress();
  items.forEach((i) => GH.record(p, SET, i, true, at("2026-11-04T16:00")));
  assert.equal(GH.buildToday(SET, p, at("2026-11-04T17:00")).length, 0);
});

test("progress survives saving as text and loading back", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  GH.record(p, SET, short, true, at("2026-11-06T16:00"));
  const back = JSON.parse(JSON.stringify(p));
  GH.record(back, SET, short, true, at("2026-11-09T16:00"));
  GH.record(p, SET, short, true, at("2026-11-09T16:00"));
  assert.deepEqual(entry(back, short), entry(p, short));
});

test("backup code round trip, and a bad code is refused", () => {
  const p = GH.emptyProgress();
  GH.record(p, SET, short, true, at("2026-11-04T16:00"));
  p.sets[SET.id].checks.push({ at: at("2026-11-04T17:00"), right: 16, total: 20 });
  assert.deepEqual(GH.importCode(GH.exportCode(p)), JSON.parse(JSON.stringify(p)));
  assert.throws(() => GH.importCode("hello"));
  assert.throws(() => GH.importCode("GH1:bm90IGpzb24="));
});

test("topic stats: needs water when a quarter of seen questions are past their review date", () => {
  const p = GH.emptyProgress();
  const russia = SET.topics.find((t) => t.id === "31-russia");
  russia.items.forEach((i) => GH.record(p, SET, { ...i, topic: "31-russia" }, true, at("2026-11-04T16:00")));
  const fresh = GH.topicStats(SET, p, at("2026-11-04T17:00")).find((t) => t.id === "31-russia");
  const old = GH.topicStats(SET, p, at("2026-11-20T17:00")).find((t) => t.id === "31-russia");
  assert.ok(!fresh.needsWater && old.needsWater);
  assert.equal(fresh.seen, russia.items.length);
});
