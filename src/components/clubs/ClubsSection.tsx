import React from 'react';
import { motion } from 'framer-motion';
import ClubLogo from './ClubLogo';
import { Club } from '@/types/clubs';

interface ClubsSectionProps {
  clubs: Club[];
  onSelectClub: (club: Club) => void;
  primaryColor: string;
}

const ClubsSection: React.FC<ClubsSectionProps> = ({
  clubs,
  onSelectClub,
  primaryColor,
}) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Get all semesters from each club
  const getClubSemesters = (club: Club): number => {
    const semesters = new Set<string>();

    if (club.boardMembers) {
      Object.keys(club.boardMembers).forEach(semester =>
        semesters.add(semester)
      );
    }

    if (club.events) {
      Object.keys(club.events).forEach(semester => semesters.add(semester));
    }

    return Array.from(semesters).length;
  };

  // Calculate total members for a club
  const getTotalMembers = (club: Club): number => {
    if (!club.boardMembers) return 0;

    return Object.values(club.boardMembers).reduce((total, semester) => {
      return total + Object.keys(semester).length;
    }, 0);
  };

  // Get the most recent semester
  const getLatestSemester = (club: Club): string => {
    const semesterOrder = [
      'Fall 2021',
      'Spring 2022',
      'Summer 2022',
      'Fall 2022',
      'Spring 2023',
      'Summer 2023',
      'Fall 2023',
      'Spring 2024',
      'Summer 2024',
      'Fall 2024',
    ];

    const semesters = new Set<string>();

    if (club.boardMembers) {
      Object.keys(club.boardMembers).forEach(semester =>
        semesters.add(semester)
      );
    }

    if (club.events) {
      Object.keys(club.events).forEach(semester => semesters.add(semester));
    }

    const semestersArray = Array.from(semesters);

    if (semestersArray.length === 0) return 'N/A';

    // Sort by semester order and return the last one
    return semestersArray.sort(
      (a, b) => semesterOrder.indexOf(a) - semesterOrder.indexOf(b)
    )[semestersArray.length - 1];
  };

  // Get latest events (up to 3)
  const getLatestEvents = (club: Club): string[] => {
    if (!club.events) return [];

    const latestSemester = getLatestSemester(club);

    if (latestSemester === 'N/A' || !club.events[latestSemester]) return [];

    return club.events[latestSemester].slice(0, 3);
  };

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
    >
      {clubs.map((club, index) => {
        const latestEvents = getLatestEvents(club);
        const totalMembers = getTotalMembers(club);
        const totalSemesters = getClubSemesters(club);
        const totalEvents = club.events
          ? Object.values(club.events).flat().length
          : 0;

        return (
          <motion.div
            key={`${club.clubName}-${index}`}
            variants={item}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
            className='bg-gradient-to-br from-[#1A1A2F]/90 to-[#252542]/90 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-white/20 transform hover:translate-z-10 cursor-pointer group'
            onClick={() => onSelectClub(club)}
          >
            {/* Glow effect on hover */}
            <div
              className='absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500'
              style={{
                background: `radial-gradient(circle at center, ${primaryColor}30 0%, transparent 70%)`,
              }}
            ></div>

            <div className='px-7 pt-6 pb-6 relative z-10'>
              {/* Header Section */}
              <div className='flex items-center gap-4 mb-4'>
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ClubLogo
                    name={club.clubName}
                    color={primaryColor}
                    size='md'
                  />
                </motion.div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-1 capitalize'>
                    {club.clubName}
                  </h3>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <div
                      className='px-3 py-1 bg-white/10 backdrop-blur-md rounded-xl text-xs font-medium text-white/80 flex items-center gap-1'
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='3'
                          y='4'
                          width='18'
                          height='18'
                          rx='2'
                          ry='2'
                        ></rect>
                        <line x1='16' y1='2' x2='16' y2='6'></line>
                        <line x1='8' y1='2' x2='8' y2='6'></line>
                        <line x1='3' y1='10' x2='21' y2='10'></line>
                      </svg>
                      <span>{totalSemesters} Semesters</span>
                    </div>
                    <div
                      className='px-3 py-1 bg-white/10 backdrop-blur-md rounded-xl text-xs font-medium text-white/80 flex items-center gap-1'
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <svg
                        width='12'
                        height='12'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                        <circle cx='9' cy='7' r='4'></circle>
                        <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                        <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                      </svg>
                      <span>{totalMembers} Members</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Events Section */}
              <div className='bg-[#1D1D35]/80 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/5'>
                <div className='flex items-center justify-between mb-2'>
                  <h4 className='text-sm font-semibold text-white/90'>
                    Latest Events
                  </h4>
                  <span className='text-xs text-white/60'>
                    {getLatestSemester(club)}
                  </span>
                </div>

                {latestEvents.length > 0 ? (
                  <ul className='space-y-2'>
                    {latestEvents.map((event, i) => (
                      <li key={i} className='flex items-start gap-2.5'>
                        <div
                          className='w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0'
                          style={{ backgroundColor: primaryColor }}
                        ></div>
                        <span className='text-sm text-white/80'>{event}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-sm text-white/50 italic'>
                    No recent events.
                  </p>
                )}
              </div>

              {/* Stats Row */}
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-1.5'>
                  <div
                    className='w-2 h-2 rounded-full'
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                  <span className='text-xs text-white/70'>
                    {totalEvents} Total Events
                  </span>
                </div>
                <div className='text-xs text-white/70 flex items-center gap-1'>
                  <span className='font-medium' style={{ color: primaryColor }}>
                    Active
                  </span>
                  <span>
                    Since{' '}
                    {getLatestSemester(club) !== 'N/A'
                      ? getLatestSemester(club)
                      : 'N/A'}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <motion.button
                className='mt-1 w-full py-2.5 rounded-xl text-sm font-medium text-white flex items-center justify-center gap-2 shadow-lg'
                style={{ backgroundColor: primaryColor }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 400 }}
              >
                <span>Explore Club Details</span>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='group-hover:translate-x-1 transition-transform duration-300'
                >
                  <path d='M5 12h14M12 5l7 7-7 7' />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        );
      })}

      {clubs.length === 0 && (
        <motion.div
          variants={item}
          className='col-span-full bg-[#1A1A2F]/80 backdrop-blur-md border border-white/10 rounded-xl text-center py-16 px-6'
        >
          <div className='inline-flex items-center justify-center p-4 rounded-full bg-white/5 mb-4'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              stroke={primaryColor}
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='8' x2='12' y2='12'></line>
              <line x1='12' y1='16' x2='12.01' y2='16'></line>
            </svg>
          </div>
          <p className='text-white/60 text-lg font-medium'>
            No clubs found in this category.
          </p>
          <p className='text-white/40 mt-2 max-w-md mx-auto'>
            Try selecting a different category or check back later for updates.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ClubsSection;
  