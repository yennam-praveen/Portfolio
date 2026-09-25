---
title: 'AI pair programming, after 18 years of doing it alone'
description: 'What changes — and what absolutely does not — when a .NET veteran puts Claude Code and Copilot into a business-software workflow.'
pubDate: 2026-09-25
tags: [ai, workflow, dotnet]
---

I wrote my first production C# in 2007, for an attendance system used by the
Government of Mauritius. The tooling highlight of that era was IntelliSense —
a dropdown that guessed the rest of a method name. Nineteen years later, an
AI agent in my terminal reads the whole codebase, proposes a plan, writes the
implementation and runs the tests while I review its reasoning.

That's not an incremental tooling upgrade. But after a year of using AI
seriously — Claude Code in the terminal, GitHub Copilot in the editor — the
most interesting part isn't what changed. It's what didn't.

## What changed

**The boring parts collapsed.** Every business application is maybe twenty
percent interesting decisions wrapped in eighty percent ceremony: DTOs,
mappings, validation, the fourth nearly-identical CRUD screen. That eighty
percent used to be where the calendar went. Now it's a prompt and a review.
A screen that took a day takes an hour, and most of that hour is me reading.

**Review got a second pair of eyes.** I ask the AI to review diffs before a
human sees them. It is tireless in exactly the way I am not at 5 p.m. — it
checks the null path on the error branch, notices the transaction that isn't
rolled back, flags the date parsed without a culture. It's wrong sometimes.
So are human reviewers. The difference is it never gets tired of being asked.

**Security scanning became routine.** What used to be an annual audit event
is now something I run on a branch on a Tuesday. The findings still need
judgement — half the value is knowing which warnings *don't* matter for a
static site or an internal tool.

**Learning compressed.** This very site is an Astro project — a framework I
had never touched, in an ecosystem (Node, npm, static site generators) far
from my .NET home. With an AI explaining each concept against the code in
front of me, unfamiliar stopped meaning slow.

## What didn't change

**The hard part was never the typing.** The hard part of business software is
understanding what the payroll rule *actually* is, which of the three people
asking for a feature is describing the real workflow, and what happens to the
data model in year three. AI does not attend those meetings. The twenty
percent that was always the job is still the job.

**Accountability doesn't delegate.** When generated code corrupts a pay run,
"the AI wrote it" is not a sentence you get to say. I treat AI output the way
I treated code from any promising junior on my teams: read it, question it,
test it, own it. The moment you stop reading is the moment it stops being
engineering.

**Data discipline matters more, not less.** Company and customer data flows
into a model only where policy explicitly allows. That constraint shapes
which tools I can use and how — and it's the first conversation to have
before adopting any of this in a business.

## The multiplier

Here's the frame I've settled on: AI is a multiplier on the judgement you
bring to it. Ask it for a payroll calculation with no understanding of
payroll and you'll get confident, plausible, subtly wrong code — and you
won't know. Bring eighteen years of production scar tissue and the same tool
becomes the best colleague you've ever had: endlessly fast, endlessly
patient, and completely dependent on you to know what good looks like.

The developers who'll struggle aren't the ones who ignore AI, and they aren't
the ones who use it for everything. They're the ones who stop reading the
code. Everyone else just got a very good deal on their afternoons.
