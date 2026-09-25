"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ColorBends.css';

const MAX_COLORS = 8;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
uniform int uIterations;
uniform float uIntensity;
uniform float uBandWidth;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  q += (uPointer - rp) * uMouseInfluence * 0.2;

  for (int j = 0; j < 5; j++) {
    if (j >= uIterations - 1) break;
    vec2 rr = sin(1.5 * (q.yx * uFrequency) + 2.0 * cos(q * uFrequency));
    q += (rr - q) * 0.15;
  }

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 warped = s + (r - s) * kBelow * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 warped = s + (r - s) * kBelow * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-uBandWidth / exp(uBandWidth * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  col *= uIntensity;
  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col = clamp(col + (n - 0.5) * uNoise, 0.0, 1.0);
  }

  gl_FragColor = vec4(uTransparent > 0 ? col * a : col, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const resolveColor = color => {
  const variable = String(color).match(/^var\(\s*(--[\w-]+)\s*\)$/);
  if (!variable || typeof window === 'undefined') return color;
  return getComputedStyle(document.documentElement).getPropertyValue(variable[1]).trim() || color;
};

const hexToVector = color => {
  const hex = resolveColor(color).replace('#', '').trim();
  if (!/^(?:[\da-f]{3}|[\da-f]{6})$/i.test(hex)) return new THREE.Vector3();
  const values = hex.length === 3
    ? [hex[0] + hex[0], hex[1] + hex[1], hex[2] + hex[2]]
    : [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)];
  return new THREE.Vector3(...values.map(value => parseInt(value, 16) / 255));
};

export default function ColorBends({
  className = '', style, rotation = 90, autoRotate = 0, speed = 0.2, colors = [],
  transparent = true, scale = 1, frequency = 1, warpStrength = 1, mouseInfluence = 1,
  parallax = 0.5, noise = 0.15, iterations = 1, intensity = 1.5, bandWidth = 6
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const frameRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);
  const pointerTargetRef = useRef(new THREE.Vector2());
  const pointerCurrentRef = useRef(new THREE.Vector2());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uCanvas: { value: new THREE.Vector2(1, 1) }, uTime: { value: 0 }, uSpeed: { value: speed },
        uRot: { value: new THREE.Vector2(1, 0) }, uColorCount: { value: 0 },
        uColors: { value: Array.from({ length: MAX_COLORS }, () => new THREE.Vector3()) },
        uTransparent: { value: transparent ? 1 : 0 }, uScale: { value: scale },
        uFrequency: { value: frequency }, uWarpStrength: { value: warpStrength },
        uPointer: { value: new THREE.Vector2() }, uMouseInfluence: { value: mouseInfluence },
        uParallax: { value: parallax }, uNoise: { value: noise }, uIterations: { value: iterations },
        uIntensity: { value: intensity }, uBandWidth: { value: bandWidth }
      },
      premultipliedAlpha: true,
      transparent: true
    });
    materialRef.current = material;
    scene.add(new THREE.Mesh(geometry, material));

    const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance', alpha: true });
    rendererRef.current = renderer;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
    Object.assign(renderer.domElement.style, { width: '100%', height: '100%', display: 'block' });
    container.appendChild(renderer.domElement);

    const resize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height, false);
      material.uniforms.uCanvas.value.set(width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    const clock = new THREE.Clock();
    const render = () => {
      const delta = clock.getDelta();
      const elapsed = clock.elapsedTime;
      material.uniforms.uTime.value = elapsed;
      const radians = (((rotationRef.current % 360) + autoRotateRef.current * elapsed) * Math.PI) / 180;
      material.uniforms.uRot.value.set(Math.cos(radians), Math.sin(radians));
      pointerCurrentRef.current.lerp(pointerTargetRef.current, Math.min(1, delta * 8));
      material.uniforms.uPointer.value.copy(pointerCurrentRef.current);
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(render);
    };
    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
      materialRef.current = null;
      rendererRef.current = null;
    };
  }, [bandWidth, frequency, intensity, iterations, mouseInfluence, noise, parallax, scale, speed, transparent, warpStrength]);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return undefined;
    const updateColors = () => {
      const palette = colors.filter(Boolean).slice(0, MAX_COLORS).map(hexToVector);
      material.uniforms.uColors.value.forEach((vector, index) => vector.copy(palette[index] || new THREE.Vector3()));
      material.uniforms.uColorCount.value = palette.length;
    };
    updateColors();
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, [colors]);

  useEffect(() => {
    const material = materialRef.current;
    if (!material) return;
    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;
    Object.assign(material.uniforms.uSpeed, { value: speed });
    Object.assign(material.uniforms.uScale, { value: scale });
    Object.assign(material.uniforms.uFrequency, { value: frequency });
    Object.assign(material.uniforms.uWarpStrength, { value: warpStrength });
    Object.assign(material.uniforms.uMouseInfluence, { value: mouseInfluence });
    Object.assign(material.uniforms.uParallax, { value: parallax });
    Object.assign(material.uniforms.uNoise, { value: noise });
    Object.assign(material.uniforms.uIterations, { value: iterations });
    Object.assign(material.uniforms.uIntensity, { value: intensity });
    Object.assign(material.uniforms.uBandWidth, { value: bandWidth });
    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    rendererRef.current?.setClearColor(0x000000, transparent ? 0 : 1);
  }, [autoRotate, bandWidth, frequency, intensity, iterations, mouseInfluence, noise, parallax, rotation, scale, speed, transparent, warpStrength]);

  useEffect(() => {
    const movePointer = event => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      pointerTargetRef.current.set(
        ((event.clientX - rect.left) / (rect.width || 1)) * 2 - 1,
        -(((event.clientY - rect.top) / (rect.height || 1)) * 2 - 1)
      );
    };
    window.addEventListener('pointermove', movePointer, { passive: true });
    return () => window.removeEventListener('pointermove', movePointer);
  }, []);

  return <div ref={containerRef} className={`color-bends-container ${className}`} style={style} />;
}
