import React from 'react';

const TABS = ['Lead List', 'Chat', 'Details'] as const;
type TabId = (typeof TABS)[number];

export const ThreePanelInboxPreview: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<TabId>('Lead List');

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('data-tab-id') as TabId | null;
      if (target) {
        setActiveTab(target);
      }
    }
  };

  return (
    <div className="group flex h-full flex-col rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-3 shadow-inner transition-transform duration-300 hover:scale-[1.01] hover:ring-2 hover:ring-cc-primary/60">
      {/* Tab strip */}
      <div
        role="tablist"
        aria-label="Three-panel inbox preview tabs"
        className="mb-2 flex gap-1 overflow-x-auto text-[11px] text-slate-300"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-tab-id={tab}
              onClick={() => setActiveTab(tab)}
              onKeyDown={handleKeyDown}
              className={`whitespace-nowrap rounded-full px-3 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary/70 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 ${
                isActive
                  ? 'bg-cc-primary text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div className="relative mt-1 flex-1 overflow-hidden rounded-xl bg-slate-950/40 p-3 text-[11px] text-slate-200">
        {activeTab === 'Lead List' && (
          <div className="flex h-full flex-col gap-1.5 animate-fade-in">
            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
              <span>Leads</span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[9px] text-slate-200">
                12 active
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                { name: 'C. Martinez', status: 'New' },
                { name: 'T. Kim', status: 'Booked' },
                { name: 'P. Desai', status: 'Follow-up' },
                { name: 'L. Carter', status: 'New' },
                { name: 'J. Lee', status: 'Follow-up' },
                { name: 'A. Gupta', status: 'New' },
              ].map((lead, index) => (
                <div
                  key={lead.name}
                  className={`flex items-center justify-between rounded-lg border px-2 py-1.5 ${
                    index === 0
                      ? 'border-cc-primary/50 bg-cc-primary/15 shadow-[0_0_0_1px_rgba(74,96,246,0.4)]'
                      : 'border-slate-800 bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[9px] font-medium text-slate-100">
                      {lead.name
                        .split(' ')
                        .map((p) => p[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-100">{lead.name}</p>
                      <p className="text-[10px] text-slate-400">New inquiry · teeth whitening</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] ${
                      lead.status === 'Booked'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : lead.status === 'Follow-up'
                          ? 'bg-amber-500/15 text-amber-300'
                          : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Chat' && (
          <div className="flex h-full flex-col gap-2 animate-fade-in">
            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
              <span>Conversation</span>
              <span className="rounded-full bg-cc-primary/15 px-2 py-0.5 text-cc-primary">
                Live
              </span>
            </div>
            <div className="flex-1 space-y-1.5 overflow-hidden">
              <div className="flex items-start gap-1.5">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-slate-700" />
                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-2 py-1">
                  <p className="text-[10px]">
                    Hi, I&apos;d like to schedule a consultation for next week.
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">Patient · SMS</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] rounded-2xl bg-cc-primary px-2 py-1 text-right">
                  <p className="text-[10px] text-white">
                    We have openings Tuesday and Thursday. Which day works best?
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-100">AI draft · 2s</p>
                </div>
              </div>
              <div className="flex items-start gap-1.5">
                <div className="mt-0.5 h-4 w-4 rounded-full bg-slate-700" />
                <div className="max-w-[80%] rounded-2xl bg-slate-800 px-2 py-1">
                  <p className="text-[10px]">Thursday afternoon works great.</p>
                  <p className="mt-0.5 text-[9px] text-slate-400">Patient</p>
                </div>
              </div>
            </div>
            <div className="mt-auto space-y-1">
              <div className="flex items-center justify-between rounded-lg bg-slate-900/80 px-2 py-1 text-[9px] text-slate-300">
                <span className="rounded-full bg-cc-primary/15 px-2 py-0.5 text-cc-primary">
                  AI suggestion ready
                </span>
                <span>Press Tab to apply</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-slate-900/90 px-2 py-1.5 text-[10px]">
                <div className="flex-1 rounded-md bg-slate-800/80 px-2 py-1 text-slate-300">
                  Type a reply
                </div>
                <button className="rounded-full bg-cc-primary px-3 py-1 text-[10px] font-medium text-white">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Details' && (
          <div className="flex h-full flex-col gap-2 animate-fade-in">
            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
              <span>Lead details</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                Booked
              </span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="rounded-lg bg-slate-900/80 px-2 py-1.5">
                <p className="text-[11px] text-slate-100">Carla Martinez</p>
                <p className="text-slate-400">Ortho consult · Invisalign</p>
              </div>
              <div className="flex justify-between gap-1">
                <div className="flex-1 rounded-lg bg-slate-900/80 px-2 py-1.5">
                  <p className="text-slate-400">Phone</p>
                  <p className="text-slate-200">(415) 555-0123</p>
                </div>
                <div className="flex-1 rounded-lg bg-slate-900/80 px-2 py-1.5">
                  <p className="text-slate-400">Source</p>
                  <p className="text-slate-200">Google Ads</p>
                </div>
              </div>
              <div className="rounded-lg bg-slate-900/80 px-2 py-1.5">
                <p className="text-slate-400">Next follow-up</p>
                <p className="text-slate-200">3 days before appointment · SMS reminder</p>
              </div>
              <div className="rounded-lg bg-slate-900/90 px-2 py-1.5">
                <p className="text-slate-400">Notes</p>
                <p className="text-slate-200">
                  Prefers afternoon slots. Mention financing options and before/after photos.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
