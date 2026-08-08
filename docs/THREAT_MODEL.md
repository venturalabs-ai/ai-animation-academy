# Threat Model — ai-animation-academy

| Surface | Threat | Mitigation |
|---------|--------|------------|
| Public web app | XSS / injection | React escaping; avoid `dangerouslySetInnerHTML` |
| Build pipeline | supply chain | lockfile + npm ci + audit |
| Secrets in client | key leak | no server secrets in NEXT_PUBLIC_* |
| User-generated prompts (if any) | prompt abuse | rate limit / moderation (roadmap) |
