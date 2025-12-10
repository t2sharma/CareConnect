import React from 'react';
import { MetricChartCard } from '../charts/MetricChartCard';
import { TamSamSomChart } from '../charts/TamSamSomChart';
import { HealthcareCrmGrowthChart } from '../charts/HealthcareCrmGrowthChart';
import { PatientCommunicationChart } from '../charts/PatientCommunicationChart';

const cards = [
  {
    title: 'TAM / SAM / SOM',
    body:
      'Global healthcare CRM, patient engagement, and clinic front-office software together represent a ~$75-85B+ opportunity by 2030. Within that, we size a ~$25B SAM focused on outpatient clinics, dental, and specialty centers, and a ~$2-3B SOM where digital-first communication and CRM converge-the exact wedge CareConnect is building for.',
    chart: <TamSamSomChart />,
  },
  {
    title: 'Healthcare CRM growth',
    body:
      'Analysts expect healthcare CRM alone to exceed ~$25-30B by 2030, compounding at roughly 9-11% annually as providers modernize intake, centralize patient data, and automate outreach. This category is being pulled forward by value-based care, revenue pressure, and the need to do more with lean front-office teams.',
    chart: <HealthcareCrmGrowthChart />,
  },
  {
    title: 'Patient communication tailwinds',
    body:
      'Surveys show 80%+ of patients prefer SMS and digital messaging over phone calls for scheduling and reminders, and ~2/3 say they would switch providers for a better communication experience. Clinics are rapidly adopting workflow automation to handle rising volume and meet consumer-grade expectations for instant replies, self-serve booking, and proactive follow-ups.',
    chart: <PatientCommunicationChart />,
  },
];

export const MarketSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
            Market Opportunity
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
            A massive, compounding opportunity in healthcare ops.
          </h2>
          <p className="text-sm text-cc-muted sm:text-[15px]">
            CareConnect sits at the intersection of patient communication, CRM, and
            workflow automationa digital-first layer on top of a multi-decade
            modernization cycle in clinics around the world.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
          {cards.map((card) => (
            <MetricChartCard
              key={card.title}
              title={card.title}
              description={card.body}
              chart={card.chart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
