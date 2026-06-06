---
name: frosted-glass-ui
description: "Design CSS-first frosted glass, glassmorphism, translucent, blurred, or backdrop-filter UI surfaces. Enforces the use of existing frosted-glass.css tokens, Cyan palette, backdrop-blur, and translucent backgrounds."
---

# Frosted Glass UI

## Purpose
Create frosted-glass UI as CSS using the tokens and selectors defined in `src/app/styles/frosted-glass.css`. Style the project's existing elements; only invent markup for standalone examples.

## Core Idea
Frosted glass uses one unified edge language: a 1px neutral lit border, directional inset light/shadow, translucent gradient fill, backdrop blur/saturation, and elevation.

## Required Workflow
1. **Source of Truth**: Always refer to `src/app/styles/frosted-glass.css`. Do NOT invent new colors, blurs, or gradients.
2. **Component References**: Map styles to the existing CSS variables in `frosted-glass.css` (e.g. `var(--fg-fill-card)`, `var(--fg-border)`, `var(--fg-blur-md)`).
3. **Theme Awareness**: Always support both `html.glass` and `html.glass.dark`. The CSS variables automatically handle the switch.

## Non-Negotiables
- **Typography**: Use `var(--font-sans)` (`Inter`) for all text.
- **Palette**: The palette is Cyan/Sky blue (`--primary-500: #06b6d4`) on light mode and Cobalt on dark mode.
- **Glass Material**: Any glass surface MUST use `backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate))` along with `background: var(--fg-fill-card)` and `box-shadow: var(--fg-edge-top), var(--fg-edge-bottom), var(--fg-elevation-md)`.
- **Existing Classes**: Reuse `.hero-cta-primary`, `.hero-cta-secondary`, and `.theme-selector`.

## Verify Before Output
- [ ] Uses variables like `var(--fg-blur-md)`, `var(--fg-fill-card)`, `var(--fg-edge-top)`.
- [ ] No colors are hardcoded.
- [ ] Hover states use `var(--fg-hover-glow)`.
