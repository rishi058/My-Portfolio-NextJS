# Frosted Glass Colors

Glass borrows color from what sits behind it. Pick a background first, then apply a light tint, edge, and shadow.

## Neutral Glass

```css
:root {
  --fg-tint: rgba(255, 255, 255, 0.16);
  --fg-border: rgba(255, 255, 255, 0.18);
  --fg-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  --fg-text: #0f172a;
  --fg-text-muted: #475569;
}

@media (prefers-color-scheme: dark) {
  :root {
    --fg-tint: rgba(15, 15, 25, 0.45);
    --fg-border: rgba(255, 255, 255, 0.18);
    --fg-shadow: 0 8px 32px rgba(0, 0, 0, 0.38);
    --fg-text: #f8fafc;
    --fg-text-muted: #cbd5e1;
  }
}
```

## Brand Tints

Use brand color at low opacity in the fill or glow. Keep the border neutral so the UI keeps one unified lit-edge language.

```css
/* Blue-violet / SaaS */
--fg-tint: rgba(139, 92, 246, 0.12);
--fg-border: rgba(255, 255, 255, 0.18);
--fg-shadow: 0 8px 32px rgba(109, 40, 217, 0.18);

/* Sky / analytics */
--fg-tint: rgba(14, 165, 233, 0.10);
--fg-border: rgba(255, 255, 255, 0.18);
--fg-shadow: 0 8px 32px rgba(2, 132, 199, 0.15);

/* Rose / consumer */
--fg-tint: rgba(244, 63, 94, 0.09);
--fg-border: rgba(255, 255, 255, 0.18);
--fg-shadow: 0 8px 32px rgba(159, 18, 57, 0.14);

/* Emerald / finance or health */
--fg-tint: rgba(16, 185, 129, 0.09);
--fg-border: rgba(255, 255, 255, 0.18);
--fg-shadow: 0 8px 32px rgba(6, 95, 70, 0.16);
```

## Opacity Rules

| Context | Tint |
|---|---:|
| Small controls | 8-14% |
| Cards/nav/popovers | 14-18% |
| Modals/menus | 20-28% |
| Photo/video background | 20-35% |
| Dark glass | 35-55% |

If text contrast fails, increase tint opacity or add an inner near-opaque scrim. Do not increase blur to fix readability.
