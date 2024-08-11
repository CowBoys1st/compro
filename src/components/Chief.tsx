import Image from 'next/image'
import React from 'react'

const TeamLeader = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 lg:gap-12">
        <div className="w-full max-w-xs bg-gray-10 p-6 text-center rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <Image src={"/cowboys-profile.jpg"} alt='cowboys' width={150} height={150} className="rounded-full mx-auto mb-6"/>
            <h2 className="bold-20 lg:bold-32 mt-5">Dwi Raharjo</h2>
            <p className="bold-16 mt-5 text-gray-50 lg:mt-[30px] lg:bg-none">Chief Executive Officer</p>
        </div>
        <div className="w-full max-w-xs bg-gray-10 p-6 text-center rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <Image src={"/elon.jpg"} alt='cowboys' width={150} height={150} className="rounded-full mx-auto mb-6"/>
            <h2 className="bold-20 lg:bold-32 mt-5">Elon Musk</h2>
            <p className="bold-16 mt-5 text-gray-50 lg:mt-[30px] lg:bg-none">Chief Executive Officer</p>
        </div>
        <div className="w-full max-w-xs bg-gray-10 p-6 text-center rounded-lg shadow-lg transition-all hover:shadow-2xl">
            <Image src={"/markz.jpg"} alt='cowboys' width={150} height={150} className="rounded-full mx-auto mb-6"/>
            <h2 className="bold-20 lg:bold-32 mt-5">Mark Zuckerberg</h2>
            <p className="bold-16 mt-5 text-gray-50 lg:mt-[30px] lg:bg-none">Chief Executive Officer</p>
        </div>
    </div>
  )
}

export default TeamLeader