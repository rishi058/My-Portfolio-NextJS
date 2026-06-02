---
name: cyberpunk-ui
description: "Build CSS-first Cyberpunk HUD interfaces and UI components. Use when creating or refining cards, tiles, chips, buttons, forms, navs, dashboards, light/dark themes, hover/selected states, glitch effects, gradients, neon glow, Orbitron typography, or cyberpunk design-system CSS. Enforces limited primary/secondary palettes, angular slate borders, strict glow placement, supported gradients only, accessibility-focused focus states, and anti-AI-slop rules."
---

# Cyberpunk UI Component Skill

## Purpose
Generate CSS-first UI that feels like a disciplined cyberpunk HUD: sharp, technical, readable, and intentionally accented. Style existing selectors when possible; only create markup/classes for standalone examples.

## Visual DNA
- `cyberpunk.jpg`: light industrial HUD, white background, dark slate outlines, orange edge notches, grey panels, segmented rails, hex/circle telemetry, sparse micro-grids.
- `cyberpunk-2.webp`: dark Kitsch HUD, black panels, cyan wireframes, yellow selected/action surfaces, clipped tabs, thin border systems, controlled glow.
- Blend `Kitsch` flash with `Neomilitarism` structure: bold accent moments inside cold, sharp, functional layouts.

## Required Workflow
1. Ask for `primary` and `secondary` colors if the user did not provide them. Recommend one supported palette from `references/tokens.md`; never activate every accent color.
2. Load `references/tokens.md` before writing CSS. Use only supported color tokens and gradients.
3. Load `references/typography-effects.md` for fonts, glitch, glow, motion, and anti-slop rules.
4. Load `references/components.md` when building cards, tiles, chips, buttons, inputs, navs, or dashboards.
5. Output CSS by default. Include HTML only when the user asks for a full example.

## Non-Negotiables
- Use `Orbitron` for display headings, labels, chips, buttons, and HUD numbers; use a quieter UI font for body copy.
- Support both dark and light themes. Light mode must keep white/off-white backgrounds with dark slate borders.
- Use angular/cut-corner geometry, 1px or 2px borders, and compact uppercase labels.
- Use glow only where allowed in `typography-effects.md`; most components should be crisp, not glowing.
- Use glitch only for headings, brand marks, alerts, selected tabs, or short HUD labels.
- Keep text readable; no tiny fake telemetry paragraphs as decoration.

## Verify Before Output
- [ ] User chose or received a recommended `primary` + `secondary` pair.
- [ ] No colors outside `references/tokens.md`.
- [ ] Only supported gradients are used.
- [ ] Dark and light theme tokens are present or respected.
- [ ] Cards/tiles/chips use angular HUD geometry.
- [ ] Hover, selected, focus-visible, active, and disabled states exist.
- [ ] Glow count is limited and purposeful.
- [ ] Glitch respects `prefers-reduced-motion`.
- [ ] Focus indicators remain visible on light and dark themes.
