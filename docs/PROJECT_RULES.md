# Df-OS Website — Project Rules

## 1. Purpose

This document defines the core execution rules for the Df-OS enterprise SaaS website.

The website must be built as a lightweight, fast, premium, CMS-managed, SEO/GEO/AEO-ready enterprise SaaS website for manufacturing digital transformation.

All development work must follow this document together with:

```text
/docs/SEO_GEO_AEO_RULES.md
/docs/ANIMATION_PERFORMANCE_RULES.md
/docs/ANTIGRAVITY_EXECUTION_PLAYBOOK.md
```

---

## 2. Core Objective

Build a premium enterprise SaaS website that supports:

- Strong Df-OS positioning
- Fast page speed
- Core Web Vitals discipline
- CMS-managed content through Sanity
- SEO/GEO/AEO readiness from day one
- Product storytelling for Df-OS, Vish AI, and X-Konnect
- Manufacturing use-case education
- Organic demand generation
- Case study and resource publishing
- Easy maintenance by non-coders

The website must be treated as a digital growth engine, not a generic brochure website.

---

## 3. Product Positioning Rules

Df-OS must be positioned as:

> A process-first, modular Digital Factory Operating System that digitizes people-driven shopfloor workflows and connects operational execution, visibility, compliance, and decision intelligence across manufacturing plants.

Df-OS must not be positioned as:

- A generic ERP
- A direct ERP replacement
- A generic MES clone
- A dashboard-only tool
- A simple checklist app
- A generic no-code app builder

Core positioning pillars:

- Digital Factory Operating System
- Process-first shopfloor digitization
- Modular manufacturing workflow automation
- Connected execution layer across plant operations
- Complementary to ERP, MES, SCADA, IoT, and other enterprise systems
- AI-ready foundation through Vish AI

---

## 4. Approved Tech Stack

Use only the approved stack unless a change is explicitly reviewed and approved.

| Layer | Approved Choice |
|---|---|
| Frontend | Next.js App Router |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| CMS/Admin | Sanity CMS |
| Hosting | Vercel |
| Animation | CSS, Framer Motion/Motion, GSAP only where justified, optimized Lottie only where justified |
| Analytics | GA4, Microsoft Clarity, Vercel Speed Insights |
| Search Tools | Google Search Console, Bing Webmaster Tools |
| Media Hosting | Sanity Assets, Cloudinary, Bunny.net, Vimeo, or YouTube unlisted |
| Version Control | GitHub |
| Development Agent | Antigravity 2.0 |

---

## 5. Architecture Rules

- Use Next.js App Router.
- Use TypeScript throughout the project.
- Use Server Components by default.
- Use Client Components only when interactivity is required.
- Use static generation for marketing pages wherever practical.
- Avoid unnecessary client-side rendering.
- Avoid custom backend/admin in Phase 1.
- Use Sanity as the CMS/admin layer.
- Do not hardcode blogs, case studies, resources, or SEO fields as final content.
- Keep the application modular and template-driven.
- Build reusable templates instead of manually creating many hardcoded pages.

---

## 6. CMS Rules

Sanity must manage the following content wherever practical:

- Pages
- Products
- Solutions
- Industries
- Blogs
- Case studies
- Resources
- FAQs
- Authors
- Testimonials
- Navigation labels where practical
- CTAs where practical
- SEO metadata
- Open Graph metadata
- AEO answer blocks
- Related content
- Glossary terms

Temporary placeholder content is allowed during development only if clearly marked:

```text
TEMP_PLACEHOLDER_CONTENT — replace with Sanity content before launch
```

Do not create a separate custom admin dashboard in Phase 1.

---

## 7. Required Sanity Schemas

Create or support these schemas:

```text
Page
Product
Solution
Industry
BlogPost
CaseStudy
Resource
Author
FAQ
CTA
Navigation
SEOSettings
GlossaryTerm
Redirect
```

Major schemas must include SEO/GEO/AEO fields as defined in `/docs/SEO_GEO_AEO_RULES.md`.

---

## 8. Website Structure Rules

The site should support these primary areas:

```text
/
/products/df-os
/products/vish-ai
/products/x-konnect
/solutions
/solutions/factory-control-tower
/solutions/traceability
/solutions/quality-management
/solutions/safety-ehs
/solutions/maintenance-cmms
/solutions/performance-monitoring
/solutions/esg-sustainability
/industries
/industries/fmcg
/industries/pharma
/industries/chemicals
/industries/automotive
/resources
/resources/blog
/case-studies
/glossary
/about
/partners
/security
/careers
/contact
/book-demo
```

