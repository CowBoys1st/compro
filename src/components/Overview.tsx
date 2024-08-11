import Image from 'next/image'
import React from 'react'

const Overview = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className='bold-32 lg:bold-52 xl:max-w-[520px]'>Innovation through Technology</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Founded in 2015, <strong>CowBoys IT Solutions</strong> has grown into a leader in IT consulting. Our team consists of experts dedicated to delivering the best results for our clients. We take pride in our collaborative and innovative work culture, which allows us to stay at the forefront of technology.</p>
        </div>
      </div>

      <div className='flexCenter max-container relative w-full'>
        <Image
          src='/innovation.jpg'
          alt='innovation'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />
      </div>
    </section>
  )
}

export default Overview