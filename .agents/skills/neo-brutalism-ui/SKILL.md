---
name: neo-brutalism-ui
description: "Build UI components using the Neo-Brutalism design system. Enforces fixed design tokens from neo-brutalism.css: Electric Yellow/Blue palette, hard edges, thick borders, hard-offset shadows, no glows, and Space Grotesk typography."
---

# Neo-Brutalism UI Component Skill

## Purpose
Generate UI components that strictly follow the project's Neo-Brutalism design system defined in `src/app/styles/neo-brutalism.css`. 

## Core Philosophy
Neo-Brutalism: raw, bold, unapologetic. Hard edges, thick visible borders, offset box-shadows, high-contrast colors, and confident typography. No soft gradients, no blurs, no subtle shadows.

## Required Workflow
1. **Source of Truth**: Always refer to `src/app/styles/neo-brutalism.css`. Do NOT invent new colors, borders, or shadows.
2. **Theme Awareness**: Support `html.neo` and `html.neo.dark`.

## Non-Negotiables
- **Typography**: Use `var(--font-sans)` (`Space Grotesk`) for UI and `var(--font-mono)` (`JetBrains Mono`) for code.
- **Palette**: Strictly Electric Yellow (`#FFDE00`) and Electric Blue (`#00BFFF`).
- **Border & Shadow**: Use `2px solid var(--outline)` and hard shadows like `var(--card-shadow)`. Do not use blur in box-shadows.
- **Interactive States**: Use `translate(-1px, -1px)` and increased hard shadow for hover; `translate(1px, 1px)` and decreased shadow for active.
- **Existing Classes**: Reuse `.hero-cta-primary`, `.hero-cta-secondary`, `.project-card`.

## Verify Before Output
- [ ] No colors outside the CSS variables.
- [ ] Shadow uses hard offset (no blur).
- [ ] Typography uses defined scale.
