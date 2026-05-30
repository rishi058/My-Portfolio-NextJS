'use client';
import React, { useMemo } from 'react';

const CARD_BASE =
  'bg-surface border border-outline rounded-[0.4em] p-[0.75em] shadow-md ' +
  'hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02] ' +
  'transition-all duration-300';

/**
 * Streak card derived from profile-details contributions array.
 * @param {{ data: { contributions: [{date: string, count: number}], totalContributions: number }, scale: string, className: string }} props
 */
export default function StreakCard({ data, scale = '1rem', className = '' }) {
  const { contributions = [], totalContributions = 0 } = data || {};

  const streakInfo = useMemo(() => computeStreak(contributions), [contributions]);

  return (
    <div
      className={`${CARD_BASE} ${className} inline-flex items-center justify-around gap-[0.5em]`}
      style={{ fontSize: scale, height: '7em', width: '32em' }}
    >
      {/* Total contributions */}
      <div className="flex flex-col items-center text-center px-[1em] border-r border-outline/30 flex-1">
        <span className="text-[1.5em] font-bold text-on-surface tabular-nums leading-none">
          {totalContributions.toLocaleString()}
        </span>
        <span className="text-[0.625em] text-on-surface-variant mt-[0.5em] font-medium">Total Contributions</span>
        <span className="text-[0.5625em] text-on-surface-variant opacity-60 mt-[0.3em]">
          {streakInfo.firstDate ? formatDate(streakInfo.firstDate) : '—'} - Present
        </span>
      </div>

      {/* Current streak */}
      <div className="flex flex-col items-center text-center px-[1em] border-r border-outline/30 flex-1">
        <span className="text-[1.5em] font-bold text-[#f97316] tabular-nums leading-none">{streakInfo.currentStreak}</span>
        <span className="text-[0.625em] text-[#f97316] mt-[0.5em] font-semibold">Week Streak</span>
        <span className="text-[0.5625em] text-on-surface-variant opacity-60 mt-[0.3em]">
          {streakInfo.currentStreakRange || '—'}
        </span>
      </div>

      {/* Longest streak */}
      <div className="flex flex-col items-center text-center px-[1em] flex-1">
        <span className="text-[1.5em] font-bold text-on-surface tabular-nums leading-none">{streakInfo.longestStreak}</span>
        <span className="text-[0.625em] text-on-surface-variant mt-[0.5em] font-medium">Longest Week Streak</span>
        <span className="text-[0.5625em] text-on-surface-variant opacity-60 mt-[0.3em]">
          {streakInfo.longestStreakRange || '—'}
        </span>
      </div>
    </div>
  );
}


function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Computes streak info from daily contribution data.
 * Streaks are counted in weeks (7-day windows with ≥1 contribution).
 */
function computeStreak(contributions) {
  if (!contributions || contributions.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      firstDate: null,
      currentStreakRange: null,
      longestStreakRange: null,
    };
  }

  // Sort by date ascending
  const sorted = [...contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
  const firstDate = sorted[0]?.date;

  // Group into ISO weeks
  const weekMap = new Map();
  for (const { date, count } of sorted) {
    const weekKey = getWeekKey(date);
    weekMap.set(weekKey, (weekMap.get(weekKey) || 0) + count);
  }

  const weeks = Array.from(weekMap.entries()).sort(([a], [b]) => a.localeCompare(b));
  const activeWeeks = weeks.filter(([, count]) => count > 0);

  // Calculate current streak (from latest week backwards)
  let currentStreak = 0;
  let currentStreakStart = null;
  let currentStreakEnd = null;

  if (activeWeeks.length > 0) {
    const latestWeek = weeks[weeks.length - 1][0];
    const lastActiveWeek = activeWeeks[activeWeeks.length - 1][0];

    // Check if latest or second-latest week is active (allow gap of 1 week for current week)
    const weeksBehind = weeksBetween(lastActiveWeek, latestWeek);
    if (weeksBehind <= 1) {
      currentStreakEnd = lastActiveWeek;
      currentStreak = 1;

      for (let i = activeWeeks.length - 2; i >= 0; i--) {
        const prevWeek = activeWeeks[i][0];
        const nextWeek = activeWeeks[i + 1][0];
        if (weeksBetween(prevWeek, nextWeek) === 1) {
          currentStreak++;
          currentStreakStart = prevWeek;
        } else {
          break;
        }
      }
      if (!currentStreakStart) currentStreakStart = currentStreakEnd;
    }
  }

  // Calculate longest streak
  let longestStreak = 0;
  let longestStreakStart = null;
  let longestStreakEnd = null;
  let streak = 0;
  let streakStart = null;

  for (let i = 0; i < activeWeeks.length; i++) {
    if (i === 0) {
      streak = 1;
      streakStart = activeWeeks[i][0];
    } else {
      const prev = activeWeeks[i - 1][0];
      const curr = activeWeeks[i][0];
      if (weeksBetween(prev, curr) === 1) {
        streak++;
      } else {
        if (streak > longestStreak) {
          longestStreak = streak;
          longestStreakStart = streakStart;
          longestStreakEnd = activeWeeks[i - 1][0];
        }
        streak = 1;
        streakStart = curr;
      }
    }
  }
  if (streak > longestStreak) {
    longestStreak = streak;
    longestStreakStart = streakStart;
    longestStreakEnd = activeWeeks[activeWeeks.length - 1]?.[0];
  }

  const formatWeekRange = (start, end) => {
    if (!start || !end) return null;
    return `${formatDate(weekStartDate(start))} - ${formatDate(weekStartDate(end))}`;
  };

  return {
    currentStreak,
    longestStreak,
    firstDate,
    currentStreakRange: currentStreakStart
      ? formatWeekRange(currentStreakStart, currentStreakEnd)
      : null,
    longestStreakRange: longestStreakStart
      ? formatWeekRange(longestStreakStart, longestStreakEnd)
      : null,
  };
}

function getWeekKey(dateStr) {
  const d = new Date(dateStr);
  // Get Monday of the week
  const day = d.getUTCDay();
  const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);
  const monday = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), diff));
  return monday.toISOString().slice(0, 10);
}

function weekStartDate(weekKey) {
  return weekKey; // Already the Monday date string
}

function weeksBetween(a, b) {
  const da = new Date(a);
  const db = new Date(b);
  return Math.round((db - da) / (7 * 24 * 60 * 60 * 1000));
}
