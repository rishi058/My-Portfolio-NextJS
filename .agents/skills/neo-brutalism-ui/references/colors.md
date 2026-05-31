# Color Palette

All colors are defined as CSS custom properties. Use ONLY these values.

## CSS Custom Properties

```css
:root {
  /* --- Brand / Primary --- */
  --color-primary:        #FFDE00;   /* electric yellow — CTAs, highlights */
  --color-primary-hover:  #F5D000;   /* slightly darker yellow for hover */

  /* --- Accent / Secondary --- */
  --color-secondary:      #00BFFF;   /* electric blue — secondary actions */
  --color-secondary-hover:#00AADF;

  /* --- Status --- */
  --color-danger:         #FF3B3B;   /* errors, destructive */
  --color-danger-hover:   #E52E2E;
  --color-success:        #00C566;   /* success, confirmation */
  --color-warning:        #FF8C00;   /* warnings, caution */

  /* --- Neutrals --- */
  --color-bg:             #FFFDF5;   /* page background (warm off-white) */
  --color-surface:        #FFFFFF;   /* cards, panels, modals */
  --color-surface-alt:    #F0EDE0;   /* subtle alternative surface */

  /* --- Text --- */
  --color-text:           #0D0D0D;   /* primary text (near-black) */
  --color-text-muted:     #555555;   /* secondary/supporting text */
  --color-text-inverse:   #FFFFFF;   /* text on dark/colored backgrounds */

  /* --- Border --- */
  --color-border:         #0D0D0D;   /* universal border color */
}
```

## Naming Convention

| Prefix | Purpose |
|---|---|
| `--color-primary` | Main brand action color |
| `--color-secondary` | Supporting / alternate action |
| `--color-danger/success/warning` | Semantic status colors |
| `--color-bg` | Page-level background |
| `--color-surface` | Component-level background |
| `--color-text` | Readable text |
| `--color-border` | All drawn borders |

## Contrast Requirements (WCAG AA)

| Text on Background | Passes |
|---|---|
| `--color-text` on `--color-bg` | ✅ |
| `--color-text` on `--color-surface` | ✅ |
| `--color-text` on `--color-primary` | ✅ |
| `--color-text-inverse` on `--color-secondary` | ✅ |
| `--color-text-inverse` on `--color-danger` | ✅ |

## Usage Map

| Component | Background | Text | Border |
|---|---|---|---|
| Primary button | `--color-primary` | `--color-text` | `--color-border` |
| Secondary button | `--color-surface` | `--color-text` | `--color-border` |
| Danger button | `--color-danger` | `--color-text-inverse` | `--color-border` |
| Card | `--color-surface` | `--color-text` | `--color-border` |
| Badge (default) | `--color-secondary` | `--color-text-inverse` | `--color-border` |
| Alert (error) | `#FFE5E5` | `--color-danger` | `--color-danger` |
| Alert (success) | `#DFFFEF` | `#007A3D` | `--color-success` |
| Nav bar | `--color-bg` | `--color-text` | `--color-border` (bottom) |
| Input (default) | `--color-surface` | `--color-text` | `--color-border` |
| Input (focus) | `--color-surface` | `--color-text` | `--color-primary` |

## Anti-Patterns

- Never use `rgba()` transparency except for disabled states (`opacity: 0.4`)
- Never use gradients
- Never use a hex/rgb value that isn't in this palette
