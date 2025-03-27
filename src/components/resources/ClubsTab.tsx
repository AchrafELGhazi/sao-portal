import React, { useState } from 'react';
import {
  Users,
  Calendar,
  FileText,
  ChevronUp,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { ResourceItem } from './ResourceComponents';

const ClubsTab: React.FC = () => {
  const [embedFormVisible, setEmbedFormVisible] = useState<boolean>(false);

  return (
    <div>
      <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 mb-8'>
        <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
          <Users className='mr-3 text-orange-500' />
          Club Creation and Renewal
        </h2>
        <p className='text-gray-300 mb-8'>
          Download these essential documents for creating a new club or renewing
          an existing one. Follow the guidelines provided in each document.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <ResourceItem
            title='Club Creation/Renewal Form'
            description='Official form required for new clubs or annual renewal'
            link='#'
            icon={<FileText className='text-orange-500' />}
            fileType='PDF'
          />
          <ResourceItem
            title='Advisor Form'
            description='Must be completed by the faculty/staff advisor'
            link='#'
            icon={<Users className='text-orange-500' />}
            fileType='PDF'
          />
          <ResourceItem
            title='Sample Action Plan'
            description="Template for creating your club's action plan"
            link='#'
            icon={<Calendar className='text-orange-500' />}
            fileType='XLSX'
          />
          <ResourceItem
            title='Sample Constitution'
            description="Template for creating your club's constitution"
            link='#'
            icon={<FileText className='text-orange-500' />}
            fileType='DOCX'
          />
        </div>
      </div>

      <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
        <h2 className='text-2xl font-bold text-white mb-4 flex items-center'>
          <Users className='mr-3 text-orange-500' />
          Create a Club
        </h2>
        <p className='text-gray-300 mb-6'>
          To create a new club at Al Akhawayn University, please fill out the
          embedded form below or click the button to open it in a new window.
        </p>

        <div className='flex flex-wrap gap-4 mb-6'>
          <button
            onClick={() => setEmbedFormVisible(!embedFormVisible)}
            className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
          >
            {embedFormVisible ? 'Hide Form' : 'Show Embedded Form'}
            {embedFormVisible ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
          </button>

          <a
            href='https://forms.office.com/Pages/ResponsePage.aspx?id=TOAlcMpwv0ire3OVTLhGreKnvvJXSbFAndMP7fFaXxpURUZUTlhaVFBRUzJYNUJWR1pZUU1HTzNEVi4u'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
          >
            Open in New Window
            <ExternalLink className='w-5 h-5' />
          </a>
        </div>

        {embedFormVisible && (
          <div className='rounded-xl overflow-hidden border border-gray-600 h-[600px]'>
            <iframe
              src='https://forms.office.com/Pages/ResponsePage.aspx?id=TOAlcMpwv0ire3OVTLhGreKnvvJXSbFAndMP7fFaXxpURUZUTlhaVFBRUzJYNUJWR1pZUU1HTzNEVi4u'
              width='100%'
              height='100%'
              frameBorder='0'
              title='Club Creation Form'
            ></iframe>
          </div>
        )}

        <div className='mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl'>
          <h3 className='text-white font-semibold mb-2'>
            Club Creation Process
          </h3>
          <ol className='space-y-2 text-gray-300 list-decimal list-inside'>
            <li>Fill out the club creation form completely</li>
            <li>Gather at least 10 interested student signatures</li>
            <li>Find a faculty or staff advisor</li>
            <li>Create a club constitution using the template provided</li>
            <li>Develop an action plan for the semester/year</li>
            <li>Submit all documents to the SAO office</li>
            <li>Wait for approval notification</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ClubsTab;
