# Greenhouse

A small study app for AP classes. Family use only. Plan: `~/Downloads/Greenhouse_Brief_v1.md`.

Phase 1: one study set (AP World History, Unit 3.1 and 3.2), a practice round and a readiness check.
No saved progress yet; that's Phase 2.

## Files

| File | What it is |
|---|---|
| `index.html` | The page and its look |
| `app.js` | The screens |
| `logic.js` | Rules: answer matching, building rounds, scoring. Tested. |
| `sets/*.js` | Study sets. Content only, no app code. |
| `tools/check-set.mjs` | Checks every set is complete and correctly formatted |
| `tests/` | Automated tests |

## Checks

Run both before publishing a change:

```bash
node tools/check-set.mjs --links
node --test tests/*.test.mjs
```

The first checks every question has a source, an explanation and valid answers, that the right
multiple-choice answer isn't predictably the longest, that there are no em dashes, and that every
Wikipedia source link exists. The second runs the tests.

When publishing, bump the `?v=` number on the script tags in `index.html` so phones load the new copy.

## Study set format

Each set file adds one set: `id`, `title`, `subtitle`, optional `testDate` (`2026-11-14`), and
`topics`. Each topic has `id`, `name` and `items`. Each item has:

- `id`, `type` (`mc` or `short`), `q`, `why` (the explanation), `src` (`label` and `url`)
- Multiple choice: `options` (4) and `answer` (the index of the right one; options are shuffled on screen)
- Short answer: `answer` (shown to the student) and `accept` (answers that count; one typo is allowed
  in longer words, and the student compares by hand when nothing matches)

Rules: write questions fresh, never copy the textbook or teacher materials, and run a separate
fact-check pass against the sources before publishing. No names, photos or school details in any set.

## Local preview

```bash
python3 -m http.server 8651
```

Then open http://localhost:8651.
