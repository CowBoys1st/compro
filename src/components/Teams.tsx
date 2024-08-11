"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import TeamLeader from './Chief';

const Teams: React.FC = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=17')
     .then(res => res.json())
     .then(data => setTeam(data.results))
  }, []);

  return (
    <section className='max-container padding-container py-10 lg:py-20'>
      <div className='relative text-center mb-12'>
        <h2 className="bold-40 lg:bold-64">Our Team</h2>
        <p className='regular-16 text-gray-90'>Our team consists of experienced and dedicated experts committed to providing the best solutions for our clients.</p>
      </div>

      <TeamLeader />

      <div className="team-container flex flex-wrap justify-center gap-8 lg:gap-12">
        {team.map((member: any, index: number) => (
          <div key={index} className='team-member w-full max-w-xs bg-gray-10 p-6 text-center rounded-lg shadow-lg transition-all hover:shadow-2xl'>
            <Image
              src={member.picture.large} 
              alt={`${member.name.first} ${member.name.last}`} 
              width={150} 
              height={150}
              className='rounded-full mx-auto mb-6'
            />
            <h2 className='bold-20 lg:bold-32 mt-5'>{`${member.name.first} ${member.name.last}`}</h2>
            <p className='regular-16 mt-5 bg-white/80 text-gray-90 lg:mt-[30px] lg:bg-none'>{member.email}</p>
            <p className='regular-16 bg-white/80 text-gray-90 lg:mt-[30px] lg:bg-none'>{member.phone}</p>
          </div>
        ))

        }
      </div>
    </section>
  )
}

export default Teams