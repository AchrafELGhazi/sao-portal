import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClubsSection from '@/components/clubs/ClubsSection';
import ClubDetails from '@/components/clubs/ClubDetails';
import { Club, ClubType } from '@/types/clubs';
import { humanitarianClubsData } from '@/data/clubs/humanitarianClubsData';
import { entertainmentClubsData } from '@/data/clubs/entertainmentClubsData';
import { culturalClubsData } from '@/data/clubs/cluturalClubsData';

// Mock data for educational clubs since it wasn't provided
const educationalClubsData = [
  // Add some placeholder data or leave empty
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
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Explore Our <span className='text-[#ff6600]'>Student Clubs</span>
          </h1>
          <p className='text-lg text-white/70 max-w-3xl mx-auto'>
            Discover the diverse range of student-led organizations that make
            our campus vibrant and engaging.
          </p>
        </motion.div>

        {/* Club Type Selector */}
        <div className='mb-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {clubTypes.map(type => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedClubType(type.id);
                  setSelectedClub(null);
                }}
                className={`py-3 px-4 rounded-xl transition-all ${
                  selectedClubType === type.id
                    ? `bg-${
                        type.color === '#ff6600' ? '[#ff6600]' : type.color
                      }/90 text-white shadow-lg`
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
                style={
                  selectedClubType === type.id
                    ? { backgroundColor: type.color }
                    : {}
                }
              >
                <span className='text-sm md:text-base font-medium'>
                  {type.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content */}
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