Do not create all pages manually. Build templates and use CMS-driven data.

---

## 9. Page Structure Rules

Major product, solution, and industry pages should include:

```text
Hero
Problem section
Solution explanation
Workflow or process visual
Key capabilities
Persona/use-case value
Business outcomes
Integrations where relevant
Vish AI connection where relevant
Proof/example/case study block
FAQ section
Related content
Final CTA
```

Each indexable page must have:

- One H1
- Clear metadata
- Canonical URL
- Internal links
- CTA
- Structured content
- Relevant schema
- Mobile-safe layout

---

## 10. Design System Rules

Use a reusable design system built with Tailwind.

Required component categories:

```text
Button
Card
Badge
Container
SectionHeader
SectionWrapper
CTASection
FAQAccordion
Breadcrumb
Navbar
Footer
MegaMenu
FeatureCard
MetricCard
BlogCard
CaseStudyCard
```

Design must feel:

- Premium
- Enterprise SaaS
- Manufacturing-intelligent
- Clear
- Fast
- Trustworthy
- Modern

Avoid:

- Random page-by-page styles
- Excessive gradients
- Excessive glassmorphism
- Low-contrast text
- Generic stock-heavy visuals
- Generic AI robot imagery
- Cluttered layouts

---

## 11. Performance Rules

Performance is non-negotiable.

Targets:

| Metric | Target |
|---|---:|
| Mobile PageSpeed | 80+ |
| Desktop PageSpeed | 90+ |
| LCP | Under 2.5s |
| CLS | Under 0.1 |
| INP | Under 200ms |

Rules:

- Keep JavaScript lean.
- Avoid unnecessary dependencies.
- Optimize all images.
- Use WebP/AVIF where possible.
- Do not store heavy videos in the repo.
- Lazy-load below-the-fold media.
- Avoid heavy third-party scripts.
- Avoid making full pages Client Components without need.

---

## 12. SEO Foundation Rules

SEO/GEO/AEO must be built from day one.

Every indexable page must support:

```text
Meta title
Meta description
Canonical URL
OG title
OG description
OG image
One H1
SEO summary
AEO answer block where relevant
FAQ section where relevant
Schema type
Internal links
Alt text
Noindex toggle where needed
Sitemap inclusion
```

Detailed rules are defined in `/docs/SEO_GEO_AEO_RULES.md`.

---

## 13. Animation Rules

Animation must support meaning and performance.

Allowed:

- Subtle micro-interactions
- Lightweight hero motion
- Workflow/process animation
- Dashboard visual enhancement
- Vish AI knowledge graph, if optimized

Avoid:

- Heavy 3D by default
- Scroll-jacking
- Large Lottie files
- Multiple animation libraries for the same purpose
- Heavy videos above the fold without fallback
- Animation that causes layout shift

Detailed rules are defined in `/docs/ANIMATION_PERFORMANCE_RULES.md`.

---

## 14. Security Rules

- Do not commit `.env` or `.env.local`.
- Use `.env.example` without real secrets.
- Use Vercel environment variables for production.
- Do not expose Sanity write tokens in frontend code.
- Validate form inputs.
- Avoid unknown or unmaintained packages.
- Do not run destructive terminal commands without explicit approval.

---

## 15. Git Rules

- Use GitHub as the source of truth.
- Work in small, reviewable changes.
- Commit after stable milestones.
- Do not commit broken builds.
- Do not commit large raw media files.
- Do not commit secrets.
- Review changed files before commit.

Suggested commit format:

```text
feat: add homepage hero section
fix: resolve mobile navigation issue
cms: add Sanity product schema
seo: add JSON-LD helper
perf: optimize hero media
docs: add project rules
```

---

## 16. Definition of Done

A page, component, or feature is complete only when:

```text
[ ] It follows approved stack and architecture
[ ] It is responsive
[ ] It uses reusable components where practical
[ ] It is CMS-ready where required
[ ] It has SEO metadata where required
[ ] It has clean semantic structure
[ ] It does not create performance regressions
[ ] It has no obvious console errors
[ ] It does not expose secrets
[ ] It does not add unnecessary dependencies
[ ] It aligns with Df-OS positioning
```
