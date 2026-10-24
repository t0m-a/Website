# tsimon.me — Professional Portfolio & Systems Architecture Platform

> **Production Platform for Thomas Mathieu Simon**  
> *Systems Architect · NOC Engineer · AI Context Engineer*  
> Built strictly in alignment with [`HUMAN_CONTEXT_ARCHITECTURE.md`](Human-Context%20Architecture.md) (v2.0.0).

[![Status](https://img.shields.io/badge/Status-Operational-10b981?style=flat-square)](https://tsimon.me)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](LICENSE)
[![Architecture: Zero--Dependency](https://img.shields.io/badge/Architecture-Zero--Dependency-a6f527?style=flat-square)](index.html)
[![Multilingual](https://img.shields.io/badge/Languages-EN%20%7C%20FR%20%7C%20ES-38bdf8?style=flat-square)](index.html)

---

## 1. Architectural Overview

`tsimon.me` is a minimalist, high-contrast technical platform combining the visual intentionality of an editorial monograph with the operational precision of an engineering runbook.

It enforces a strict **zero-dependency runtime architecture**:
* **Semantic HTML5 Core:** Fully accessible landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) with ARIA roles, breadcrumbs, and live regions.
* **Modular CSS Engine (`style.css`):** Zero CSS frameworks. Utilizes Custom Properties (`:root` tokens), responsive CSS Grid, flex layouts, and fluid `clamp()` typography.
* **Lean Client Telemetry (`script.js` < 3.5 KB):** Privacy-first native JavaScript delivering real-time UTC-4 clock telemetry, accessible scroll tracking, dynamic theme switching, one-click clipboard helpers, and interactive accessible dropdown menus with outside-click handling.
* **Full Multilingual Mirroring:** Three synchronized, independently accessible editions maintaining structural, stylistic, and operational parity:
  - **English (Primary):** [`index.html`](index.html)
  - **Français (Natif):** [`fr.html`](fr.html)
  - **Español (Profesional):** [`es.html`](es.html)
* **PWA & Production Favicon Suite:** Multi-resolution vector and raster assets (`favicon.svg`, `favicon-96x96.png`, `apple-touch-icon.png`, `web-app-manifest-*.png`, `favicon.ico`) managed under [`site.webmanifest`](site.webmanifest).
* **Zero External Trackers:** No third-party font CDNs, telemetry pixels, or analytic bloat.

---

## 2. Platform Section Blueprint

```
[00] TOP UTILITY BAR: Live Telemetry, Status Beacon, UTC-4 System Clock, Multilingual Switcher (EN | FR | ES)
 ├── [01] HERO & POSITIONING: First-Principles Architecture Hook, Dual Action CTAs,
 │         ├── Interactive Dossier/Resume Dropdown [ Download Dossier / Resumes ▾ ]
 │         └── OPERATOR_SPEC.yaml Telemetry Card (Dual-theme adaptive syntax block)
 ├── [02] CORE COMPETENCIES: 4-Pillar Grid
 │         ├── Cloud & Hybrid Systems (Enterprise Proxmox, Azure, AWS, Linux/Debian)
 │         ├── NOC Observability & Incident Response (Prometheus, Grafana, MTTR Optimization)
 │         ├── Applied AI Systems & Context Engineering (Local Ollama, MCP Protocols, Alignment)
 │         └── Digital Sovereignty & Human-Centric Security (RFC 4880 OpenPGP, Zero Trust, Data Hygiene)
 ├── [03] FEATURED PROJECTS: Production Case Briefs
 │         ├── Minka Lab (Decentralized Open-Source Platform & Digital Sovereignty in LatAm)
 │         ├── Local AI Edge Hub (Air-Gapped LLM Inference, Model Context Protocol)
 │         └── Global MSP Fleet Operations (Automated Tier-3 Multi-Tenant Infrastructure)
 ├── [04] NON-LINEAR SYNTHESIS: Cross-Disciplinary Operational Framing
 │         └── Documentary Optics (https://photo.tsimon.me) to Systems Architecture & Human Perception
 ├── [05] METHODOLOGY: 5-Stage Cognitive Encoding Protocol & Dynamic State Routing
 └── [06] DIRECT INGESTION CHANNELS (ENGAGEMENT TERMINAL):
           ├── Direct Consulting Scope, Availability, Verified Communication Pathways
           ├── Dual Targeted Resume Downloads (AI & Cloud Architect / Senior NOC Engineer)
           └── OpenPGP Public Key (Key ID 0xA1048A81B9AEA757) with Cryptographic Fingerprint Verification
```

---

## 3. Design System & Dual Theme Architecture

The platform provides a dual-surface visual architecture with instant toggle and `localStorage` state persistence:

* **Dark Obsidian Mode (Default):**
  - Surfaces: Deep obsidian background (`#090b0e`), elevated surface cards (`#10141b` / `#161c26`).
  - Text & Accents: Crisp white text (`#f1f5f9`), terminal lime (`#a6f527`), status emerald (`#10b981`), network cyan (`#38bdf8`).
* **Light Monograph Mode (Technical Paper):**
  - Surfaces: Clean off-white base (`#f8fafc`), pure white card surfaces (`#ffffff`).
  - Text & Accents: Deep ink typography (`#090d14`), forest green (`#16a34a`), emerald (`#059669`), architecture sky (`#0284c7`).
  - **OPERATOR_SPEC Telemetry Card:** Custom hybrid styling featuring a persistent black title bar across both modes, paired with a clean white syntax body and high-contrast tokens in light mode.
* **Typography:** System Sans stack (`Inter`, `-apple-system`, `system-ui`) paired with a Monospace telemetry stack (`JetBrains Mono`, `SF Mono`, `Consolas`).

---

## 4. Professional Dossiers & Cryptographic Verification

### 4.1 Targeted Professional Resumes
The platform embeds two targeted, production-ready engineering resumes located in [`assets/`](assets/):
1. **AI & Cloud Infrastructure Architect Dossier:**  
   [`Thomas_Simon_AI_and_Cloud_Infrastructure_Architect.pdf`](assets/Thomas_Simon_AI_and_Cloud_Infrastructure_Architect.pdf)  
   Focused on hybrid cloud topology, automated infrastructure (Terraform/Ansible), private LLM inference, and Model Context Protocol (MCP) integrations.
2. **Senior NOC Engineer Dossier:**  
   [`Thomas_Simon_Senior_NOC_Engineer.pdf`](assets/Thomas_Simon_Senior_NOC_Engineer.pdf)  
   Focused on 24/7 mission-critical operations, high-availability virtualization (Proxmox/VMware), telemetry (Prometheus/Grafana), and rapid root-cause isolation.

**Access Vectors:**
* **Hero CTA Dropdown:** Interactive `[ Download Dossier / Resumes ▾ ]` button with keyboard navigation (ESC) and outside-click dismissal.
* **Section `[06]` Direct Ingestion Channels:** Dedicated one-click PDF download triggers across English, French, and Spanish editions.

### 4.2 Cryptographic Identity & RFC 4880 OpenPGP
Direct security channel verification is integrated into Section `[06]`:
* **Public Key ID:** `0xA1048A81B9AEA757`
* **Full SHA-1 Fingerprint:** `BDFC AB33 0606 4875 55F0 C3C6 A104 8A81 B9AE A757`
* **Key Asset:** [`assets/Thomas M. Simon ts67200@gmail.com-(0xA1048A81B9AEA757)-public.asc`](assets/Thomas%20M.%20Simon%20ts67200@gmail.com-(0xA1048A81B9AEA757)-public.asc)
* **UX Integration:** The formatted fingerprint acts as a direct download link with responsive word-wrapping (`.pgp-link`), accompanied by a discrete `[Key.asc]` / `[Clé.asc]` / `[Clave.asc]` action button.

---

## 5. Repository Structure

```
.
├── index.html                     # English edition (Primary platform entry)
├── fr.html                        # French edition (Natif)
├── es.html                        # Spanish edition (Profesional)
├── style.css                      # Modular styling engine (Dual themes, Grid, Flex, Animations)
├── script.js                      # Client telemetry, UTC-4 clock, dropdowns, clipboard helpers
├── site.webmanifest               # Progressive Web App manifest
├── favicon.svg                    # Vector primary favicon
├── favicon.ico                    # Legacy multi-resolution icon
├── favicon-96x96.png              # Standard desktop browser icon
├── apple-touch-icon.png           # iOS Home screen icon
├── web-app-manifest-192x192.png   # Android standard PWA icon
├── web-app-manifest-512x512.png   # High-resolution splash icon
├── Human-Context Architecture.md  # Core architectural design specification (v2.0.0)
├── LICENSE                        # GNU General Public License v3.0
├── README.md                      # Platform documentation & operational runbook
└── assets/                        # Downloadable assets & cryptographic keys
    ├── Thomas_Simon_AI_and_Cloud_Infrastructure_Architect.pdf
    ├── Thomas_Simon_Senior_NOC_Engineer.pdf
    └── Thomas M. Simon ts67200@gmail.com-(0xA1048A81B9AEA757)-public.asc
```

---

## 6. Local Development & Quality Assurance

The platform is static and self-contained, requiring no build tools, compilers, or bundlers.

### Local Serving
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .
```

### Multilingual Integrity Verification
All pages, internal anchors, and local asset references can be audited via the automated Node.js validation test:
```bash
node -e "
const fs = require('fs');
['index.html', 'fr.html', 'es.html'].forEach(p => {
  const html = fs.readFileSync(p, 'utf8');
  [...html.matchAll(/(?:src|href)=\"([^\"#:]+\\.(?:css|js|ico|png|webmanifest|html|pdf|asc))\"/g)]
    .forEach(m => { if (!fs.existsSync(m[1])) console.error('Missing: ' + m[1] + ' in ' + p); });
});
console.log('Validation complete.');
"
```

---

## 7. Recommended GitHub Repository Topics

```
systems-architecture, noc-engineer, site-reliability-engineering, cloud-infrastructure, ai-context-engineering, proxmox, terraform, prometheus, grafana, model-context-protocol, digital-sovereignty, openpgp, zero-dependency, portfolio
```

---

## 8. License & Sovereignty

Licensed under the [GNU General Public License v3.0](LICENSE).  
Engineered for human sovereignty, verifiable security, and open technical rigor.
