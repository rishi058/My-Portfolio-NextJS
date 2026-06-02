# Cyberpunk Tokens

Use CSS custom properties. Do not invent colors, shadow colors, or gradients.

## Palette Selection

Ask the user for one `primary` and one `secondary`. If they want a suggestion, recommend **Kitsch Yellow + Cyan**.

| Palette | Primary | Secondary | Best For |
|---|---:|---:|---|
| Kitsch Yellow + Cyan | `#FCEE09` | `#22F6E3` | Best default; dark HUD + selected states |
| Cyan + Magenta | `#00F0FF` | `#FF2A6D` | Night neon, hero/marketing surfaces |
| Amber + Slate | `#FF9F1C` | `#263241` | Light industrial HUD like `cyberpunk.jpg` |
| Red + Cyan | `#FF003C` | `#22F6E3` | Critical systems, danger-heavy dashboards |

Rule: one palette per component set. `--cp-danger` may appear only for destructive/error states.

## CSS Tokens

```css
:root {
  --cp-bg: #070A0F;
  --cp-surface: #0C111A;
  --cp-surface-2: #111827;
  --cp-border: #263241;
  --cp-border-strong: #B8C7D9;
  --cp-text: #EAFBFF;
  --cp-muted: #8EA4B8;
  --cp-on-accent: #070A0F;

  --cp-primary: #FCEE09;
  --cp-secondary: #22F6E3;
  --cp-danger: #FF003C;

  --cp-border-width: 1px;
  --cp-border-width-active: 2px;
  --cp-radius: 2px;
  --cp-notch: 14px;
  --cp-gap: 1rem;

  --cp-gradient-action: linear-gradient(90deg, var(--cp-primary) 0%, var(--cp-secondary) 100%);
  --cp-gradient-selected: linear-gradient(90deg, var(--cp-primary) 0%, color-mix(in srgb, var(--cp-primary) 70%, var(--cp-secondary)) 100%);
  --cp-gradient-panel: linear-gradient(135deg, color-mix(in srgb, var(--cp-secondary) 10%, transparent) 0%, transparent 42%), var(--cp-surface);
  --cp-gradient-border: linear-gradient(90deg, var(--cp-primary), transparent 48%, var(--cp-secondary));

  --cp-shadow-crisp: 4px 4px 0 var(--cp-border);
  --cp-glow-primary: 0 0 16px color-mix(in srgb, var(--cp-primary) 45%, transparent);
  --cp-glow-secondary: 0 0 16px color-mix(in srgb, var(--cp-secondary) 42%, transparent);
}

[data-theme="light"] {
  --cp-bg: #F7F8FC;
  --cp-surface: #FFFFFF;
  --cp-surface-2: #EDF1F6;
  --cp-border: #263241;
  --cp-border-strong: #101722;
  --cp-text: #101722;
  --cp-muted: #536071;
  --cp-shadow-crisp: 4px 4px 0 #263241;
  --cp-glow-primary: 0 0 0 transparent;
  --cp-glow-secondary: 0 0 0 transparent;
}
```

## Supported Gradients Only

- `--cp-gradient-action`: CTA buttons, active nav bars, tiny progress rails.
- `--cp-gradient-selected`: selected cards, selected tabs, one active chart mark.
- `--cp-gradient-panel`: large cards/panels only; keep subtle.
- `--cp-gradient-border`: border-image or 1px separator rails only.

Never add rainbow gradients, radial blobs, aurora backgrounds, or random neon overlays.

## Theme Rules

| Theme | Background | Border | Glow |
|---|---|---|---|
| Dark | `--cp-bg`, `--cp-surface` | muted slate, accent on active state | allowed but budgeted |
| Light | white/off-white | dark slate | off by default; focus/selected only |

Contrast rule: text must remain readable without relying on glow.
