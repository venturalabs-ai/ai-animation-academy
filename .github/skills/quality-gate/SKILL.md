---
name: quality-gate
description: Validate AI Animation Academy changes for typed Next.js code reproducible content current claims and documented limitations. Use when reviewing a lesson workflow case study or UI change before merge. Do not use when the task is only to evaluate external model output quality outside the academy repository.
---

# Quality gate

- Run `npm run lint` and fix all reported errors.
- Run `npm run build` and fix type or build failures.
- Check changed educational content for reproducible inputs and explicit assumptions.
- Verify time-sensitive model platform pricing or policy claims before publication.
- Confirm examples do not rely on private or unlicensed assets.
- Keep scaffold or planned features labeled as such until implemented.
- Reject maturity claims unsupported by working application evidence.
