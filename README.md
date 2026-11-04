# Greenhouse

A small study app for AP classes. Family use only. Plan: `~/Downloads/Greenhouse_Brief_v1.md`.

One study set so far (AP World History, Unit 3.1 and 3.2).

- Phase 1: practice round and readiness check.
- Phase 2: answers saved on the device, spaced review with FSRS (`vendor/ts-fsrs-5.4.2.umd.js`, MIT),
  Today's round, Progress screen, test confidence on the home page, backup code to move devices.

## The learning rules (all in `logic.js`, all tested)

- Every first try in a round is recorded. A right answer is FSRS "Good", a miss is "Again".
- Before the test date, no review gap is longer than half the time left to the test.
- Today's round: due questions (most faded first) plus at least 3 new ones, topics mixed, 15 at most.
  No count of overdue questions is ever shown.
- Solid: a typed answer right on two different days, FSRS stability of 7+ days, and not faded below
  80% recall. A miss resets it. Multiple choice never makes a question solid.
- Test confidence: the average recall chance across every question in the set, right now.
  Unseen questions and questions missed last time count as zero.

## Files

| File | What it is |
|---|---|
| `index.html` | The page and its look |
| `app.js` | The screens |
| `logic.js` | Rules: answer matching, building rounds, scoring, scheduling, confidence. Tested. |
| `vendor/` | The FSRS library, copied in so the site depends on no outside server |
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
