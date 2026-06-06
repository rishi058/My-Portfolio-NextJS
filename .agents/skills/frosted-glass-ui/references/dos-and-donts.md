# Frosted Glass Do's and Don'ts

## Do
- **DO** use `backdrop-filter: blur(var(--fg-blur-md)) saturate(var(--fg-saturate))` on every glass surface.
- **DO** use `var(--fg-fill-card)` to provide the transparent white overlay.
- **DO** combine `var(--fg-edge-top)` and `var(--fg-elevation-md)` to create depth.

## Don't
- **DON'T** use opaque background colors (`#FFFFFF` or `#000000`) on glass panels.
- **DON'T** change the border thickness. Keep it at 1px using `var(--fg-border)`.
- **DON'T** use `references/colors.md` - refer to `src/app/styles/frosted-glass.css` for the exact tokens.
