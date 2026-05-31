# Responsive Design Rules

Mobile-first. Always min-width media queries.

## Breakpoints

```css
:root {
  --bp-sm:  640px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1536px;
}
```

| Name | Width | Target |
|---|---|---|
| `sm` | 640px | Small phones landscape |
| `md` | 768px | Tablets / large phones |
| `lg` | 1024px | Laptops / small desktops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Wide/large screens |

## Query Pattern

```css
/* Mobile base (no query) */
.element { /* mobile styles */ }

/* Tablet and up */
@media (min-width: 768px) { .element { /* tablet styles */ } }

/* Desktop and up */
@media (min-width: 1024px) { .element { /* desktop styles */ } }
```

## Layout Rules

| Rule | Mobile | Tablet (md) | Desktop (lg) |
|---|---|---|---|
| Content max-width | 100% | 100% | `1200px` centered |
| Page padding | `1rem` | `1.5rem` | `2rem` |
| Card grid | 1 column | 2 columns | 3 columns |
| Nav links | Hidden (hamburger) | Visible | Visible |
| Hero text | `--text-3xl` | `--text-4xl` | `--text-5xl` |
| Section headings | `--text-2xl` | `--text-3xl` | `--text-3xl` |

## Touch Targets

- All interactive elements: minimum `44px × 44px`
- Buttons: min-height `44px`, padding at least `10px 20px`
- Input fields: min-height `44px`
- Nav links: padding `12px 8px` for tap area

## Anti-Patterns

- Never use `max-width` media queries for layout
- Never hide text content on mobile (use expand/collapse instead)
- Never rely on hover states alone on touch screens
- Never use fixed `px` widths on containers (use `%`, `fr`, or `clamp`)
