# Frosted Glass Tokens

Use the CSS custom properties defined in `src/app/styles/frosted-glass.css`. Do not invent values.

## Palette

The color palette is Cyan and Cobalt.
- `--primary-300`: `#67e8f9`
- `--primary-400`: `#22d3ee`
- `--primary-500`: `#06b6d4`
- `--primary-600`: `#0891b2`
- `--background`: transparent (relies on body background image)
- `--on-background`: `#1e293b` (light) / `#f1f5f9` (dark)

## Glass Material Tokens

Use these to build the frosted glass material.

**Fill:**
- `--fg-fill`, `--fg-fill-card`, `--fg-fill-modal` (Use `var(--fg-fill-card)` for most surfaces).

**Blur & Saturation:**
- `--fg-blur-sm`, `--fg-blur-md`, `--fg-blur-lg`
- `--fg-saturate`

**Edges & Highlights:**
- `--fg-border`: Light neutral border (`rgba(255, 255, 255, 0.35)`)
- `--fg-edge-top`: Inset highlight (`inset 1px 1px 0 rgba(255, 255, 255, 0.80)`)
- `--fg-edge-bottom`: Inset shadow (`inset -1px -1px 0 rgba(0, 82, 130, 0.12)`)

**Elevations:**
- `--fg-elevation-sm`, `--fg-elevation-md`, `--fg-elevation-lg`

## Geometry Tokens
- `--fg-radius-strip`: `18px`
- `--fg-radius-row`: `20px`
- `--fg-radius-card`: `22px`
- `--fg-radius-icon`: `24px`
- `--fg-radius-pill`: `999px`
