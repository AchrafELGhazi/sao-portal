import React from 'react';
import OfficeHours from './OfficeHours';
import CompactStaffCard from './CompactStaffCard';


const StaffSection: React.FC = () => {
  const staffMembers = [
    {
      name: 'Chaimae Akkati',
      role: 'Manager',
      email: 'c.akkati@aui.ma',
      phone: '+212 535 86 3302',
      initial: 'A',
    },
    {
      name: 'Ayoub Bounasser',
      role: 'Student Engagement Officer',
      email: 'a.bounasser@aui.ma',
      phone: '+212 535 86 3222',
      initial: 'S',
    },
    {
      name: 'Soumiya Bellabair',
      role: 'Student Development Officer',
      email: 's.bellabair@aui.ma',
      phone: '+212 535 86 2303',
      initial: 'L',
    },
    {
      name: 'Loubna El Ayachi',
      role: 'Events Coordinator',
      email: 'l.elayachi@aui.ma',
      phone: '+212 535 86 2767',
      initial: 'D',
    },
    {
      name: 'Driss Ouabbou',
      role: 'Clubs Assistant',
      email: 'd.ouabbou@aui.ma',
      phone: '+212 535 86 2903',
      initial: 'D',
    },
  ];

  return (
    <div>
      <h2 className='text-3xl font-bold text-white mb-8 flex items-center'>
        <span className='inline-block w-6 h-1 bg-orange-500 mr-3'></span>
        SAO Staff
      </h2>

      {/* Compact Staff Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {staffMembers.map((staff, index) => (
          <CompactStaffCard
            key={index}
            name={staff.name}
            role={staff.role}
            email={staff.email}
            phone={staff.phone}
            initial={staff.initial}
          />
        ))}
      </div>

      {/* Office Hours */}
      <OfficeHours />
    </div>
  );
};

export default StaffSection;
