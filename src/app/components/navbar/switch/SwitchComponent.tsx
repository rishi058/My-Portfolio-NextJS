"use client";
import { forwardRef, type ComponentProps, createContext, useContext } from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchContext = createContext<{ size: number }>({ size: 2.25 });

function parseSizeToRem(size: number | string | undefined): number {
  if (size === undefined) return 2.25;
  if (typeof size === 'number') return size;
  const match = size.match(/^([\d.]+)(rem)?$/);
  if (match) {
    return parseFloat(match[1]);
  }
  const pxMatch = size.match(/^([\d.]+)px$/);
  if (pxMatch) {
    return parseFloat(pxMatch[1]) / 16;
  }
  return parseFloat(size) || 2.25;
}

type RootProps = ComponentProps<typeof Switch.Root> & {
  isDark?: boolean;
  size?: number | string;
};

export const Root = forwardRef<HTMLButtonElement, RootProps>(function Root(
  { isDark, size, style, ...props },
  ref
) {
  const sizeNum = parseSizeToRem(size);
  const width = sizeNum * (80 / 36);
  const height = sizeNum;

  return (
    <SwitchContext.Provider value={{ size: sizeNum }}>
      <Switch.Root
        className={`relative rounded-full outline-none transition-all duration-300 ${
          props.className ?? ""
        }`}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
          backgroundColor: isDark ? '#2d3748' : '#e2e0db',
          boxShadow: isDark 
            ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.05), 4px 4px 8px rgba(0, 0, 0, 0.3)'
            : 'inset 3px 3px 6px rgba(0, 0, 0, 0.08), inset -3px -3px 6px rgba(255, 255, 255, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.1)',
          ...style,
        }}
        {...props}
        ref={ref}
      />
    </SwitchContext.Provider>
  );
});

type ThumbProps = ComponentProps<typeof Switch.Thumb> & {
  isDark?: boolean;
};

export const Thumb = forwardRef<HTMLSpanElement, ThumbProps>(function Thumb(
  { isDark, style, ...props },
  ref
) {
  const { size: sizeNum } = useContext(SwitchContext);
  const thumbSize = sizeNum * (30 / 36);
  const padding = sizeNum * (3 / 36);
  const checkedTranslate = sizeNum * (47 / 36);

  const styleId = `switch-thumb-${sizeNum.toString().replace('.', '-')}`;

  return (
    <>
      <style>{`
        .${styleId} {
          transform: translateX(${padding}rem);
        }
        .${styleId}[data-state=checked] {
          transform: translateX(${checkedTranslate}rem);
        }
      `}</style>
      <Switch.Thumb
        className={`flex items-center justify-center rounded-full transition-transform duration-300 ${styleId} ${
          props.className || ""
        }`}
        style={{
          width: `${thumbSize}rem`,
          height: `${thumbSize}rem`,
          backgroundColor: isDark ? '#4a5568' : '#f7f7f7',
          boxShadow: isDark
            ? '3px 3px 8px rgba(0, 0, 0, 0.5), -2px -2px 6px rgba(255, 255, 255, 0.08)'
            : '3px 3px 8px rgba(0, 0, 0, 0.12), -3px -3px 8px rgba(255, 255, 255, 0.9)',
          ...style,
        }}
        {...props}
        ref={ref}
      />
    </>
  );
});

type LabelProps = {
  children: React.ReactNode;
  position: 'left' | 'right';
  isDark: boolean;
};

export const Label = ({ children, position, isDark }: LabelProps) => {
  const { size: sizeNum } = useContext(SwitchContext);
  const leftPos = position === 'left' ? sizeNum * (55 / 36) : sizeNum * (25 / 36);
  const fontSize = sizeNum * (8 / 36);

  return (
    <span
      className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 font-semibold uppercase tracking-wide select-none pointer-events-none leading-tight text-center"
      style={{
        left: `${leftPos}rem`,
        fontSize: `${fontSize}rem`,
        color: isDark ? '#9ca3af' : '#6b7280',
      }}
    >
      {children}
    </span>
  );
};
