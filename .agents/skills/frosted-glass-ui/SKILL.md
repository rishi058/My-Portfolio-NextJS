---
name: frosted-glass-ui
description: "Design CSS-first frosted glass, glassmorphism, translucent, blurred, or backdrop-filter UI surfaces. Use when creating or refining nav bars, cards, panels, modals, popovers, controls, badges, hero overlays, or full layouts that need a realistic frosted-glass material with CSS tokens, accessible contrast, fallbacks, and restrained motion."
---

# Frosted Glass UI

## Purpose
Create frosted-glass UI as CSS: tokens, selectors, states, fallbacks, and responsive rules. Style the project's existing elements/selectors; only invent markup or class names when the user asks for a standalone example.

## Core Idea
Frosted glass uses one unified edge language: a 1px neutral lit border, directional inset light/shadow, translucent gradient fill, backdrop blur/saturation, and elevation.

```css
:root {
  --fg-blur: 22px;
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
  --fg-radius-card: 22px;
  --fg-radius-row: 20px;
  --fg-radius-strip: 18px;
  --fg-radius-icon: 24px;
  --fg-radius-pill: 999px;
  --fg-text: #0f172a;
  --fg-text-muted: #475569;
}

/* Apply to the existing surface selector. */
selector {
  background: var(--fg-fill);
  border: 1px solid var(--fg-border);
  border-radius: var(--fg-radius-card);
  box-shadow: var(--fg-edge-top), var(--fg-edge-bottom), var(--fg-elevation);
  color: var(--fg-text);
  backdrop-filter: blur(var(--fg-blur)) saturate(var(--fg-saturate));
  -webkit-backdrop-filter: blur(var(--fg-blur)) saturate(var(--fg-saturate));
}
```

## Procedure
1. Design the background first. Glass must sit over a gradient, image, or blurred color field; flat backgrounds make it disappear.
2. Choose one material tier: `sm` for buttons/chips, `md` for cards/nav/popovers, `lg` for modals, `xl` for hero sheets.
3. Use `border: 1px solid rgba(255,255,255,0.18)` as the default edge; never thicken the border to create emphasis.
4. Write CSS tokens in `:root`, then style the existing component selectors with those tokens.
5. Use real CSS states: `:hover`, `:focus-visible`, `:active`, `[disabled]`, `[aria-disabled="true"]`.
6. Add fallbacks for unsupported blur, reduced transparency, forced colors, and reduced motion.
7. Keep glass sparse: use it for chrome, overlays, and featured surfaces; keep dense text/forms near-opaque.

## Defaults
- Blur: `22px` with `saturate(180%)` for rich dark/premium glass; `10px-16px` for compact controls.
- Fill: use a diagonal transparent white gradient, brightest at top-left and faintest at bottom-right.
- Border: always `1px`; the edge reads from opacity, inset light, and shadow, not border thickness.
- Radius: `22px` cards, `20px` rows, `18px` strips, `24px` icon tiles, `999px` pills/circles.
- Typography: Inter/system sans; body on glass uses weight `500`; labels/buttons use `600-700`.
- Motion: animate `transform` and `opacity`, not `backdrop-filter`.

## References
- Read [references/tokens.md](references/tokens.md) for the compact token set, edge system, radius vocabulary, and fallbacks.
- Read [references/colors.md](references/colors.md) when choosing neutral, dark, or brand-tinted glass.
- Read [references/backgrounds.md](references/backgrounds.md) when the page background does not support the glass effect yet.
- Read [references/typography.md](references/typography.md) for readable text on translucent surfaces.
- Read [references/dos-and-donts.md](references/dos-and-donts.md) as the final ship checklist.
