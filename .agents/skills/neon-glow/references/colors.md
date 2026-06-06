# Neon Glow Colors

Colors are strictly defined in `src/app/styles/neon.css`.

## Core Palette
- **Primary (Teal)**: `var(--primary-500)` (`#14b8a6`). Used for highlights, active states, and buttons.
- **Secondary (Sky)**: `var(--secondary-500)` (`#0ea5e9`). Used in gradients.
- **Tertiary**: `var(--tertiary)` (`#0d9488` / `#69fff8`).

## Surfaces & Backgrounds
- **Background**: `var(--background)` (`#f8fafc` / `#121212`)
- **Surface (Cards/Panels)**: `var(--surface)` (`#ffffff` / `#181818`)
- **Outlines**: `var(--outline)`, `var(--outline-variant)`, `var(--outline-subtle)`

## Gradients
The theme heavily relies on a teal-to-sky text gradient:
`background-image: linear-gradient(to right, var(--primary-400), var(--secondary-500));`
