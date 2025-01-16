import React from 'react';
import { StatsCard } from '../components/StatsCard';
import HeroSection from '@/components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}

      <HeroSection />
      {/* Stats Section */}
      <section className='py-16 sm:py-20 relative'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-2xl sm:text-3xl font-bold mb-2'>
              Campus Life Insights
            </h2>
            <p className='text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base'>
              Real-time statistics about student activities and engagement
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
              <StatsCard
                title='Active Club Members'
                value='1,234'
                percentage={92}
                trend={[
                  { value: 800 },
                  { value: 950 },
                  { value: 1100 },
                  { value: 1234 },
                ]}
                color='orange'
              />

              <StatsCard
                title='Events This Semester'
                value='45'
                percentage={78}
                trend={[
                  { value: 20 },
                  { value: 25 },
                  { value: 35 },
                  { value: 45 },
                ]}
                color='purple'
              />

              <StatsCard
                title='Student Satisfaction'
                value='4.8/5'
                percentage={96}
                trend={[
                  { value: 4.2 },
                  { value: 4.4 },
                  { value: 4.6 },
                  { value: 4.8 },
                ]}
                color='blue'
              />

              <StatsCard
                title='International Trips'
                value='12'
                percentage={85}
                trend={[
                  { value: 4 },
                  { value: 6 },
                  { value: 8 },
                  { value: 12 },
                ]}
                color='green'
              />

              <StatsCard
                title='Musical Events'
                value='8'
                percentage={88}
                trend={[{ value: 2 }, { value: 4 }, { value: 6 }, { value: 8 }]}
                color='pink'
              />

              <StatsCard
                title='Community Service Hours'
                value='5,678'
                percentage={94}
                trend={[
                  { value: 3000 },
                  { value: 4000 },
                  { value: 5000 },
                  { value: 5678 },
                ]}
                color='yellow'
              />
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/20 rounded-full blur-[80px] sm:blur-[120px]' />
          <div className='absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-[80px] sm:blur-[120px]' />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
