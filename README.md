# tsimon.me — Professional Portfolio & Systems Architecture Platform

> **Production Platform for Thomas Mathieu Simon**  
> *Systems Architect · NOC Engineer · AI Context Engineer*  
> Built strictly in alignment with `HUMAN_CONTEXT_ARCHITECTURE.md` (v2.0.0).

---

## 1. Architectural Overview

`tsimon.me` is a minimalist, high-contrast technical platform combining the visual intentionality of an editorial monograph with the operational precision of an engineering runbook.

It enforces a **zero-dependency runtime architecture**:
* Pure HTML5 with semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
* Modular CSS utilizing Custom Properties (`:root` tokens), responsive CSS Grid, and fluid `clamp()` typography.
* Lean, privacy-respecting client JavaScript (`< 3KB`) delivering real-time UTC-4 clock telemetry, accessible scroll tracking, and one-click clipboard helpers.
* Zero external font trackers or script bloat (eliminated legacy FontAwesome CDN scripts).
* Full Multilingual Architecture across three dedicated editions:
  - English: [`index.html`](index.html)
  - Français (Natif): [`fr.html`](fr.html)
  - Español (Profesional): [`es.html`](es.html)

---

## 2. Section Map

```
[00] TOP UTILITY BAR: Live Telemetry, Availability Status, UTC-4 Clock, Multilingual Posture
 ├── [01] HERO & POSITIONING: First-Principles Hook, Dual CTAs, OPERATOR_SPEC Terminal Card
 ├── [02] CORE COMPETENCIES: 4-Pillar Grid (Cloud, Observability, AI Systems, Sovereignty)
 ├── [03] FEATURED PROJECTS: Case briefs ([Minka Lab](https://minkalab.net), Local AI Hub, Global MSP Fleet)
 ├── [04] NON-LINEAR SYNTHESIS: Documentary Optics (Leiter/Crewdson) to Systems Architecture
 ├── [05] METHODOLOGY: 5-Stage Cognitive Encoding Protocol & Dynamic State Routing
 └── [06] ENGAGEMENT TERMINAL: Direct Consulting Scope, Availability, Verified Pathways
```

---

## 3. Design System & Dual Theme Architecture

The platform supports seamless switching between two high-contrast modes with zero flicker and `localStorage` persistence:

* **Dark Obsidian Mode (Default):**
  - Surfaces: Deep obsidian base (`#090b0e`), elevated surface (`#10141b` / `#161c26`).
  - Text & Accents: High-contrast white (`#f1f5f9`), terminal lime (`#a6f527`), status emerald (`#10b981`), network cyan (`#38bdf8`).
* **Light Monograph Mode (Crisp Technical Paper):**
  - Surfaces: Crisp off-white base (`#f8fafc`), elevated white cards (`#ffffff` / `#f1f5f9`).
  - Text & Accents: Deep ink text (`#090d14`), high-legibility forest green (`#16a34a`), emerald (`#059669`), architecture sky (`#0284c7`).
  - Operator Specification Telemetry Card: Features a black terminal title bar in both modes, with a crisp white background and high-contrast syntax highlighting in light mode.
* **Typography:** System Sans (`Inter`, `-apple-system`, `system-ui`) + Monospace Telemetry (`JetBrains Mono`, `SF Mono`, `Consolas`).

---

## 4. Local Development & Deployment

The platform is static and self-contained. It can be served from any zero-configuration HTTP server or edge CDN (Cloudflare Pages, GitHub Pages, Netlify):

```bash
# Serve locally via Python
python -m http.server 8000

# Or via Node.js
npx serve .
```

---

## 5. License & Sovereignty

Licensed under the [GNU General Public License v3.0](LICENSE). Designed for human sovereignty and open technical rigor.
