# Neon Glow Effects

## Text Gradients
To apply the signature Neon text gradient (Teal to Sky Blue), use the following utility class:

```css
.neon-gradient-text {
  color: transparent;
  background-image: linear-gradient(to right, var(--primary-400), var(--secondary-500));
  -webkit-background-clip: text;
  background-clip: text;
}
```

## Tag Selection
Selected items (like project tags) should burst with color and glow:

```css
.tag-selected {
  background-color: var(--primary-500);
  color: #ffffff;
  border-color: var(--primary-500);
  box-shadow: 0 0 25px rgba(20, 184, 166, 0.6);
}
```
