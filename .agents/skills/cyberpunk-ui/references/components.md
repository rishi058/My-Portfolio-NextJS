# Component Patterns

Use existing classes when possible. When building new components, map them to the CSS variables defined in `cyberpunk.css`.

## Base Surface / Card

Cards are crisp panels with angular geometry. Use `--card-shadow` and crisp hover effects.

```css
/* Custom Card Example */
.custom-card {
  background-color: var(--surface);
  border: 1px solid var(--outline);
  box-shadow: var(--card-shadow);
  clip-path: polygon(0 0, calc(100% - var(--cp-notch)) 0, 100% var(--cp-notch), 100% 100%, var(--cp-notch) 100%, 0 calc(100% - var(--cp-notch)));
  transition: box-shadow 120ms ease, border-color 120ms ease;
}

.custom-card:hover {
  border-color: var(--card-hover-border-color);
  box-shadow: var(--card-hover-glow);
}
```

## Primary CTA Button (Reference: `.hero-cta-primary`)

Primary CTAs use complex clipping and pseudo-elements for the gradient background to achieve an inset look. Use `--btn-radius`.

```css
.custom-btn {
  color: var(--on-surface);
  font-family: var(--font-display);
  text-transform: uppercase;
  border: none;
  position: relative;
  border-radius: var(--btn-radius);
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 8px 50%);
  background: transparent;
}

.custom-btn::before {
  /* Hover gradient background */
  content: "";
  position: absolute;
  inset: 0;
  background: var(--cp-gradient-action);
  opacity: 0;
  z-index: 0;
}

.custom-btn::after {
  /* Inner border clip */
  content: "";
  position: absolute;
  inset: 0;
  background: var(--cp-gradient-action);
  z-index: 10;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 8px 50%, 0 0, 2px 2px, 10px 50%, 2px calc(100% - 2px), calc(100% - 10px) calc(100% - 2px), calc(100% - 2px) 50%, calc(100% - 10px) 2px, 2px 2px);
}
```

## Secondary Button / Ghost (Reference: `.hero-cta-secondary`)

Similar structure to the primary button but without the solid fill, relying purely on the gradient border and specific hover shadows (`box-shadow: var(--cp-glow-secondary)` in dark mode).

## Tiles & Chips

Use `--cp-notch-sm` (8px) for smaller chips.

```css
.custom-chip {
  border: 1px solid var(--outline);
  color: var(--on-surface);
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}
```

## Focus and Selection

Always ensure interactive elements have a visible focus state that is accessible in both themes.

```css
.custom-input:focus-visible {
  outline: 2px solid var(--cp-primary);
  outline-offset: 2px;
}
```
