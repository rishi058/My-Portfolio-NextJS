# Neo-Brutalism Components

Build components by composing the CSS variables from `src/app/styles/neo-brutalism.css`.

## Base Panel

```css
.neo-panel {
  border: 2px solid var(--outline);
  border-radius: var(--card-radius); /* e.g. 8px */
  background-color: var(--surface);
  box-shadow: var(--card-shadow);    /* 4px 4px 0px var(--outline) */
  transition: transform 80ms ease, box-shadow 80ms ease;
}

.neo-panel:hover {
  box-shadow: var(--card-hover-glow); /* 6px 6px 0px var(--outline) */
  transform: translate(-2px, -2px);
}
```

## Button (`.hero-cta-primary`)

```css
.neo-btn {
  background-color: var(--primary-400);
  border: 2px solid var(--outline);
  border-radius: var(--btn-radius);
  box-shadow: 3px 3px 0 var(--outline);
  transition: transform 80ms ease, box-shadow 80ms ease, background-color 80ms ease;
}

.neo-btn:hover {
  background-color: var(--primary-500);
  box-shadow: 5px 5px 0 var(--outline);
  transform: translate(-1px, -1px);
}

.neo-btn:active {
  box-shadow: 1px 1px 0 var(--outline);
  transform: translate(1px, 1px);
}
```

Always ensure `transform` values shift opposite to the `box-shadow` growth.
