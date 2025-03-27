import React from 'react';
import { FileText } from 'lucide-react';
import { EmailContact, ResourceCard } from './ResourceComponents';

const DocumentsTab: React.FC = () => {
  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
      <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <FileText className='mr-3 text-orange-500' />
        Essential Documents
      </h2>
      <p className='text-gray-300 mb-8'>
        These documents are crucial for various student activities and
        processes. Download what you need and follow the instructions provided
        in each document.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <ResourceCard
          title='General Documents'
          resources={[
            {
              title: 'SAO Handbook',
              description:
                'Complete guide to Student Activities Office policies and procedures',
              link: '#',
              fileType: 'PDF',
            },
            {
              title: 'Student Organization Guidelines',
              description: 'Rules and regulations for student organizations',
              link: '#',
              fileType: 'PDF',
            },
            {
              title: 'Space Reservation Guide',
              description:
                'How to reserve campus spaces for events and activities',
              link: '#',
              fileType: 'PDF',
            },
          ]}
        />
        <ResourceCard
          title='Budget & Finance'
          resources={[
            {
              title: 'Budget Request Template',
              description: 'Template for submitting budget requests',
              link: '#',
              fileType: 'XLSX',
            },
            {
              title: 'Expense Report Form',
              description: 'Form for reporting club and event expenses',
              link: '#',
              fileType: 'PDF',
            },
            {
              title: 'Fundraising Approval Form',
              description: 'Required for all fundraising activities',
              link: '#',
              fileType: 'PDF',
            },
          ]}
        />
      </div>

      <EmailContact email='a.bounasser@aui.ma' />
    </div>
  );
};

export default DocumentsTab;
