# Neumorphic Do's and Don'ts

## Do
- **DO** use `var(--nm-raised-md)` and `var(--nm-inset-md)`.
- **DO** match the `background-color` of your component to its parent surface (`var(--surface)` or `var(--background)`).
- **DO** ensure the light source remains top-left for consistency.

## Don't
- **DON'T** use standard CSS drop shadows. They ruin the physical illusion.
- **DON'T** use high-saturation backgrounds for cards. Neumorphism requires neutral canvases to make the refraction/shadow visible.
- **DON'T** remove focus states (`:focus-visible`). Accessibility matters.
