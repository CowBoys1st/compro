"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Teams: React.FC = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
     .then(res => res.json())
     .then(data => setTeam(data.results))
  }, []);

  return (
    <div>
      <h2 className="text-4xl lg:text-6xl font-bold">Our Team</h2>
      <div className="team-container">
        {team.map((member: any, index: number) => (
          <div key={index} className='team-member'>
            <Image src={member.picture.large} alt={`${member.name.first} ${member.name.last}`} width={150} height={150} />
            <h2 className='bold-20 lg:bold-32 mt-5'>{`${member.name.first} ${member.name.last}`}</h2>
            <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{member.email}</p>
            <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>{member.phone}</p>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Teams