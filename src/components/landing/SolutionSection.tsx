import React from 'react';
import { ThreePanelInboxPreview } from './ThreePanelInboxPreview';

export const SolutionSection: React.FC = () => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
              The Solution
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
              One AI-powered inbox. Every lead. Zero leakage.
            </h2>
            <p className="text-sm text-cc-muted sm:text-[15px]">
              CareConnect combines messaging, automation, and intelligence in a single placeso
              clinics convert more leads with less effort.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-cc-text sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cc-primary" />
                <div>
                  <p className="font-medium">Unified omni-channel inbox</p>
                  <p className="text-xs text-cc-muted">
                    SMS, email, WhatsApp, and webchat in one clean, accountable queue.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cc-primary" />
                <div>
                  <p className="font-medium">AI auto-responses</p>
                  <p className="text-xs text-cc-muted">
                    Clinic-safe replies that answer common questions in seconds, not hours.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium">Automated follow-up journeys</p>
                  <p className="text-xs text-cc-muted">
                    Nurture leads with smart, timed outreach until they book or clearly opt out.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium">Smart pipeline stages</p>
                  <p className="text-xs text-cc-muted">
                    Reflect the patient journey from new inquiry to confirmed appointment.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl border border-cc-border bg-cc-surface p-3 shadow-elevation-md">
              <div className="mb-3 flex items-center justify-between text-xs text-cc-muted">
                <span className="font-medium text-cc-text">Three-Panel Inbox Preview</span>
                <span>Lead List · Chat · Details</span>
              </div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-cc-border/80 bg-transparent">
                <ThreePanelInboxPreview />
              </div>
              <p className="mt-3 text-[11px] text-cc-muted">
                Designed to feel familiar to teams that use tools like Intercom or HubSpot,
                but built specifically for clinics and patient journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
