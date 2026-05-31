# Frosted Glass Checklist

## Do

- Use `backdrop-filter`, diagonal translucent fill, 1px neutral border, inset top light, inset bottom shadow, and outer elevation together.
- Keep the core border at `1px solid rgba(255,255,255,0.18)`.
- Put glass over gradients, images, auroras, or blurred color fields.
- Keep blur around `10px-16px` for normal UI.
- Use `-webkit-backdrop-filter` for Safari.
- Add visible `:focus-visible` styles.
- Use `@supports`, `prefers-reduced-transparency`, `prefers-reduced-motion`, and `forced-colors` fallbacks.
- Limit simultaneous glass layers and avoid animating blur.
- Keep dense content on opaque or near-opaque inner surfaces.

## Don't

- Do not place glass over flat backgrounds.
- Do not thicken borders for emphasis; it makes the edge look drawn instead of lit.
- Do not use container `opacity`; use transparent background colors.
- Do not stack glass inside glass.
- Do not use vivid tints above roughly 15% unless the surface is intentionally near-opaque.
- Do not put long text directly on raw glass.
- Do not use font weights `100-300` on glass.
- Do not apply glass to every item in a list; apply it to the container or selected feature surface.
- Do not rely on blur to solve contrast.
