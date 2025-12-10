import React from 'react';
import { Button } from '../ui/Button';

interface HeroProps {
  onViewDemo?: () => void;
  onInvestorOverview?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewDemo,
  onInvestorOverview,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-cc-border/60 bg-gradient-to-b from-cc-surface via-cc-bg to-cc-bg">
      <div className="pointer-events-none absolute inset-x-0 top-[-240px] flex justify-center opacity-70">
        <div className="h-72 w-[720px] rounded-full bg-cc-primary/10 blur-3xl" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-cc-border bg-cc-surface/70 px-2 py-1 text-[11px] font-medium text-cc-muted shadow-elevation-xs backdrop-blur">
            Built for modern clinics
            <span className="ml-2 h-1.5 w-1.5 rounded-full bg-cc-primary" />
          </p>
          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-cc-text sm:text-4xl lg:text-5xl">
              Turn Every Clinic Lead into a Confirmed Appointment.
            </h1>
            <p className="max-w-lg text-balance text-sm text-cc-muted sm:text-base">
              CareConnect is an AI-powered lead inbox that helps clinics respond in seconds, prioritize hot leads, and automate follow-ups-so no patient is left behind.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="md" variant="primary" onClick={onViewDemo}>
              View Interactive Demo
            </Button>
            <Button size="md" variant="secondary" onClick={onInvestorOverview}>
              See Why Investors Are Excited
            </Button>
            <p className="w-full text-xs text-cc-muted sm:w-auto">
              Lead messaging for modern clinics.
            </p>
          </div>
          <dl className="mt-6 grid max-w-md grid-cols-2 gap-4 text-xs text-cc-muted sm:text-[13px]">
            <div>
              <dt className="font-medium text-cc-text">Lead Management</dt>
              <dd className="mt-1">Unified, structured, and built for high-intent inbound volume.</dd>
            </div>
            <div>
              <dt className="font-medium text-cc-text">Patient Messaging</dt>
              <dd className="mt-1">SMS-style conversations that feel human and convert quickly.</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="relative w-full max-w-md rounded-2xl border border-transparent bg-gradient-to-br from-cc-primary/80 via-cc-primary to-indigo-600 p-[1px] shadow-elevation-lg">
            <div className="relative h-full w-full rounded-2xl bg-cc-surface/95 p-3 shadow-elevation-md">
              <div className="mb-3 flex items-center justify-between gap-2 rounded-xl bg-cc-bg px-3 py-2">
                <div>
                  <p className="text-xs font-medium text-cc-text">CareConnect Inbox</p>
                  <p className="text-[11px] text-cc-muted">Live prototype preview</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
                  Investor Demo
                </span>
              </div>
              <div
                role="button"
                tabIndex={onViewDemo ? 0 : -1}
                aria-label={
                  onViewDemo
                    ? 'Open CareConnect live demo from hero preview'
                    : 'CareConnect live demo preview (connect onViewDemo to enable)'
                }
                onClick={onViewDemo}
                onKeyDown={(event) => {
                  if (!onViewDemo) return;
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onViewDemo();
                  }
                }}
                className={`group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-cc-border bg-slate-950/80 p-3 shadow-inner transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary/80 focus-visible:ring-offset-2 focus-visible:ring-offset-cc-surface ${
                  onViewDemo
                    ? 'cursor-pointer hover:scale-[1.02] hover:border-cc-primary/80'
                    : 'cursor-default opacity-70'
                }`}
              >
                {/* Faux 3-panel inbox */}
                <div className="pointer-events-none relative flex h-full w-full gap-2 text-[10px] text-slate-200">
                  {/* Left: lead list */}
                  <div className="flex w-[26%] flex-col rounded-lg bg-slate-900/90 p-2 ring-1 ring-slate-800/70">
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

                  {/* Center: conversation */}
                  <div className="flex w-[46%] flex-col rounded-lg bg-slate-900/95 p-2 ring-1 ring-slate-800/70">
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
                          <p className="text-[10px]">
                            Hi, I&apos;m interested in an appointment next week.
                          </p>
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
                  <div className="flex w-[28%] flex-col rounded-lg bg-slate-900/90 p-2 ring-1 ring-slate-800/70">
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

                {/* Overlay CTA */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950/70 via-slate-950/40 to-transparent text-center text-xs text-slate-100 opacity-80 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                  <div className="flex flex-col items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 shadow-lg shadow-cc-primary/40">
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
                      <p className="text-[11px] font-semibold">Launch Interactive Demo</p>
                      <p className="mt-0.5 text-[10px] text-slate-300">
                        Opens the live CareConnect inbox prototype
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-cc-muted">
                No engineering integration required for the prototype. Bring your own demo
                URL and connect it to the primary call-to-action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
