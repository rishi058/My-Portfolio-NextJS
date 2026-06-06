# Cyberpunk Tokens

Use the CSS custom properties defined in `src/app/styles/cyberpunk.css`. Do not invent colors, shadow colors, or gradients. The project explicitly uses a **Red & Cyan** critical systems HUD palette.

## Palette

The palette is fixed. Do not ask the user for colors.

| Token | Light Value | Dark Value | Purpose |
|---|---|---|---|
| `--cp-primary` | `#FF003C` | `#FF003C` | Primary accent, critical actions, active states. |
| `--cp-secondary` | `#22F6E3` | `#22F6E3` | Secondary accent, hover states, chart accents. |
| `--primary-text` | `#CC0030` | `#FF4D70` | Use for highlighted text segments. |
| `--background` | `#F7F8FC` | `#070A0F` | Main app background. |
| `--surface` | `#FFFFFF` | `#0C111A` | Cards, panels, elevated elements. |
| `--on-background` | `#101722` | `#EAFBFF` | Default text color. |
| `--on-surface` | `#101722` | `#EAFBFF` | Text on surfaces. |
| `--outline` | `#263241` | `#263241` | Primary border color. |

## Supported Gradients

- `--cp-gradient-action`: `linear-gradient(90deg, #FF003C 0%, #22F6E3 100%)`. Use for CTA backgrounds and active elements.
- `--cp-gradient-selected`: `linear-gradient(90deg, #FF003C 0%, color-mix(in srgb, #FF003C 70%, #22F6E3) 100%)`.
- `--cp-gradient-panel`: Use for large cards/panels to give subtle directional shading.
- `--cp-gradient-border`: `linear-gradient(90deg, #FF003C, transparent 48%, #22F6E3)`. Use for accent rails under navbars.

Never add rainbow gradients, radial blobs, aurora backgrounds, or random neon overlays.

## Shadows & Glows

| Variable | Description |
|---|---|
| `--cp-shadow-crisp` | Solid, crisp shadow for light and dark modes (e.g. 4px 4px 0 #263241). |
| `--card-shadow` | Standard geometry shadow for cards. |
| `--cp-glow-primary` | Primary glow. Automatically `none` in light mode. |
| `--cp-glow-secondary` | Secondary glow. Automatically `none` in light mode. |

## Geometry Tokens

- `--cp-notch`: 12px (standard notch)
- `--cp-notch-sm`: 8px (small notch)
- `--cp-avatar-notch`: 32px (large notch)
- `--btn-radius`, `--card-radius`: 2px (sharp corners, no soft rounding)
