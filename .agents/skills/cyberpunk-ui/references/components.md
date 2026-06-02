# Component Patterns

Replace `.cp-*` selectors with existing project selectors when styling an app.

## Base Surface

```css
.cp-surface {
  color: var(--cp-text);
  background: var(--cp-gradient-panel);
  border: var(--cp-border-width) solid var(--cp-border);
  clip-path: polygon(0 0, calc(100% - var(--cp-notch)) 0, 100% var(--cp-notch), 100% 100%, var(--cp-notch) 100%, 0 calc(100% - var(--cp-notch)));
}
```

## Card

Cards are crisp panels with one accent rail, not glowing billboards.

```css
.cp-card {
  position: relative;
  padding: clamp(1rem, 2vw, 1.5rem);
  background: var(--cp-gradient-panel);
  border: var(--cp-border-width) solid var(--cp-border);
  clip-path: polygon(0 0, calc(100% - var(--cp-notch)) 0, 100% var(--cp-notch), 100% 100%, 0 100%);
  box-shadow: var(--cp-shadow-crisp);
}

.cp-card::before {
  content: "";
  position: absolute;
  inset: 0 auto auto 0;
  width: 38%;
  height: 3px;
  background: var(--cp-gradient-action);
}

.cp-card:hover {
  transform: translate(-1px, -1px);
  border-color: var(--cp-secondary);
}

.cp-card[aria-selected="true"],
.cp-card.is-selected {
  border-width: var(--cp-border-width-active);
  border-color: var(--cp-primary);
  box-shadow: var(--cp-shadow-crisp), var(--cp-glow-primary);
}
```

## Tile

Tiles are compact dashboard cells: metric first, decoration second.

```css
.cp-tile {
  display: grid;
  gap: 0.35rem;
  min-height: 5.5rem;
  padding: 0.875rem;
  background: var(--cp-surface-2);
  border: var(--cp-border-width) solid var(--cp-border);
  border-left: 3px solid var(--cp-primary);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%);
}

.cp-tile:hover {
  border-color: var(--cp-secondary);
  transform: translateY(-2px);
}

.cp-tile[aria-selected="true"],
.cp-tile.is-selected {
  color: var(--cp-on-accent);
  background: var(--cp-gradient-selected);
  border-color: var(--cp-border-strong);
}
```

## Chip

Chips are clipped status tags, not soft pills.

```css
.cp-chip {
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 0.75rem;
  font-family: var(--cp-font-display);
  font-size: var(--cp-text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cp-secondary);
  background: transparent;
  border: 1px solid currentColor;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}

.cp-chip:hover,
.cp-chip.is-selected,
.cp-chip[aria-selected="true"] {
  color: var(--cp-on-accent);
  background: var(--cp-primary);
  border-color: var(--cp-primary);
}
```

## Button

```css
.cp-button {
  min-height: 44px;
  padding: 0 1rem;
  font-family: var(--cp-font-display);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--cp-on-accent);
  background: var(--cp-primary);
  border: var(--cp-border-width-active) solid var(--cp-border-strong);
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 8px 50%);
}

.cp-button:hover {
  transform: translate(-1px, -1px);
  box-shadow: var(--cp-glow-primary);
}

.cp-button:active {
  transform: translate(1px, 1px);
  box-shadow: none;
}
```

## Inputs and Focus

```css
.cp-input {
  min-height: 44px;
  padding: 0 0.875rem;
  color: var(--cp-text);
  background: var(--cp-surface);
  border: var(--cp-border-width) solid var(--cp-border);
  border-radius: var(--cp-radius);
  font: 500 var(--cp-text-base) / 1.4 var(--cp-font-ui);
}

.cp-input:focus-visible,
.cp-button:focus-visible,
.cp-chip:focus-visible,
.cp-card:focus-visible,
.cp-tile:focus-visible {
  outline: 2px solid var(--cp-bg);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px var(--cp-secondary);
}

.cp-button:disabled,
.cp-input:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
  filter: grayscale(0.5);
}
```
