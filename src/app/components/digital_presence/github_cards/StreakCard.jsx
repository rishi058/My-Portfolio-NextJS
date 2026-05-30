'use client';
import React from 'react';

/**
 * GitHub Streak card (Current / Longest / Total contributions).
 * Fixed intrinsic size: width = content-driven, height = 11em.
 *
 * @param {{ data: object, scale: string, className: string }} props
 */
export default function StreakCard({ data, scale = '1rem', className = '' }) {
  const {
    totalContributions = 0,
    currentStreak = { count: 0, startDate: '', endDate: '' },
    longestStreak = { count: 0, startDate: '', endDate: '' },
  } = data || {};

  const formatRange = (start, end) => {
    if (!start || !end) return '—';
    const s = new Date(start).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
    const e = new Date(end).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' });
    return `${s} – ${e}`;
  };

  return (
    <div
      className={`github-card ${className} inline-flex items-center justify-center gap-[1.5em] w-full md:w-fit`}
      style={{ fontSize: scale, height: '5em' }}
    >
      {/* Total Contributions */}
      <div className="flex flex-col items-center gap-[0.25em] text-center">
        <span className="streak-value">
          {totalContributions.toLocaleString()}
        </span>
        <span className="streak-label">Total Contributions</span>
      </div>

      {/* Divider */}
      <div className="streak-divider h-[60%]" />

      {/* Current Streak */}
      <div className="flex flex-col items-center gap-[0.15em] text-center">
        <span className="streak-value streak-value--accent">
          {currentStreak.count}
        </span>
        <span className="streak-label streak-label--accent">Current Streak</span>
        <span className="streak-range">
          {formatRange(currentStreak.startDate, currentStreak.endDate)}
        </span>
      </div>

      {/* Divider */}
      <div className="streak-divider h-[60%]" />

      {/* Longest Streak */}
      <div className="flex flex-col items-center gap-[0.15em] text-center">
        <span className="streak-value">
          {longestStreak.count}
        </span>
        <span className="streak-label">Longest Streak</span>
        <span className="streak-range">
          {formatRange(longestStreak.startDate, longestStreak.endDate)}
        </span>
      </div>
    </div>
  );
}
