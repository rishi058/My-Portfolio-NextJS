# Frosted Glass Tokens

Use CSS custom properties as the source of truth. Keep the border neutral and thin; use fill, inset highlights, and shadow to create the glass edge.

## Core Edge System

```css
:root {
  --fg-page-bg: #02110a;

  --fg-blur-sm: 14px;
  --fg-blur-md: 22px;
  --fg-blur-lg: 28px;
  --fg-saturate: 1.8;

  --fg-fill: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.06) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  --fg-border: rgba(255, 255, 255, 0.18);
  --fg-edge-top: inset 0 1px 0 rgba(255, 255, 255, 0.25);
  --fg-edge-bottom: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  --fg-elevation: 0 10px 30px rgba(0, 0, 0, 0.35);

  --fg-radius-strip: 18px;
  --fg-radius-row: 20px;
  --fg-radius-card: 22px;
  --fg-radius-icon: 24px;
  --fg-radius-pill: 999px;
}
```

Apply the edge as a single material recipe:

```css
selector {
  background: var(--fg-fill);
  border: 1px solid var(--fg-border);
  border-radius: var(--fg-radius-card);
  box-shadow: var(--fg-edge-top), var(--fg-edge-bottom), var(--fg-elevation);
  backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
  -webkit-backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
}
```

## Radius Vocabulary

| Shape | Radius | Use |
|---|---:|---|
| Strip/banner | 18px | promos, full-width bands |
| Horizontal card | 20px | rows, quick picks |
| Content card | 22px | album/cards/tall cards |
| App/icon tile | 24px | compact square tiles |
| Pill/circle | 999px | chips, play bars, icon buttons |

Rule: rounder means smaller or more interactive. Large content surfaces stay moderately rounded; controls become pills.

## Fallbacks

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  selector { background: rgba(255, 255, 255, 0.92); }
}

@media (prefers-reduced-transparency: reduce) {
  selector {
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}

@media (forced-colors: active) {
  selector {
    background: Canvas;
    border-color: CanvasText;
    box-shadow: none;
    color: CanvasText;
  }
}
```

Keep `border-width` at `1px`. If the edge is weak, adjust background richness, fill opacity, inset highlight, or elevation instead.
