import { useState, useEffect } from 'react';
import { EventCard } from '../components/EventCard';
import { ChevronDown, Calendar, Filter, Info, X } from 'lucide-react';
import { events } from '../data/events';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
interface Event {
  id: string | number;
  title: string;
  category: string;
  year: string;
}
interface Stats {
  total: number;
  byCategory: {
    [key: string]: number;
  };
}
const years: string[] = ['2025', '2024', '2023', '2022', '2021'];
const categories: string[] = [
  'All',
  'Musical Night',
  'National Trip',
  'International Trip',
  'Games',
  'Cultural Event',
  'Workshop',
];

export default function EventsPage(): JSX.Element {
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [yearDropdownOpen, setYearDropdownOpen] = useState<boolean>(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] =
    useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showStats, setShowStats] = useState<boolean>(false);

  useEffect(() => {
    const filters: string[] = [];
    if (selectedYear !== 'All') filters.push(`Year: ${selectedYear}`);
    if (selectedCategory !== 'All')
      filters.push(`Category: ${selectedCategory}`);
    if (searchQuery) filters.push(`Search: "${searchQuery}"`);
    setActiveFilters(filters);
  }, [selectedYear, selectedCategory, searchQuery]);

  const filteredEvents = events.filter((event: Event) => {
    if (selectedCategory !== 'All' && event.category !== selectedCategory)
      return false;
    if (selectedYear !== 'All' && event.year !== selectedYear) return false;
    if (
      searchQuery &&
      !event.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  const stats: Stats = {
    total: filteredEvents.length,
    byCategory: categories.reduce<{ [key: string]: number }>(
      (acc, category) => {
        acc[category] = filteredEvents.filter(e =>
          category === 'All' ? true : e.category === category
        ).length;
        return acc;
      },
      {}
    ),
  };

  const clearFilters = (): void => {
    setSelectedYear('All');
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className='min-h-screen pt-32 pb-16 bg-gradient-to-br from-[#121225] to-[#1D1D35]'>
      <div className='w-full  px-4 md:px-20'>
        {/* Header */}
        <Card className=' mx-20 mb-12 bg-[#1A1A2F]/80 border-white/10 backdrop-blur-md rounded-2xl shadow-xl'>
          <CardHeader>
            <div className='flex justify-between items-center'>
              <div>
                <CardTitle className='text-4xl font-bold text-white mb-2'>
                  Events
                </CardTitle>
                <CardDescription className='text-gray-400'>
                  Discover and explore our diverse range of events throughout
                  the years.
                </CardDescription>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <button
                      onClick={() => setShowStats(!showStats)}
                      className='p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors'
                    >
                      <Info className='w-5 h-5 text-white/60' />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Toggle Statistics View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Panel */}
        {showStats && (
          <Card className='w-full mx-auto mb-8 bg-[#1A1A2F]/80 border-white/10 backdrop-blur-md rounded-2xl shadow-xl'>
            <CardContent className='pt-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='p-4 rounded-xl bg-white/5'>
                  <h3 className='text-sm font-medium text-white/60 mb-2'>
                    Total Events
                  </h3>
                  <p className='text-2xl font-bold text-white'>{stats.total}</p>
                </div>
                <div className='p-4 rounded-xl bg-white/5'>
                  <h3 className='text-sm font-medium text-white/60 mb-2'>
                    Most Common Category
                  </h3>
                  <p className='text-2xl font-bold text-white'>
                    {Object.entries(stats.byCategory)
                      .filter(([cat]) => cat !== 'All')
                      .sort(([, a], [, b]) => b - a)[0]?.[0] || 'N/A'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <div className='max-w-4xl mx-auto mb-8'>
          <div className='flex flex-col gap-4'>
            {/* Search Bar */}
            <div className='relative w-full'>
              <input
                type='text'
                placeholder='Search events...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full px-4 py-3 bg-[#1A1A2F]/60 border border-white/10 rounded-full focus:outline-none focus:border-white/30 text-white/80 placeholder-white/40 transition-all duration-300 pr-10'
              />
              <svg
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {/* Filter Controls */}
            <div className='flex flex-wrap gap-4'>
              {/* Year Filter */}
              <div className='relative'>
                <button
                  onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
                  className='flex items-center gap-2 px-4 py-2 bg-[#1A1A2F]/60 border border-white/10 rounded-full hover:border-white/20 transition-all duration-300 backdrop-blur-sm'
                >
                  <Calendar size={16} className='text-white/60' />
                  <span className='text-white/80'>Year: {selectedYear}</span>
                  <ChevronDown size={16} className='text-white/60' />
                </button>

                {yearDropdownOpen && (
                  <div className='absolute top-full mt-2 w-full bg-[#1A1A2F] border border-white/10 rounded-xl shadow-lg overflow-hidden z-20'>
                    {['All', ...years].map(year => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setYearDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-white/5 transition-colors duration-300 ${
                          selectedYear === year
                            ? 'text-orange-500'
                            : 'text-white/80'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div className='relative'>
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className='flex items-center gap-2 px-4 py-2 bg-[#1A1A2F]/60 border border-white/10 rounded-full hover:border-white/20 transition-all duration-300 backdrop-blur-sm'
                >
                  <Filter size={16} className='text-white/60' />
                  <span className='text-white/80'>
                    Category: {selectedCategory}
                  </span>
                  <ChevronDown size={16} className='text-white/60' />
                </button>

                {categoryDropdownOpen && (
                  <div className='absolute top-full mt-2 w-full bg-[#1A1A2F] border border-white/10 rounded-xl shadow-lg overflow-hidden z-20'>
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCategoryDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-white/5 transition-colors duration-300 ${
                          selectedCategory === category
                            ? 'text-orange-500'
                            : 'text-white/80'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Clear Filters Button */}
              {activeFilters.length > 0 && (
                <button
                  onClick={clearFilters}
                  className='flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl hover:bg-red-500/20 transition-all duration-300'
                >
                  <X size={16} />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>

            {/* Active Filters Display */}
            {activeFilters.length > 0 && (
              <div className='flex flex-wrap gap-2 mt-2'>
                {activeFilters.map((filter, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-white/5 rounded-full text-sm text-white/60'
                  >
                    {filter}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Events Grid */}
        <div className='container mx-auto px-20 max-w-7xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className='w-full'
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className='flex justify-center w-full'>
              <Card className='bg-[#1A1A2F]/80 border-white/10 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-2xl'>
                <CardContent className='flex flex-col items-center justify-center py-16'>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Filter className='w-16 h-16 text-white/20 mb-6' />
                  </motion.div>
                  <p className='text-gray-400 text-center text-lg mb-6'>
                    No events found for the selected filters.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearFilters}
                    className='px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    Clear all filters
                  </motion.button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
