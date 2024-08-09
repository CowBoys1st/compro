import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 2xl:px-10 py-10 pb-32 md:gap-28 lg:py-20  xl:flex-row relative'>
      
        <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className='bold-52 lg:bold-88'>CowBoys IT Solutions</h1>
        <p className="regular-16 mt-6 text-black xl:max-w-[520px]">Selamat datang di CowBoys IT Solutions, tempat di mana inovasi dan teknologi bertemu untuk memberikan solusi IT terbaik. Misi kami adalah memberdayakan bisnis melalui teknologi inovatif dan solusi IT yang handal.</p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src={"/star.svg"}
                key={index}
                alt='star'
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className='bold-16 lg:bold-20 text-blue-70'>
            198k
            <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
          </p>
        </div>

        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title='Download App'
            variant='btn_green'
          />
          <Link href="/about-us">
            <Button
            type='button'
            title='Learn More'
            icon='/play.svg'
            variant='btn_white_text'
          />
          </Link>
          
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          
          <div className='flex flex-col'>
            <div className="flexBetween">
              <p className='reguler-16 text-gray-20'>Location</p>
              <Image src={"/close.svg"} alt='close' width={24} height={24}/>
            </div>
            <p className="bold-20 text-white">Tangerang</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className='reguler-16 block text-gray-20'>Distance</p>
              <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className='reguler-16 block text-gray-20'>Elevation</p>
              <p className='bold-20 text-white'>2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero