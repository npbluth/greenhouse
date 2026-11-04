// Weekly sets: Sports Medicine unlocks one week each Monday; tests are Thursdays. Week 3 = week of Mon 2026-11-02.
import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { loadSets } from "../tools/check-set.mjs";

const GH = createRequire(import.meta.url)("../logic.js");
const MED = loadSets().find((x) => x.id === "sm-medterm");
const at = (s) => new Date(s).getTime();

test("the calendar week moves forward each Monday", () => {
  assert.equal(GH.calendarWeek(MED, at("2026-11-03T15:00")), 3); // Tuesday
  assert.equal(GH.calendarWeek(MED, at("2026-11-08T21:00")), 3); // Sunday night
  assert.equal(GH.calendarWeek(MED, at("2026-11-09T07:00")), 4); // Monday morning
  assert.equal(GH.calendarWeek(MED, at("2026-12-07T07:00")), 8);
});

test("the calendar week never goes past the last week in the notes, or before week 1", () => {
  assert.equal(GH.calendarWeek(MED, at("2027-06-01T12:00")), 13);
  assert.equal(GH.calendarWeek(MED, at("2026-09-01T12:00")), 1);
});

test("the test date is the next Thursday, and test day itself counts", () => {
  assert.equal(GH.nextTestDate(MED, at("2026-11-03T15:00")), "2026-11-05");
  assert.equal(GH.nextTestDate(MED, at("2026-11-05T07:00")), "2026-11-05");
  assert.equal(GH.nextTestDate(MED, at("2026-11-06T15:00")), "2026-11-12");
});

test("only the weeks so far are studied", () => {
  const s = GH.activeSet(MED, at("2026-11-03T15:00"));
  assert.deepEqual([...s.topics.map((t) => t.week)], [1, 2, 3]);
  assert.equal(s.subtitle, "Weeks 1 to 3");
  assert.equal(s.testDate, "2026-11-05");
  const later = GH.activeSet(MED, at("2026-11-10T15:00"));
  assert.deepEqual([...later.topics.map((t) => t.week)], [1, 2, 3, 4]);
  assert.equal(later.testDate, "2026-11-12");
});

test("a manual setting keeps its offset as Mondays pass", () => {
  // On Nov 10 (calendar week 4) she says the class is still on week 3.
  const setting = { week: 3, calendarWeek: 4 };
  assert.equal(GH.coveredWeek(MED, at("2026-11-10T15:00"), setting), 3);
  assert.equal(GH.coveredWeek(MED, at("2026-11-17T15:00"), setting), 4, "a week later it's week 4, still one behind");
});

test("sets without weeks are untouched", () => {
  const ap = loadSets().find((x) => x.id === "apwh-unit3");
  assert.equal(GH.activeSet(ap, at("2026-11-03T15:00")), ap);
});
