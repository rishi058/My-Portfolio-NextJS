# Component Templates

Annotated ready-to-use component starters. Copy, adapt, and extend — never break the design tokens.

---

## Primary Button

```html
<button class="btn btn-primary">Click Me</button>
```

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;    /* 10px 20px */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  border: var(--border-style);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: transform 80ms ease, box-shadow 80ms ease;
  min-height: 44px;             /* touch target */
}

.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--color-border);
}

.btn-primary:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-border);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}

.btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}
```

---

## Ghost / Secondary Button

```html
<button class="btn btn-ghost">Cancel</button>
```

```css
.btn-ghost {
  background-color: var(--color-surface);
  color: var(--color-text);
  box-shadow: var(--shadow-sm);
}

.btn-ghost:hover {
  background-color: var(--color-surface-alt);
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--color-border);
}

.btn-ghost:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--color-border);
}
```

---

## Card

```html
<article class="card">
  <h3 class="card__title">Card Title</h3>
  <p class="card__body">Supporting content goes here.</p>
</article>
```

```css
.card {
  background-color: var(--color-surface);
  border: var(--border-style);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: 1.5rem;
  transition: transform 80ms ease, box-shadow 80ms ease;
}

/* Interactive card (optional) */
.card[role="button"]:hover,
a.card:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--color-border);
  cursor: pointer;
}

.card__title {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.card__body {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-normal);
  color: var(--color-text-muted);
}
```

---

## Text Input

```html
<div class="field">
  <label class="field__label" for="email">Email</label>
  <input class="field__input" type="email" id="email" placeholder="you@example.com">
</div>
```

```css
.field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.field__label {
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text);
}

.field__input {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-style);
  border-radius: var(--radius-sm);
  padding: 0.625rem 0.875rem;
  min-height: 44px;
  outline: none;
  transition: border-color 80ms ease, box-shadow 80ms ease;
}

.field__input:focus {
  border-color: var(--color-primary);
  box-shadow: 3px 3px 0 var(--color-primary);
}

.field__input::placeholder {
  color: var(--color-text-muted);
  font-style: normal;
}

.field__input:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background-color: var(--color-surface-alt);
}
```

---

## Badge / Tag

```html
<span class="badge badge--default">New</span>
<span class="badge badge--danger">Error</span>
<span class="badge badge--success">Active</span>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.625rem;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  line-height: 1;
  border: var(--border-style);
  border-radius: var(--radius-pill);
}

.badge--default {
  background-color: var(--color-secondary);
  color: var(--color-text-inverse);
}

.badge--danger {
  background-color: var(--color-danger);
  color: var(--color-text-inverse);
}

.badge--success {
  background-color: var(--color-success);
  color: var(--color-text-inverse);
}

.badge--warning {
  background-color: var(--color-warning);
  color: var(--color-text-inverse);
}

.badge--neutral {
  background-color: var(--color-surface-alt);
  color: var(--color-text);
}
```

---

## Alert / Banner

```html
<div class="alert alert--error" role="alert">
  <strong>Error:</strong> Something went wrong.
</div>
```

```css
.alert {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  padding: 0.875rem 1rem;
  border: var(--border-style);
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-normal);
}

.alert--error {
  background-color: #FFE5E5;
  color: var(--color-danger);
  border-color: var(--color-danger);
  box-shadow: 3px 3px 0 var(--color-danger);
}

.alert--success {
  background-color: #DFFFEF;
  color: #007A3D;
  border-color: var(--color-success);
  box-shadow: 3px 3px 0 var(--color-success);
}

.alert--warning {
  background-color: #FFF3DC;
  color: #7A4500;
  border-color: var(--color-warning);
  box-shadow: 3px 3px 0 var(--color-warning);
}

.alert--info {
  background-color: #E0F5FF;
  color: #005A8C;
  border-color: var(--color-secondary);
  box-shadow: 3px 3px 0 var(--color-secondary);
}
```

---

## Navigation Bar

```html
<nav class="navbar">
  <a class="navbar__brand" href="/">Brand</a>
  <ul class="navbar__links">
    <li><a class="navbar__link navbar__link--active" href="/home">Home</a></li>
    <li><a class="navbar__link" href="/about">About</a></li>
    <li><a class="navbar__link" href="/work">Work</a></li>
  </ul>
  <button class="btn btn-primary navbar__cta">Get Started</button>
</nav>
```

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 64px;
  background-color: var(--color-bg);
  border-bottom: var(--border-style);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar__brand {
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-black);
  color: var(--color-text);
  text-decoration: none;
  letter-spacing: var(--tracking-tight);
}

.navbar__links {
  display: none;         /* hidden on mobile */
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

@media (min-width: 768px) {     /* --bp-md */
  .navbar__links {
    display: flex;
  }
}

.navbar__link {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text);
  text-decoration: none;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border-color 80ms ease;
}

.navbar__link:hover,
.navbar__link--active {
  border-bottom-color: var(--color-primary);
}
```

---

## Responsive Utility Classes

```css
/* Stack to row at md */
.flex-col-to-row {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (min-width: 768px) {
  .flex-col-to-row {
    flex-direction: row;
  }
}

/* Grid: 1 col → 2 col → 3 col */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```
