'use client';
import React, { useEffect, useState } from 'react';
import ProfileDetailsCard from './github_cards/ProfileDetailsCard';
import DonutChartCard from './github_cards/DonutChartCard';
import StatsCard from './github_cards/StatsCard';
import ProductiveTimeCard from './github_cards/ProductiveTimeCard';
import StreakCard from './github_cards/StreakCard';

function SkeletonCard({ className = '', scale = '1rem' }) {
  return (
    <div className={`github-card github-card--skeleton ${className} animate-pulse`} style={{ fontSize: scale }}>
      <div className="skeleton-line h-[0.75em] w-1/3 mb-[0.75em]" />
      <div className="skeleton-line--dim h-[0.5em] w-full rounded-[0.15em] mb-[0.5em]" style={{ backgroundColor: 'var(--skeleton-bg-dim)' }} />
      <div className="skeleton-line--dim h-[0.5em] w-4/5 rounded-[0.15em] mb-[0.5em]" style={{ backgroundColor: 'var(--skeleton-bg-dim)' }} />
      <div className="skeleton-line--dim h-[0.5em] w-2/3 rounded-[0.15em]" style={{ backgroundColor: 'var(--skeleton-bg-dim)' }} />
    </div>
  );
}

function ErrorCard({ title, className = '', scale = '1rem' }) {
  return (
    <div className={`github-card github-card--skeleton ${className} flex items-center justify-center`} style={{ fontSize: scale }}>
      <div className="text-center">
        <span className="github-card-error-icon material-symbols-outlined text-[1.5em]">error_outline</span>
        <p className="github-card-error-text text-[0.625em] mt-[0.25em]">{title}</p>
        <p className="github-card-error-hint text-[0.5625em]">Add GITHUB_TOKEN to .env.local</p>
      </div>
    </div>
  );
}

export default function GitHubCardsSection({ scale = '1rem' }) {
  const [profileData, setProfileData] = useState(null);
  const [repoLangData, setRepoLangData] = useState(null);
  const [commitLangData, setCommitLangData] = useState(null);
  const [productiveTimeData, setProductiveTimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const newErrors = {};

      const results = await Promise.allSettled([
        fetch('/components/digital_presence/github_api/profile-details').then(r => r.json()),
        fetch('/components/digital_presence/github_api/repos-per-language').then(r => r.json()),
        fetch('/components/digital_presence/github_api/commits-per-language').then(r => r.json()),
        fetch('/components/digital_presence/github_api/productive-time').then(r => r.json()),
      ]);

      const [profile, repoLang, commitLang, productive] = results;

      if (profile.status === 'fulfilled' && !profile.value.error) {
        setProfileData(profile.value);
      } else {
        newErrors.profile = profile.reason?.message || profile.value?.error || 'Failed';
      }

      if (repoLang.status === 'fulfilled' && !repoLang.value.error) {
        setRepoLangData(repoLang.value);
      } else {
        newErrors.repoLang = repoLang.reason?.message || repoLang.value?.error || 'Failed';
      }

      if (commitLang.status === 'fulfilled' && !commitLang.value.error) {
        setCommitLangData(commitLang.value);
      } else {
        newErrors.commitLang = commitLang.reason?.message || commitLang.value?.error || 'Failed';
      }

      if (productive.status === 'fulfilled' && !productive.value.error) {
        const chartData = productive.value.chartData || [];
        const formatted = chartData.map((commits, hour) => {
          const ampm = hour >= 12 ? 'PM' : 'AM';
          const displayHour = hour % 12 === 0 ? 12 : hour % 12;
          return { hour: `${displayHour} ${ampm}`, commits };
        });
        setProductiveTimeData(formatted);
      } else {
        newErrors.productive = productive.reason?.message || productive.value?.error || 'Failed';
      }

      setErrors(newErrors);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="w-full max-w-full h-full flex flex-col items-center gap-[0.5em]">
      {/* Section header */}
      <div className="flex items-center justify-center gap-[0.5em] mb-[0.25em] w-full">
        <svg height="1.125em" viewBox="0 0 16 16" className="github-section-icon flex-shrink-0" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
        <span className="github-section-title">My GitHub Stats</span>
      </div>

      {/* Cards grid — width driven by child content, no external size imposed */}
      <div
        className="grid grid-cols-1 sm:grid-cols-[auto_auto_auto_auto] gap-[1.2em] justify-center w-fit max-w-full min-h-0"
      >
        {/* Row 1: Profile Details (full width) — layout via wrapper, not className prop */}
        <div className="col-span-1 sm:col-span-4 w-full flex justify-center">
          {loading ? (
            <SkeletonCard scale={scale} />
          ) : errors.profile ? (
            <ErrorCard title="Profile data unavailable" scale={scale} />
          ) : (
            <ProfileDetailsCard data={profileData} scale={scale} />
          )}
        </div>

        {/* Row 2+3: Productive Time | Languages by Repo | Languages by Commit | Stats */}
        {loading ? (
          <>
            <SkeletonCard scale={scale} />
            <SkeletonCard scale={scale} />
            <SkeletonCard scale={scale} />
            <SkeletonCard scale={scale} />
          </>
        ) : (
          <>
            {errors.productive ? (
              <ErrorCard title="Productive time unavailable" scale={scale} />
            ) : (
              <ProductiveTimeCard data={productiveTimeData} scale={scale} />
            )}
            {errors.repoLang ? (
              <ErrorCard title="Language data unavailable" scale={scale} />
            ) : (
              <DonutChartCard title="Top Languages by Repo" data={repoLangData} scale={scale} />
            )}
            {errors.commitLang ? (
              <ErrorCard title="Commit language unavailable" scale={scale} />
            ) : (
              <DonutChartCard title="Top Languages by Commit" data={commitLangData} scale={scale} />
            )}
            {errors.profile ? (
              <ErrorCard title="Stats unavailable" scale={scale} />
            ) : (
              <StatsCard data={profileData} scale={scale} />
            )}
          </>
        )}
      </div>

      {/* Streak — outside the grid so it controls its own width independently */}
      <div className="w-full flex justify-center mt-[1em]">
        {loading ? (
          <SkeletonCard scale={scale} />
        ) : errors.profile ? (
          <ErrorCard title="Streak data unavailable" scale={scale} />
        ) : (
          <StreakCard data={profileData} scale={scale} />
        )}
      </div>
    </div>
  );
}
