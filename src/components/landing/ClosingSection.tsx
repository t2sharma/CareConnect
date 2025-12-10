import React from 'react';
import { Button } from '../ui/Button';

interface ClosingSectionProps {
  onViewDemo?: () => void;
  onRequestDeck?: () => void;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  onViewDemo,
  onRequestDeck,
}) => {
  return (
    <section className="bg-gradient-to-b from-cc-bg via-cc-surface to-cc-bg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl border border-cc-border bg-cc-surface/80 px-6 py-10 text-center shadow-elevation-md backdrop-blur sm:px-10">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
            Join us in transforming clinic communication.
          </h2>
          <p className="mt-3 text-sm text-cc-muted sm:text-[15px]">
            CareConnect is building the operating system for patient conversations and
            clinic revenue. We are assembling a small group of partners who understand the
            opportunity.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button size="md" variant="primary" onClick={onViewDemo}>
              View Demo
            </Button>
            <Button size="md" variant="secondary" onClick={onRequestDeck}>
              Request Investor Deck
            </Button>
          </div>
          <p className="mt-4 text-[11px] text-cc-muted">
            We respond to serious investor and operator inquiries within one business day.
          </p>
        </div>
        <footer className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-cc-border/60 pt-4 text-[11px] text-cc-muted sm:flex-row">
          <span>© {new Date().getFullYear()} CareConnect. All rights reserved.</span>
          <span>Modern Lead Management &amp; Patient Messaging for Clinics.</span>
        </footer>
      </div>
    </section>
  );
};
