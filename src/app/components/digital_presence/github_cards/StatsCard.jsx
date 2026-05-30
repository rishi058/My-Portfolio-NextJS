'use client';
import React from 'react';

const CARD_BASE =
  'bg-surface border border-outline rounded-[0.4em] p-[0.75em] shadow-md ' +
  'hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02] ' +
  'transition-all duration-300';

/**
 * GitHub Stats card showing stars, commits, PRs, issues, contributed-to.
 * Fixed intrinsic size: width = content-driven, height = 11em.
 * Only the `scale` prop changes the rendered size.
 *
 * @param {{ data: object, scale: string, className: string }} props
 */
export default function StatsCard({ data, scale = '1rem', className = '' }) {
  const {
    totalStars = 0,
    totalContributions = 0,
    totalPRs = 0,
    totalIssues = 0,
    totalRepoContributions = 0,
  } = data || {};

  const currentYear = new Date().getFullYear();
  const stats = [
    { icon: 'star',          label: 'Total Stars:',    value: totalStars },
    { icon: 'commit',        label: `${currentYear} Commits:`, value: totalContributions },
    { icon: 'call_merge',    label: 'Total PRs:',      value: totalPRs },
    { icon: 'bug_report',    label: 'Total Issues:',   value: totalIssues },
    { icon: 'folder_shared', label: 'Contributed to:', value: totalRepoContributions },
  ];

  return (
    <div
      className={`${CARD_BASE} ${className} inline-flex flex-col`}
      style={{ fontSize: scale, width: '18em', height: '11em', padding: '0.75em 0.875em' }}
    >
      {/* Title */}
      <h3 className="text-[0.75em] font-bold text-primary-500 dark:text-primary-400 mb-[0.5em] tracking-widest uppercase flex-shrink-0">
        Stats
      </h3>

      {/* Content: stats list + octocat */}
      <div className="flex items-center gap-[0.75em] flex-1 min-h-0">
        {/* Stats list */}
        <ul className="flex flex-col gap-[0.2em]">
          {stats.map((s, i) => (
            <li key={i} className="flex items-center gap-[0.75em] text-[0.6em] whitespace-nowrap">
              <div className="flex items-center gap-[0.35em]">
                <span className="material-symbols-outlined text-primary-500 dark:text-primary-400 text-[1.1em] leading-none">
                  {s.icon}
                </span>
                <span className="text-on-surface-variant">{s.label}</span>
              </div>
              <span className="font-bold text-primary-600 dark:text-primary-300 tabular-nums ml-auto">
                {s.value.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>

        {/* Big GitHub Octocat — decorative watermark */}
        <div className="opacity-[0.18] text-on-surface self-center flex-shrink-0 ml-3">
          <GitHubOctocat size="7em" />
        </div>
      </div>
    </div>
  );
}

function GitHubOctocat({ size = '7em' }) {
  return (
    <svg
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      fill="currentColor"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}
