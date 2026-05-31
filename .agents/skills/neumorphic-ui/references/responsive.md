# Responsive Rules

Neumorphism should remain clear on small screens; reduce blur and offset for compact layouts.

## Breakpoints

```css
:root {
  --nm-bp-sm: 640px;
  --nm-bp-md: 768px;
  --nm-bp-lg: 1024px;
  --nm-bp-xl: 1280px;
}
```

## Mobile-First Depth Scaling

```css
/* Mobile default: tighter shadows for sharper readability */
:root {
  --nm-offset: 6px;
  --nm-blur: 12px;
}

@media (min-width: 768px) {
  :root {
    --nm-offset: 8px;
    --nm-blur: 16px;
  }
}

@media (min-width: 1024px) {
  :root {
    --nm-offset: 10px;
    --nm-blur: 20px;
  }
}
```

## Interaction Rules

- Keep tap targets at least `44px` high.
- Do not depend on hover for critical feedback.
- Keep focus ring visible at all widths.
- Avoid dense shadow layers on low-power devices.

