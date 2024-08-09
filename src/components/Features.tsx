import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src="/phone.png"
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div> 
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
//     <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
//       className="rounded-box" />
//   </div>
//   <div className="carousel-item">
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
//       className="rounded-box" />
//   </div>
// </div>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
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