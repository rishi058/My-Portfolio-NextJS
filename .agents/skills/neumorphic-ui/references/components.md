# Neumorphic Components

Build components using the CSS variables from `src/app/styles/neumorphic.css`.

## Raised Panel (Default Card)

```css
.nm-panel {
  border: none;
  border-radius: var(--card-radius); /* e.g. 20px */
  background-color: var(--surface);
  box-shadow: var(--nm-raised-md);
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.nm-panel:hover {
  box-shadow: var(--nm-raised-lg);
  transform: translateY(-3px);
}

.nm-panel:active {
  box-shadow: var(--nm-inset-md);
  transform: translateY(0);
}
```

## Accent Pill (`.hero-cta-primary`)

```css
.nm-btn {
  background-color: var(--surface);
  color: var(--primary-text);
  border: none;
  border-radius: var(--btn-radius); /* e.g. 16px */
  box-shadow: var(--nm-raised-sm);
  transition: transform 160ms ease, box-shadow 160ms ease, color 160ms ease;
  position: relative;
}

.nm-btn:hover {
  transform: translateY(-1.5px);
  /* Expanded hover shadow logic is defined in CSS via --nm-shadow-slate and --nm-highlight */
  box-shadow: 5px 5px 10px var(--nm-shadow-slate), -5px -5px 10px var(--nm-highlight);
  color: var(--primary-600);
}

.nm-btn:active {
  transform: translateY(0);
  box-shadow: var(--nm-inset-sm);
}
```

## Form Inputs (Inset)

Inputs should use inset shadows by default to appear "carved into" the surface.

```css
.nm-input {
  background-color: var(--surface);
  border: none;
  border-radius: var(--btn-radius);
  box-shadow: var(--nm-inset-sm);
}
```
