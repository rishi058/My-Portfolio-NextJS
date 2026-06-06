# Frosted Glass Components

Build components by composing the CSS variables from `src/app/styles/frosted-glass.css`.

## Standard Glass Panel

Apply these properties to any surface to turn it into frosted glass:

```css
.glass-panel {
  background: var(--fg-fill-card);
  border: 1px solid var(--fg-border);
  border-radius: var(--fg-radius-card);
  box-shadow: var(--fg-edge-top), var(--fg-edge-bottom), var(--fg-elevation-md);
  backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
  -webkit-backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
}
```

## Button (`.hero-cta-primary`)

Primary buttons are glass pills with an accent fill.

```css
.glass-btn {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: var(--btn-radius);
  backdrop-filter: blur(4px);
  transition: all 250ms ease;
}

.glass-btn:hover {
  transform: translateY(-1px);
}
```

## Ghost Button (`.hero-cta-secondary`)

```css
.glass-btn-ghost {
  background: var(--fg-fill-card);
  border: 1px solid var(--fg-border);
  border-radius: var(--btn-radius);
  box-shadow: var(--fg-edge-top), var(--fg-edge-bottom), var(--fg-elevation-sm);
  backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
  -webkit-backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate));
  transition: all 250ms ease;
}
```
