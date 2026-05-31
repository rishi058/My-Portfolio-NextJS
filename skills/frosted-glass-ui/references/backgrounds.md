# Frosted Glass Backgrounds

Frosted glass only works when it can sample varied color behind the surface. Avoid flat white, flat black, and single-color backgrounds.

## Reliable Backgrounds

```css
/* Calm product gradient */
background:
  radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.45), transparent 32%),
  radial-gradient(circle at 85% 15%, rgba(139, 92, 246, 0.42), transparent 34%),
  linear-gradient(135deg, #eef2ff 0%, #f8fafc 48%, #e0f2fe 100%);

/* Dark aurora */
background:
  radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.65), transparent 30%),
  radial-gradient(circle at 80% 30%, rgba(56, 189, 248, 0.45), transparent 34%),
  radial-gradient(circle at 55% 80%, rgba(244, 63, 94, 0.35), transparent 36%),
  #0f172a;

/* Warm editorial */
background:
  radial-gradient(circle at 20% 10%, rgba(251, 191, 36, 0.38), transparent 32%),
  radial-gradient(circle at 80% 20%, rgba(244, 63, 94, 0.32), transparent 36%),
  linear-gradient(135deg, #fff7ed, #fdf2f8 55%, #eef2ff);
```

## Photo Or Video Backdrops

Use slightly stronger tint over busy media:

```css
selector {
  background: rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(14px) saturate(1.25);
  -webkit-backdrop-filter: blur(14px) saturate(1.25);
}
```

## Motion

Animated background orbs are fine when subtle. Animate `transform` and `opacity`; never animate blur.

```css
@media (prefers-reduced-motion: reduce) {
  selector {
    animation: none;
    transition: none;
  }
}
```

## Check

- Background has at least two distinct hue/value zones.
- Glass covers less than roughly 60% of the sampled area.
- Readable background text is not placed beneath glass.
- Light pages include gradients or blurred color fields behind glass.
