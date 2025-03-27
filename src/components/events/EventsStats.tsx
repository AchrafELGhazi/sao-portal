import React from 'react';
import { motion } from 'framer-motion';
import { Layers, TrendingUp, Users, Calendar } from 'lucide-react';
import { Stats } from '@/types/Events';

interface EventsStatsProps {
  stats: Stats;
}

const EventsStats: React.FC<EventsStatsProps> = ({ stats }) => {
  // Find top categories (excluding 'All')
  const topCategories = Object.entries(stats.byCategory)
    .filter(([cat]) => cat !== 'All')
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <div className='bg-[#1A1A2F]/80 border border-white/5 rounded-2xl backdrop-blur-md overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/5'>
        {/* Total Events */}
        <motion.div
          className='p-6 bg-[#1A1A2F] flex items-start gap-4'
          variants={cardVariants}
          custom={0}
          initial='hidden'
          animate='visible'
        >
          <div className='p-3 rounded-xl bg-[#ff6600]/10'>
            <Layers className='w-6 h-6 text-[#ff6600]' />
          </div>
          <div>
            <h3 className='text-sm font-medium text-white/60 mb-1'>
              Total Events
            </h3>
            <p className='text-3xl font-bold text-white'>{stats.total}</p>
          </div>
        </motion.div>

        {/* Most Common Category */}
        <motion.div
          className='p-6 bg-[#1A1A2F] flex items-start gap-4'
          variants={cardVariants}
          custom={1}
          initial='hidden'
          animate='visible'
        >
          <div className='p-3 rounded-xl bg-[#ff6600]/10'>
            <TrendingUp className='w-6 h-6 text-[#ff6600]' />
          </div>
          <div>
            <h3 className='text-sm font-medium text-white/60 mb-1'>
              Top Category
            </h3>
            <p className='text-3xl font-bold text-white'>
              {stats.mostCommonCategory}
            </p>
          </div>
        </motion.div>

        {/* Top Categories */}
        <motion.div
          className='p-6 bg-[#1A1A2F] flex items-start gap-4'
          variants={cardVariants}
          custom={2}
          initial='hidden'
          animate='visible'
        >
          <div className='p-3 rounded-xl bg-[#ff6600]/10'>
            <Calendar className='w-6 h-6 text-[#ff6600]' />
          </div>
          <div className='w-full'>
            <h3 className='text-sm font-medium text-white/60 mb-1'>
              Category Distribution
            </h3>
            <div className='space-y-2 mt-2'>
              {topCategories.map(([category, count], index) => (
                <div key={category} className='w-full'>
                  <div className='flex justify-between text-xs text-white/70 mb-1'>
                    <span>{category}</span>
                    <span>{count} events</span>
                  </div>
                  <div className='w-full h-1.5 bg-white/10 rounded-full overflow-hidden'>
                    <motion.div
                      className='h-full bg-[#ff6600]'
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.round((count / stats.total) * 100)}%`,
                      }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.7 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison */}
        <motion.div
          className='p-6 bg-[#1A1A2F] flex items-start gap-4'
          variants={cardVariants}
          custom={3}
          initial='hidden'
          animate='visible'
        >
          <div className='p-3 rounded-xl bg-[#ff6600]/10'>
            <Users className='w-6 h-6 text-[#ff6600]' />
          </div>
          <div>
            <h3 className='text-sm font-medium text-white/60 mb-1'>
              Stats Overview
            </h3>
            <div className='mt-3 space-y-3'>
              <div className='flex items-center justify-between'>
                <span className='text-xs text-white/70'>Current Filters:</span>
                <span className='text-xs font-medium text-white bg-white/10 px-2 py-0.5 rounded-md'>
                  {stats.total} / {Object.values(stats.byCategory)[0]} events
                </span>
              </div>
              <div>
                <motion.div
                  className='w-full h-2 bg-white/10 rounded-full overflow-hidden'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <motion.div
                    className='h-full bg-[#ff6600]'
                    initial={{ width: 0 }}
                    animate={{
                      width: `${Math.round(
                        (stats.total / Object.values(stats.byCategory)[0]) * 100
                      )}%`,
                    }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsStats;
