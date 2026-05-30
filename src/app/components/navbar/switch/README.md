New Implementation of Switch Component

- Copy the switch folder.
- Paste this in index.css file.(Tailwind v4)

```css
/* ============================================
   VIEW TRANSITION - Theme Switch Animation
   ============================================ */

/* Disable the default cross-fade animation */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

/* Keep the old view visible and static underneath */
::view-transition-old(root) {
  z-index: 1;
}

/* New view clips over the old one with circle animation */
::view-transition-new(root) {
  z-index: 9999;
}

/* Ensure the transition group covers the full viewport */
::view-transition-group(root) {
  pointer-events: none;
}
```

Note :- for a div to inherit the animation you must add className(tailwind property) to the parent div and define something for light & dark.
Noe :- Make the div to cover atleast the whole-screen to make the animation look complete. 