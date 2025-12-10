import React from 'react';
import {
  ExclamationTriangleIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  NoSymbolIcon,
} from '@heroicons/react/24/outline';

const items = [
  {
    title: 'Missed or forgotten leads',
    description:
      'High-intent patients slip through the cracks when inquiries live across phones, inboxes, and sticky notes.',
    Icon: NoSymbolIcon,
  },
  {
    title: 'No structured follow-up or tracking',
    description:
      'Teams work from spreadsheets with no clear next steps, SLAs, or visibility into where revenue is leaking.',
    Icon: ClockIcon,
  },
  {
    title: 'Staff overwhelmed with manual outreach',
    description:
      'Front-desk teams spend hours a day chasing texts and voicemails instead of running the clinic.',
    Icon: ChatBubbleLeftEllipsisIcon,
  },
  {
    title: 'Patients waiting days for a response',
    description:
      'Potential patients go cold-or book elsewhere-because no one can reliably follow up in minutes, not days.',
    Icon: ExclamationTriangleIcon,
  },
];

export const ProblemSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
            The Problem
          </p>
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
            Clinics lose revenue every single day.
          </h2>
          <p className="text-sm text-cc-muted sm:text-[15px]">
            Follow-ups are slow, manual, and scattered across channels. No one has a
            reliable view of who reached out, who was contacted, or which conversations
            actually turned into appointments.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-6">
          {items.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex gap-3 rounded-xl border border-cc-border bg-cc-bg/80 p-4 shadow-elevation-xs"
            >
              <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-cc-primary-soft text-cc-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-cc-text">{title}</h3>
                <p className="text-xs text-cc-muted sm:text-[13px]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
