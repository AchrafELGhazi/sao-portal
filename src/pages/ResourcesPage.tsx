import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import TabButton from '@/components/resources/TabButton';
import DocumentsTab from '@/components/resources/DocumentsTab';
import EventsTab from '@/components/resources/EventsTab';
import ClubsTab from '@/components/resources/ClubsTab';
import LogosTab from '@/components/resources/LogosTab';
import FAQsTab from '@/components/resources/FAQsTab';
import { motion } from 'framer-motion';

// Define tab types
type TabType = 'documents' | 'events' | 'clubs' | 'logos' | 'faqs';

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('documents');

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#121225] to-[#1D1D35] pt-24 pb-16'>
      <div className='max-w-12xl pt-10 md:pt-20 mx-auto px-4 sm:px-16 lg:px-16'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-12 text-center'
        >
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
            <span className='text-orange-500 text-sm font-medium'>
              SAO Resources
            </span>
            <ChevronRight className='w-4 h-4 text-orange-500' />
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Resources & <span className='text-orange-500'>Documents</span>
          </h1>
          <p className='text-lg text-white/70 max-w-3xl mx-auto'>
            Access all the forms, documents, and resources you need for student
            activities, club management, and event planning at Al Akhawayn
            University.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className='mb-12 relative z-10'>
          {/* Background decorative elements */}
          <div className='absolute -top-16 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl'></div>
          <div className='absolute -top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl'></div>

          <div className='relative bg-[#1A1A2F]/40 backdrop-blur-xl p-2 rounded-2xl border border-white/5 shadow-xl'>
            <div className='flex flex-wrap gap-3 px-2'>
              <TabButton
                label='Essential Documents'
                icon='FileText'
                active={activeTab === 'documents'}
                onClick={() => setActiveTab('documents')}
              />
              <TabButton
                label='Events'
                icon='Calendar'
                active={activeTab === 'events'}
                onClick={() => setActiveTab('events')}
              />
              <TabButton
                label='Clubs'
                icon='Users'
                active={activeTab === 'clubs'}
                onClick={() => setActiveTab('clubs')}
              />
              <TabButton
                label='SAO Logos'
                icon='Image'
                active={activeTab === 'logos'}
                onClick={() => setActiveTab('logos')}
              />
              <TabButton
                label='FAQs'
                icon='HelpCircle'
                active={activeTab === 'faqs'}
                onClick={() => setActiveTab('faqs')}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='py-8'
        >
          <div className=' rounded-xl overflow-hidden shadow-lg'>
            {/* Essential Documents */}
            {activeTab === 'documents' && <DocumentsTab />}

            {/* Events */}
            {activeTab === 'events' && <EventsTab />}

            {/* Clubs */}
            {activeTab === 'clubs' && <ClubsTab />}

            {/* SAO Logos */}
            {activeTab === 'logos' && <LogosTab />}

            {/* FAQs */}
            {activeTab === 'faqs' && <FAQsTab />}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResourcesPage;
