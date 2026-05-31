# Typography

All type is set in Space Grotesk (body/UI) and JetBrains Mono (code). Load via Google Fonts.

## Font Stack

```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

## CSS Custom Properties

```css
:root {
  /* --- Font families --- */
  --font-sans:    'Space Grotesk', system-ui, sans-serif;
  --font-mono:    'JetBrains Mono', 'Courier New', monospace;

  /* --- Type scale (rem, base = 16px) --- */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  2rem;       /* 32px */
  --text-4xl:  2.5rem;     /* 40px */
  --text-5xl:  3rem;       /* 48px */

  /* --- Font weights --- */
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold:   700;
  --font-weight-black:  900;

  /* --- Line heights --- */
  --leading-tight:  1.1;
  --leading-snug:   1.35;
  --leading-normal: 1.6;

  /* --- Letter spacing --- */
  --tracking-tight:  -0.01em;
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;  /* uppercase labels/buttons */
  --tracking-widest:  0.12em;  /* hero eyebrows, overlines */
}
```

## Usage Rules

| Element | Size | Weight | Line Height | Letter Spacing | Transform |
|---|---|---|---|---|---|
| Hero heading (h1) | `--text-5xl` | `--font-weight-black` | `--leading-tight` | `--tracking-tight` | — |
| Page heading (h1) | `--text-3xl` | `--font-weight-black` | `--leading-tight` | `--tracking-tight` | — |
| Section heading (h2) | `--text-2xl` | `--font-weight-bold` | `--leading-tight` | `--tracking-tight` | — |
| Sub-heading (h3) | `--text-xl` | `--font-weight-bold` | `--leading-snug` | `--tracking-normal` | — |
| Small heading (h4) | `--text-lg` | `--font-weight-bold` | `--leading-snug` | `--tracking-normal` | — |
| Body text | `--text-base` | `--font-weight-normal` | `--leading-normal` | `--tracking-normal` | — |
| Secondary body | `--text-sm` | `--font-weight-normal` | `--leading-normal` | `--tracking-normal` | — |
| Caption / label | `--text-xs` | `--font-weight-medium` | `--leading-normal` | `--tracking-wide` | UPPERCASE |
| Button label | `--text-sm` | `--font-weight-bold` | 1 | `--tracking-wide` | UPPERCASE |
| Code / mono | `--text-sm` | `--font-weight-normal` | `--leading-normal` | `--tracking-normal` | — |
| Nav links | `--text-sm` | `--font-weight-medium` | 1 | `--tracking-wide` | UPPERCASE |
| Badge text | `--text-xs` | `--font-weight-bold` | 1 | `--tracking-wide` | UPPERCASE |

## Responsive Scaling

At `min-width: 1024px` (--bp-lg), scale up headings by one step:

| Element | Mobile | Desktop |
|---|---|---|
| h1 page | `--text-3xl` | `--text-4xl` |
| h2 section | `--text-2xl` | `--text-3xl` |
| Hero | `--text-4xl` | `--text-5xl` |
| Body | `--text-base` | stays `--text-base` |

## Anti-Patterns

- Never use font-weight: 300 or 600 — only 400/500/700/900
- Never reduce heading weight below bold
- Never use `text-transform: lowercase` for design effect
- Never set body line-height below 1.5
