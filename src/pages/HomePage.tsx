import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import StatsSection from '@/components/Home/StatsSection';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default HomePage;
