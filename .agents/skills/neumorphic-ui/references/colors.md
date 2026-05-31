# Color Palette

Use only these tokens. Neumorphism depends on controlled surface deltas and disciplined shadow pairs.

## Core Rules

- Base surfaces should be off-white or off-black.
- Keep component and background in the same color family.
- Accent colors should be limited and purposeful.
- Elevated elements MUST include:
  - Top-left white refraction glow
  - Bottom-right slate-gray cast shadow

---

## Default Token Set (Light Mode)

```css
:root {
  /* Surface */
  --nm-bg: #e8ecf2;
  --nm-surface: #e8ecf2;
  --nm-surface-2: #dde3eb;

  /* Text */
  --nm-text: #1e293b;
  --nm-text-muted: #475569;
  --nm-text-inverse: #f8fafc;

  /* Accent */
  --nm-accent: #0ea5e9;
  --nm-accent-strong: #0284c7;
  --nm-danger: #dc2626;
  --nm-success: #16a34a;

  /* Non-negotiable neumorphic depth pair */
  --nm-highlight: rgba(255, 255, 255, 0.78);  /* top-left glow */
  --nm-shadow-slate: rgba(100, 116, 139, 0.42); /* bottom-right cast */

  /* Raised shadows */
  --nm-shadow-raised-sm:
    4px 4px 8px var(--nm-shadow-slate),
    -4px -4px 8px var(--nm-highlight);

  --nm-shadow-raised-md:
    8px 8px 16px var(--nm-shadow-slate),
    -8px -8px 16px var(--nm-highlight);

  --nm-shadow-raised-lg:
    12px 12px 24px var(--nm-shadow-slate),
    -12px -12px 24px var(--nm-highlight);

  /* Inset shadows */
  --nm-shadow-inset-sm:
    inset 4px 4px 8px var(--nm-shadow-slate),
    inset -4px -4px 8px var(--nm-highlight);

  --nm-shadow-inset-md:
    inset 8px 8px 16px var(--nm-shadow-slate),
    inset -8px -8px 16px var(--nm-highlight);
}
```

---

## Dark Mode Token Set

```css
@media (prefers-color-scheme: dark) {
  :root {
    --nm-bg: #252a34;
    --nm-surface: #252a34;
    --nm-surface-2: #2e3440;

    --nm-text: #e2e8f0;
    --nm-text-muted: #a7b3c7;
    --nm-text-inverse: #0f172a;

    --nm-accent: #38bdf8;
    --nm-accent-strong: #0ea5e9;
    --nm-danger: #f87171;
    --nm-success: #4ade80;

    /* Keep same direction model in dark mode */
    --nm-highlight: rgba(255, 255, 255, 0.12);  /* top-left glow */
    --nm-shadow-slate: rgba(15, 23, 42, 0.84);  /* bottom-right cast */
  }
}
```

---

## Alternate Palettes

## Palette A: Warm Stone (Light)

```css
:root[data-nm-palette="warm-stone"] {
  --nm-bg: #ece7e1;
  --nm-surface: #ece7e1;
  --nm-surface-2: #e2dacf;
  --nm-text: #2f343b;
  --nm-text-muted: #5f6772;
  --nm-accent: #0d9488;
  --nm-highlight: rgba(255, 255, 255, 0.74);
  --nm-shadow-slate: rgba(107, 114, 128, 0.38);
}
```

## Palette B: Mist Blue (Light)

```css
:root[data-nm-palette="mist-blue"] {
  --nm-bg: #e3eaf3;
  --nm-surface: #e3eaf3;
  --nm-surface-2: #d6dfeb;
  --nm-text: #1f2a37;
  --nm-text-muted: #4b5a70;
  --nm-accent: #2563eb;
  --nm-highlight: rgba(255, 255, 255, 0.78);
  --nm-shadow-slate: rgba(100, 116, 139, 0.4);
}
```

## Palette C: Night Slate (Dark)

```css
:root[data-nm-palette="night-slate"] {
  --nm-bg: #222833;
  --nm-surface: #222833;
  --nm-surface-2: #2b3341;
  --nm-text: #dce6f3;
  --nm-text-muted: #a9b4c6;
  --nm-accent: #22d3ee;
  --nm-highlight: rgba(255, 255, 255, 0.11);
  --nm-shadow-slate: rgba(15, 23, 42, 0.86);
}
```

## Palette D: Graphite Olive (Dark)

```css
:root[data-nm-palette="graphite-olive"] {
  --nm-bg: #2a2f2a;
  --nm-surface: #2a2f2a;
  --nm-surface-2: #333a33;
  --nm-text: #e4eee4;
  --nm-text-muted: #b2c1b2;
  --nm-accent: #84cc16;
  --nm-highlight: rgba(255, 255, 255, 0.1);
  --nm-shadow-slate: rgba(30, 41, 59, 0.82);
}
```

---

## Contrast and State Rules

- Body text: target >= 4.5:1 against surface.
- Large text/UI labels: target >= 3:1.
- UI component boundaries/states: target >= 3:1 against adjacent color.
- Focus ring must be clearly visible in both modes.

---

## Quick Pairing Guide

| Use case | Palette suggestion | Accent style |
|---|---|---|
| Productivity/dashboard | Mist Blue / Night Slate | Cool cyan/blue accents |
| Wellness/lifestyle | Warm Stone / Graphite Olive | Teal/green accents |
| Media controls | Night Slate | Brighter accent only on active controls |
| Financial widgets | Mist Blue | Conservative accent usage |

---

## Anti-Patterns

- `--nm-bg: #ffffff` or `--nm-bg: #000000`
- Saturated base surfaces
- Accent color on every control
- Hard black shadows without highlight pair
- High-opacity white glow that looks metallic/chrome

