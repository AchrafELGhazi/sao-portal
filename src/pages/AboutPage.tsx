import React, { useState, useEffect } from 'react';
import {  useScroll, useTransform } from 'framer-motion';

import { saoTeam } from '@/data/saoTeam';
import HeroSection from '@/components/about/HeroSection';
import MissionSection from '@/components/about/MissionSection';
import ImpactSection from '@/components/about/ImpactSection';
import TimelineSection from '@/components/about/TimelineSection';
import TeamSection from '@/components/about/TeamSection';
import TestimonialsSection from '@/components/about/TestimonialsSection';
// import CTASection from '@/components/about/CTASection';
import { testimonials } from '@/data/testimonials';
import { stats } from '@/data/stats';


const AboutPage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState(
    saoTeam.length - 1
  );

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTeam = saoTeam[selectedSemesterIndex];

  return (
    <div className='min-h-screen bg-[#0F0F20] text-white overflow-hidden'>
      {/* Hero Section */}
      <HeroSection opacity={opacity} scale={scale} stats={stats} />

      {/* Mission Section */}
      <MissionSection />

      {/* Impact Section */}
      <ImpactSection />

      {/* Timeline Section */}
      <TimelineSection />

      {/* Team Section */}
      <TeamSection
        currentTeam={currentTeam}
        selectedSemesterIndex={selectedSemesterIndex}
        setSelectedSemesterIndex={setSelectedSemesterIndex}
        teamData={saoTeam}
      />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />

      {/* CTA Section */}
      {/* <CTASection /> */}
    </div>
  );
};

export default AboutPage;
