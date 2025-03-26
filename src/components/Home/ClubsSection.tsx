import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, ChevronRight, Flag } from 'lucide-react';

type ClubCardProps = {
  name: string;
  description: string;
  image: string;
  category: string;
  memberCount: number;
};

const ClubsSection: React.FC = () => {
  // Sample clubs data
  const clubs = [
    {
      name: 'Debate Club',
      description:
        'Enhancing critical thinking and public speaking skills through competitive debate.',
      image: '/clubs/debate.webp',
      category: 'Academic',
      memberCount: 45,
    },
    {
      name: 'Chess Club',
      description:
        'Promoting strategic thinking and intellectual growth through the game of chess.',
      image: '/clubs/chess.webp',
      category: 'Games',
      memberCount: 32,
    },
    {
      name: 'Robotics Club',
      description:
        'Building and programming robots for competitions and educational purposes.',
      image: '/clubs/robotics.webp',
      category: 'Technology',
      memberCount: 38,
    },
    {
      name: 'Environmental Club',
      description:
        'Promoting sustainability and environmental awareness on campus.',
      image: '/clubs/environment.webp',
      category: 'Social',
      memberCount: 56,
    },
  ];

  return (
    <section className='py-20 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-12'>
          <div>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
              <span className='text-orange-500 text-sm font-medium'>
                Join & Participate
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              Student Clubs
            </h2>
            <p className='text-gray-400 mt-2 max-w-2xl'>
              Explore our diverse range of student-led clubs and organizations
              where you can pursue your passions and develop new skills.
            </p>
          </div>

          <Link
            to='/clubs'
            className='group hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors'
          >
            <span>View All Clubs</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Clubs grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {clubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        </div>

        {/* Mobile view all button */}
        <div className='mt-8 flex md:hidden justify-center'>
          <Link
            to='/clubs'
            className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300'
          >
            <span>View All Clubs</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  description,
  image,
  category,
  memberCount,
}) => (
  <div className='bg-gray-800/50 rounded-xl overflow-hidden group hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 flex flex-col'>
    <div className='relative h-48 overflow-hidden'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
      />
      <div className='absolute top-4 left-4 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full'>
        {category}
      </div>
    </div>

    <div className='p-5 flex-grow flex flex-col'>
      <h3 className='text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors'>
        {name}
      </h3>

      <p className='text-gray-400 text-sm mb-4 flex-grow'>{description}</p>

      <div className='flex items-center justify-between'>
        <div className='flex items-center text-gray-400 text-sm'>
          <Users className='w-4 h-4 mr-2' />
          <span>{memberCount} members</span>
        </div>

        <Link
          to={`/clubs/${name.toLowerCase().replace(/\s+/g, '-')}`}
          className='inline-flex items-center text-sm text-orange-500 hover:text-orange-400'
        >
          <span>Join</span>
          <ArrowRight className='w-4 h-4 ml-1' />
        </Link>
      </div>
    </div>
  </div>
);

export default ClubsSection;
