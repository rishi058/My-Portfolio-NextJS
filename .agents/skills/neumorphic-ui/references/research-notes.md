# Research Notes (Internet)

These notes summarize patterns used to define this skill.

## 1) Neumorphic core pattern and light direction

Source:
- https://blog.logrocket.com/ux-design/neumorphism-ui-design/

Key points used:
- Neumorphism uses soft shadows/highlights to create raised and inset surfaces.
- Off-white/off-black bases help shadows stay visible.
- Light source direction must stay consistent across components.
- If light is top-left, highlights belong top-left and shadows bottom-right.
- Rounded, high-radius corners are a core visual trait.

---

## 2) Dual-shadow anatomy and dark adaptation

Source:
- https://css-zone.com/blog/neumorphism-soft-ui

Key points used:
- Elements share background color to preserve a single-material illusion.
- Dual shadows define depth:
  - Dark shadow: bottom-right (positive offsets)
  - Light highlight: top-left (negative offsets)
- In dark mode, shadow colors and opacities must be tuned, not copied blindly.
- Inset shadows are used for pressed fields and active states.

---

## 3) Neumorphism usability constraints

Source:
- https://ixdf.org/literature/topics/neumorphism

Key points used:
- Low contrast is a recurring usability challenge.
- Rounded corners and subtle depth define the style.
- Practical usage works better when combined with clear interaction cues.

---

## 4) Accessibility thresholds for text and UI components

Sources:
- https://www.w3.org/WAI/WCAG21/Techniques/general/G18.html
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast

Key points used:
- Body text should target 4.5:1 contrast.
- Large text may use 3:1.
- UI components and states need sufficient non-text contrast (3:1 threshold).
- Focus and state indicators must remain visible.

---

## 5) Dark theme surface/elevation behavior

Sources:
- https://developer.android.com/develop/ui/compose/designsystems/material?hl=en
- https://developer.android.com/design/ui/wear/guides/m2-5/styles/color

Key points used:
- In dark themes, elevation is often expressed by subtle lightening/overlays.
- Dark themes benefit from restrained accent usage.
- Desaturated colors improve legibility on dark surfaces.

---

## 6) Typeface legibility context

Source:
- https://developer-mdn.apple.com/fonts/

Key points used:
- UI fonts should prioritize legibility across sizes.
- Rounded/soft UI benefits from clean sans-serif text with robust small-size readability.
- Keep licensing constraints in mind for platform-specific typefaces.

