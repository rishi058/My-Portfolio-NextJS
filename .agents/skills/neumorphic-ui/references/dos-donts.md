# Do and Don't

## Do

- Keep a single global light direction (top-left).
- Use paired shadows for every raised element:
  - White glow on top/left
  - Slate-gray shadow on bottom/right
- Use inset paired shadows for pressed/active controls.
- Use off-white/off-black base surfaces.
- Keep accents sparse and strategic.
- Keep control text legible with stronger contrast than decorative text.
- Add clear hover, active, and focus-visible states.
- Verify component boundaries remain visible in dark mode.
- Limit neumorphism to appropriate surfaces (controls, cards, panels).

## Don't

- Do not switch shadow directions between components.
- Do not use pure white or pure black as the main surface.
- Do not rely only on low-contrast depth to indicate clickability.
- Do not remove outlines without replacing focus visibility.
- Do not apply neumorphism to long-form text areas or dense data tables.
- Do not use heavy, muddy shadows that overpower content.
- Do not stack multiple accent colors in one small component cluster.
- Do not use tiny radii mixed with very large radii in the same pattern set.
- Do not make disabled controls indistinguishable from enabled ones.

## Good Targets for Neumorphism

- Media controls
- Dashboard cards
- Settings modules
- Toggles and segmented controls
- Lightweight form controls

## Poor Targets for Neumorphism

- High-density enterprise grids
- Accessibility-critical flows with many states
- Text-heavy documents and article pages
- Complex data entry forms with many validation states

## Minimum Quality Gate

Ship only when all of the following are true:
- Text contrast meets target levels.
- Controls and state changes are distinguishable.
- Keyboard focus is visible.
- Raised/inset depth remains clear in light and dark mode.

