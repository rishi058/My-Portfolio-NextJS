// CARD WITH FILLED AREA GRAPH

'use client';
import React, { useMemo } from 'react';

function getTicksAndMax(rawMax) {
  if (rawMax <= 5) return { max: 5, ticks: [0, 1, 2, 3, 4, 5] };
  if (rawMax <= 10) return { max: 10, ticks: [0, 2, 4, 6, 8, 10] };
  if (rawMax <= 15) return { max: 15, ticks: [0, 3, 6, 9, 12, 15] };
  if (rawMax <= 20) return { max: 20, ticks: [0, 5, 10, 15, 20] };
  if (rawMax <= 30) return { max: 30, ticks: [0, 5, 10, 15, 20, 25, 30] };
  if (rawMax <= 40) return { max: 40, ticks: [0, 10, 20, 30, 40] };
  if (rawMax <= 60) return { max: 60, ticks: [0, 10, 20, 30, 40, 50, 60] };
  if (rawMax <= 80) return { max: 80, ticks: [0, 20, 40, 60, 80] };
  if (rawMax <= 100) return { max: 100, ticks: [0, 20, 40, 60, 80, 100] };
  if (rawMax <= 150) return { max: 150, ticks: [0, 30, 60, 90, 120, 150] };
  const max = Math.ceil(rawMax / 50) * 50;
  const step = max / 5;
  return { max, ticks: [0, step, step * 2, step * 3, step * 4, step * 5] };
}

/**
 * Profile details card with contribution area chart.
 * @param {{ data: { username, name, totalPublicRepos, joinedAgo, totalContributions, contributions: [{date, count}] }, scale: string, className: string }} props
 */
