import React from 'react'
import Me from '../assets/img/me.png'
import { ABOUT_TEXT } from '../assets/data/data'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>About me</h2>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <div className='w-1/2 border h-24 border-neutral-300 rounded-md flex flex-col text-center p-4'>
                        <h4 className='font-bold'>Location</h4>
                        <p>Poland</p>
                    </div>
                    <div className='w-1/2 border h-24 border-neutral-300 rounded-md flex flex-col text-center p-4'>
                        <h4 className='font-bold'>Experience</h4>
                        <p>4 years</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl'>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About