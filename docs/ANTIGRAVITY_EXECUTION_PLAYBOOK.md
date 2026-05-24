# Df-OS Website — Antigravity Execution Playbook

## 1. Purpose

This document defines how Antigravity must operate while building the Df-OS website.

Antigravity must work in small, controlled, reviewable steps and must follow all files inside `/docs`.

---

## 2. Required Rule Files

Before major implementation, Antigravity must read:

```text
/docs/PROJECT_RULES.md
/docs/SEO_GEO_AEO_RULES.md
/docs/ANIMATION_PERFORMANCE_RULES.md
/docs/ANTIGRAVITY_EXECUTION_PLAYBOOK.md
```

---

## 3. Core Agent Principle

> Antigravity must not act as an unchecked autopilot.

The agent must:

- Plan before modifying files.
- Work in small tasks.
- Explain risks before major changes.
- Avoid unnecessary packages.
- Avoid destructive commands.
- Preserve SEO, performance, CMS readiness, accessibility, and security.
- Summarize changed files after implementation.

---

## 4. Mandatory Prompt Prefix

Use this before major tasks:

```text
Before you begin, read all documents inside /docs:
- PROJECT_RULES.md
- SEO_GEO_AEO_RULES.md
- ANIMATION_PERFORMANCE_RULES.md
- ANTIGRAVITY_EXECUTION_PLAYBOOK.md

Follow these rules strictly. Work in small, reviewable steps. Do not introduce new libraries, architecture changes, destructive commands, hardcoded CMS-managed content, or performance-heavy features without explaining the tradeoff and requesting approval first. Preserve SEO, performance, accessibility, CMS readiness, and Git safety.
```

---

## 5. Execution Modes

Use four modes.

### 5.1 Planning Mode

Use before code changes.

```text
Planning mode only. Do not modify files yet.
Read the /docs rules and inspect the relevant project files. Create an implementation plan for [TASK]. Include files likely to change, risks, dependencies, SEO impact, performance impact, security impact, and QA steps. Wait for approval before coding.
```

### 5.2 Build Mode

Use only after the plan is approved.

```text
Build mode. Implement only the approved plan for [TASK]. Keep changes small and focused. Do not modify unrelated files. Do not add new dependencies unless already approved. After implementation, summarize changed files and how to test.
```

### 5.3 Review Mode

Use after implementation.

```text
Review mode only. Do not modify files yet.
Review the latest changes against all /docs rules. List bugs, SEO issues, performance risks, mobile risks, accessibility issues, CMS issues, security issues, and unnecessary complexity. Do not fix yet.
```

### 5.4 Fix Mode

Use only after issues are identified.

```text
Fix mode. Fix only the issues listed in the previous review. Do not refactor unrelated code. Do not change design or architecture unless required to resolve the issue. Summarize the exact fixes made.
```

---

## 6. Phase-Wise Build Sequence

Build in this order:

```text
Phase 0: Repo safety setup
Phase 1: Next.js + TypeScript + Tailwind foundation
Phase 2: Sanity CMS foundation
Phase 3: Design system components
Phase 4: Global layout, navigation, footer, SEO helpers
Phase 5: Page templates
Phase 6: Homepage
Phase 7: Product pages
Phase 8: Solution pages
Phase 9: Industry pages
Phase 10: Blog, resources, case studies, glossary
Phase 11: Forms, analytics, conversion tracking
Phase 12: SEO/GEO/AEO finalization
Phase 13: Performance, responsive, accessibility QA
Phase 14: Vercel deployment and launch checks
```

Do not start with advanced animation, custom backend, or manually building all pages.

---

## 7. Phase Acceptance Rules

### Phase 0 — Repo Safety

```text
[ ] /docs folder exists
[ ] All four rule documents exist
[ ] .gitignore protects env files
[ ] .env.example exists without secrets
[ ] README exists
[ ] Git repo initialized
```

### Phase 1 — Foundation

```text
[ ] Next.js app runs locally
[ ] TypeScript works
[ ] Tailwind works
[ ] App Router structure exists
[ ] Basic layout exists
[ ] Sitemap/robots foundation exists
[ ] No unnecessary dependencies added
```

