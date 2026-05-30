"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";

/* ─────────────────────────────────────────────────────────────
   Types & constants
───────────────────────────────────────────────────────────── */

type StyleId = "neon" | "neo";

interface StyleOption {
  id: StyleId;
  label: string;
}

const STYLES: StyleOption[] = [
  { id: "neon", label: "Neon"          },
  { id: "neo",  label: "Neo-Brutalism" },
];

const STYLE_STORAGE_KEY = "sysmon-theme-style";

/* ─────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────── */

function applyStyle(id: StyleId): void {
  const root = document.documentElement;
  if (id === "neo") {
    root.classList.add("neo");
  } else {
    root.classList.remove("neo");
  }
  localStorage.setItem(STYLE_STORAGE_KEY, id);
}

function getInitialStyle(): StyleId {
  if (typeof window === "undefined") return "neon";
  const stored = localStorage.getItem(STYLE_STORAGE_KEY);
  if (stored === "neon" || stored === "neo") return stored;
  return "neon";
}

/* ─────────────────────────────────────────────────────────────
   SVG icons
───────────────────────────────────────────────────────────── */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="9" height="9" viewBox="0 0 9 9" fill="none"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 200ms ease" }}
    >
      <path d="M1 3L4.5 6.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <path d="M6.5 1.5L3 4.5L6.5 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
      <path d="M2.5 1.5L6 4.5L2.5 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   ThemeSelector component
───────────────────────────────────────────────────────────── */

export default function ThemeSelector() {
  const [mounted,  setMounted]  = useState(false);
  const [style,    setStyle]    = useState<StyleId>("neon");
  const [isOpen,   setIsOpen]   = useState(false);
  const containerRef            = useRef<HTMLDivElement>(null);

  /* Init */
  useEffect(() => {
    const initial = getInitialStyle();
    setStyle(initial);
    applyStyle(initial);
    setMounted(true);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  /* Animated style transition */
  const transition = useCallback(async (newId: StyleId) => {
    const applyFn = () => {
      setStyle(newId);
      applyStyle(newId);
    };

    const el = containerRef.current;
    if (
      !el ||
      !(document as any).startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      applyFn();
      return;
    }

    await (document as any).startViewTransition(() => {
      flushSync(applyFn);
    }).ready;

    const { top, left, width, height } = el.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right  = window.innerWidth  - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`] },
      { duration: 800, easing: "ease-in-out", pseudoElement: "::view-transition-new(root)" }
    );
  }, []);

  const currentIndex = STYLES.findIndex((s) => s.id === style);
  const currentStyle = STYLES[currentIndex] ?? STYLES[0];

  const handlePrev = () => {
    setIsOpen(false);
    const prev = STYLES[(currentIndex - 1 + STYLES.length) % STYLES.length];
    transition(prev.id);
  };

  const handleNext = () => {
    setIsOpen(false);
    const next = STYLES[(currentIndex + 1) % STYLES.length];
    transition(next.id);
  };

  const handleSelect = (id: StyleId) => {
    setIsOpen(false);
    transition(id);
  };

  /* SSR placeholder */
  if (!mounted) {
    return <div style={{ width: "11rem", height: "2rem" }} className="rounded-full" />;
  }

  return (
    <div ref={containerRef} className="theme-selector-wrapper">
      {/* ── Chip ── */}
      <div className="theme-selector">

        {/* Chevron — opens dropdown */}
        <button
          className="theme-selector__chevron"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close theme menu" : "Open theme menu"}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <ChevronIcon open={isOpen} />
        </button>

        {/* Current theme label */}
        <span className="theme-selector__label" aria-live="polite">
          {currentStyle.label}
        </span>

        {/* Prev / Next toggle */}
        <div className="theme-selector__nav-group" role="group" aria-label="Cycle theme">
          <button
            className="theme-selector__nav theme-selector__nav--prev"
            onClick={handlePrev}
            aria-label="Previous theme"
            title="Previous theme"
          >
            <ArrowLeftIcon />
          </button>
          <button
            className="theme-selector__nav"
            onClick={handleNext}
            aria-label="Next theme"
            title="Next theme"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      {/* ── Dropdown ── */}
      {isOpen && (
        <div className="theme-selector__dropdown" role="listbox" aria-label="Select theme style">
          {STYLES.map((s) => (
            <button
              key={s.id}
              role="option"
              aria-selected={s.id === style}
              className={`theme-selector__option${s.id === style ? " theme-selector__option--active" : ""}`}
              onClick={() => handleSelect(s.id)}
            >
              <span className="theme-selector__option-dot" />
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
