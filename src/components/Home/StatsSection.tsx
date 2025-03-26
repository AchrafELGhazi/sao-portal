import { StatsCard } from '../StatsCard';

const StatsSection = () => {
  return (
    <section className='w-full py-16 sm:py-20 relative overflow-hidden'>
      <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-10 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-3'>
            Campus Life Insights
          </h2>
          <p className='text-gray-400 text-base sm:text-lg max-w-2xl mx-auto'>
            Real-time statistics about student activities and engagement
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
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
            trend={[{ value: 20 }, { value: 25 }, { value: 35 }, { value: 45 }]}
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
            trend={[{ value: 4 }, { value: 6 }, { value: 8 }, { value: 12 }]}
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

      {/* Background decorative elements */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-70' />
      </div>
    </section>
  );
};

export default StatsSection;
