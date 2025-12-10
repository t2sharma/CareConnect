import React from 'react';
import {
  SparklesIcon,
  ChartBarIcon,
  BoltIcon,
  FunnelIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  BellAlertIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    id: 'autoResponder',
    title: 'AI Auto-Responder',
    description:
      'Reply to patient inquiries instantly with clinic-safe, customizable AI messages.',
    Icon: SparklesIcon,
  },
  {
    id: 'leadScoring',
    title: 'AI Lead Scoring',
    description:
      'Surface hot leads based on behavior, responsiveness, and intent signals.',
    Icon: ChartBarIcon,
  },
  {
    id: 'followSequences',
    title: 'Automated Follow-Up Sequences',
    description:
      'Never forget a lead-nurture them with smart, timed outreach across channels.',
    Icon: BoltIcon,
  },
  {
    id: 'appointmentBooking',
    title: 'Integrated Appointment Booking',
    description:
      'Turn conversations into confirmed visits, synced to the clinic’s calendar stack.',
    Icon: CalendarDaysIcon,
  },
  {
    id: 'omniChannel',
    title: 'Omni-Channel Messaging',
    description:
      'SMS, email, WhatsApp, and webchat in one clean CareConnect inbox.',
    Icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 'reputationEngine',
    title: 'Reputation & Review Engine',
    description:
      'Trigger 1-click Google or Facebook review requests after every visit.',
    Icon: FunnelIcon,
  },
  {
    id: 'noPatientAlerts',
    title: 'No Patient Left Behind Alerts',
    description:
      'Highlight stalled leads and overdue follow-ups before revenue quietly slips away.',
    Icon: BellAlertIcon,
  },
  {
    id: 'pipelineDashboard',
    title: 'Pipeline & Revenue Dashboard',
    description:
      'See real-time conversion rates and estimated revenue lift from CareConnect.',
    Icon: ArrowTrendingUpIcon,
  },
];

