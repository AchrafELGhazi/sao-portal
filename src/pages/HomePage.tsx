import React from 'react';
import HeroSection from '@/components/Home/HeroSection';
import StatsSection from '@/components/Home/StatsSection';
import EventsSection from '@/components/Home/EventsSection';
import ClubsSection from '@/components/Home/ClubsSection';
import GallerySection from '@/components/Home/GallerySection';
import CallToActionSection from '@/components/Home/CallToActionSection';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Events Section */}
      <EventsSection />

      {/* Clubs Section */}
      <ClubsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Call to Action Section */}
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
