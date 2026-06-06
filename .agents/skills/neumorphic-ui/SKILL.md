---
name: neumorphic-ui
description: "Build UI components using a Neumorphic (Soft UI) design system in light and dark modes. Enforces tokens from neumorphic.css: monochrome surfaces, top-left white refraction glow, bottom-right slate-gray shadow, rounded radii, and Orange accents."
---

# Neumorphic UI Component Skill

## Purpose
Generate UI that follows a strict Neumorphism system defined in `src/app/styles/neumorphic.css`.

## Core Philosophy
Single-material illusion: Surface and component share near-identical base color. Depth is communicated by paired highlight + shadow, not borders.

## Required Workflow
1. **Source of Truth**: Always refer to `src/app/styles/neumorphic.css`. 
2. **Theme Awareness**: Support `html.neumorphic` and `html.neumorphic.dark`.

## Non-Negotiables
- **Typography**: Use `var(--font-sans)` (`Inter`).
- **Palette**: Soft Gray-Blue (`#e0e5ec`) for light mode, Off-black (`#1e222b`) for dark mode. Primary accent is Orange (`#ff7b34`).
- **Lighting Rule**: Use `var(--nm-raised-sm/md/lg)` for raised elements, and `var(--nm-inset-sm/md/lg)` for pressed elements. 
- **Borders**: Avoid solid colored borders. Use the dual-shadow mechanism.
- **Existing Classes**: Reuse `.hero-cta-primary`, `.project-card`.

## Verify Before Output
- [ ] Global light source is consistent (top-left).
- [ ] Shadows use `var(--nm-raised-md)` or `var(--nm-inset-md)`.
- [ ] No pure `#FFFFFF` or `#000000` base surfaces.
