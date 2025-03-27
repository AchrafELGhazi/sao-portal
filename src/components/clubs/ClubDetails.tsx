import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ClubLogo from './ClubLogo';
import { Club } from '@/types/clubs';

interface ClubDetailsProps {
  club: Club;
  onBack: () => void;
  primaryColor: string;
}

const ClubDetails: React.FC<ClubDetailsProps> = ({
  club,
  onBack,
  primaryColor,
}) => {
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [allSemesters, setAllSemesters] = useState<string[]>([]);

  // Sort order for semesters
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

  useEffect(() => {
    // Combine all semesters from events and board members
    const semesters = new Set<string>();

    if (club.boardMembers) {
      Object.keys(club.boardMembers).forEach(semester =>
        semesters.add(semester)
      );
    }

    if (club.events) {
      Object.keys(club.events).forEach(semester => semesters.add(semester));
    }

    // Convert to array and sort
    const semestersArray = Array.from(semesters);
    const sortedSemesters = semestersArray.sort((a, b) => {
      return semesterOrder.indexOf(a) - semesterOrder.indexOf(b);
    });

    setAllSemesters(sortedSemesters);

    // Select the most recent semester by default
    if (sortedSemesters.length > 0) {
      setSelectedSemester(sortedSemesters[sortedSemesters.length - 1]);
    }
  }, [club]);

  const hasEventsForSemester = (semester: string): boolean => {
    return (
      !!club.events &&
      !!club.events[semester] &&
      club.events[semester]?.length > 0
    );
  };

  const hasBoardForSemester = (semester: string): boolean => {
    return (
      !!club.boardMembers &&
      !!club.boardMembers[semester] &&
      Object.keys(club.boardMembers[semester] || {}).length > 0
    );
  };

  return (
    <div className='bg-[#1A1A2F]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg'>
      {/* Header */}
      <div className='px-6 py-6 border-b border-white/10 flex justify-between items-center'>
        <motion.button
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          className='flex items-center gap-2 text-white/70 hover:text-white transition-colors'
        >
          <svg
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M19 12H5M12 19l-7-7 7-7' />
          </svg>
          <span>Back to clubs</span>
        </motion.button>
      </div>

      {/* Club Info */}
      <div className='px-6 py-8'>
        <div className='flex flex-col md:flex-row md:items-center gap-6 mb-8'>
          <ClubLogo name={club.clubName} color={primaryColor} size='lg' />
          <div>
            <h1 className='text-3xl font-bold text-white mb-2 capitalize'>
              {club.clubName}
            </h1>
            <p className='text-white/70'>
              {allSemesters.length} active semesters •
              {club.events
                ? ` ${Object.values(club.events).flat().length} total events`
                : ' No events recorded'}
            </p>
          </div>
        </div>

        {/* Timeline Selector */}
        <div className='mb-8'>
          <h2 className='text-xl font-semibold text-white mb-4'>
            Club Timeline
          </h2>
          <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 max-w-4xl'>
            {allSemesters.map((semester, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedSemester(semester)}
                className={`px-3 py-2 rounded-xl text-xs transition-all whitespace-nowrap inline-flex flex-shrink-0 min-w-16 justify-center items-center duration-300 ${
                  selectedSemester === semester
                    ? 'text-white font-medium'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
                style={
                  selectedSemester === semester
                    ? { backgroundColor: primaryColor }
                    : {}
                }
              >
                {semester}
              </motion.button>
            ))}
          </div>
        </div>

        {selectedSemester && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Board Members Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className='bg-white/5 rounded-xl p-5 border border-white/10'
            >
              <h3 className='text-lg font-semibold text-white mb-4'>
                Board Members
              </h3>
              {hasBoardForSemester(selectedSemester) &&
                club.boardMembers &&
                club.boardMembers[selectedSemester] && (
                  <div className='space-y-3'>
                    {Object.entries(
                      club.boardMembers[selectedSemester] || {}
                    ).map(([position, name], index) => (
                      <div
                        key={index}
                        className='flex justify-between items-center'
                      >
                        <div className='text-white/80 font-medium'>
                          {position}
                        </div>
                        <div className='text-white'>
                          {name ? String(name) : 'N/A'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}{' '}
              {!hasBoardForSemester(selectedSemester) && (
                <p className='text-white/50 italic'>
                  No board members recorded for this semester.
                </p>
              )}
            </motion.div>

            {/* Events Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className='bg-white/5 rounded-xl p-5 border border-white/10'
            >
              <h3 className='text-lg font-semibold text-white mb-4'>Events</h3>
              {hasEventsForSemester(selectedSemester) &&
                club.events &&
                club.events[selectedSemester] && (
                  <ul className='space-y-3'>
                    {(club.events[selectedSemester] || []).map(
                      (event: string, index: number) => (
                        <li key={index} className='flex items-start gap-3'>
                          <div
                            className='w-2 h-2 rounded-full mt-1.5'
                            style={{ backgroundColor: primaryColor }}
                          ></div>
                          <span className='text-white/80'>{event}</span>
                        </li>
                      )
                    )}
                  </ul>
                )}{' '}
              {!hasEventsForSemester(selectedSemester) && (
                <p className='text-white/50 italic'>
                  No events recorded for this semester.
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubDetails;