const FeatureMock: React.FC<{ id: string }> = ({ id }) => {
  const baseClasses =
    'mt-4 flex-1 rounded-xl border border-slate-800 bg-slate-900/70 p-3 text-[11px] text-cc-muted flex flex-col gap-2';

  if (id === 'autoResponder') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="rounded-full bg-slate-800 px-2 py-0.5">Inbox · New lead</span>
          <span className="rounded-full bg-cc-primary/10 px-2 py-0.5 text-cc-primary">
            AI suggestion
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <div className="flex items-start gap-1.5">
            <div className="mt-0.5 h-4 w-4 rounded-full bg-slate-700" />
            <div className="max-w-[80%] rounded-2xl bg-slate-800 px-2 py-1">
              <p className="text-[10px] text-slate-200">Hi, do you have availability next week?</p>
              <p className="mt-0.5 text-[9px] text-slate-400">Patient</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl bg-cc-primary/90 px-2 py-1 text-right">
              <p className="text-[10px] text-white">We can see you as early as Tuesday.</p>
              <p className="mt-0.5 text-[9px] text-slate-200">AI draft · 2s</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'leadScoring') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-medium text-slate-100">Lead list</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300 text-[9px]">
            HOT
          </span>
        </div>
        <div className="mt-2 space-y-1.5 text-[10px]">
          <div className="flex items-center justify-between rounded-lg bg-slate-800/80 px-2 py-1">
            <span className="text-slate-100">C. Martinez</span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">92</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-800/60 px-2 py-1">
            <span className="text-slate-200">P. Desai</span>
            <span className="rounded-full bg-lime-500/20 px-2 py-0.5 text-lime-300">78</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-800/40 px-2 py-1">
            <span className="text-slate-300">L. Carter</span>
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-amber-300">60</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'followSequences') {
    return (
      <div className={baseClasses}>
        <div className="text-[10px] text-slate-300">Follow-up journey</div>
        <div className="mt-1 flex items-center gap-2 text-[9px]">
          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex items-center gap-1">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/80 text-[8px] text-slate-950">
                ✓
              </span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-100">
                Day 1 · SMS
              </span>
            </div>
            <div className="ml-1 h-4 w-px bg-slate-700" />
            <div className="flex items-center gap-1">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-slate-700 text-[8px] text-slate-200">
                ●
              </span>
              <span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-200">
                Day 3 · Reminder
              </span>
            </div>
            <div className="ml-1 h-4 w-px bg-slate-800" />
            <div className="flex items-center gap-1">
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-slate-800 text-[8px] text-slate-300">
                ⏱
              </span>
              <span className="rounded-full bg-slate-900 px-2 py-0.5 text-slate-300">
                Day 7 · Final touch
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'appointmentBooking') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-medium text-slate-100">Thu 24</span>
          <span className="rounded-full bg-slate-800 px-2 py-0.5">Schedule</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
          <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-200">2:30 PM</span>
          <span className="rounded-full bg-cc-primary px-2 py-1 text-white">
            3:00 PM · Booked
          </span>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-200">4:15 PM</span>
        </div>
      </div>
    );
  }

  if (id === 'omniChannel') {
    return (
      <div className={baseClasses}>
        <div className="flex flex-wrap gap-1 text-[9px]">
          <span className="rounded-full bg-cc-primary/20 px-2 py-0.5 text-cc-primary">SMS</span>
          <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-sky-300">Email</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">WA</span>
          <span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-fuchsia-300">Web</span>
        </div>
        <div className="mt-2 space-y-1 text-[10px]">
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-2 py-1">
            <span className="h-3 w-3 rounded-full bg-cc-primary" />
            <span className="truncate text-slate-100">"Your appointment for tomorrow is confirmed."</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-800/60 px-2 py-1">
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="truncate text-slate-200">"New consult request from website form."</span>
          </div>
        </div>
      </div>
    );
  }

  if (id === 'reputationEngine') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-medium text-slate-100">BrightSmile Clinic</span>
          <span className="rounded-full bg-slate-800 px-2 py-0.5">4.8 ★</span>
        </div>
        <div className="mt-2 flex items-center gap-0.5 text-[12px]">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="text-amber-300">
              ★
            </span>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[9px] text-slate-300">
          <span>Recent reviews</span>
          <span>+12 this week</span>
        </div>
        <button className="mt-2 inline-flex items-center justify-center rounded-full bg-cc-primary/90 px-3 py-1 text-[10px] font-medium text-white">
          Send review request
        </button>
      </div>
    );
  }

  if (id === 'noPatientAlerts') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center gap-2 text-[10px] text-slate-300">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-500/80 text-[9px] text-slate-950">
            !
          </span>
          <div>
            <p className="text-slate-100">3 leads overdue</p>
            <p className="text-[9px] text-amber-200">Follow up today</p>
          </div>
        </div>
        <div className="mt-2 space-y-1 text-[9px]">
          {['J. Rivera', 'M. Chen', 'A. Gupta'].map((name, idx) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-lg bg-slate-800/70 px-2 py-1"
            >
              <span className="text-slate-200">{name}</span>
              <span
                className={`flex h-2.5 w-2.5 items-center justify-center rounded-full ${
                  idx === 0 ? 'bg-red-500' : 'bg-amber-400'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === 'pipelineDashboard') {
    return (
      <div className={baseClasses}>
        <div className="flex items-center justify-between text-[10px] text-slate-300">
          <span className="font-medium text-slate-100">Pipeline</span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
            +34% conv
          </span>
        </div>
        <div className="mt-3 flex items-end gap-1.5">
          <div className="h-5 w-4 rounded-sm bg-slate-700" />
          <div className="h-7 w-4 rounded-sm bg-cc-primary/80" />
          <div className="h-9 w-4 rounded-sm bg-cc-primary" />
          <div className="h-11 w-4 rounded-sm bg-emerald-500/90" />
          <div className="h-6 w-4 rounded-sm bg-cc-primary/60" />
        </div>
        <div className="mt-2 flex justify-between text-[9px] text-slate-400">
          <span>Leads</span>
          <span>Booked</span>
        </div>
      </div>
    );
  }

  return <div className={baseClasses} />;
};

export const FeaturesSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
              Killer Features
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
              The AI and automation layer clinics are missing.
            </h2>
            <p className="text-sm text-cc-muted sm:text-[15px]">
              CareConnect is not just another inbox - it is a revenue engine, built around
              AI, automation, and a pipeline view of every patient journey.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {features.map(({ id, title, description, Icon }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-2xl border border-cc-border bg-cc-bg/80 p-4 shadow-elevation-xs transition-transform transition-shadow hover:-translate-y-[1px] hover:shadow-elevation-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary-soft text-cc-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-cc-text">{title}</h3>
              </div>
              <p className="mt-3 text-xs text-cc-muted sm:text-[13px]">{description}</p>
              <FeatureMock id={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
