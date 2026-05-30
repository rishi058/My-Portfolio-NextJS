'use client';
import React from 'react';
import GitHubCardsSection from './GitHubCardsSection';

// ── Social links data ──────────────────────────────────────────────────────
const SOCIALS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/rishi058',
    color: 'var(--github-color)',
    icon: (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
      </svg>
    ),
    username: '@rishi058',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishi-raj-32648a196',
    color: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    username: 'in/rishi',
  }
];

// ── Coding platform links ──────────────────────────────────────────────────
const CODING_PLATFORMS = [
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/rishi_058',
    color: '#FFA116',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    username: 'rishi_058',
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    href: 'https://codeforces.com/profile/rishi_058',
    color: '#1F8ACB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <rect x="0" y="7.5" width="6" height="13.5" rx="1.5" />
        <rect x="9" y="3" width="6" height="18" rx="1.5" />
        <rect x="18" y="12" width="6" height="9" rx="1.5" />
      </svg>
    ),
    username: 'rishi_058',
  },
  {
    id: 'codechef',
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/rishi_058',
    color: '#5B4638',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M 13.2 7.8 A 6 6 0 1 0 13.2 16.2" />
        <path d="M 20.8 7.8 A 6 6 0 1 0 20.8 16.2" />
      </svg>
    ),
    username: 'rishi_058',
  },
];

// ── Link button component ─────────────────────────────────────────────────
function PlatformLink({ platform }) {
  const isVar = platform.color.startsWith('var(');
  const bgColor = isVar ? 'var(--github-bg)' : platform.color + '22';

  return (
    <a
      href={platform.href}
      target="_blank"
      rel="noopener noreferrer"
      id={`link-${platform.id}`}
      className="group inline-flex w-fit items-center gap-3 p-2.5 rounded-xl border border-outline bg-surface
                 hover:border-primary-500/50 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:scale-[1.02]
                 transition-all duration-300 shadow-md"
    >
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
        style={{ backgroundColor: bgColor, color: platform.color }}
      >
        {platform.icon}
      </div>
      <div className="min-w-0 flex-shrink-0">
        <div className="text-xs font-semibold text-on-surface leading-tight">{platform.label}</div>
        <div className="text-[10px] text-on-surface-variant truncate">{platform.username}</div>
      </div>
    </a>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────
const DigitalPresenceSection = () => {
  return (
    <section
      id="digital-presence"
      className="w-full h-full flex flex-col justify-evenly items-center gap-6 py-4"
    >
      {/* Section heading */}
      <div className="flex items-center justify-center gap-3 flex-shrink-0 w-full my-2">
        <span className="material-symbols-outlined text-[32px] text-primary-500">public</span>
        <h2 className="text-3xl md:text-4xl font-semibold text-primary-500"> 
          Digital Presence
        </h2>
      </div>

      {/* Row 1: Socials & Coding Platforms */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 flex-shrink-0 w-full justify-center items-center">
        {/* Socials */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-sm font-semibold text-on-surface-variant tracking-wider uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">group</span>
            Socials
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {SOCIALS.map(s => (
              <PlatformLink key={s.id} platform={s} />
            ))}
          </div>
        </div>

        {/* Coding Platforms */}
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-sm font-semibold text-on-surface-variant tracking-wider uppercase flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">code</span>
            Coding Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {CODING_PLATFORMS.map(p => (
              <PlatformLink key={p.id} platform={p} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Row 2: GitHub Cards ── */}
      <div className="flex-1 min-h-0 flex items-center justify-center w-full">
        <GitHubCardsSection />
      </div>
    </section>
  );
};

export default DigitalPresenceSection;
