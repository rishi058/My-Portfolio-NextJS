# UI/UX Design Reference Guide
> A comprehensive reference of design styles, visual aesthetics, animations, and motion types used in modern website and mobile app design.

---

# PART 1 — UI/UX Design Styles & Aesthetics

## 🪟 Morphism Family
- **Glassmorphism (Frosted Glass)** — Blurred, translucent panels with subtle borders; depth via layering
- **Glassmorphism (Liquid Glass)** — More fluid, dynamic version with refraction and distortion effects
- **Neumorphism (Soft UI)** — Extruded/pressed elements from the background using inner/outer shadows
- **Skeuomorphism** — Realistic textures mimicking physical objects (leather, wood, metal)
- **Claymorphism** — Puffy, inflated 3D shapes with soft shadows and rounded edges

---

## 🎨 Flat & Material Family
- **Flat Design (1.0)** — No shadows, gradients, or textures; pure color and shape
- **Flat Design 2.0 / Semi-Flat** — Flat with subtle shadows and depth hints
- **Material Design** — Google's system; elevation, ripple effects, grid-based layout
- **Material You (Material 3)** — Dynamic color theming, personalized palettes
- **Metro / Fluent Design** — Microsoft's style; typography-forward, clean grids, acrylic blur

---

## 🌑 Dark & Atmospheric
- **Dark Mode UI** — Dark backgrounds with light text; reduces eye strain
- **Aurora / Gradient Mesh** — Soft, glowing color gradients in the background (iOS 16-era)
- **Glow / Neon UI** — Luminous neon accents on dark surfaces
- **Cyberpunk UI** — High contrast, neon on black, grid lines, glitch effects
- **Glasspunk** — Glassmorphism + neon/cyberpunk aesthetic

---

## 🏗️ Structural / Bold
- **Brutalism** — Raw, unstyled HTML aesthetics; intentionally "ugly"; bold fonts, stark borders
- **Neo-Brutalism** — Brutalism refined; bold outlines, flat shadows, high contrast, playful
- **Bauhaus** — Geometry, primary colors, functional minimalism rooted in 1920s art school
- **Grid-based / Swiss Design** — Strict typographic grid, whitespace-heavy, clean hierarchy

---

## ✨ Decorative & Expressive
- **Maximalism** — Dense, layered, richly decorated; opposite of minimalism
- **Y2K / Retro-Futurism** — Chrome, holographic, bubbly fonts, early 2000s internet aesthetics
- **Vaporwave UI** — Pastel purples/pinks, retro grids, glitch, nostalgic digital
- **Memphis Design** — Bold shapes, squiggles, primary colors, 80s/90s energy
- **Organic / Blob UI** — Soft asymmetric shapes, no hard edges, nature-inspired

---

## 🤖 Functional / System-Oriented
- **Minimalism** — Maximum whitespace, stripped to essentials
- **Monochromatic UI** — Single hue with varied tones/shades
- **Terminal / Command-Line UI (TUI)** — Monospace fonts, ASCII art, hacker aesthetic
- **Data-Ink / Dashboard UI** — Optimized for data density, charts, analytics
- **Atomic Design** — Component-architecture methodology; atoms → molecules → organisms

---

## 🌐 Emerging / Modern (2024–2025)
- **Bento Grid UI** — Card-based mosaic layouts (popularized by Apple keynotes)
- **Typographic UI** — Oversized type as the primary visual element
- **AI-Native UI** — Conversational interfaces, streaming text, generative visual feedback
- **Spatial UI (VR/AR)** — Depth, parallax, 3D layers for Apple Vision Pro / mixed reality
- **Variable / Motion-First UI** — Fluid animations and micro-interactions as core design language

---
---

# PART 2 — Animations, Motion & Interactions

## 👆 Micro-Interactions
Small, single-purpose animations triggered by user actions.
- **Button press / tap feedback** — Scale down on press, ripple effect
- **Toggle switch** — Smooth slide + color fill
- **Like / Heart burst** — Particle explosion on tap (Twitter/Instagram style)
- **Checkbox tick** — Animated draw-on checkmark
- **Pull-to-refresh** — Spinner or elastic stretch animation
- **Haptic-synced animations** — Visual feedback timed with device vibration
- **Input field focus** — Label float-up, border color change
- **Loading spinner / skeleton screens** — Shimmer pulse while content loads

---

## 🔀 Transitions & Navigation
Animations between screens, pages, or states.
- **Slide transition** — Screen slides left/right/up/down
- **Fade in / Fade out** — Opacity 0→1 or 1→0
- **Cross-dissolve** — Two screens blend/overlap
- **Shared element transition** — An element (image/card) morphs into the next screen
- **Hero animation** — A prominent element expands to fill the new screen
- **Flip transition** — 3D card flip between views
- **Zoom transition** — Screen zooms in/out to navigate
- **Curtain / Wipe** — New screen wipes over the old one
- **Modal sheet slide-up** — Bottom sheet rises from below
- **Collapse / Expand** — Accordion-style open/close

---

## 📜 Scroll-Based Animations
Triggered or driven by the scroll position.
- **Parallax scrolling** — Background moves slower than foreground
- **Scroll-triggered fade-in** — Elements appear as they enter viewport
- **Scroll-driven progress bar** — Bar fills as user scrolls
- **Sticky headers / elements** — Elements pin when scrolled past
- **Horizontal scroll** — Content scrolls sideways within a section
- **Scroll morphing** — Shape or object transforms as you scroll (Apple-style)
- **Text reveal on scroll** — Words/letters appear word-by-word
- **Scrubbing / Timeline animation** — Animation frame tied directly to scroll position
- **Zoom on scroll** — Image or element scales as page scrolls
- **3D tilt / depth scroll** — Elements shift in 3D space based on scroll

