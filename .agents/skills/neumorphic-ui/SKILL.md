---
name: neumorphic-ui
description: "Build UI components using a Neumorphic (Soft UI) design system in light and dark modes. Use when creating buttons, cards, inputs, toggles, modals, nav bars, or dashboards that need embossed/debossed depth. Enforce monochrome surfaces, top-left white refraction glow, bottom-right slate-gray shadow, rounded radii, accessible contrast, and explicit interactive states. Triggers: neumorphism, soft ui, dual shadows, embossed, inset, rounded controls."
---

# Neumorphic UI Component Skill

## Purpose
Generate UI that follows a strict Neumorphism (Soft UI) system with consistent depth cues, color behavior, and accessibility guardrails.

## Core Philosophy
Neumorphism is not flat UI with random shadows. It is a single-material illusion:
- Surface and component share near-identical base color.
- Light always comes from one direction.
- Depth is communicated by paired highlight + shadow, not borders.
- Accessibility is mandatory, not optional.

---

## Non-Negotiable Lighting Rule

Use one global light source for the whole screen: **top-left**.

For **raised/elevated** elements, always apply:
- **Top-left edge:** white refraction glow (negative X/Y offset)
- **Bottom-right edge:** slate-gray depth shadow (positive X/Y offset)

For **pressed/inset** elements, invert to inset shadows while keeping the same light direction model.

Never mix light directions across components.

---

## Design Tokens

### Color System
Load full palettes and shadow tokens from [./references/colors.md](./references/colors.md).

Use only defined tokens for:
- Light mode surfaces
- Dark mode surfaces
- Highlight/shadow pairs
- Accents and readable text colors

### Typography
Load fonts and type scale from [./references/typography.md](./references/typography.md).

### Responsiveness
Load adaptive shadow and touch-target rules from [./references/responsive.md](./references/responsive.md).

### Component Templates
Load copy-ready patterns from [./references/components.md](./references/components.md).

### Do and Don't Rules
Load strict usage rules from [./references/dos-donts.md](./references/dos-donts.md).

### Research Notes
Load rationale and source links from [./references/research-notes.md](./references/research-notes.md).

---

## Structural Rules

1. Use off-white or off-black base surfaces, not pure white/pure black.
2. Keep surface and component colors close in hue/lightness.
3. Use rounded corners with consistent radius scale.
4. Prefer subtle gradients only when needed to reinforce light direction.
5. Use shadows for hierarchy and interaction states.
6. Add visible focus states and maintain WCAG-friendly contrast.

---

## Radius Rules

Default radius scale:
- `--nm-radius-sm: 12px` for inputs and compact controls
- `--nm-radius-md: 16px` for buttons and chips
- `--nm-radius-lg: 20px` for cards/panels
- `--nm-radius-xl: 24px` for hero panels
- `--nm-radius-pill: 9999px` for pills/toggles

Do not mix too many radius sizes in one component cluster.

---

## Component Procedure

When asked to build a component:

1. Identify component type and state model (default, hover, active, disabled, focus).
2. Pick palette variant (light or dark) from `colors.md`.
3. Apply required dual-shadow pattern:
   - Raised: top-left white glow + bottom-right slate shadow.
   - Inset: inset inverse pair for pressed fields/active states.
4. Apply radius token by component class.
5. Apply typography tokens from `typography.md`.
6. Add accessibility states:
   - Visible `:focus-visible` ring
   - Contrast-compliant text and controls
7. Verify checklist before output.

---

## Output Defaults

Default output:
- HTML + CSS with design tokens in `:root`
- `@media (prefers-color-scheme: dark)` support
- Hover/focus/active/disabled states included

If project is React/Vue/Tailwind, adapt output format but preserve the same token system and shadow logic.

---

## Verification Checklist

- [ ] Global light source is consistent (top-left)
- [ ] Raised elements use white top-left glow + slate bottom-right shadow
- [ ] Inset/pressed states use inset dual shadows
- [ ] No pure `#FFFFFF` or `#000000` base surfaces
- [ ] Radius values use only defined tokens
- [ ] Text contrast targets are met
- [ ] Non-text control boundaries/states remain distinguishable
- [ ] Focus-visible state is obvious and keyboard-friendly

---

## Anti-Patterns

Never do these:
- Random shadow directions per component
- High-saturation rainbow palettes for base surfaces
- One-shadow-only neumorphism
- Hard black drop shadows with no highlight pair
- Ultra-low contrast text on soft surfaces
- Removing focus styles
- Applying neumorphism to every surface in a dense data UI
