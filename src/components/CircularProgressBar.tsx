import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
  color?: string;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  color = 'orange',
}) => {
  const circumference = 2 * Math.PI * 16; // radius = 16
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className='relative w-12 h-12'>
      <svg className='transform -rotate-90 w-12 h-12'>
        {/* Background circle */}
        <circle
          cx='24'
          cy='24'
          r='16'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          className='text-gray-700'
        />
        {/* Progress circle */}
        <circle
          cx='24'
          cy='24'
          r='16'
          stroke={`var(--${color}-500)`}
          strokeWidth='4'
          fill='none'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className='transition-all duration-1000 ease-out'
        />
      </svg>
      <span className='absolute inset-0 flex items-center justify-center text-xs font-medium'>
        {percentage}%
      </span>
    </div>
  );
};
