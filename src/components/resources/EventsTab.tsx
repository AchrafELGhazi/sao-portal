import React from 'react';
import { Calendar, Users, ChevronRight, ExternalLink } from 'lucide-react';
import { ResourceItem } from './ResourceComponents';

const EventsTab: React.FC = () => {
  const preEventFormUrl =
    'https://forms.office.com/pages/responsepage.aspx?id=TOAlcMpwv0ire3OVTLhGrXXYZjml-mpDrCoQdTU5saBUQ1NXUE0yMVFWSEszNjY0TFo2VFkwVk5HRS4u&route=shorturl';
  const postEventFormUrl = 'https://forms.office.com/r/ZqXEfp5iyi';
  const guestRequestFormPath = '/EventsResources/Guest-Request-Form.docx';

  return (
    <div className='bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50'>
      <h2 className='text-2xl font-bold text-white mb-6 flex items-center'>
        <Calendar className='mr-3 text-orange-500' />
        Event Forms
      </h2>
      <p className='text-gray-300 mb-8'>
        Planning an event? Make sure to complete these forms before and after
        your event to ensure proper approval and documentation.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
          <h3 className='text-white font-medium mb-2 flex items-center'>
            <Calendar className='text-orange-500 mr-2' />
            Pre-event Form
          </h3>
          <p className='text-gray-300 text-sm mb-3'>
            Complete this form at least 2 weeks before your event
          </p>
          <a
            href={preEventFormUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-300 flex items-center gap-2 text-sm inline-block mt-2'
          >
            Open Form
            <ExternalLink className='w-4 h-4' />
          </a>
        </div>

        <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
          <h3 className='text-white font-medium mb-2 flex items-center'>
            <Calendar className='text-orange-500 mr-2' />
            Post-event Form
          </h3>
          <p className='text-gray-300 text-sm mb-3'>
            Submit within 3 days after your event
          </p>
          <a
            href={postEventFormUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-300 flex items-center gap-2 text-sm inline-block mt-2'
          >
            Open Form
            <ExternalLink className='w-4 h-4' />
          </a>
        </div>

        <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
          <h3 className='text-white font-medium mb-2 flex items-center'>
            <Users className='text-orange-500 mr-2' />
            Guest Request Form
          </h3>
          <p className='text-gray-300 text-sm mb-3'>
            Required for inviting external guests to campus
          </p>
          <a
            href={guestRequestFormPath}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-300 flex items-center gap-2 text-sm inline-block mt-2'
          >
            Download DOCX File
            <ExternalLink className='w-4 h-4' />
          </a>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl font-semibold text-white mb-4'>
          Event Planning Guidelines
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
            <h4 className='text-white font-medium mb-3'>Event Timeline</h4>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-start'>
                <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                  1
                </span>
                <span>Submit Pre-event Form (2 weeks before)</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                  2
                </span>
                <span>Receive approval from SAO</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                  3
                </span>
                <span>Book venue and necessary equipment</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                  4
                </span>
                <span>Hold event</span>
              </li>
              <li className='flex items-start'>
                <span className='bg-orange-500 rounded-full h-5 w-5 flex items-center justify-center text-xs text-white mr-3 mt-1'>
                  5
                </span>
                <span>Submit Post-event Form (3 days after)</span>
              </li>
            </ul>
          </div>
          <div className='bg-gray-700/30 backdrop-blur-sm rounded-xl p-5 border border-gray-600/50'>
            <h4 className='text-white font-medium mb-3'>Event Checklist</h4>
            <ul className='space-y-2 text-gray-300'>
              <li className='flex items-start'>
                <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                <span>Confirm budget approval</span>
              </li>
              <li className='flex items-start'>
                <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                <span>Arrange for necessary equipment</span>
              </li>
              <li className='flex items-start'>
                <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                <span>Create promotional materials</span>
              </li>
              <li className='flex items-start'>
                <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                <span>Confirm attendance of speakers/performers</span>
              </li>
              <li className='flex items-start'>
                <ChevronRight className='text-orange-500 mr-2 mt-1 flex-shrink-0' />
                <span>Prepare evaluation forms</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsTab;
