import React from 'react';
import { TeamMember as TeamMemberType } from '../constants/types';

interface TeamMemberProps {
  teammember: TeamMemberType
}

const TeamMember: React.FC<TeamMemberProps> = ({ teammember }) => {
  return (
    <div className="w-full md:w-3/10 items-center space-y-4 px-6 text-center" id={teammember.id}>
      <div className="w-64 h-80 overflow-hidden rounded-3xl mb-4 mx-auto">
        <img src={teammember.image.url} alt={teammember.image.alt} className="w-full h-full object-cover" />
      </div>
      <h3 className='h4 pt-4'>{teammember.name}</h3>
      <h2 className='h5'>{teammember.role}</h2>
      <p className='text-justify text-lg'>{teammember.description}</p>
    </div>
  );
};

export default TeamMember;