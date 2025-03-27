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

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
    >
      {clubs.map((club, index) => (
        <motion.div
          key={`${club.clubName}-${index}`}
          variants={item}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className='bg-[#1A1A2F]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-white/20 cursor-pointer'
          onClick={() => onSelectClub(club)}
        >
          <div className='px-6 py-5'>
            <div className='flex items-center gap-4'>
              <ClubLogo name={club.clubName} color={primaryColor} size='md' />
              <div>
                <h3 className='text-xl font-bold text-white mb-1 capitalize'>
                  {club.clubName}
                </h3>
                <div className='flex items-center gap-2'>
                  <div className='px-2 py-1 bg-white/10 rounded-md text-xs text-white/70'>
                    {getClubSemesters(club)} Semesters
                  </div>
                  {club.events && (
                    <div className='px-2 py-1 bg-white/10 rounded-md text-xs text-white/70'>
                      {Object.values(club.events).flat().length} Events
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='mt-5 border-t border-white/10 pt-4'>
              <div className='text-sm text-white/70'>
                <p>
                  {club.boardMembers
                    ? `Led by ${
                        Object.values(club.boardMembers)
                          .map((board: any) => board.President || '')
                          .filter(Boolean)[0] || 'Various officers'
                      } and team`
                    : 'Club information'}
                </p>
              </div>
            </div>

            <motion.button
              className='mt-4 w-full py-2 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-2'
              style={{ backgroundColor: primaryColor }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Details</span>
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
                <path d='M5 12h14M12 5l7 7-7 7' />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      ))}

      {clubs.length === 0 && (
        <motion.div variants={item} className='col-span-full text-center py-16'>
          <p className='text-white/50 text-lg'>
            No clubs found in this category.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ClubsSection;
