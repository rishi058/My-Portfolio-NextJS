'use client';
import React from 'react';

const CARD_BASE =
  'bg-surface border border-outline rounded-[0.4em] p-[0.75em] shadow-md ' +
  'hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02] ' +
  'transition-all duration-300';

/**
 * A pure-SVG donut chart card.
 * Fixed intrinsic size: width = 18em, height = 11em.
 * Only the `scale` prop changes the rendered size.
 *
 * @param {{ title: string, data: Array<{name: string, color: string, value: number}>, scale: string, className: string }} props
 */
export default function DonutChartCard({ title, data = [], scale = '1rem', className = '' }) {
  const size = 100;
  const cx = size / 2;
  const cy = size / 2;
  const r = 36;
  const strokeWidth = 20;

  const total = data.reduce((acc, d) => acc + d.value, 0);

  let cumulative = 0;
  const circumference = 2 * Math.PI * r;

  const segments = data.map((d) => {
    const fraction = total > 0 ? d.value / total : 0;
    const dashArray = fraction * circumference;
    const dashOffset = circumference - cumulative * circumference;
    cumulative += fraction;
    return { ...d, dashArray, dashOffset };
  });

  return (
    <div
      className={`${CARD_BASE} ${className} inline-flex flex-col`}
      style={{ fontSize: scale, width: '18em', height: '11em' }}
    >
      <h3 className="text-[0.75em] font-semibold text-primary-500 mb-[0.5em] tracking-wide uppercase flex-shrink-0">
        {title}
      </h3>

      <div className="flex items-center gap-[0.75em] flex-1 min-h-0">
        {/* Donut SVG */}
        <div className="flex-shrink-0 w-[8em] h-[8em]">
          <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
            {/* Background track */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none" stroke="currentColor"
              strokeWidth={strokeWidth}
              className="text-outline/20"
            />
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx={cx} cy={cy} r={r}
                fill="none"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${seg.dashArray} ${circumference}`}
                strokeDashoffset={-circumference + seg.dashOffset}
                style={{ transition: 'stroke-dasharray 0.6s ease' }}
              />
            ))}
          </svg>
        </div>

        {/* Legend */}
        <ul className="flex flex-col gap-[0.25em] flex-1 min-w-0">
          {data.map((d, i) => (
            <li key={i} className="flex items-center gap-[0.375em] min-w-0">
              <span
                className="w-[0.5em] h-[0.5em] rounded-full flex-shrink-0"
                style={{ backgroundColor: d.color }}
              />
              <span className="text-[0.75em] text-on-surface-variant truncate">{d.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
