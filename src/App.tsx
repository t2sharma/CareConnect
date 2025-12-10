import React from 'react';
import { LandingPage } from './components/landing/LandingPage';
import { MainLayout } from './layouts/MainLayout';

const App: React.FC = () => {
  const [showDemo, setShowDemo] = React.useState(false);

  const handleBackToLanding = React.useCallback(() => {
    setShowDemo(false);
  }, []);

  if (showDemo) {
    return <MainLayout onBackToLanding={handleBackToLanding} />;
  }

  return <LandingPage onNavigateToDemo={() => setShowDemo(true)} />;
};

export default App;
