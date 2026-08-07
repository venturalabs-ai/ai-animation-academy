# ADR 0001 — Next.js App Router

## Status
Accepted (2026-08-07)

## Decision
Use Next.js + React 19 for the academy UI.

## Consequences
(+) Fast iteration, standard CI build
(-) Docker needs `output: 'standalone'` in next.config for slim images
