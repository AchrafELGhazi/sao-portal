import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Users,
  Search,
  X,
  Calendar,
  Star,
} from 'lucide-react';
import { saoTeam } from '@/data/saoTeam';

const SaoTeamPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'admins' | 'leaders'>(
    'all'
  );
  const [activeYear, setActiveYear] = useState<string>('all');
  const timelineRef = useRef<HTMLDivElement>(null);

  const years = [...new Set(saoTeam.map(team => team.semester.split(' ')[1]))];

  const filteredTeams = saoTeam.filter(team => {
    if (activeYear !== 'all' && !team.semester.includes(activeYear)) {
      return false;
    }

    if (searchTerm) {
      const adminsMatch = team.admins.some(admin =>
        admin.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const leadersMatch = team.leaders.some(leader =>
        leader.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (!adminsMatch && !leadersMatch) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className='min-h-screen bg-gradient-to-b from-black to-gray-900'>
      {/* Hero section */}
      <section className='relative pt-40 pb-16'>
        {/* Background with gradient overlay */}
        <div className='absolute inset-0'>
          <img
            src='/campus-blur.webp'
            alt='Al Akhawayn University campus'
            className='w-full h-full object-cover opacity-20'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* Back button */}
          {/* <Link
            to='/'
            className='inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-6 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10'
          >
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link> */}

          <div className='max-w-3xl'>
            {/* Tag */}
            <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
              <span className='text-orange-500 text-sm font-medium'>
                Team History
              </span>
              <ChevronRight className='w-4 h-4 text-orange-500' />
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
              SAO Leadership <span className='text-orange-500'>Timeline</span>
            </h1>
            <p className='text-gray-300 text-lg'>
              Discover the legacy of student leaders who have shaped the Student
              Activities Office at Al Akhawayn University through the years.
              This interactive timeline showcases our administrators and team
              leaders across all semesters.
            </p>
          </div>
        </div>
      </section>

      {/* Search and filters section */}
      <section className='py-10 bg-gray-900/80 backdrop-blur-sm border-y border-gray-800'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row md:items-center gap-6'>
            {/* Search */}
            <div className='relative flex-grow max-w-2xl'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Search className='w-5 h-5 text-gray-400' />
              </div>
              <input
                type='text'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder='Search for team members...'
                className='w-full bg-gray-800 border border-gray-700 text-white rounded-full pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className='absolute inset-y-0 right-0 pr-4 flex items-center'
                >
                  <X className='w-5 h-5 text-gray-400 hover:text-white' />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className='flex flex-wrap gap-3'>
              <div className='inline-flex items-center border border-gray-700 rounded-full overflow-hidden'>
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-4 py-2 text-sm ${
                    filterType === 'all'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  All Members
                </button>
                <button
                  onClick={() => setFilterType('admins')}
                  className={`px-4 py-2 text-sm ${
                    filterType === 'admins'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Admins
                </button>
                <button
                  onClick={() => setFilterType('leaders')}
                  className={`px-4 py-2 text-sm ${
                    filterType === 'leaders'
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  Leaders
                </button>
              </div>

              <select
                value={activeYear}
                onChange={e => setActiveYear(e.target.value)}
                className='bg-gray-800 border border-gray-700 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none pr-8 relative'
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value='all'>All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              {(searchTerm || filterType !== 'all' || activeYear !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setFilterType('all');
                    setActiveYear('all');
                  }}
                  className='text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full border border-gray-700'
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className='py-16'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          {filteredTeams.length > 0 ? (
            <div ref={timelineRef} className='relative'>
              {/* Center line */}
              <div className='absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500/50 to-orange-500/20'></div>

              {/* Timeline entries */}
              <div className='space-y-16'>
                {filteredTeams.map((team, index) => (
                  <TimelineEntry
                    key={team.id}
                    team={team}
                    index={index}
                    filterType={filterType}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className='text-center py-20'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4'>
                <Search className='w-8 h-8 text-orange-500' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                No results found
              </h3>
              <p className='text-gray-400 max-w-md mx-auto'>
                Try adjusting your search or filters to find what you're looking
                for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilterType('all');
                  setActiveYear('all');
                }}
                className='mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full'
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface TimelineEntryProps {
  team: (typeof saoTeam)[0];
  index: number;
  filterType: 'all' | 'admins' | 'leaders';
  searchTerm: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  team,
  index,
  filterType,
  searchTerm,
}) => {
  const [expanded, setExpanded] = useState(false);

  // Filter members based on search term and filter type
  const filteredAdmins = team.admins.filter(admin =>
    admin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeaders = team.leaders.filter(leader =>
    leader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const adminsToShow =
    filterType === 'leaders' ? [] : searchTerm ? filteredAdmins : team.admins;
  const leadersToShow =
    filterType === 'admins' ? [] : searchTerm ? filteredLeaders : team.leaders;

  // Highlight search matches
  const highlightText = (text: string) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <span
              key={i}
              className='bg-orange-500/30 text-white font-medium rounded px-1'
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Determine if this entry should start expanded
  // (if there's a search term and this entry has matches)
  React.useEffect(() => {
    if (
      searchTerm &&
      (filteredAdmins.length > 0 || filteredLeaders.length > 0)
    ) {
      setExpanded(true);
    } else if (!searchTerm) {
      setExpanded(false);
    }
  }, [searchTerm, filteredAdmins.length, filteredLeaders.length]);

  const isEven = index % 2 === 0;
  const hasMatchingMember = searchTerm
    ? filteredAdmins.length > 0 || filteredLeaders.length > 0
    : true;

  return (
    <div className={`relative ${hasMatchingMember ? '' : 'opacity-50'}`}>
      {/* Timeline dot */}
      <div className='absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 bg-orange-500'></div>

      {/* Content */}
      <div
        className={`md:w-5/12 ${
          isEven ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'
        }`}
      >
        <div className='bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden'>
          {/* Header */}
          <div
            className='p-6 cursor-pointer'
            onClick={() => setExpanded(!expanded)}
          >
            <div className='flex justify-between items-center'>
              <div>
                <div className='flex items-center gap-2 mb-1'>
                  <Calendar className='w-4 h-4 text-orange-500' />
                  <span className='text-orange-500 font-medium'>
                    {team.semester}
                  </span>
                </div>
                <h3 className='text-xl font-bold text-white'>
                  SAO Leadership Team
                </h3>
              </div>

              <button className='h-8 w-8 rounded-full bg-gray-700/50 hover:bg-gray-700 flex items-center justify-center text-white'>
                {expanded ? (
                  <ChevronUp className='w-5 h-5' />
                ) : (
                  <ChevronDown className='w-5 h-5' />
                )}
              </button>
            </div>

            <div className='flex flex-wrap gap-3 mt-4'>
              <div className='flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300'>
                <Users className='w-4 h-4 text-orange-500' />
                <span>{team.admins.length} Administrators</span>
              </div>
              <div className='flex items-center gap-2 bg-gray-700/50 px-3 py-1 rounded-full text-sm text-gray-300'>
                <Users className='w-4 h-4 text-orange-500' />
                <span>{team.leaders.length} Team Leaders</span>
              </div>
            </div>
          </div>

          {/* Expanded content */}
          {expanded && (
            <div className='border-t border-gray-700/50'>
              {adminsToShow.length > 0 || leadersToShow.length > 0 ? (
                <div className='p-6'>
                  {/* Administrators */}
                  {adminsToShow.length > 0 && (
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                        <Star className='w-4 h-4 text-orange-500' />
                        Administrators
                      </h4>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {adminsToShow.map((admin, idx) => (
                          <div
                            key={idx}
                            className='bg-gray-700/30 px-4 py-3 rounded-lg flex items-center'
                          >
                            <div className='h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3'>
                              <span className='text-orange-500 text-xs font-medium'>
                                A
                              </span>
                            </div>
                            <span className='text-white'>
                              {highlightText(admin)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Team Leaders */}
                  {leadersToShow.length > 0 && (
                    <div>
                      <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                        <Users className='w-4 h-4 text-orange-500' />
                        Team Leaders
                      </h4>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        {leadersToShow.map((leader, idx) => (
                          <div
                            key={idx}
                            className='bg-gray-700/30 px-4 py-3 rounded-lg flex items-center'
                          >
                            <div className='h-8 w-8 rounded-full bg-gray-600/50 flex items-center justify-center mr-3'>
                              <span className='text-gray-300 text-xs font-medium'>
                                L
                              </span>
                            </div>
                            <span className='text-white'>
                              {highlightText(leader)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className='p-6 text-center text-gray-400'>
                  No members match your search criteria in this semester.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SaoTeamPage;
