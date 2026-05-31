# Component Templates

Copy-ready templates that preserve Neumorphism rules.

## Base Theme Scaffold

```css
:root {
  --nm-bg: #e8ecf2;
  --nm-surface: #e8ecf2;
  --nm-text: #1e293b;
  --nm-text-muted: #475569;
  --nm-accent: #0ea5e9;

  --nm-highlight: rgba(255, 255, 255, 0.78);   /* top-left glow */
  --nm-shadow-slate: rgba(100, 116, 139, 0.42); /* bottom-right depth */

  --nm-shadow-raised-md:
    8px 8px 16px var(--nm-shadow-slate),
    -8px -8px 16px var(--nm-highlight);

  --nm-shadow-inset-md:
    inset 8px 8px 16px var(--nm-shadow-slate),
    inset -8px -8px 16px var(--nm-highlight);

  --nm-radius-sm: 12px;
  --nm-radius-md: 16px;
  --nm-radius-lg: 20px;
}

body {
  background: var(--nm-bg);
  color: var(--nm-text);
  font-family: "Nunito Sans", "Inter", sans-serif;
}
```

---

## Raised Button

```html
<button class="nm-btn">Pay now</button>
```

```css
.nm-btn {
  border: 0;
  min-height: 44px;
  padding: 0.7rem 1.1rem;
  border-radius: var(--nm-radius-md);
  background: var(--nm-surface);
  color: var(--nm-text);
  font-weight: 700;
  box-shadow: var(--nm-shadow-raised-md);
  cursor: pointer;
  transition: box-shadow 160ms ease, transform 160ms ease;
}

.nm-btn:hover {
  transform: translateY(-1px);
  box-shadow:
    10px 10px 20px var(--nm-shadow-slate),
    -10px -10px 20px var(--nm-highlight);
}

.nm-btn:active {
  transform: translateY(0);
  box-shadow: var(--nm-shadow-inset-md);
}

.nm-btn:focus-visible {
  outline: 2px solid var(--nm-accent);
  outline-offset: 3px;
}

.nm-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## Inset Input

```html
<label class="nm-field">
  <span>Email</span>
  <input class="nm-input" type="email" placeholder="you@example.com">
</label>
```

```css
.nm-field {
  display: grid;
  gap: 0.45rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--nm-text-muted);
}

.nm-input {
  border: 0;
  min-height: 44px;
  border-radius: var(--nm-radius-sm);
  background: var(--nm-surface);
  color: var(--nm-text);
  padding: 0.7rem 0.85rem;
  box-shadow: var(--nm-shadow-inset-md);
}

.nm-input::placeholder {
  color: color-mix(in srgb, var(--nm-text-muted) 75%, transparent);
}

.nm-input:focus-visible {
  outline: 2px solid var(--nm-accent);
  outline-offset: 2px;
}
```

---

## Card (Raised Surface)

```html
<article class="nm-card">
  <h3>Monthly Report</h3>
  <p>Depth and contrast are tuned for readability.</p>
</article>
```

```css
.nm-card {
  border-radius: var(--nm-radius-lg);
  background: var(--nm-surface);
  padding: 1.25rem;
  box-shadow:
    12px 12px 24px var(--nm-shadow-slate),
    -12px -12px 24px var(--nm-highlight);
}

.nm-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1.125rem;
  line-height: 1.25;
}

.nm-card p {
  margin: 0;
  color: var(--nm-text-muted);
  line-height: 1.55;
}
```

---

## Toggle (Inset Track + Raised Knob)

```html
<button class="nm-toggle" type="button" aria-pressed="false">
  <span class="nm-toggle__thumb"></span>
</button>
```

```css
.nm-toggle {
  width: 70px;
  height: 40px;
  border: 0;
  border-radius: 9999px;
  background: var(--nm-surface);
  box-shadow:
    inset 5px 5px 10px var(--nm-shadow-slate),
    inset -5px -5px 10px var(--nm-highlight);
  position: relative;
  cursor: pointer;
}

.nm-toggle__thumb {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--nm-surface);
  box-shadow:
    4px 4px 8px var(--nm-shadow-slate),
    -4px -4px 8px var(--nm-highlight);
  transition: transform 160ms ease;
}

.nm-toggle[aria-pressed="true"] .nm-toggle__thumb {
  transform: translateX(30px);
}

.nm-toggle:focus-visible {
  outline: 2px solid var(--nm-accent);
  outline-offset: 3px;
}
```

---

## Dark Mode Hook

```css
@media (prefers-color-scheme: dark) {
  :root {
    --nm-bg: #252a34;
    --nm-surface: #252a34;
    --nm-text: #e2e8f0;
    --nm-text-muted: #a7b3c7;
    --nm-accent: #38bdf8;
    --nm-highlight: rgba(255, 255, 255, 0.12);  /* still top-left */
    --nm-shadow-slate: rgba(15, 23, 42, 0.84);  /* still bottom-right */
  }
}
```

---

## Accessibility Helpers

```css
.nm-focus-ring:focus-visible {
  outline: 2px solid var(--nm-accent);
  outline-offset: 3px;
}

.nm-hit-area {
  min-width: 44px;
  min-height: 44px;
}
```

