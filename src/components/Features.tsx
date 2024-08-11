import { FEATURES } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10'>
      <div className='max-container padding-container relative w-full flex justify-center'>
        <div className='z-20 flex w-full flex-col lg:w-[80%]'>
          <div className='relative'>
            <h2 className='bold-40 text-center lg:bold-64'>Our Services</h2>
          </div> 
          <ul className='mt-10 mb-10 grid gap-10 md:grid-cols-2'>
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
          <Link href="/services">
            <Button
            type='button'
            title='more details'
            variant='btn_white_text'
            />
          </Link>
        </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
        {title}
      </h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}

export default Features