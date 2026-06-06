# Frosted Glass Backgrounds

Frosted glass only works if there is a background image to blur.

In `src/app/styles/frosted-glass.css`, the background is automatically applied via:
- `--glass-bg-image: url('/images/bg-1-light.jpg')`
- `--glass-bg-image: url('/images/bg-1-dark.jpg')`

It is applied to the `body::after` pseudo-element. Do not set opaque background colors on `main` or wrapper containers, otherwise the glass effect will disappear.
