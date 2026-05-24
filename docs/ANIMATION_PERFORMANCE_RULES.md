# Df-OS Website — Animation & Performance Rules

## 1. Purpose

This document defines animation, motion, media, and performance rules for the Df-OS website.

The website must feel premium and modern without becoming heavy, slow, distracting, or difficult to maintain.

---

## 2. Core Principle

> Motion must serve meaning. Performance must win over decoration.

Animation should improve comprehension, storytelling, perceived quality, or conversion.

If an animation does not improve the user experience, do not add it.

---

## 3. Performance Targets

| Metric | Target |
|---|---:|
| Mobile PageSpeed | 80+ |
| Desktop PageSpeed | 90+ |
| LCP | Under 2.5s |
| CLS | Under 0.1 |
| INP | Under 200ms |
| JavaScript bundle | As lean as practical |
| Hero media | Strongly optimized |

---

## 4. Animation Philosophy

Animation should feel:

```text
Controlled
Precise
Enterprise-grade
Useful
Fast
Operational
Premium
```

Animation should not feel:

```text
Noisy
Decorative
Gimmicky
Heavy
Distracting
Gaming-like
Overdesigned
```

Df-OS is an enterprise manufacturing SaaS product. Motion should reflect operational confidence, not entertainment.

---

## 5. Approved Animation Areas

Animation is allowed for:

```text
Homepage hero
Product dashboard visual
Process/workflow sections
Vish AI knowledge graph
Before/after workflow transformation
Factory control tower visual
CTA micro-interactions
Card and button hover states
Lightweight section reveals
```

Animation should be minimal on:

```text
Blog pages
Long-form resources
Security/trust pages
Legal pages
Contact forms
Footer
FAQ content
Case study body sections
```

---

## 6. Animation by Page Type

| Page Type | Animation Level |
|---|---|
| Homepage | High but optimized |
| Product pages | Medium-high |
| Vish AI page | Medium-high |
| X-Konnect page | Medium |
| Solution pages | Medium |
| Industry pages | Low-medium |
| Blog listing | Low |
| Blog detail | Minimal |
| Case studies | Low-medium |
| Contact / Book Demo | Minimal |
| Security / Trust | Minimal |

---

## 7. Animation Budget Rules

Homepage may include:

```text
One premium hero motion visual
One animated workflow/process section
One dashboard/product interaction section
Lightweight section reveals
Button/card micro-interactions
```

Product pages may include:

```text
One product visual animation
One workflow/capability animation
Lightweight reveal effects
Micro-interactions
```

Solution pages may include:

```text
One workflow animation
Lightweight reveal effects
Micro-interactions
```

Blog pages should avoid major animation.

---

## 8. Animation Technology Rules

Use the lightest suitable method first:

```text
1. CSS transitions/keyframes
2. Tailwind transition utilities
3. Framer Motion / Motion for React
4. Lightweight SVG animation
5. Optimized Lottie
6. GSAP only for high-value sequencing
7. Canvas/WebGL only with explicit approval
```

Rules:

- Use CSS for simple hover and transitions.
- Use Framer Motion only where component-level motion is justified.
- Use GSAP only for complex timeline sequencing.
- Use Lottie only if the file is optimized and meaningful.
- Do not add WebGL, Three.js, Spline, or heavy 3D by default.

---

## 9. Animation Property Rules

Prefer animating:

```text
opacity
transform
translate
scale
rotate
```

Avoid animating:

```text
width
height
top
left
right
bottom
margin
padding
font-size
large blur filters
heavy box-shadow
large background-position changes
```

Animations must not cause layout shift.

Reserve space before animated content loads.

---

## 10. Motion Timing Rules

Recommended durations:

| Animation Type | Duration |
|---|---:|
| Button hover | 150–250ms |
| Card hover | 180–300ms |
| Section reveal | 400–700ms |
| Hero entrance | 700–1200ms |
| Workflow sequence | 800–1800ms |
| Subtle loop | 4–12s |

Avoid excessive bounce, long delays, flashing, and aggressive motion.

---

## 11. Scroll Animation Rules

Allowed:

```text
Fade-in on section entry
Small upward translate on entry
Lightweight progress indicators
Simple sticky storytelling where justified
Process reveal animations
```

Avoid by default:

```text
Scroll-jacking
Forced scroll snapping
Heavy parallax
Multiple pinned sections
Horizontal scroll unless strongly justified
Animations that trap user scrolling
```

---

## 12. Hero Performance Rules

The hero section must prioritize LCP.

Approved hero visual approaches:

```text
Optimized static dashboard image with subtle CSS motion
Lightweight SVG system diagram
Short compressed external video with poster image
Optimized Lottie loaded after primary content
CSS-based animated grid/nodes
```

