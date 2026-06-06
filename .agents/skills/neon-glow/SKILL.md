---
name: neon-glow
description: "Build UI components using the default Neon Glow design system in light and dark modes. Enforces tokens from neon.css: Teal/Sky gradients, soft neon glows, subtle scaling on hover, and Geist typography."
---

# Neon Glow UI Component Skill

## Purpose
Generate UI that follows the primary, default Neon design system defined in `src/app/styles/neon.css`.

## Core Philosophy
Modern, sleek, and vibrant. The Neon theme uses deep contrasts (or crisp light surfaces) accented by highly saturated Teal (`#14b8a6`) and Sky Blue (`#0ea5e9`) elements. Interactivity is highlighted with soft box-shadow glows and smooth scaling.

## Required Workflow
1. **Source of Truth**: Always refer to `src/app/styles/neon.css`. 
2. **Theme Awareness**: This is the default theme. It is active when the `html` element lacks `.neo`, `.glass`, `.neumorphic`, or `.cyberpunk` classes. It supports both light (default) and dark (`.dark`) modes.

## Non-Negotiables
- **Typography**: Use `var(--font-sans)` (`Geist`) for body text and `var(--font-mono)` (`JetBrains Mono`) for technical/code elements.
- **Palette**: Primary Teal (`var(--primary-500)`), Secondary Sky (`var(--secondary-500)`), and Tertiary dark teal.
- **Hover States**: Cards and interactives should use `var(--card-hover-glow)` and `transform: scale(var(--card-hover-scale))`.
- **Gradients**: Text gradients often use `linear-gradient(to right, var(--primary-400), var(--secondary-500))`.
- **Existing Classes**: Reuse `.hero-cta-primary`, `.project-card`, `.project-tag`.

## Verify Before Output
- [ ] No hardcoded colors.
- [ ] Glows use the defined variables (no custom rgba glows unless necessary).
- [ ] Hover states include smooth transitions for `transform` and `box-shadow`.