---

## 🌀 Loading & Progress Animations
- **Skeleton loader** — Grey placeholder shapes before content loads
- **Shimmer / Sheen effect** — Light sweep across skeleton blocks
- **Progress bar** — Linear fill animation
- **Circular progress / spinner** — Rotating arc
- **Lottie animations** — JSON-based vector animations (complex, lightweight)
- **Indeterminate loader** — Bouncing dots, pulsing bars
- **Step progress indicator** — Animated multi-step flow

---

## ✨ Entrance & Exit Animations
How elements appear and disappear.
- **Fade** — Opacity change
- **Slide in** — Element enters from a direction
- **Scale up / Pop in** — Grows from small to full size
- **Blur in** — Appears while going from blurry to sharp
- **Stagger / Cascade** — List items animate in sequence, one after another
- **Spring / Bounce** — Overshoot then settle (physics-based)
- **Flip in** — Rotates into view on X or Y axis
- **Typewriter effect** — Text types out character by character
- **Clip/Reveal** — Element revealed by an expanding mask

---

## 🔁 Looping & Ambient Animations
Always-on, passive animations that add life.
- **Floating / Breathing** — Subtle up-down or scale pulse on idle elements
- **Gradient animation** — Background color slowly shifts
- **Particle systems** — Floating dots, stars, confetti
- **Aurora / Mesh gradient flow** — Slow-moving blobs of color
- **Noise / Grain overlay** — Animated film grain texture
- **Wave animation** — SVG or CSS ripple waves (common in audio/music apps)
- **Rotating / Orbiting elements** — Planets, icons orbiting a center
- **Cinemagraph-style** — A still image with one looping animated element

---

## 🧲 Physics-Based & Gesture Animations
Animations that respond to touch/drag with real-world feel.
- **Spring physics** — Elastic, overshoot, natural deceleration
- **Swipe to dismiss** — Card follows finger, flies away on release
- **Drag & drop** — Element lifts (shadow + scale) while dragging
- **Rubber banding** — Elastic resistance at scroll boundaries (iOS overscroll)
- **Momentum / Inertia scrolling** — List coasts after finger lifts
- **Pinch to zoom** — Scale tied to finger distance
- **Throw / Fling** — Velocity-based dismissal

---

## 🃏 Card & List Animations
- **Card flip** — Front-to-back reveal
- **Card stack / Tinder swipe** — Deck of cards, swipe left/right
- **Reorder drag** — Items shift to make space while dragging
- **Expandable card** — Card grows to reveal more content
- **Masonry cascade** — Grid items fall into place on load
- **Infinite scroll** — New items load and animate in seamlessly

---

## 🔡 Text & Typography Animations
- **Typewriter** — Characters appear one by one
- **Text scramble / glitch** — Letters randomize before resolving
- **Word-by-word reveal** — Each word fades/slides in
- **Counter animation** — Numbers count up to a value
- **Kinetic typography** — Text moves, bounces, dances in sync
- **Split text** — Letters/words split apart on hover or scroll
- **Gradient text flow** — Animated color gradient running through text

---

## 🖱️ Hover & Cursor Interactions (Web)
- **Magnetic hover** — Element attracted toward the cursor
- **Tilt / 3D card hover** — Card tilts in 3D following mouse
- **Custom cursor** — Cursor changes shape or grows on hover
- **Underline draw** — Animated underline draws on hover
- **Image reveal on hover** — Image appears following cursor
- **Color fill on hover** — Button fills with color from bottom/center
- **Spotlight / Torch effect** — Illuminated area follows cursor

---

## 🌊 Morphing & Shape Animations
- **SVG path morphing** — One shape smoothly transforms into another
- **Liquid / Blob morphing** — Organic shape continuously shifts form
- **Icon morphing** — e.g., hamburger → X, play → pause
- **Lottie icon animations** — Icons animate on interaction
- **Number morphing** — Digits smoothly roll/change

---

## 🎬 Page-Level & Cinematic
- **Intro / Splash screen animation** — Brand animation on app launch
- **Full-page horizontal scroll** — Cinematic left-to-right storytelling
- **Video background** — Looping video as hero background
- **GSAP ScrollTrigger scenes** — Complex multi-step scroll narratives
- **WebGL / Three.js effects** — 3D scenes, shaders, interactive 3D objects
- **Rive animations** — State-machine-driven interactive animations

---

## 📳 Feedback & Confirmation Animations
- **Success checkmark** — Animated tick after form submit
- **Error shake** — Element shakes horizontally on failure
- **Confetti burst** — Celebration on completion
- **Toast notification slide-in** — Alert slides in from top/bottom
- **Ripple effect** — Material Design touch feedback wave

---

## 🧰 Animation Tools Reference

| Tool | Use Case |
|---|---|
| **CSS animations / transitions** | Basic hover, fade, slide |
| **Framer Motion** | React spring & gesture animations |
| **GSAP** | Complex scroll & timeline animations |
| **Lottie** | Vector animations from After Effects |
| **Rive** | Interactive state-machine animations |
| **Three.js / WebGL** | 3D and shader-based effects |
| **Framer** | Design + animation prototyping |
| **Principle / ProtoPie** | Mobile interaction prototyping |

---

*Last updated: March 2026*