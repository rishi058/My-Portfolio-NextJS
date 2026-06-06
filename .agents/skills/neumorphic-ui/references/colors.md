# Neumorphic Colors & Lighting

Use tokens from `src/app/styles/neumorphic.css`. Do not invent colors.

## Surfaces
- **Light Mode (`html.neumorphic`)**: Soft Gray-Blue (`var(--background)` / `var(--surface)`: `#e0e5ec`)
- **Dark Mode (`html.neumorphic.dark`)**: Off-Black Slate (`var(--background)` / `var(--surface)`: `#1e222b`)

## Primary Accent
- **Light Mode**: Vibrant Orange (`var(--primary-500)`: `#ff8747`)
- **Dark Mode**: Soft Orange (`var(--primary-500)`: `#ff7a00`)
- **Text Accent**: `var(--primary-text)` (`#ff7b34` / `#fb923c`)

## Lighting Rules (The Core of Neumorphism)

Neumorphism relies on dual-shadows to simulate depth. The light source is ALWAYS top-left.

**Raised (Elevated) Shadows:**
- `--nm-raised-sm`
- `--nm-raised-md` (Default for cards)
- `--nm-raised-lg`

**Inset (Pressed) Shadows:**
- `--nm-inset-sm`
- `--nm-inset-md`
- `--nm-inset-lg`

**Do not use borders** to separate components; use the shadow tokens.
