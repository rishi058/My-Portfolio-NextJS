# Neon Glow Components

Build components using the classes and variables from `src/app/styles/neon.css`.

## Cards (`.project-card`)

Cards in the Neon theme feature soft shadows that glow teal on hover.

```css
.card {
  background-color: var(--surface);
  border: 1px solid var(--outline);
  border-radius: 0.375rem;
  box-shadow: var(--card-shadow);
  transition: all 300ms ease;
}

.card:hover {
  border-color: var(--card-hover-border-color);
  box-shadow: var(--card-hover-glow);
  transform: scale(var(--card-hover-scale));
}
```

## Primary CTA (`.hero-cta-primary`)

Solid teal button with a permanent outer glow.

```css
.neon-btn {
  background-color: var(--primary-500);
  color: #ffffff;
  border-radius: 0.25rem;
  font-family: var(--font-mono);
  box-shadow: var(--hero-cta-glow);
  transition: all 300ms ease;
}

.neon-btn:hover {
  background-color: var(--primary-600);
  box-shadow: 0 0 25px rgba(20, 184, 166, 0.6);
}
```

## Secondary CTA (`.hero-cta-secondary`)

Hollow button with border that lights up on hover.

```css
.neon-btn-ghost {
  background-color: var(--surface);
  border: 1px solid var(--outline);
  color: var(--on-surface);
  border-radius: 0.25rem;
  font-family: var(--font-mono);
  transition: all 200ms ease;
}

.neon-btn-ghost:hover {
  background-color: var(--hover-surface-tint);
  border-color: var(--primary-400);
  box-shadow: 0 0 12px rgba(45, 212, 191, 0.45), inset 0 0 6px rgba(45, 212, 191, 0.08);
  color: var(--primary-400);
}
```
