---
name: neo-brutalism-ui
description: "Build UI components using the Neo-Brutalism design system. Use when creating buttons, cards, inputs, modals, nav bars, badges, or any UI element. Enforces fixed design tokens: color palette, border radius, typography, box shadows, and breakpoints. Triggers: component, UI, button, card, input, form, layout, responsive, design system."
argument-hint: "Describe the component to build (e.g. 'primary button', 'product card', 'nav bar')"
---

# Neo-Brutalism UI Component Skill

## Purpose
Generate UI components that strictly follow the project's Neo-Brutalism design system. Every component must use only the defined tokens — no improvised values.

## Core Philosophy
Neo-Brutalism: raw, bold, unapologetic. Hard edges, thick visible borders, offset box-shadows, high-contrast colors, and confident typography. No soft gradients, no blurs, no subtle shadows.

---

## Design Tokens

### Colors
Load the full palette from [./references/colors.md](./references/colors.md).

**Quick Reference:**
| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#FFDE00` | Primary actions, highlights |
| `--color-secondary` | `#00BFFF` | Secondary actions, accents |
| `--color-danger` | `#FF3B3B` | Errors, destructive actions |
| `--color-success` | `#00C566` | Success states |
| `--color-bg` | `#FFFDF5` | Page/component background |
| `--color-surface` | `#FFFFFF` | Card/panel surface |
| `--color-text` | `#0D0D0D` | Primary text |
| `--color-text-muted` | `#555555` | Secondary/muted text |
| `--color-border` | `#0D0D0D` | All borders |

> **Only use tokens from the palette. Never invent new colors.**

---

### Border & Shadow
```css
/* Borders — always solid, always --color-border */
--border-width: 2px;
--border-style: 2px solid #0D0D0D;

/* Border radius — limited options only */
--radius-none: 0px;
--radius-sm: 4px;
--radius-md: 8px;    /* default for cards/panels */
--radius-pill: 9999px; /* for badges/tags only */

/* Box shadows — hard offset, no blur */
--shadow-sm: 3px 3px 0px #0D0D0D;
--shadow-md: 4px 4px 0px #0D0D0D;
--shadow-lg: 6px 6px 0px #0D0D0D;

/* Interactive shadow shift on hover/active */
--shadow-hover-shift: translate(-1px, -1px); /* element moves up-left */
--shadow-active-shift: translate(2px, 2px);  /* shadow collapses on click */
```

**Rules:**
- Default cards/panels: `--radius-md`, `--shadow-md`
- Buttons: `--radius-sm`, `--shadow-sm`
- Badges/pills: `--radius-pill`, no shadow
- Inputs: `--radius-sm`, no shadow (border focus ring instead)
- `border-radius: 0` for hard-edge structural elements (nav, headers)

---

### Typography
Load full scale from [./references/typography.md](./references/typography.md).

**Quick Reference:**
| Token | Value | Usage |
|---|---|---|
| `--font-sans` | `'Space Grotesk', sans-serif` | Body, UI text |
| `--font-display` | `'Space Grotesk', sans-serif` | Headings |
| `--font-mono` | `'JetBrains Mono', monospace` | Code, tags |
| `--text-xs` | `0.75rem / 12px` | Labels, captions |
| `--text-sm` | `0.875rem / 14px` | Secondary text |
| `--text-base` | `1rem / 16px` | Body |
| `--text-lg` | `1.125rem / 18px` | Sub-headings |
| `--text-xl` | `1.25rem / 20px` | Section headings |
| `--text-2xl` | `1.5rem / 24px` | Page headings |
| `--text-3xl` | `2rem / 32px` | Hero headings |
| `--font-weight-normal` | `400` | Body text |
| `--font-weight-medium` | `500` | Labels, nav |
| `--font-weight-bold` | `700` | Headings, buttons |
| `--font-weight-black` | `900` | Display / hero |

**Rules:**
- Headings: always `--font-weight-bold` or `--font-weight-black`
- Button labels: always `--font-weight-bold`, `text-transform: uppercase`
- Letter spacing for uppercase labels: `0.05em`
- Line height body: `1.6`; headings: `1.1`

---

### Responsiveness
Load breakpoint details from [./references/responsive.md](./references/responsive.md).

**Breakpoints (mobile-first):**
```css
--bp-sm:  640px;   /* small phones landscape */
--bp-md:  768px;   /* tablets */
--bp-lg:  1024px;  /* laptops */
--bp-xl:  1280px;  /* desktops */
--bp-2xl: 1536px;  /* large screens */
```

**Rules:**
- Always mobile-first (`min-width` media queries)
- Stack columns → side-by-side at `--bp-md`
- Font sizes scale up 1 step at `--bp-lg`
- Touch targets minimum `44px × 44px`
- Never hide content on mobile without an accessible disclosure pattern

---

## Component Procedure

When asked to build a component:

1. **Identify component type** — button, card, input, modal, nav, badge, etc.
2. **Select tokens** — pull from the tables above; reference color/typography files if needed
3. **Apply Neo-Brutalism rules:**
   - Solid `2px` border using `--color-border`
   - Hard offset shadow (no blur)
   - Bold typography, uppercase for action labels
   - High-contrast color pairing from palette
   - Interactive states: hover shifts element, active collapses shadow
4. **Apply responsive rules** — mobile-first, use defined breakpoints only
5. **Output format** — by default produce HTML + CSS (custom properties on `:root`). If the project uses React/Vue/Tailwind, state that clearly and adapt accordingly.
6. **Verify checklist** before outputting:
   - [ ] No colors outside the palette
   - [ ] No border-radius values outside defined tokens
   - [ ] Shadow uses hard offset (no blur)
   - [ ] Typography uses defined scale
   - [ ] Interactive states (hover/focus/active) defined
   - [ ] WCAG AA contrast ratio met
   - [ ] Mobile-first responsive rules applied

---

## Interactive States

Every interactive component MUST define:
```css
/* Default */      /* base styles */
/* :hover */       transform: var(--shadow-hover-shift); box-shadow increases
/* :focus-visible */ 2px outline offset, using --color-primary or --color-secondary
/* :active */      transform: var(--shadow-active-shift); box-shadow collapses to 0
/* :disabled */    opacity: 0.4; cursor: not-allowed; no shadow
```

---

## Component Quick-Start Templates

Load from [./references/components.md](./references/components.md) for full annotated examples:
- Primary Button
- Secondary / Ghost Button
- Card
- Text Input
- Badge / Tag
- Alert / Banner
- Navigation Bar

---

## Anti-Patterns — Never Do This

| Wrong | Correct |
|---|---|
| `border-radius: 12px` on buttons | Use `--radius-sm: 4px` |
| `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` | Use `4px 4px 0 #0D0D0D` |
|  Custom hex not in palette | Use only palette tokens |
| `font-weight: 600` | Use only 400 / 500 / 700 / 900 |
| Gradients on backgrounds | Flat solid fills only |
| Responsive with max-width queries | Use min-width (mobile-first) |
| `border: 1px solid #ccc` | Use `2px solid #0D0D0D` |
