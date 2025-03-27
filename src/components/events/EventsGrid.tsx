import React from 'react';
import { motion } from 'framer-motion';
// import { EventCard } from '../EventCard';

interface EventsGridProps {
  events: Event[];
}

const EventsGrid: React.FC<EventsGridProps> = ({ events }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  console.log(events)
  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  // };

  return (
    <motion.div
      className='mt-8'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* {events.map((event, index) => (
          <motion.div key={event.id} variants={item} className='h-full'>
            <EventCard event={event} />
          </motion.div>
        ))} */}
      </div>
    </motion.div>
  );
};

export default EventsGrid;
