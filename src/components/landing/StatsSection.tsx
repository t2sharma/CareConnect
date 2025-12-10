import React from 'react';

const stats = [
  {
    label: 'More conversions with structured follow-up',
    value: '30–50%',
    description:
      'Clinics that adopt structured follow-up workflows consistently see 30–50% higher lead-to-appointment conversions across multiple patient intake studies.',
  },
  {
    label: 'Patient responsiveness',
    value: '80%',
    description:
      'Over 80% of patients respond within minutes when contacted via SMS, making text the highest-performing outreach channel for modern clinics.',
  },
  {
    label: 'Lost demand today',
    value: '10M+',
    description:
      'Across the U.S., millions of potential patient inquiries go unanswered each year due to slow follow-up and fragmented communication tools.',
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
              Traction Potential
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
              Data investors can underwrite.
            </h2>
            <p className="text-sm text-cc-muted sm:text-[15px]">
              Early research and industry trends reveal powerful traction indicators for
              CareConnect's approach: structured follow-up, SMS-first outreach, and better
              inbox workflows directly map to higher conversion and revenue capture for
              clinics.
            </p>
          </div>
        </div>
        <dl className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-cc-border bg-cc-surface p-4 text-sm shadow-elevation-xs"
            >
              <dt className="text-[13px] font-medium text-cc-muted">{stat.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight text-cc-text">
                {stat.value}
              </dd>
              <p className="mt-2 text-xs text-cc-muted sm:text-[13px]">{stat.description}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
