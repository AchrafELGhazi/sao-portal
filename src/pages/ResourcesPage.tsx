import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import TabButton from '@/components/resources/TabButton';
import DocumentsTab from '@/components/resources/DocumentsTab';
import EventsTab from '@/components/resources/EventsTab';
import ClubsTab from '@/components/resources/ClubsTab';
import LogosTab from '@/components/resources/LogosTab';
import FAQsTab from '@/components/resources/FAQsTab';

// Define tab types
type TabType = 'documents' | 'events' | 'clubs' | 'logos' | 'faqs';

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('documents');

  return (
    <div className='min-h-screen  pt-32   md:pt-40 file: bg-gradient-to-b from-black via-gray-900 to-black'>
      {/* Header section */}
      <section className='relative    pb-16'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80' />
        </div>

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 mb-4'>
            <span className='text-orange-500 text-sm font-medium'>
              SAO Resources
            </span>
            <ChevronRight className='w-4 h-4 text-orange-500' />
          </div>

          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Resources & <span className='text-orange-500'>Documents</span>
          </h1>
          <p className='text-gray-300 max-w-3xl mb-8'>
            Access all the forms, documents, and resources you need for student
            activities, club management, and event planning at Al Akhawayn
            University.
          </p>

          {/* Navigation Tabs */}
          <div className='flex flex-wrap gap-2 border-b border-gray-700'>
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
      </section>

      {/* Content section */}
      <section className='py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
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
      </section>
    </div>
  );
};

export default ResourcesPage;
