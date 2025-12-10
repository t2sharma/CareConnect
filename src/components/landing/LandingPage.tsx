import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { ProblemSection } from './ProblemSection';
import { SolutionSection } from './SolutionSection';
import { FeaturesSection } from './FeaturesSection';
import { StatsSection } from './StatsSection';
import { MarketSection } from './MarketSection';
import { DemoSection } from './DemoSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ClosingSection } from './ClosingSection';

interface LandingPageProps {
  onNavigateToDemo?: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigateToDemo }) => {
  const handleViewDemo = React.useCallback(() => {
    if (onNavigateToDemo) {
      onNavigateToDemo();
    }
  }, [onNavigateToDemo]);

  const handleInvestorOverview = React.useCallback(() => {
    const el = document.getElementById('market');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-cc-bg text-cc-text">
      <Navbar onViewDemo={handleViewDemo} onInvestorOverview={handleInvestorOverview} />
      <main>
        <Hero onViewDemo={handleViewDemo} onInvestorOverview={handleInvestorOverview} />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <StatsSection />
        <section id="market">
          <MarketSection />
        </section>
        <DemoSection
          onLaunchDemo={handleViewDemo}
          onInvestorDeck={handleInvestorOverview}
        />
        <TestimonialsSection />
        <ClosingSection onViewDemo={handleViewDemo} onRequestDeck={handleInvestorOverview} />
      </main>
    </div>
  );
};
