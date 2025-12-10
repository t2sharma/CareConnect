import React from 'react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onViewDemo?: () => void;
  onInvestorOverview?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onViewDemo,
  onInvestorOverview,
}) => {
  return (
    <header className="sticky top-0 z-30 border-b border-cc-border/60 bg-cc-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cc-primary-soft text-sm font-semibold text-cc-primary shadow-elevation-sm">
            CC
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-cc-text">
              CareConnect
            </div>
            <div className="text-[11px] text-cc-muted">
              Modern Lead Management &amp; Patient Messaging for Clinics
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <button
            type="button"
            onClick={onInvestorOverview}
            className="text-xs font-medium text-cc-muted transition-colors hover:text-cc-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-primary"
          >
            See Why Investors Are Excited
          </button>
          <Button size="sm" variant="primary" onClick={onViewDemo}>
            View Interactive Demo
          </Button>
        </div>
        <div className="flex items-center gap-2 sm:hidden">
          <Button size="sm" variant="primary" onClick={onViewDemo}>
            View Demo
          </Button>
        </div>
      </div>
    </header>
  );
};
