import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Heart,
  BookOpen,
  Music,
  Lightbulb,
} from 'lucide-react';

const ClubsSection: React.FC = () => {
  const clubTypes = [
    {
      name: 'Humanitarian Clubs',
      description:
        'Dedicated to community service, social justice, and making a positive impact on society.',
      icon: <Heart className='w-10 h-10 text-orange-500' />,
      color: 'from-orange-500/10 to-orange-500/5',
      borderColor: 'border-orange-500/20',
    },
    {
      name: 'Entertainment Clubs',
      description:
        'Focused on arts, music, performance, gaming, and recreational activities.',
      icon: <Music className='w-10 h-10 text-purple-500' />,
      color: 'from-purple-500/10 to-purple-500/5',
      borderColor: 'border-purple-500/20',
    },
    {
      name: 'Cultural Clubs',
      description:
        'Celebrating diversity, heritage, and fostering cross-cultural understanding and appreciation.',
      icon: <BookOpen className='w-10 h-10 text-green-500' />,
      color: 'from-green-500/10 to-green-500/5',
      borderColor: 'border-green-500/20',
    },
    {
      name: 'Educational Clubs',
      description:
        'Advancing academic interests, professional development, and intellectual pursuits.',
      icon: <Lightbulb className='w-10 h-10 text-blue-500' />,
      color: 'from-blue-500/10 to-blue-500/5',
      borderColor: 'border-blue-500/20',
    },
  ];

  return (
    <section className='pt-20 pb-10 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          {/* Tag */}
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
            <span className='text-orange-500 text-sm font-medium'>
              Join & Participate
            </span>
            <ChevronRight className='w-4 h-4 text-orange-500' />
          </div>

          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Student Clubs at AUI
          </h2>
          <p className='text-gray-400 mt-2 max-w-2xl mx-auto'>
            Explore our diverse range of student-led clubs and organizations
            where you can pursue your passions and develop new skills.
          </p>
        </div>

        {/* Club Types Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
          {clubTypes.map((type, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${type.borderColor} bg-gradient-to-br ${type.color} backdrop-blur-md`}
            >
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-gray-800/50 rounded-xl'>{type.icon}</div>
                <div>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    {type.name}
                  </h3>
                  <p className='text-gray-300'>{type.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className='bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 mb-12'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Club Mission at Al Akhawayn University
          </h3>
          <p className='text-gray-300 mb-4'>
            Student clubs at Al Akhawayn University serve as vital platforms for
            student growth, leadership development, and community engagement.
            Each club, regardless of its focus, must fulfill the following
            mission:
          </p>

          <ul className='space-y-3 text-gray-300'>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                <strong className='text-white'>
                  Foster Student Development:
                </strong>{' '}
                Provide opportunities for members to develop skills, knowledge,
                and experiences that complement their academic education.
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                <strong className='text-white'>Promote Leadership:</strong>{' '}
                Create opportunities for students to take on leadership roles,
                organize events, and manage projects.
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                <strong className='text-white'>Build Community:</strong>{' '}
                Contribute to a vibrant campus life and foster connections among
                students from diverse backgrounds.
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                <strong className='text-white'>
                  Uphold University Values:
                </strong>{' '}
                Demonstrate commitment to academic excellence, ethical
                leadership, and global citizenship.
              </span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-orange-500 font-bold'>•</span>
              <span>
                <strong className='text-white'>Engage Beyond Campus:</strong>{' '}
                Connect with the broader community through service projects,
                collaborations, and knowledge sharing.
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className='text-center'>
          <Link
            to='/clubs'
            className='group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 text-lg font-medium'
          >
            <span>View All Clubs</span>
            <ArrowRight className='w-5 h-5 transform group-hover:translate-x-1 transition-transform' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
