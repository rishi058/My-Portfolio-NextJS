# Typography

Neumorphism benefits from soft, friendly sans-serif typography with good legibility at small sizes.

## Recommended Font Stack

Use this default pair:
- Display/headings: `Manrope`
- UI/body: `Nunito Sans`
- Dense tables/code/meta: `Inter` or system sans fallback

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## CSS Tokens

```css
:root {
  --nm-font-display: "Manrope", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --nm-font-body: "Nunito Sans", "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --nm-font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;

  --nm-text-xs: 0.75rem;   /* 12px */
  --nm-text-sm: 0.875rem;  /* 14px */
  --nm-text-base: 1rem;    /* 16px */
  --nm-text-lg: 1.125rem;  /* 18px */
  --nm-text-xl: 1.25rem;   /* 20px */
  --nm-text-2xl: 1.5rem;   /* 24px */
  --nm-text-3xl: 1.875rem; /* 30px */

  --nm-w-regular: 400;
  --nm-w-medium: 500;
  --nm-w-semibold: 600;
  --nm-w-bold: 700;
  --nm-w-extrabold: 800;

  --nm-leading-tight: 1.2;
  --nm-leading-normal: 1.5;
  --nm-leading-relaxed: 1.65;
}
```

---

## Usage Rules

| Element | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero / major heading | `--nm-font-display` | `--nm-text-3xl` | 700-800 | Keep short |
| Section heading | `--nm-font-display` | `--nm-text-2xl` | 700 | Use for card groups |
| Card title | `--nm-font-body` | `--nm-text-lg` | 600 | Prefer medium contrast |
| Body text | `--nm-font-body` | `--nm-text-base` | 400-500 | Max readability |
| Button label | `--nm-font-body` | `--nm-text-sm` | 600-700 | Avoid ultra-thin weights |
| Caption/meta | `--nm-font-body` | `--nm-text-xs` | 500 | Increase contrast if muted |
| Numeric metrics | `--nm-font-body` or `--nm-font-mono` | `--nm-text-lg` | 600 | Consistent alignment |

---

## Readability Rules

- Prefer weights `500-700` for controls on soft backgrounds.
- Avoid ultra-light text (`300`) in both light and dark mode.
- Keep letter spacing near default; excessive tracking looks disconnected on soft UI.
- Do not use text shadows as a readability hack.
- In dark mode, use softened near-white text instead of pure white.

---

## Responsive Guidance

```css
@media (min-width: 1024px) {
  :root {
    --nm-text-base: 1rem;
    --nm-text-lg: 1.1875rem;  /* 19px */
    --nm-text-xl: 1.3125rem;  /* 21px */
    --nm-text-2xl: 1.625rem;  /* 26px */
    --nm-text-3xl: 2rem;      /* 32px */
  }
}
```

---

## Anti-Patterns

- Decorative display fonts for form controls
- All-caps body text
- Heavy blur effects behind text without contrast correction
- Using only color (no weight/size change) to indicate priority

