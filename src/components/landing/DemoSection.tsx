import React from 'react';
import { Button } from '../ui/Button';
import { DemoPreviewCard } from './DemoPreviewCard';

interface DemoSectionProps {
  onLaunchDemo?: () => void;
  onInvestorDeck?: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({
  onLaunchDemo,
  onInvestorDeck,
}) => {
  return (
    <section className="border-b border-cc-border/60 bg-cc-bg" id="demo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cc-primary">
              Product Preview
            </p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-cc-text sm:text-3xl">
              See CareConnect in action.
            </h2>
            <p className="text-sm text-cc-muted sm:text-[15px]">
              Walk through the live CareConnect inbox prototype: explore the lead list,
              open conversations, and slide out detailed patient profiles in real time.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button size="md" variant="primary" onClick={onLaunchDemo}>
                Launch Interactive Demo
              </Button>
              <Button size="md" variant="secondary" onClick={onInvestorDeck}>
                Investor Deck
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <DemoPreviewCard
                title="CareConnect Inbox"
                subtitle="Live prototype preview"
                onLaunchDemo={onLaunchDemo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
