"use client";

import { useEffect, useState } from 'react';
import ColorBends from './ColorBends';
import DotField from './DotField';

const isGlassTheme = () => document.documentElement.classList.contains('glass');

export default function FrostedGlassBackground() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const update = () => setActive(isGlassTheme());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!active) return null;

  return (
    <div className="color-bends-overlay" aria-hidden="true">
      <ColorBends
        colors={['#a855f7']}
        speed={0.02}
        frequency={1}
        noise={0.15}
        bandWidth={6}
        rotation={90}
        fadeTop={0.75}
        iterations={1}
        intensity={1.3}

        autoRotate={-1}
        scale={2}
        warpStrength={0.97}
        mouseInfluence={0}
        parallax={0}
        transparent
      />
      <div className="dot-field-layer">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={50}
          glowRadius={120}
          sparkle={false}
          waveAmplitude={0}
        />
      </div>
    </div>
  );
}
