// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import useEventsFilter from '@/hooks/useEventsFilter';
// import EventsHeader from '@/components/events/EventsHeader';
// import EventsStats from '@/components/events/EventsStats';
// import EventsSearch from '@/components/events/EventsSearch';
// import EventsFilterControls from '@/components/events/EventsFilterControls';
// import EventsActiveFilters from '@/components/events/EventsActiveFilters';
// import EventsGrid from '@/components/events/EventsGrid';
// import EventsEmptyState from '@/components/events/EventsEmptyState';


export default function EventsPage(): JSX.Element {
  // const [showStats, setShowStats] = useState<boolean>(false);

  // const {
  //   filteredEvents,
  //   stats,
  //   searchQuery,
  //   setSearchQuery,
  //   selectedYear,
  //   setSelectedYear,
  //   selectedCategory,
  //   setSelectedCategory,
  //   activeFilters,
  //   clearFilters,
  // } = useEventsFilter();

  return (
    <div className='min-h-screen pt-24 pb-20 bg-gradient-to-br from-[#0F0F1A] to-[#1D1D35]'>
      {/* <motion.div
        className='w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='flex flex-col space-y-8'>
          <EventsHeader showStats={showStats} setShowStats={setShowStats} />

          {showStats && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <EventsStats stats={stats} />
            </motion.div>
          )}

          <div className='max-w-5xl mx-auto w-full space-y-6'>
            <EventsSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <div className='flex flex-wrap gap-4'>
              <EventsFilterControls
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              {activeFilters.length > 0 && (
                <motion.button
                  onClick={clearFilters}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all duration-300'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                  <span>Clear Filters</span>
                </motion.button>
              )}
            </div>

            <EventsActiveFilters activeFilters={activeFilters} />
          </div>

          {filteredEvents.length > 0 ? (
            <EventsGrid events={filteredEvents} />
          ) : (
            <EventsEmptyState clearFilters={clearFilters} />
          )}
        </div>
      </motion.div> */}
    </div>
  );
}