### Phase 2 — CMS

```text
[ ] Sanity configured
[ ] Required schemas exist
[ ] SEO fields exist
[ ] FAQ fields exist
[ ] Related content fields exist
[ ] Publishing status exists
[ ] No custom admin created
```

### Phase 3 — Design System

```text
[ ] Reusable UI components exist
[ ] Components are typed
[ ] Components are responsive
[ ] Components use Tailwind consistently
[ ] No heavy UI framework added
```

### Phase 4 — Global Layout

```text
[ ] Header works
[ ] Footer works
[ ] Mobile nav works
[ ] Breadcrumb component exists
[ ] Global SEO defaults exist
[ ] JSON-LD helper exists
[ ] 404 page exists
```

### Phase 5+ — Templates and Pages

```text
[ ] Template is reusable
[ ] Template supports Sanity content
[ ] Metadata is supported
[ ] Schema is supported where relevant
[ ] CTA exists
[ ] Related content exists where relevant
[ ] Page is responsive
[ ] No unnecessary client-side rendering
```

---

## 8. Safe Command Rules

### Allowed Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
git status
git diff
git add <specific-files>
git commit -m "message"
git branch
git checkout -b <branch-name>
```

### Commands Requiring Approval

```bash
npm install <new-package>
npm uninstall <package>
npm update
npx create-*
git reset
git rebase
git clean
rm
mv large-folder
cp large-folder
```

### Prohibited Without Explicit Approval

```bash
rm -rf /
rm -rf *
rm -rf .
rm -rf src
rm -rf app
rm -rf sanity
git reset --hard
git clean -fdx
sudo commands
chmod -R 777
commands that delete broad folders
commands that expose secrets
commands that overwrite the repo
```

Before terminal commands that delete, reset, install, update, or modify many files, Antigravity must show the command, explain the purpose, explain the risk, and wait for approval.

---

## 9. Dependency Rules

Before adding any package, Antigravity must answer:

```text
What problem does this package solve?
Can existing tools solve it?
Can CSS/Tailwind solve it?
What is the bundle impact?
Is it maintained?
Is it necessary for the current phase?
Does it affect security or performance?
```

Avoid by default:

```text
Heavy UI frameworks
Multiple animation libraries for the same purpose
Heavy carousel libraries
3D libraries
Particle libraries
Large chart libraries for decoration
Unmaintained packages
Packages with unclear purpose
```

---

## 10. Git Rules

- Work in small commits.
- Review changed files before commit.
- Do not commit broken builds.
- Do not commit secrets.
- Do not commit large raw media.
- Do not commit unrelated file changes.

Suggested commit format:

```text
feat: add homepage hero section
fix: resolve mobile navigation issue
cms: add Sanity product schema
seo: add JSON-LD schema helper
perf: optimize hero media loading
docs: update project rules
```

Pre-commit check:

```text
[ ] App runs locally
[ ] Build passes where practical
[ ] No TypeScript errors
[ ] No obvious console errors
[ ] No secrets committed
[ ] No large media accidentally committed
[ ] No unrelated files modified
```

---

## 11. CMS Rules for Agent

Antigravity must not hardcode CMS-managed content as final.

CMS-managed content includes:

```text
Blogs
Case studies
Resources
Product content
Solution content
Industry content
FAQs
SEO metadata
OG images
Authors
Related content
Glossary terms
```

Temporary content must be clearly marked:

```text
TEMP_PLACEHOLDER_CONTENT — replace with Sanity content before launch
```

---

## 12. SEO Review Prompt

Use for SEO review:

```text
Review all indexable routes for SEO/GEO/AEO readiness. Do not modify files yet. Check metadata, H1, headings, canonical URLs, OG data, schema, sitemap, robots, internal links, image alt text, FAQ schema, noindex risks, and CMS SEO fields. Return a page-by-page issue list with severity.
```

---

## 13. Performance Review Prompt

Use for performance review:

```text
Review the project for performance risks. Do not modify files yet. Check client components, JavaScript bundle risks, image sizes, video usage, animation libraries, third-party scripts, lazy loading, LCP, CLS, INP risks, and mobile performance issues. Return prioritized recommendations.
```

---

## 14. Animation Review Prompt

Use for animation review:

```text
Review all animations against /docs/ANIMATION_PERFORMANCE_RULES.md. Do not modify files yet. Check whether animations use transform/opacity, avoid layout shift, respect reduced motion, work on mobile, avoid unnecessary libraries, and do not hide important SEO content. Return risks and fixes.
```

---

## 15. Security Review Prompt

Use for security review:

```text
Review the repo for security risks. Do not modify files yet. Check .env usage, committed secrets, frontend-exposed variables, Sanity tokens, API routes, dependency risks, and unsafe commands. Return risks and recommended fixes.
```

---

## 16. Stop Conditions

Stop and request approval if Antigravity attempts to:

```text
Delete large folders
Reset Git history
Install many packages
Change the approved stack
Create a custom backend/admin
Replace Sanity
Make the full app client-side
Add heavy 3D libraries
Add heavy animation libraries
Rewrite unrelated files
Remove metadata/canonical/schema systems
Hardcode CMS-managed content as final
Commit secrets
Add large videos to repo
Run destructive terminal commands
```

---

## 17. Bug Report Format

Use this format when reporting issues to Antigravity:

```text
Bug Title:
Page/Component:
Device/Screen Size:
Browser:
Steps to Reproduce:
Expected Result:
Actual Result:
Screenshot/Recording:
Severity:

