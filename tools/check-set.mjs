// Checks every study set in sets/ for completeness and format.
// Usage: node tools/check-set.mjs          (format checks)
//        node tools/check-set.mjs --links  (also confirms every Wikipedia source exists)
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { normalize } = require("../logic.js");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

export function loadSets() {
  const ctx = { GH_SETS: [] };
  ctx.globalThis = ctx;
  for (const f of readdirSync(join(root, "sets")).filter((f) => f.endsWith(".js")).sort())
    vm.runInNewContext(readFileSync(join(root, "sets", f), "utf8"), ctx, { filename: f });
  return ctx.GH_SETS;
}

export function checkSet(set) {
  const problems = [];
  const bad = (where, msg) => problems.push(`${set.id || "?"} ${where}: ${msg}`);
  const text = (v) => typeof v === "string" && v.trim().length > 0;
  if (!text(set.id) || !text(set.title)) bad("set", "needs an id and a title");
  if (set.testDate && !/^\d{4}-\d{2}-\d{2}$/.test(set.testDate)) bad("set", "testDate must look like 2026-11-14");
  if (!Array.isArray(set.topics) || !set.topics.length) bad("set", "needs topics");
  const ids = new Set();
  let mc = 0, longest = 0;
  for (const t of set.topics || []) {
    if (!text(t.id) || !text(t.name)) bad("topic", "needs an id and a name");
    if (!t.items || t.items.length < 3) bad(t.id, "needs at least 3 questions");
    for (const i of t.items || []) {
      const at = i.id || "(no id)";
      if (!text(i.id)) bad(at, "missing id");
      if (ids.has(i.id)) bad(at, "duplicate id");
      ids.add(i.id);
      if (!text(i.q)) bad(at, "missing question");
      if (!text(i.why) && i.type !== "define") bad(at, "missing explanation (why)");
      // A source needs a label. A link is optional (class notes have none), but must be https if given.
      if (!i.src || !text(i.src.label) || (i.src.url !== undefined && !/^https:\/\//.test(i.src.url))) bad(at, "needs a source with a label (and an https link, if any)");
      if (i.type === "mc") {
        mc++;
        const o = i.options || [];
        if (o.length !== 4 || !o.every(text)) bad(at, "multiple choice needs 4 options");
        if (new Set(o.map(normalize)).size !== o.length) bad(at, "options repeat");
        if (!Number.isInteger(i.answer) || !o[i.answer]) bad(at, "answer must point to an option");
        else if (o.every((x, k) => k === i.answer || x.length < o[i.answer].length)) longest++;
      } else if (i.type === "short") {
        if (!text(i.answer)) bad(at, "short answer needs an answer");
        if (!Array.isArray(i.accept) || !i.accept.length) bad(at, "short answer needs accepted answers");
        else if (i.accept.some((a) => !normalize(a))) bad(at, "an accepted answer is empty after cleanup");
      } else if (i.type === "define") {
        if (!text(i.answer) || normalize(i.answer).split(" ").length < 2) bad(at, "a definition needs its exact wording");
      } else bad(at, `unknown type "${i.type}"`);
      const all = JSON.stringify(i);
      if (all.includes("—")) bad(at, "contains an em dash");
    }
  }
  // The right answer must not be predictably the longest option.
  if (mc && longest / mc > 0.3) bad("set", `right answer is the longest option in ${longest} of ${mc} multiple choice questions (limit 30%)`);
  return { problems, count: ids.size, mc, longest };
}

async function checkLinks(set) {
  const problems = [];
  const urls = [...new Set(set.topics.flatMap((t) => t.items.map((i) => i.src.url)).filter(Boolean))];
  for (const url of urls) {
    const m = url.match(/^https:\/\/en\.wikipedia\.org\/wiki\/(.+)$/);
    if (!m) { problems.push(`${url}: not a Wikipedia link, check it by hand`); continue; }
    let res;
    for (let tries = 0; tries < 3; tries++) {
      await new Promise((r) => setTimeout(r, 1500 * (tries + 1))); // Wikipedia rate-limits fast checks
      res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${m[1]}?redirect=false`, {
        headers: { "Api-User-Agent": "Greenhouse study-set link check (personal project)" },
      });
      if (res.status !== 429) break;
    }
    if (res.status !== 200) problems.push(`${url}: ${res.status === 302 || res.status === 301 ? "is a redirect, use the final page" : "returned " + res.status}`);
  }
  return { problems, checked: urls.length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const sets = loadSets();
  let failed = false;
  for (const s of sets) {
    const r = checkSet(s);
    console.log(`${s.id}: ${r.count} questions, ${r.mc} multiple choice, right answer longest in ${r.longest}`);
    r.problems.forEach((p) => console.log("  PROBLEM " + p));
    if (r.problems.length) failed = true;
    if (process.argv.includes("--links")) {
      const l = await checkLinks(s);
      console.log(`  links checked: ${l.checked}`);
      l.problems.forEach((p) => console.log("  LINK " + p));
      if (l.problems.length) failed = true;
    }
  }
  if (!sets.length) { console.log("No sets found."); failed = true; }
  console.log(failed ? "FAILED" : "All good.");
  process.exit(failed ? 1 : 0);
}
