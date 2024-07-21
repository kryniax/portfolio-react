import React from 'react'
import { HERO_CONTENT } from '../assets/data/data'
import Me from '../assets/img/me.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className="pl-8 w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'>Krystian Kozak</h1>
                    <span className='bg-gradient-to-r from-blue-300 via-slate-500 to-blue-900 bg-clip-text text-3xl text-transparent'>Frontend Developer</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg: p-8'>
                <div className='flex justify-center'>
                    <img src={Me} alt="It's me!" title="It's me!" className='opacity-60 w-96 mask'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero