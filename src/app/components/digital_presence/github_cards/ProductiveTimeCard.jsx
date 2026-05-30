// CARD WITH TITLE : COMMITS

'use client';
import React, { useMemo } from 'react';

const CARD_BASE =
  'bg-surface border border-outline rounded-[0.4em] p-[0.75em] shadow-md ' +
  'hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02] ' +
  'transition-all duration-300';

// SVG coordinate space (unitless, scaled via viewBox)
const W = 260;
const H = 80;
const LEFT_PAD = 20;   // room for Y-axis labels
const BOTTOM_PAD = 12; // room for X-axis labels
const chartW = W - LEFT_PAD;
const chartH = H - BOTTOM_PAD;
const BAR_COUNT = 24;
const slotW = chartW / BAR_COUNT;
const barW = slotW * 0.65;
const Y_TICKS = 5;

/**
 * Productive time bar chart — commits per hour (0-23).
 * Fixed intrinsic size: width driven by content, height = 11em.
 * Only the `scale` prop changes the rendered size.
 *
 * @param {{ data: { chartData: number[], utcOffset: number }, scale: string, className: string }} props
 */
export default function ProductiveTimeCard({ data, scale = '1rem', className = '' }) {
  const { chartData = new Array(24).fill(0), utcOffset = 5.5 } = data || {};

  const maxVal = Math.max(...chartData, 1);
  const yMax = Math.ceil(maxVal / 2) * 2 || 2;

  const bars = useMemo(() =>
    chartData.map((val, i) => ({
      x: LEFT_PAD + i * slotW + (slotW - barW) / 2,
      height: (val / yMax) * chartH,
      val,
    })),
    [chartData, yMax]
  );

  const yTicks = useMemo(() =>
    Array.from({ length: Y_TICKS }, (_, i) => {
      const value = Math.round((yMax / (Y_TICKS - 1)) * i);
      const y = chartH - (value / yMax) * chartH;
      return { value, y };
    }),
    [yMax]
  );

  const xLabels = [0, 6, 12, 18, 23].map(h => ({
    hour: h,
    x: LEFT_PAD + h * slotW + slotW / 2,
  }));

  const offsetLabel = utcOffset >= 0
    ? `UTC +${utcOffset.toFixed(2)}`
    : `UTC ${utcOffset.toFixed(2)}`;

  return (
    <div
      className={`${CARD_BASE} ${className} inline-flex flex-col`}
      style={{ fontSize: scale, width: '18em', height: '11em' }}
    >
      {/* Title */}
      <h3 className="text-[0.75em] font-semibold text-primary-500 mb-[0.3em] tracking-wide uppercase flex-shrink-0">
        Commits <span className="text-on-surface-variant font-normal normal-case">({offsetLabel})</span>
      </h3>

      {/* Chart SVG — fixed height, fills remaining space */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full flex-1"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        {/* Y-axis grid lines + labels */}
        {yTicks.map(({ value, y }) => (
          <g key={value}>
            <line
              x1={LEFT_PAD} y1={y} x2={W} y2={y}
              stroke="currentColor" strokeOpacity="0.08" strokeWidth="0.5"
            />
            <text
              x={LEFT_PAD - 2} y={y}
              textAnchor="end" dominantBaseline="middle"
              fontSize="6" fill="currentColor" opacity="0.5"
            >
              {value}
            </text>
          </g>
        ))}

        {/* Baseline */}
        <line
          x1={LEFT_PAD} y1={chartH} x2={W} y2={chartH}
          stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5"
        />

        {/* Bars */}
        {bars.map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={chartH - bar.height}
            width={barW}
            height={bar.height}
            rx="0"
            fill="var(--tertiary, #69fff8)"
            opacity={bar.height > 0 ? 0.85 : 0.1}
          />
        ))}

        {/* X-axis labels */}
        {xLabels.map(({ hour, x }) => (
          <text
            key={hour}
            x={x} y={H - 2}
            textAnchor="middle"
            fontSize="6" fill="currentColor" opacity="0.5"
          >
            {hour}
          </text>
        ))}
      </svg>

      {/* "per day hour" caption */}
      <div className="text-[0.5em] text-on-surface-variant text-right flex-shrink-0 mt-[0.1em]">
        per day hour
      </div>
    </div>
  );
}
