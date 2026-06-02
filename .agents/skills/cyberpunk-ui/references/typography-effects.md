# Typography, Effects, Anti-Slop

## Fonts

Load from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

```css
:root {
  --cp-font-display: 'Orbitron', system-ui, sans-serif;
  --cp-font-ui: 'Rajdhani', system-ui, sans-serif;
  --cp-font-mono: 'JetBrains Mono', monospace;

  --cp-text-xs: 0.75rem;
  --cp-text-sm: 0.875rem;
  --cp-text-base: 1rem;
  --cp-text-lg: 1.125rem;
  --cp-text-xl: 1.5rem;
  --cp-text-2xl: 2rem;
  --cp-text-3xl: 3rem;
}
```

Rules:
- Use `Orbitron` for headings, buttons, chips, labels, metrics, and nav.
- Use `Rajdhani` for paragraphs and dense UI text.
- Use `JetBrains Mono` for data IDs, coordinates, timestamps, and console text.
- Uppercase labels with `letter-spacing: 0.08em`; do not uppercase body copy.

## Glow Rules

| Allowed Glow | No Glow |
|---|---|
| primary CTA hover/focus | body text |
| selected tab/card/tile | default cards |
| active progress/data point | all borders at once |
| destructive alert pulse | disabled controls |
| hero wordmark only | light mode backgrounds |

Budget: maximum two glowing elements per viewport. If everything glows, nothing feels cyberpunk.

## Glitch Rules

Use glitch as a short state cue, not wallpaper.

```css
.cp-glitch {
  position: relative;
  font-family: var(--cp-font-display);
  text-transform: uppercase;
  text-shadow: 1px 0 var(--cp-secondary), -1px 0 var(--cp-danger);
}

@media (prefers-reduced-motion: no-preference) {
  .cp-glitch[data-text]::before,
  .cp-glitch[data-text]::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .cp-glitch[data-text]::before {
    color: var(--cp-secondary);
    clip-path: inset(0 0 55% 0);
    transform: translate(1px, -1px);
  }

  .cp-glitch[data-text]::after {
    color: var(--cp-danger);
    clip-path: inset(55% 0 0 0);
    transform: translate(-1px, 1px);
  }
}
```

Allowed: hero headings, logo marks, selected tabs, warning labels, destructive states.
Forbidden: paragraphs, inputs, cards full of text, every hover state.

## Avoid AI Slop

- Do not mix yellow, cyan, magenta, red, orange, purple, and green in one UI.
- Do not add fake tiny technical text unless it labels real data.
- Do not use generic rounded SaaS cards; use clipped corners and HUD rails.
- Do not stack glass blur, heavy glow, scanlines, grain, glitch, and gradients together.
- Do not make every component black with neon borders.
- Do not make light mode a washed-out dark mode; use white surfaces and slate borders.
- Do not rely on color alone; selected states need fill, border, icon, rail, or text change.
