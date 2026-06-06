# Typography, Effects, Anti-Slop

## Fonts

The fonts are loaded and defined in `cyberpunk.css` via custom properties. Do not re-import them.

- **Display**: `var(--font-display)` (`Orbitron`) – Use for headings, buttons, chips, labels, metrics, nav, and HUD numbers.
- **Sans**: `var(--font-sans)` (`Rajdhani`) – Use for UI paragraphs and dense UI text.
- **Mono**: `var(--font-mono)` (`JetBrains Mono`) – Use for data IDs, coordinates, timestamps, and console text.

**Typographic Rules:**
- Use uppercase for short labels, headings, and buttons with `letter-spacing: 0.05em` or `0.1em`.
- Do not uppercase large bodies of text.
- Do not add fake tiny technical text unless it labels real data.

## Glow Rules

Glow is strictly disabled in light mode. `cyberpunk.css` handles this seamlessly by setting glow variables to `none` or `transparent` inside `html.cyberpunk` and defining them inside `html.cyberpunk.dark`.

- **Primary Glow**: `var(--cp-glow-primary)`
- **Secondary Glow**: `var(--cp-glow-secondary)`
- **Dark Avatar Glow**: `var(--avatar-dark-glow)`

Budget: maximum two glowing elements per viewport. Rely on solid, crisp shadows (`var(--cp-shadow-crisp)`, `var(--card-shadow)`) rather than blur. If everything glows, nothing feels cyberpunk.

## Glitch Effects

Glitch is implemented in two ways in the project:
1. **Periodic Text Glitch (`.section-heading`)**: Uses an animation `section-glitch` that shifts text-shadow and transforms briefly.
2. **Hover/Continuous Glitch (`.hero-heading-gradient[data-text]`)**: Uses `::before` and `::after` pseudo-elements with `clip-path` and translations to split the text.

**Rule**: Glitch respects `prefers-reduced-motion` in the CSS. Only use glitch for major hero headings or brand marks.
Forbidden: paragraphs, inputs, cards full of text, every hover state.

## Anti-Slop Rules

- **Palette Control**: Do not mix yellow, magenta, orange, purple, and green. The palette is strictly Red (`#FF003C`) and Cyan (`#22F6E3`).
- **Geometry**: Do not use generic rounded SaaS cards (`border-radius: 12px` etc.). Use clipped corners (using `var(--cp-notch)`) and HUD rails. `var(--btn-radius)` is just 2px.
- **Effects Overload**: Do not stack glass blur, heavy glow, scanlines, grain, glitch, and gradients together.
- **Theme Fidelity**: Do not make light mode a washed-out dark mode; use the crisp white/off-white surfaces (`var(--surface)`) and dark slate outlines (`var(--outline)`). Light mode includes an animated noise grain background; do not override it.
