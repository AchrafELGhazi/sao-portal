import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClubsSection from '@/components/clubs/ClubsSection';
import ClubDetails from '@/components/clubs/ClubDetails';
import { Club, ClubType } from '@/types/clubs';
import { humanitarianClubsData } from '@/data/clubs/humanitarianClubsData';
import { entertainmentClubsData } from '@/data/clubs/entertainmentClubsData';
import { culturalClubsData } from '@/data/clubs/cluturalClubsData';
import { ChevronRight } from 'lucide-react';

const educationalClubsData = [
  {
    clubName: 'IEEE',
    boardMembers: {
      'Fall 2024': {
        President: 'Example President',
        'Vice-President': 'Example VP',
      },
    },
    events: {
      'Fall 2024': ['Workshop', 'Conference'],
    },
  },
];

export default function ClubsPage() {
  const [selectedClubType, setSelectedClubType] =
    useState<string>('humanitarian');
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const clubTypes: ClubType[] = [
    {
      id: 'humanitarian',
      name: 'Humanitarian Clubs',
      data: humanitarianClubsData,
      color: '#ff6600',
    },
    {
      id: 'entertainment',
      name: 'Entertainment Clubs',
      data: entertainmentClubsData,
      color: '#8A2BE2',
    },
    {
      id: 'cultural',
      name: 'Cultural Clubs',
      data: culturalClubsData,
      color: '#00A36C',
    },
    {
      id: 'educational',
      name: 'Educational Clubs',
      data: educationalClubsData,
      color: '#0096FF',
    },
  ];

  const currentClubTypeData =
    clubTypes.find(type => type.id === selectedClubType)?.data || [];
  const currentClubTypeColor =
    clubTypes.find(type => type.id === selectedClubType)?.color || '#ff6600';

  const handleClubSelect = (club: Club) => {
    setSelectedClub(club);
  };

  const handleBackToList = () => {
    setSelectedClub(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#121225] to-[#1D1D35] pt-24 pb-16'>
      <div className='max-w-12xl pt-10 md:pt-20 mx-auto px-4 sm:px-16 lg:px-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className='relative z-10 mb-16 px-4'
        >
          <div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-40 rounded-full blur-[100px] opacity-20'
            style={{ backgroundColor: currentClubTypeColor }}
          ></div>

          <div className='relative max-w-4xl mx-auto'>
            <div className='flex justify-center mb-4'>
              <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1'>
                <span className='text-orange-500 text-sm font-medium'>
                  SAO Clubs
                </span>
                <ChevronRight className='w-4 h-4 text-orange-500' />
              </div>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-center'>
              Explore Our{' '}
              <span style={{ color: currentClubTypeColor }}>Student Clubs</span>
            </h1>

            <p className='text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-center font-light'>
              Discover the diverse range of student-led organizations that make
              our campus vibrant and engaging.
            </p>

            <div className='flex justify-center mt-10'>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  style={{ color: currentClubTypeColor }}
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M7 13l5 5 5-5M7 6l5 5 5-5' />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className='mb-12 relative z-10'>
          <div className='absolute -top-16 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl'></div>
          <div className='absolute -top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl'></div>

          <div className='relative bg-[#1A1A2F]/40 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-xl'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
              {clubTypes.map(type => {
                const getIcon = (id: any) => {
                  switch (id) {
                    case 'humanitarian':
                      return (
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
                          <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                        </svg>
                      );
                    case 'entertainment':
                      return (
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
                          <circle cx='12' cy='12' r='10'></circle>
                          <path d='M8 14s1.5 2 4 2 4-2 4-2'></path>
                          <line x1='9' y1='9' x2='9.01' y2='9'></line>
                          <line x1='15' y1='9' x2='15.01' y2='9'></line>
                        </svg>
                      );
                    case 'cultural':
                      return (
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
                          <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                        </svg>
                      );
                    case 'educational':
                      return (
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
                          <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
                          <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
                        </svg>
                      );
                    default:
                      return null;
                  }
                };

                const isSelected = selectedClubType === type.id;

                return (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setSelectedClubType(type.id);
                      setSelectedClub(null);
                    }}
                    className={`group relative overflow-hidden py-4 px-4 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? 'text-white shadow-lg'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                    style={isSelected ? { backgroundColor: type.color } : {}}
                  >
                    {!isSelected && (
                      <motion.div
                        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                        style={{
                          background: `linear-gradient(120deg, ${type.color}50, ${type.color}20)`,
                          borderRadius: '0.75rem',
                        }}
                      />
                    )}

                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className='absolute top-2 right-2 w-2 h-2 rounded-full bg-white shadow-glow'
                        style={{ boxShadow: `0 0 10px 2px ${type.color}` }}
                      />
                    )}

                    <div className='flex flex-col items-center justify-center space-y-2 md:space-y-3 relative z-10'>
                      <div
                        className={`${
                          isSelected ? 'text-white' : 'text-white/70'
                        } transition-colors duration-300`}
                      >
                        {getIcon(type.id)}
                      </div>

                      <span className='text-sm md:text-base font-medium text-center'>
                        {type.name.replace(' Clubs', '')}
                      </span>
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isSelected ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                      className='absolute bottom-0 left-0 h-1 bg-white/70'
                      style={{
                        boxShadow: isSelected
                          ? `0 0 10px ${type.color}`
                          : 'none',
                      }}
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none'></div>
          </div>
        </div>

        <AnimatePresence mode='wait'>
          {!selectedClub ? (
            <motion.div
              key='club-list'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ClubsSection
                clubs={currentClubTypeData}
                onSelectClub={handleClubSelect}
                primaryColor={currentClubTypeColor}
              />
            </motion.div>
          ) : (
            <motion.div
              key='club-details'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ClubDetails
                club={selectedClub}
                onBack={handleBackToList}
                primaryColor={currentClubTypeColor}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
