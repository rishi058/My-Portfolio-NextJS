# Frosted Glass Typography

Text must beat the material. Variable blurred backgrounds make thin type and low contrast fail quickly.

## Tokens

```css
:root {
  --fg-font: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --fg-type-xs: 11px;
  --fg-type-sm: 13px;
  --fg-type-base: 15px;
  --fg-type-md: 17px;
  --fg-type-lg: 20px;
  --fg-type-xl: 24px;
  --fg-type-2xl: 30px;
  --fg-lh-tight: 1.25;
  --fg-lh-normal: 1.45;
  --fg-lh-relaxed: 1.6;
  --fg-ls-wide: 0.04em;
}
```

## Rules

- Use Inter or system sans for most glass UI.
- Use body weight `500` directly on glass; never use weights below `400`.
- Use labels/buttons at `600-700`; uppercase labels may use `letter-spacing: var(--fg-ls-wide)`.
- Keep body copy at least `15px` with `1.6` line-height.
- Keep text at least `16px` from the glass edge.
- Test contrast against the lightest and darkest parts behind the glass.

## Dense Text

For paragraphs, tables, or forms inside glass, add an inner scrim instead of raw transparent text areas:

```css
selector {
  background: rgba(255, 255, 255, 0.56);
  border-radius: 12px;
}

@media (prefers-color-scheme: dark) {
  selector { background: rgba(15, 15, 25, 0.58); }
}
```

Do not use text-shadow as the main contrast fix. Increase tint opacity or add the scrim.