Hero rules:

- H1, paragraph, and CTA must render quickly.
- Do not delay core content for animation.
- Do not use large unoptimized video as the LCP element.
- Use poster images for videos.
- Use mobile fallback image for heavy visuals.

---

## 13. Image Performance Rules

Use:

```text
AVIF where possible
WebP as standard
SVG for simple vector illustrations
PNG only when needed
JPEG only where practical
```

Size guidelines:

| Asset Type | Guideline |
|---|---:|
| Hero image | 250–350KB where practical |
| Section image | 100–200KB |
| Blog featured image | 100–200KB |
| Card thumbnail | 40–100KB |
| Icon SVG | As small as practical |

Rules:

- Use Next.js Image where possible.
- Define width and height.
- Use priority only for true above-the-fold LCP image.
- Lazy-load below-the-fold images.
- Serve responsive sizes.
- Avoid desktop-sized images on mobile.

---

## 14. Video Rules

Heavy videos must not be stored in the repo.

Approved hosting:

```text
Bunny.net
Cloudinary
Vimeo
YouTube unlisted
Approved CDN/video platform
```

Video rules:

- Use poster image.
- Use lazy loading where possible.
- Autoplay only if necessary and muted.
- Provide mobile fallback.
- Avoid large background video on SEO-heavy pages.
- Do not block text rendering.

---

## 15. Lottie Rules

Use Lottie only for meaningful, optimized animations such as:

```text
Vish AI knowledge graph
Product concept motion
Process transformation visual
Simple line-based motion
```

Rules:

- Keep file size small.
- Avoid embedded raster images where possible.
- Avoid excessive layers.
- Avoid long loops.
- Test on mobile.
- Lazy-load below-the-fold Lottie files.
- Provide fallback image where needed.

---

## 16. JavaScript Bundle Rules

- Avoid unnecessary dependencies.
- Avoid importing entire libraries for small utilities.
- Dynamically import heavy interactive sections.
- Keep animation libraries isolated.
- Do not wrap the entire site in a Client Component.
- Use Client Components only for interactive UI.

Client Components are acceptable for:

```text
Menus
Accordions
Tabs
Forms
Interactive dashboards
Animation components
Carousels only if justified
```

---

## 17. Third-Party Script Rules

Allowed core scripts:

```text
GA4
Microsoft Clarity
Vercel Speed Insights
Google Tag Manager only if needed and controlled
```

Avoid:

```text
Multiple heatmap tools
Multiple chat widgets
Heavy social widgets
Random tracking pixels
Unused marketing scripts
```

---

## 18. Mobile Performance Rules

On mobile:

- Reduce animation complexity.
- Avoid scroll-jacking.
- Avoid heavy background effects.
- Avoid hover-dependent interactions.
- Use static fallback for heavy visuals.
- Serve smaller images.
- Keep text readable.
- Keep CTAs visible and tappable.

Test at:

```text
360px
390px
430px
768px
1024px
1440px
```

---

## 19. Reduced Motion Rules

Respect `prefers-reduced-motion`.

If reduced motion is enabled:

- Disable non-essential animations.
- Replace long motion sequences with static content.
- Avoid looping motion.
- Avoid parallax.
- Keep all important content visible.

No critical information should depend only on animation.

---

## 20. Dashboard/Product Visual Rules

Use optimized visuals for Df-OS product storytelling.

Approved approaches:

```text
Static product mockups
Lightweight HTML/CSS dashboard mockups
SVG workflow diagrams
Small animated indicators
Controlled hover states
Short external product demo clips where needed
```

Avoid:

```text
Heavy chart libraries for decoration
Tiny unreadable dashboard text
Fully animated fake dashboards everywhere
Large unoptimized screenshots
Unrealistic feature claims in visuals
```

---

## 21. Performance-Safe Premium Visual Techniques

Preferred visual techniques:

```text
Subtle grid backgrounds
SVG workflow lines
Small animated status dots
Layered cards
Soft shadows
Bento grids
Process diagrams
Before/after layouts
Static dashboard mockups with micro-motion
Dark contrast sections used selectively
```

Avoid using heavy 3D or video where a lightweight SVG, CSS, or optimized image can communicate the same idea.

---

## 22. QA Checklist

Before approving a page:

```text
[ ] Page loads without console errors
[ ] Mobile layout works
[ ] Desktop layout works
[ ] LCP is protected
[ ] CLS is under control
[ ] Images are optimized
[ ] Videos are external and optimized
[ ] No heavy unapproved library added
[ ] Animations use transform/opacity where possible
[ ] Animations do not cause layout shift
[ ] Reduced motion is respected
[ ] No important SEO content is hidden inside animation
[ ] Third-party scripts are limited
```
