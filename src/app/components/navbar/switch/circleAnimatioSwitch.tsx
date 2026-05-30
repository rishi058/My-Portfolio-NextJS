"use client";
import { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";
import * as Switch from "./SwitchComponent";
import { IconMoon, IconSun } from "./Icons";

type Theme = 'light' | 'dark';
const THEME_STORAGE_KEY = 'sysmon-theme';

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    let initialTheme: Theme = 'dark';
    
    if (stored === 'light' || stored === 'dark') {
      initialTheme = stored;
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      initialTheme = 'light';
    }
    
    // Apply theme immediately to prevent flash
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return initialTheme;
  }
  return 'dark';
}


export default function CircleAnimationSwitch({ size }: { size?: number | string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>('dark');
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setThemeState(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };
  const ref = useRef<HTMLDivElement>(null);

  const toggleDarkMode = async (checked: boolean) => {
    if (
      !ref.current ||
      !(document as any).startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(checked ? 'dark' : 'light');
      return;
    }


    await (document as any).startViewTransition(() => {
      flushSync(() => {
        setTheme(checked ? 'dark' : 'light');
      });
    }).ready;

    const { top, left, width, height } = ref.current!.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const sizeNum = typeof size === 'number' ? size : parseFloat(size as string) || 2.25;
  const width = sizeNum * (80 / 36);
  const height = sizeNum;
  const iconSize = sizeNum * (16 / 36);

  if (!mounted) {
    return <div style={{ width: `${width}rem`, height: `${height}rem` }} />;
  }

  return (
    <Switch.Root checked={isDarkMode} onCheckedChange={toggleDarkMode} isDark={isDarkMode} size={size}>
      {/* Thumb with icon - positioned first so it's behind labels visually */}
      <Switch.Thumb ref={ref} isDark={isDarkMode}>
        {isDarkMode ? (
          <IconMoon style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
        ) : (
          <IconSun style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
        )}
      </Switch.Thumb>
      
      {/* Labels are always visible, positioned after thumb */}
      {!isDarkMode && (
        <Switch.Label position="left" isDark={isDarkMode}>
          LIGHT<br/>MODE
        </Switch.Label>
      )}
      
      {isDarkMode && (
        <Switch.Label position="right" isDark={isDarkMode}>
          DARK<br/>MODE
        </Switch.Label>
      )}
    </Switch.Root>
  );
}
