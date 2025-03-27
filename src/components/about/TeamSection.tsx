import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import TeamMemberAvatar from './TeamMemberAvatar';
import { TeamData } from '@/types/interfaces';

interface TeamSectionProps {
  currentTeam: TeamData;
  selectedSemesterIndex: number;
  setSelectedSemesterIndex: (index: number) => void;
  teamData: TeamData[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  currentTeam,
  selectedSemesterIndex,
  setSelectedSemesterIndex,
  teamData,
}) => {
  const [expandedTeamView, setExpandedTeamView] = useState<boolean>(false);

  return (
    <section className='w-full max-w-[2000px] mx-auto px-4 md:px-20 py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center mb-16'
      >
        <Badge className='bg-white/10 text-[#fd5f00] mb-4 py-1.5 text-sm font-medium border border-[#fd5f00]/30'>
          Our Team
        </Badge>
        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
          Meet the People Behind SAO
        </h2>
        <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8'>
          Our dynamic student team drives SAO initiatives and ensures student
          needs are at the heart of everything we do.
        </p>

        {/* Semester Selector */}
        <div className='mb-12'>
          <div className='flex flex-wrap justify-center items-center gap-3'>
            <span className='text-gray-300'>Select semester:</span>
            <select
              value={selectedSemesterIndex}
              onChange={e => setSelectedSemesterIndex(parseInt(e.target.value))}
              className='bg-[#1A1A2F] border border-white/10 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#fd5f00]'
            >
              {teamData.map((team, index) => (
                <option key={index} value={index}>
                  {team.semester}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <Card className='bg-[#1A1A2F]/40 border-white/5 backdrop-blur-xl overflow-hidden rounded-xl mb-12'>
        <CardContent className='p-8'>
          {/* Current Admins */}
          <div className='mb-12'>
            <h3 className='text-2xl font-bold mb-8 text-center text-white'>
              <span className='text-[#fd5f00]'>{currentTeam.semester}</span>{' '}
              Admins
            </h3>
            <div className='flex flex-wrap justify-center gap-8'>
              {currentTeam.admins.map((admin, index) => (
                <TeamMemberAvatar
                  key={index}
                  name={admin}
                  role='Admin'
                  colorIndex={index}
                />
              ))}
            </div>
          </div>

          {/* Current Leaders */}
          <div>
            <h3 className='text-2xl font-bold mb-8 text-center text-white'>
              <span className='text-[#fd5f00]'>{currentTeam.semester}</span>{' '}
              Team Leaders
            </h3>

            <div className='flex flex-wrap justify-center gap-8'>
              {currentTeam.leaders
                .slice(0, expandedTeamView ? undefined : 8)
                .map((leader, index) => (
                  <TeamMemberAvatar
                    key={index}
                    name={leader}
                    role='Team Leader'
                    colorIndex={index + 4}
                  />
                ))}
            </div>

            {currentTeam.leaders.length > 8 && (
              <div className='mt-6 text-center'>
                <button
                  onClick={() => setExpandedTeamView(!expandedTeamView)}
                  className='bg-[#fd5f00]/10 hover:bg-[#fd5f00]/20 text-[#fd5f00] px-6 py-2 rounded-lg flex items-center gap-2 mx-auto transition-all duration-300'
                >
                  {expandedTeamView
                    ? 'Show Less'
                    : `Show All ${currentTeam.leaders.length} Leaders`}
                  {expandedTeamView ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Team History Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center'
      >
        <div className='inline-flex items-center gap-2 mb-6'>
          <div className='h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30'></div>
          <span className='text-white/60 text-sm'>SAO Team Evolution</span>
          <div className='h-[1px] w-12 bg-gradient-to-r from-white/30 to-transparent'></div>
        </div>

        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 max-w-4xl mx-auto'>
          {teamData.map((team, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSemesterIndex(index)}
              className={`px-3 py-2 rounded-md text-xs transition-all duration-300 ${
                selectedSemesterIndex === index
                  ? 'bg-[#fd5f00] text-white font-medium'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {team.semester}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Subtle divider */}
      <div className='mt-20 h-16 w-full flex justify-center'>
        <div className='w-1/3 h-px bg-gradient-to-r from-transparent via-[#fd5f00]/30 to-transparent'></div>
      </div>
    </section>
  );
};

export default TeamSection;
