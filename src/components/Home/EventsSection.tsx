import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronRight } from 'lucide-react';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
};

const EventsSection: React.FC = () => {
  // Sample events data
  const events = [
    {
      title: 'Annual Leadership Conference',
      date: 'April 15, 2025',
      location: 'Conference Center',
      image: '/events/leadership.webp',
      category: 'Leadership',
    },
    {
      title: 'Cultural Diversity Festival',
      date: 'May 5, 2025',
      location: 'Main Campus',
      image: '/events/cultural.webp',
      category: 'Culture',
    },
    {
      title: 'Tech Innovation Summit',
      date: 'June 10, 2025',
      location: 'Engineering Building',
      image: '/events/tech.webp',
      category: 'Technology',
    },
    {
      title: 'Spring Charity Concert',
      date: 'April 28, 2025',
      location: 'Auditorium',
      image: '/events/concert.webp',
      category: 'Arts',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-12'>
          <div>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
              <span className='text-orange-500 text-sm font-medium'>
                Upcoming Activities
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Campus Events
            </h2>
            <p className='text-gray-400 mt-2 max-w-2xl'>
              Discover exciting events happening at Al Akhawayn University.
              Expand your horizons and connect with peers.
            </p>
          </div>

          <Link
            to='/events'
            className='group hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors'
          >
            <span>View All Events</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Events grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Mobile view all button */}
        <div className='mt-8 flex md:hidden justify-center'>
          <Link
            to='/events'
            className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300'
          >
            <span>View All Events</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </section>
  );
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  image,
  category,
}) => (
  <div className='bg-gray-800/50 rounded-xl overflow-hidden group hover:bg-gray-800 transition-all duration-300 border border-gray-700/50'>
    <div className='relative h-48 overflow-hidden'>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
      />
      <div className='absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full'>
        {category}
      </div>
    </div>

    <div className='p-5'>
      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors'>
        {title}
      </h3>

      <div className='flex items-center text-gray-400 text-sm mb-1'>
        <Calendar className='w-4 h-4 mr-2' />
        <span>{date}</span>
      </div>

      <div className='text-gray-400 text-sm mb-4'>
        <span>{location}</span>
      </div>

      <Link
        to={`/events/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className='inline-flex items-center text-sm text-orange-500 hover:text-orange-400'
      >
        <span>View Details</span>
        <ArrowRight className='w-4 h-4 ml-1' />
      </Link>
    </div>
  </div>
);

export default EventsSection;
