---
name: cyberpunk-ui
description: "Build CSS-first Cyberpunk HUD interfaces and UI components. Use when creating or refining cards, tiles, chips, buttons, forms, navs, dashboards, light/dark themes, hover/selected states, glitch effects, gradients, neon glow, Orbitron typography, or cyberpunk design-system CSS. Enforces the Red/Cyan palette from the codebase, angular slate borders, specific clip-path notches, strict glow placement (none in light mode), and utilization of existing CSS variables."
---

# Cyberpunk UI Component Skill

## Purpose
Generate CSS-first UI that feels like a disciplined cyberpunk HUD: sharp, technical, readable, and intentionally accented. Style existing selectors when possible; only create markup/classes for standalone examples.

## Visual DNA
- **Light Theme (`html.cyberpunk`)**: Light industrial HUD (`#F7F8FC`), dark slate outlines (`#263241`), crisp solid shadows, NO glow, animated noise grain and diagonal gradients.
- **Dark Theme (`html.cyberpunk.dark`)**: Deep black panels (`#070A0F`), cyan/red accents, budgeted neon glows, and thin border systems.
- **Palette**: Red (`#FF003C` - Critical Systems/Primary) + Cyan (`#22F6E3` - Secondary).

## Required Workflow
1. **Source of Truth**: Always refer to `src/app/styles/cyberpunk.css` for existing CSS variables (`--cp-primary`, `--cp-secondary`, `--cp-notch`, `--cp-gradient-action`, etc.). Do NOT invent new colors or gradients.
2. **Component References**: Load `references/components.md` when building complex cards, tiles, chips, buttons, inputs, navs, or dashboards, but map their styles to the CSS variables in `cyberpunk.css`.
3. **Typography & Effects**: Load `references/typography-effects.md` for fonts and motion guidelines, ensuring they align with the project's Red/Cyan aesthetic.
4. **Theme Awareness**: Always support both `html.cyberpunk` and `html.cyberpunk.dark`. Output CSS that utilizes the pre-defined variables which automatically switch between light and dark modes.

## Non-Negotiables
- **Typography**: Use `var(--font-display)` (`Orbitron`) for display headings, labels, chips, buttons, and HUD numbers; use `var(--font-sans)` (`Rajdhani`) for UI copy; use `var(--font-mono)` (`JetBrains Mono`) for code/data. Keep text readable; no tiny fake telemetry paragraphs as decoration.
- **Palette**: The color palette is strictly Red (`#FF003C`) and Cyan (`#22F6E3`). Do not prompt the user for colors.
- **Glow & Shadow**: Glows are strictly disabled in light mode (`var(--cp-glow-primary)` handles this). Use solid, crisp shadows (`var(--cp-shadow-crisp)`, `var(--card-shadow)`) in light mode. Use glow only where allowed; most components should be crisp.
- **Geometry**: Use pre-defined variables like `var(--btn-radius)`, `var(--card-radius)`, `var(--cp-notch)` (e.g. `12px`), and `var(--cp-avatar-notch)` (`32px`) for `clip-path` calculations. Use angular/cut-corner geometry and 1px or 2px borders.
- **Glitch Effects**: Limit glitch to headings (`.section-heading`), brand marks, alerts, selected tabs, or short HUD labels. Ensure glitch respects `prefers-reduced-motion`.
- **Existing Classes**: Reuse pre-defined components like `.hero-cta-primary`, `.hero-cta-secondary`, and `.theme-selector` styles if applicable.

## Verify Before Output
- [ ] No colors are hardcoded; exclusively uses variables like `var(--cp-primary)`, `var(--cp-secondary)`, `var(--on-surface)`, etc.
- [ ] Gradients use `var(--cp-gradient-action)`, `var(--cp-gradient-panel)`, etc.
- [ ] Geometry uses `var(--cp-notch)` and variable border radii.
- [ ] Hover, selected, focus-visible, active, and disabled states exist.
- [ ] Glows are applied using CSS variables so they remain OFF in light mode.
- [ ] Glitch respects `prefers-reduced-motion`.
- [ ] Focus indicators remain visible on light and dark themes.
