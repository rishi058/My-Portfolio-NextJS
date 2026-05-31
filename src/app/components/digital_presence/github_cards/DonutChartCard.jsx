'use client';
import React from 'react';

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
      className={`github-card ${className} inline-flex flex-col max-w-full`}
      style={{ fontSize: scale, width: '18em', height: '11em' }}
    >
      <h3 className="github-card-title mb-[0.5em] flex-shrink-0">
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
              className="donut-track"
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
                className="donut-segment"
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
              <span className="donut-legend-text">{d.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
