import React, { useState } from 'react';
import { ImageSlider } from './ImageSlider';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Event {
  name: string;
  date: string;
  category: string;
  images: string[];
  artists?: string[];
  description: string;
  details?: { [key: string]: string };
}

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-[#1A1A2F]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20'>
      <ImageSlider images={event.images} />

      <div className='p-6'>
        <div className='flex justify-between items-start mb-4'>
          <div>
            <h3 className='text-xl font-bold text-white mb-2'>{event.name}</h3>
            <p className='text-gray-400 text-sm'>{event.date}</p>
          </div>
          <span className='px-3 py-1 bg-orange-500/10 text-orange-500 text-sm rounded-full'>
            {event.category}
          </span>
        </div>

        {event.artists && (
          <div className='mb-4'>
            <h4 className='text-sm font-medium text-gray-400 mb-2'>
              Featured Artists
            </h4>
            <div className='flex flex-wrap gap-2'>
              {event.artists.map((artist, index) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-white/5 rounded-full text-sm text-white/80'
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300'
        >
          <span>{isExpanded ? 'Show less' : 'Show more'}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {isExpanded && (
          <div className='mt-4 text-gray-400 text-sm'>
            <p>{event.description}</p>

            {event.details && (
              <div className='mt-4 grid gap-2'>
                {Object.entries(event.details).map(([key, value]) => (
                  <div key={key} className='flex gap-2'>
                    <span className='text-white/60'>{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
