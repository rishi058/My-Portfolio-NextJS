'use client';
import React, { useMemo } from 'react';

/**
 * Horizontal bar chart showing most productive hours of the day.
 * Fixed intrinsic size: width = 18em, height = 11em.
 *
 * @param {{ data: Array<{hour: string, commits: number}>, scale: string, className: string }} props
 */
export default function ProductiveTimeCard({ data = [], scale = '1rem', className = '' }) {
  // Sort by commits descending and take top N hours
  const topHours = useMemo(() => {
    const safeData = Array.isArray(data) ? data : [];
    const sorted = [...safeData].sort((a, b) => b.commits - a.commits);
    return sorted.slice(0, 6);
  }, [data]);

  const maxCommits = Math.max(...topHours.map(h => h.commits), 1);

  return (
    <div
      className={`github-card ${className} inline-flex flex-col`}
      style={{ fontSize: scale, width: '18em', height: '11em' }}
    >
      <h3 className="github-card-title flex items-center gap-[0.35em] flex-shrink-0">
        <span className="stats-icon material-symbols-outlined text-[1.1em] leading-none">schedule</span>
        <span>Most Productive Hours</span>
      </h3>

      <ul className="flex flex-col gap-[0.35em] mt-[0.5em] flex-1 min-h-0 justify-center">
        {topHours.map((h, i) => {
          const pct = Math.max((h.commits / maxCommits) * 100, 2);
          return (
            <li key={i} className="flex items-center gap-[0.5em]">
              <span className="chart-caption w-[3em] text-right font-mono">{h.hour}</span>
              <div className="flex-1 h-[0.5em] rounded-full overflow-hidden chart-bar-track">
                <div
                  className="h-full rounded-full transition-all duration-500 chart-bar-fill"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="chart-caption w-[2em] text-left font-mono">{h.commits}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
