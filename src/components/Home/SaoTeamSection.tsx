import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Users,
  ChevronLeft,
  ChevronDown,
} from 'lucide-react';
import { saoTeam } from '@/data/saoTeam';

const SaoTeamSection: React.FC = () => {
  // Get the current semester data (most recent)
  const currentTeamData = saoTeam[saoTeam.length - 1];
  const [activeTab, setActiveTab] = useState<'admins' | 'leaders'>('admins');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  // Handle pagination for team leaders
  useEffect(() => {
    // For teams with more than 6 leaders, enable pagination
    if (activeTab === 'leaders') {
      setIsPrevDisabled(currentIndex === 0);
      setIsNextDisabled(currentIndex + 6 >= currentTeamData.leaders.length);
    } else {
      setCurrentIndex(0);
    }
  }, [activeTab, currentIndex, currentTeamData.leaders.length]);

  // Navigate through leaders
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 6);
    }
  };

  const handleNext = () => {
    if (currentIndex + 6 < currentTeamData.leaders.length) {
      setCurrentIndex(currentIndex + 6);
    }
  };

  // Get displayed leaders based on pagination
  const displayedLeaders =
    activeTab === 'leaders'
      ? currentTeamData.leaders.slice(currentIndex, currentIndex + 6)
      : [];

  return (
    <section className='py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>
      {/* Background elements - futuristic touch */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute w-full h-full'>
          {/* Grid lines */}
          <div className='absolute inset-0 grid grid-cols-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-l border-orange-500/30 h-full'
              ></div>
            ))}
          </div>
          <div className='absolute inset-0 grid grid-rows-6 opacity-10'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='border-t border-orange-500/30 w-full'
              ></div>
            ))}
          </div>

          {/* Glowing orbs */}
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]'></div>
          <div className='absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex justify-between items-center mb-12'>
          <div>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
              <span className='text-orange-500 text-sm font-medium'>
                Meet Our Team
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
              SAO Leadership Team
            </h2>
            <p className='text-gray-400 max-w-2xl'>
              The driving force behind student activities at Al Akhawayn
              University. Our dedicated team works tirelessly to create
              enriching experiences for the student body.
            </p>
          </div>

          <Link
            to='/sao-team'
            className='group hidden md:flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors'
          >
            <span>View SAO Team History</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Current semester display */}
        <div className='mb-8'>
          <div className='inline-flex items-center gap-2 mb-2'>
            <div className='w-3 h-3 bg-orange-500 rounded-full animate-pulse'></div>
            <span className='text-white font-medium'>Current Semester</span>
          </div>
          <h3 className='text-2xl text-white font-semibold'>
            {currentTeamData.semester}
          </h3>
        </div>

        {/* Tab buttons */}
        <div className='flex space-x-4 mb-8'>
          <button
            className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm text-white 
              ${
                activeTab === 'admins'
                  ? 'bg-orange-500 shadow-lg shadow-orange-500/20'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            onClick={() => setActiveTab('admins')}
          >
            Administrators
          </button>
          <button
            className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm text-white 
              ${
                activeTab === 'leaders'
                  ? 'bg-orange-500 shadow-lg shadow-orange-500/20'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}
            onClick={() => setActiveTab('leaders')}
          >
            Team Leaders
          </button>
        </div>

        {/* Team members display */}
        <div className='mb-8'>
          {activeTab === 'admins' ? (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {currentTeamData.admins.map((admin, index) => (
                <AdminCard key={index} name={admin} index={index} />
              ))}
            </div>
          ) : (
            <div className='relative'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {displayedLeaders.map((leader, index) => (
                  <LeaderCard
                    key={index}
                    name={leader}
                    index={index + currentIndex}
                  />
                ))}
              </div>

              {/* Pagination controls - only show if needed */}
              {currentTeamData.leaders.length > 6 && (
                <div className='flex justify-center mt-8 space-x-4'>
                  <button
                    onClick={handlePrev}
                    disabled={isPrevDisabled}
                    className={`p-3 rounded-full border ${
                      isPrevDisabled
                        ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                        : 'border-orange-500/50 text-orange-500 hover:bg-orange-500/10'
                    } transition-all duration-300`}
                  >
                    <ChevronLeft className='w-5 h-5' />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isNextDisabled}
                    className={`p-3 rounded-full border ${
                      isNextDisabled
                        ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                        : 'border-orange-500/50 text-orange-500 hover:bg-orange-500/10'
                    } transition-all duration-300`}
                  >
                    <ChevronRight className='w-5 h-5' />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
          <StatCard
            number={saoTeam.length}
            label='Semesters of Leadership'
            icon={<Calendar className='w-5 h-5 text-orange-500' />}
          />
          <StatCard
            number={currentTeamData.admins.length}
            label='Current Administrators'
            icon={<Users className='w-5 h-5 text-orange-500' />}
          />
          <StatCard
            number={currentTeamData.leaders.length}
            label='Current Team Leaders'
            icon={<Users className='w-5 h-5 text-orange-500' />}
          />
          <StatCard
            number={getTotalUniqueMembers()}
            label='Total SAO Alumni'
            icon={<GraduationCap className='w-5 h-5 text-orange-500' />}
          />
        </div>

        {/* Mobile view history button */}
        <div className='mt-8 flex md:hidden justify-center'>
          <Link
            to='/sao-team'
            className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300'
          >
            <span>View SAO Team History</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>

        {/* Teaser for timeline */}
        <div className='mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent'></div>

          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-6 md:mb-0'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Explore Our Team History
              </h3>
              <p className='text-gray-400 max-w-xl'>
                Discover the legacy of student leaders who have shaped campus
                life at Al Akhawayn University through the years in our
                interactive timeline.
              </p>
            </div>

            <Link
              to='/sao-team'
              className='group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300'
            >
              <span>View Timeline</span>
              <ChevronDown className='w-5 h-5 transform group-hover:translate-y-1 transition-transform' />
            </Link>
          </div>

          {/* Timeline preview */}
          <div className='mt-8 relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-500/30'></div>

            <div className='flex flex-col space-y-6'>
              {saoTeam
                .slice(-3)
                .reverse()
                .map((team, index) => (
                  <div key={index} className='relative'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500'></div>
                    <div
                      className={`${
                        index % 2 === 0
                          ? 'ml-8 md:ml-auto md:mr-8 md:text-right'
                          : 'ml-8'
                      } md:w-5/12 bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50`}
                    >
                      <div className='font-semibold text-white mb-1'>
                        {team.semester}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {team.admins.length} Administrators •{' '}
                        {team.leaders.length} Team Leaders
                      </div>
                    </div>
                  </div>
                ))}

              <div className='flex justify-center pt-4'>
                <div className='px-4 py-2 bg-gray-800/50 rounded-full text-gray-400 text-sm'>
                  View more in the complete timeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to calculate total unique members across all semesters
const getTotalUniqueMembers = () => {
  const allMembers = new Set();

  saoTeam.forEach(team => {
    team.admins.forEach(admin => allMembers.add(admin));
    team.leaders.forEach(leader => allMembers.add(leader));
  });

  return allMembers.size;
};

// Calendar icon component
const Calendar: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
    <line x1='16' y1='2' x2='16' y2='6'></line>
    <line x1='8' y1='2' x2='8' y2='6'></line>
    <line x1='3' y1='10' x2='21' y2='10'></line>
  </svg>
);

// Graduation cap icon component
const GraduationCap: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M22 10v6M2 10l10-5 10 5-10 5z'></path>
    <path d='M6 12v5c0 2 2 3 6 3s6-1 6-3v-5'></path>
  </svg>
);

type StatCardProps = {
  number: number;
  label: string;
  icon: React.ReactNode;
};

const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => (
  <div className='bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex items-center'>
    <div className='bg-orange-500/10 rounded-full p-3 mr-4'>{icon}</div>
    <div>
      <div className='text-2xl font-bold text-white'>{number}</div>
      <div className='text-sm text-gray-400'>{label}</div>
    </div>
  </div>
);

interface TeamMemberCardProps {
  name: string;
  index: number;
}

const AdminCard: React.FC<TeamMemberCardProps> = ({ name, index }) => (
  <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group'>
    <div className='flex items-center mb-4'>
      <div className='relative'>
        <div className='w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center overflow-hidden'>
          <Users className='w-8 h-8 text-orange-500' />
          <div className='absolute inset-0 border-2 border-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className='absolute -bottom-1 -right-1 bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-900'>
          A
        </div>
      </div>
      <div className='ml-4'>
        <h3 className='text-xl font-bold text-white group-hover:text-orange-500 transition-colors'>
          {name}
        </h3>
        <p className='text-gray-400 text-sm'>Administrator</p>
      </div>
    </div>

    <div className='pt-4 mt-4 border-t border-gray-700/50'>
      <div className='flex justify-between items-center'>
        <span className='text-sm text-gray-400'>Admin #{index + 1}</span>
        <div className='flex space-x-2'>
          <div className='w-2 h-2 rounded-full bg-orange-500 animate-pulse'></div>
          <div
            className='w-2 h-2 rounded-full bg-orange-500 animate-pulse'
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className='w-2 h-2 rounded-full bg-orange-500 animate-pulse'
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

const LeaderCard: React.FC<TeamMemberCardProps> = ({ name, index }) => (
  <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 group'>
    <div className='flex items-center mb-4'>
      <div className='relative'>
        <div className='w-16 h-16 rounded-full bg-gray-700/50 flex items-center justify-center overflow-hidden'>
          <Users className='w-8 h-8 text-gray-400 group-hover:text-orange-500 transition-colors' />
          <div className='absolute inset-0 border-2 border-orange-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </div>
        <div className='absolute -bottom-1 -right-1 bg-gray-600 group-hover:bg-orange-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-gray-900 transition-colors duration-300'>
          L
        </div>
      </div>
      <div className='ml-4'>
        <h3 className='text-lg font-bold text-white group-hover:text-orange-500 transition-colors'>
          {name}
        </h3>
        <p className='text-gray-400 text-sm'>Team Leader</p>
      </div>
    </div>

    <div className='pt-4 mt-4 border-t border-gray-700/50'>
      <div className='flex justify-between items-center'>
        <span className='text-sm text-gray-400'>Leader #{index + 1}</span>
        <div className='h-1 w-12 bg-gray-700 rounded-full overflow-hidden'>
          <div className='h-full w-1/2 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500'></div>
        </div>
      </div>
    </div>
  </div>
);

export default SaoTeamSection;