export default function ProfileDetailsCard({ data, scale = '1rem', className = '' }) {
  const { username, name, totalPublicRepos, joinedAgo, totalContributions, contributions = [] } = data || {};

  // Build a monthly aggregated sparkline from contributions (last 12 months)
  const chartData = useMemo(() => {
    if (!contributions || contributions.length === 0) return null;

    // 1. Group by YYYY-MM
    const monthlyMap = {};
    contributions.forEach(c => {
      if (!c.date) return;
      const monthStr = c.date.substring(0, 7); // "YYYY-MM"
      monthlyMap[monthStr] = (monthlyMap[monthStr] || 0) + c.count;
    });

    // Sort chronologically
    const sortedMonths = Object.keys(monthlyMap).sort();

    const monthlyData = sortedMonths.map(month => {
      const [year, monthNum] = month.split('-').map(Number);
      const label = `${year.toString().slice(-2)}/${monthNum.toString().padStart(2, '0')}`; // "25/05"
      return {
        label,
        count: monthlyMap[month]
      };
    });

    // Dimensions of our SVG coordinate space
    const W = 380;
    const H = 130;
    const xMin = 15;
    const xMax = 340;
    const yMin = 10;
    const yMax = 100; // bottom of the chart line

    const rawMax = Math.max(...monthlyData.map(d => d.count), 1);
    const { max: yMaxVal, ticks: yTicks } = getTicksAndMax(rawMax);

    const n = monthlyData.length;
    const points = monthlyData.map((d, i) => {
      const x = xMin + (i / (n - 1)) * (xMax - xMin);
      const y = yMax - (d.count / yMaxVal) * (yMax - yMin);
      return { x, y };
    });

    // Generate Catmull-Rom spline
    let linePath = '';
    let areaPath = '';
    if (points.length > 0) {
      linePath = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const p0 = points[i - 1] || p1;
        const p3 = points[i + 2] || p2;
        const cp1x = p1.x + (p2.x - p0.x) * 0.15;
        const cp1y = p1.y + (p2.y - p0.y) * 0.15;
        const cp2x = p2.x - (p3.x - p1.x) * 0.15;
        const cp2y = p2.y - (p3.y - p1.y) * 0.15;
        linePath += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
      }
      areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${yMax} L ${points[0].x.toFixed(1)} ${yMax} Z`;
    }

    // X Ticks (alternate months)
    const xTicks = monthlyData.map((d, i) => ({
      x: xMin + (i / (n - 1)) * (xMax - xMin),
      label: d.label,
      showLabel: i % 2 === 0
    }));

    // Y Ticks
    const computedYTicks = yTicks.map(val => ({
      val,
      y: yMax - (val / yMaxVal) * (yMax - yMin)
    }));

    return {
      W,
      H,
      xMin,
      xMax,
      yMax, // y position of x-axis line
      linePath,
      areaPath,
      xTicks,
      yTicks: computedYTicks
    };
  }, [contributions]);

  return (
    <div
      className={`github-card ${className} inline-flex flex-col w-full md:w-fit`}
      style={{ fontSize: scale, height: '11em', paddingLeft: '1.25em', paddingTop: '0.5em', paddingBottom: '0.5em' }}
    >
      {/* Heading: Username on top */}
      <h3 className="profile-heading">
        {username}{name ? ` (${name})` : ''}
      </h3>

      <div className="flex flex-row gap-[1em] items-stretch flex-1 min-h-0">
        {/* Left Column: Details */}
        <div className="flex flex-col gap-[1em] justify-center flex-shrink-0">
          <ProfileDetailRow icon="hub" text={`${totalContributions?.toLocaleString() ?? '—'} Contributions on GitHub`} />
          <ProfileDetailRow icon="folder" text={`${totalPublicRepos ?? '—'} Public Repos`} />
          <ProfileDetailRow icon="schedule" text={`Joined GitHub ${joinedAgo ?? '—'}`} />
        </div>

        {/* Right Column: Line Graph */}
        <div className="flex flex-col flex-1 min-w-0 justify-between gap-[0.25em]">
          <div className="flex justify-end">
            <span className="github-chart-subtitle">
              contributions in the last year
            </span>
          </div>
          {chartData && (
            <svg
              viewBox={`0 0 ${chartData.W} ${chartData.H}`}
              className="w-full flex-1 fill-current"
              style={{ display: 'block', color: 'var(--on-surface-variant)' }}
            >
              <defs>
                <linearGradient id="spark-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-accent)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="var(--chart-accent)" stopOpacity="0.03" />
                </linearGradient>
              </defs>
              
              {/* Fill area */}
              {chartData.areaPath && (
                <path
                  d={chartData.areaPath}
                  fill="url(#spark-grad)"
                />
              )}
              
              {/* Line */}
              {chartData.linePath && (
                <path
                  d={chartData.linePath}
                  fill="none"
                  stroke="var(--chart-accent)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              )}

              {/* X Axis Line */}
              <line
                x1={chartData.xMin}
                y1={chartData.yMax}
                x2={chartData.xMax}
                y2={chartData.yMax}
                stroke="var(--outline)"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* Y Axis Line */}
              <line
                x1={chartData.xMax}
                y1={10}
                x2={chartData.xMax}
                y2={chartData.yMax}
                stroke="var(--outline)"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* X Ticks & Labels */}
              {chartData.xTicks.map((tick, idx) => {
                if (!tick.showLabel) return null;
                return (
                  <g key={`x-tick-${idx}`} opacity="0.7">
                    <line
                      x1={tick.x}
                      y1={chartData.yMax}
                      x2={tick.x}
                      y2={chartData.yMax + 4}
                      stroke="var(--outline)"
                      strokeWidth="1"
                      opacity="0.5"
                    />
                    <text
                      x={tick.x}
                      y={chartData.yMax + 14}
                      textAnchor="middle"
                      fontSize="8"
                      fontWeight="bold"
                      fill="var(--on-surface-variant)"
                    >
                      {tick.label}
                    </text>
                  </g>
                );
              })}

              {/* Y Ticks & Labels */}
              {chartData.yTicks.map((tick, idx) => (
                <g key={`y-tick-${idx}`} opacity="0.7">
                  <line
                    x1={chartData.xMax}
                    y1={tick.y}
                    x2={chartData.xMax + 4}
                    y2={tick.y}
                    stroke="var(--outline)"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                  <text
                    x={chartData.xMax + 8}
                    y={tick.y + 3}
                    textAnchor="start"
                    fontSize="8"
                    fontWeight="bold"
                    fill="var(--on-surface-variant)"
                  >
                    {tick.val}
                  </text>
                </g>
              ))}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileDetailRow({ icon, text }) {
  return (
    <div className="profile-detail-row flex items-center gap-[0.375em]">
      <span className="github-stat-icon material-symbols-outlined text-[1.25em] leading-none">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
