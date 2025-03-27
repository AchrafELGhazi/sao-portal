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
  const formUrl =
    'https://forms.office.com/Pages/ResponsePage.aspx?id=TOAlcMpwv0ire3OVTLhGreKnvvJXSbFAndMP7fFaXxpURUZUTlhaVFBRUzJYNUJWR1pZUU1HTzNEVi4u';

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
            link='/ClubsResources/SAO_CreationRenewal.pdf'
            icon={<FileText className='text-orange-500' />}
            fileType='PDF'
          />
          <ResourceItem
            title='Advisor Form'
            description='Must be completed by the faculty/staff advisor'
            link='/ClubsResources/SAO_AdvisorCommitmentForm.pdf'
            icon={<Users className='text-orange-500' />}
            fileType='PDF'
          />
          <ResourceItem
            title='Sample Action Plan'
            description="Template for creating your club's action plan"
            link='/ClubsResources/SAO_SampleActionPlan.xlsx'
            icon={<Calendar className='text-orange-500' />}
            fileType='XLSX'
          />
          <ResourceItem
            title='Sample Constitution'
            description="Template for creating your club's constitution"
            link='/ClubsResources/SAO_SampleConstitution.doc'
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
          To create a new club at Al Akhawayn University, please use the form
          below. You can either view it embedded on this page or open it in a
          new window for the best experience.
        </p>

        <div className='flex flex-wrap gap-4 mb-6'>
          <a
            href={formUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
          >
            Open Form in New Window
            <ExternalLink className='w-5 h-5' />
          </a>

          <button
            onClick={() => setEmbedFormVisible(!embedFormVisible)}
            className='bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full transition duration-300 flex items-center gap-2'
          >
            {embedFormVisible ? 'Hide Form Preview' : 'Show Form Preview'}
            {embedFormVisible ? (
              <ChevronUp className='w-5 h-5' />
            ) : (
              <ChevronDown className='w-5 h-5' />
            )}
          </button>
        </div>

        {embedFormVisible && (
          <div className='space-y-4'>
            <div className='rounded-xl overflow-hidden border border-gray-600'>
              <div className='bg-gray-700 text-white p-3 flex justify-between items-center'>
                <span>Microsoft Form Preview</span>
                <a
                  href={formUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-orange-400 hover:text-orange-300 flex items-center gap-1'
                >
                  Open form <ExternalLink className='w-4 h-4' />
                </a>
              </div>
              <div className='bg-white p-4 h-[500px] overflow-auto'>
                <div className='flex flex-col items-center justify-center h-full text-center p-6'>
                  <img
                    src='/api/placeholder/200/100'
                    alt='Microsoft Forms logo'
                    className='mb-4 opacity-80'
                  />
                  <h3 className='text-xl font-bold mb-3 text-gray-800'>
                    Club Creation Form
                  </h3>
                  <p className='text-gray-600 mb-6'>
                    This form may not display correctly in the embedded preview
                    due to Microsoft Forms' security restrictions.
                  </p>
                  <a
                    href={formUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition duration-300 inline-flex items-center gap-2'
                  >
                    Open in New Window for Best Experience
                    <ExternalLink className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>

            <div className='p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl'>
              <h3 className='text-white font-semibold mb-2 flex items-center'>
                <ExternalLink className='w-4 h-4 mr-2 text-blue-400' />
                Form Access Instructions
              </h3>
              <p className='text-gray-300'>
                For the best experience, please click the "Open Form in New
                Window" button above. Microsoft Forms often has limitations when
                embedded directly on websites.
              </p>
            </div>
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
