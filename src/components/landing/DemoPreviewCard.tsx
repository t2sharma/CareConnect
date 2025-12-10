import React from 'react';

interface DemoPreviewCardProps {
  title: string;
  subtitle: string;
  demoUrl?: string;
  onLaunchDemo?: () => void;
}

export const DemoPreviewCard: React.FC<DemoPreviewCardProps> = ({
  title,
  subtitle,
  demoUrl,
  onLaunchDemo,
}) => {
  const handleActivate = () => {
    if (onLaunchDemo) {
      onLaunchDemo();
      return;
    }
    if (!demoUrl) return;
    window.open(demoUrl, '_blank', 'noopener');
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleActivate();
    }
  };

  const isDisabled = !demoUrl && !onLaunchDemo;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cc-border bg-cc-bg/90 p-4 shadow-elevation-sm">
      <div className="mb-3 flex items-center justify-between text-xs">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cc-primary">
            {subtitle}
          </p>
          <p className="text-sm font-semibold text-cc-text">{title}</p>
        </div>
        <span className="rounded-full bg-cc-primary/15 px-3 py-1 text-[11px] font-medium text-cc-primary">
          Investor Demo
        </span>
      </div>

      <div
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-label={
          isDisabled && !onLaunchDemo
            ? `${title} demo coming soon`
            : `Open ${title} live demo`
        }
        onClick={isDisabled ? undefined : handleActivate}
        onKeyDown={isDisabled ? undefined : handleKeyDown}
        className={`group relative h-64 w-full overflow-hidden rounded-xl bg-slate-900/80 p-3 shadow-inner transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:h-72 ${
            isDisabled && !onLaunchDemo
            ? 'cursor-not-allowed opacity-70'
            : 'cursor-pointer hover:scale-[1.02] hover:ring-2 hover:ring-cc-primary/60'
        }`}
      >
        {/* Faux 3-panel inbox */}
        <div className="pointer-events-none relative flex h-full w-full gap-2 text-[10px] text-slate-200">
          {/* Left: lead list */}
          <div className="flex w-[26%] flex-col rounded-lg bg-slate-900/90 p-2 ring-1 ring-slate-800">
            <div className="mb-1 flex items-center justify-between text-[9px] text-slate-400">
              <span>Leads</span>
              <span className="rounded-full bg-slate-800 px-1.5 py-0.5 text-[8px] text-slate-300">
                12 active
              </span>
            </div>
            <div className="space-y-1.5">
              {['C. Martinez', 'P. Desai', 'L. Carter', 'J. Lee', 'A. Gupta'].map(
                (name, index) => (
                  <div
                    key={name}
                    className={`flex items-center justify-between rounded-md px-1.5 py-1 ${
                      index === 0
                        ? 'bg-cc-primary/25 text-slate-50'
                        : 'bg-slate-800/80 text-slate-200'
                    }`}
                  >
                    <span className="truncate">{name}</span>
                    <span className="text-[9px] text-slate-300">New</span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Center: chat */}
          <div className="flex w-[46%] flex-col rounded-lg bg-slate-900/95 p-2 ring-1 ring-slate-800">
            <div className="mb-1 flex items-center justify-between text-[9px] text-slate-400">
              <span>Conversation</span>
              <span className="rounded-full bg-cc-primary/15 px-2 py-0.5 text-cc-primary">
                Live
              </span>
            </div>
            <div className="mt-1 flex flex-1 flex-col gap-1.5">
              <div className="flex items-start gap-1.5">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-slate-700" />
                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-2 py-1">
                  <p className="text-[10px]">Hi, I&apos;m interested in an appointment next week.</p>
                  <p className="mt-0.5 text-[9px] text-slate-400">Patient · SMS</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-cc-primary px-2 py-1 text-right">
                  <p className="text-[10px] text-white">
                    We have availability Tuesday and Thursday. What day works best?
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-100">AI draft · 2s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: lead details */}
          <div className="flex w-[28%] flex-col rounded-lg bg-slate-900/90 p-2 ring-1 ring-slate-800">
            <div className="mb-1 flex items-center justify-between text-[9px] text-slate-400">
              <span>Lead details</span>
              <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[8px] text-emerald-300">
                Hot
              </span>
            </div>
            <div className="space-y-1.5 text-[9px]">
              <div className="rounded-md bg-slate-800/80 px-2 py-1">
                <p className="text-slate-200">Dental implant consult</p>
                <p className="text-slate-400">High intent · Google Ads</p>
              </div>
              <div className="rounded-md bg-slate-800/60 px-2 py-1">
                <p className="text-slate-300">Last activity</p>
                <p className="text-slate-400">AI reply suggested · 2s ago</p>
              </div>
              <div className="flex items-center justify-between rounded-md bg-slate-800/60 px-2 py-1">
                <span className="text-slate-300">Score</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
                  92
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover overlay CTA */}
        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/70 via-slate-950/40 to-transparent text-center text-xs text-slate-100 transition-opacity duration-300 ${
            isDisabled && !onLaunchDemo
              ? 'opacity-80'
              : 'opacity-80 sm:opacity-0 group-hover:opacity-100'
          }`}
        >
          <div className="flex flex-col items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 shadow-lg shadow-cc-primary/30">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cc-primary/80 text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5 fill-current"
              >
                <path d="M4 3.5v13l11-6.5-11-6.5z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold">
                {isDisabled && !onLaunchDemo
                  ? 'Demo link coming soon'
                  : 'Launch Interactive Demo'}
              </p>
              <p className="mt-0.5 text-[10px] text-slate-300">
                {isDisabled && !onLaunchDemo
                  ? 'Ask the team for the latest demo URL.'
                  : 'Opens in a new tab'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