Do not modify files yet. First explain likely cause and proposed fix.
```

---

## 18. Launch Readiness Prompt

Use before launch:

```text
Before you begin, read all documents inside /docs. Perform a full launch readiness review. Do not modify files yet.

Check:
- build success
- TypeScript
- linting
- routing
- mobile responsiveness
- metadata
- schema
- sitemap
- robots
- canonicals
- image optimization
- animations
- forms
- analytics
- Sanity workflow
- environment variables
- Vercel deployment
- security risks
- broken links
- Core Web Vitals risks

Return a checklist with status: Pass, Warning, or Fail.
```

---

## 19. Emergency Recovery Workflow

If the project breaks:

1. Do not ask Antigravity to “fix everything.”
2. Run safe inspection commands:

```bash
git status
git diff
```

3. Ask:

```text
Review the current broken state. Do not modify files. Explain what changed, what likely caused the issue, and the safest recovery options. Do not run destructive commands.
```

Preferred recovery order:

```text
1. Fix specific error
2. Revert specific file changes
3. Restore specific files from Git
4. Use previous commit only if necessary
5. Avoid hard reset unless explicitly approved
```

---

## 20. Definition of Done for Agent Tasks

An Antigravity task is complete only when:

```text
[ ] It follows all /docs rules
[ ] It is scoped correctly
[ ] It runs locally where applicable
[ ] It has no obvious console errors
[ ] It is responsive
[ ] It does not break SEO
[ ] It does not break CMS readiness
[ ] It does not add unnecessary dependencies
[ ] It does not create performance risks
[ ] It does not expose secrets
[ ] Changed files are summarized
[ ] Testing steps are provided
```

---

## 21. Initial Antigravity Prompt

Use this after the repo is created and docs are added:

```text
Before you begin, read all documents inside /docs:
- PROJECT_RULES.md
- SEO_GEO_AEO_RULES.md
- ANIMATION_PERFORMANCE_RULES.md
- ANTIGRAVITY_EXECUTION_PLAYBOOK.md

Planning mode only. Do not modify files yet.

We are building the Df-OS enterprise SaaS website using Next.js App Router, React, TypeScript, Tailwind CSS, Sanity CMS, and Vercel. The website must be lightweight, fast, premium, CMS-managed, SEO/GEO/AEO-ready, and performance-safe.

Inspect the current repo and create the Phase 1 implementation plan for the project foundation. Include:
- current repo status
- missing setup items
- proposed folder structure
- packages required
- files to create/change
- SEO foundation steps
- Sanity setup steps
- performance risks
- security risks
- exact commands proposed

Do not run commands and do not modify files until the plan is approved.
```
