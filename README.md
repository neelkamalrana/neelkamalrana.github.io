# Neelkamal Rana — AI portfolio preview

Local redesign of the existing React / GitHub Pages portfolio. This is a review build, not a production release.

## Preview

```sh
npm ci
npm run build
python3 -m http.server 4173 --bind 127.0.0.1 --directory build
```

Open http://127.0.0.1:4173. The development server is also available with `npm start`; if macOS reports a file-watching limit, use the compiled preview above.

## Content

- Three planned AI applications: Document Answer Desk, Ticket Classifier, and Support Reply Assistant.
- Expandable project plans include scope, proposed tools, evaluation, and first steps.
- Machine learning experiments have an honest empty state until results are available.
- Existing experience, education, certificates, contact details, and résumé are retained.
- Older academic projects remain in the original data file, but are not rendered in this redesign.

Update project plans in `src/data/aiProjects.js`. Never mark an application live without a real implementation and evaluation. No AI backend, API credentials, inference endpoint, or mock demo was added.

## Review and release

Source branch: `codex/ai-portfolio-preview`, based on `3a8a16a438ed38ef729c54f06cf0f882bd2adab6`.

This checkout's origin push URL is disabled as a local precaution. Nothing was pushed. The domain, CNAME, deployment scripts, dependencies, and GitHub Pages publishing branch are unchanged.

**Do not run `npm run deploy` for previewing.** The inherited command can publish to the live gh-pages branch even when run from a different source branch.

The HTML deliberately contains `noindex, nofollow` for preview. Remove that only as part of an approved production release. Before release, verify actual Pages settings, archive the deployed version for rollback, review résumé consistency, and decide whether to wait for the first completed RAG application.

New navigation uses same-page anchors, avoiding new client-side route dependencies on GitHub Pages. Legacy path handling in App only applies when the host serves the application shell; legacy URLs need a separate hosting/redirect decision before release.

## Validation

`CI=true npm test -- --watchAll=false` runs tests for honest project status, mobile navigation behavior, retained résumé links, and evaluation content. `npm run build` creates the static bundle. Desktop and mobile browser checks exercised project disclosures, mobile navigation, certificate expansion, and anchor links. The existing CRA toolchain prints deprecation and browser-database age warnings; no toolchain migration was included.

## Dark appearance and motion

Midnight navy surfaces, mint accents, and a decorative canvas background. On a fine pointer, a soft glow follows movement and nearby particles react. Pause/resume is available in the corner. Touch-only devices and reduced-motion preferences use a static field. Animation pauses in hidden tabs; particle count and render resolution are capped.
