import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT } from '../assets/data/data'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className='my-16 lg:my-20 text-center text-4xl'
        >
            About me
        </motion.h2>
        <div className='flex flex-wrap items-center'>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: .5 }} 
                className='w-full lg:w-1/2 lg:p-8'
            >
                <div className='flex lg:flex-col items-center justify-center gap-6 mb-6 lg:mb-0'>
                    <div className='w-1/2 h-24 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col text-center p-4'>
                        <h4 className='font-bold'>Experience</h4>
                        <p>4 years</p>
                    </div>
                    <div className='w-1/2 h-24 rounded-2xl border-4 border-neutral-800 p-4 flex flex-col text-center p-4'>
                        <h4 className='font-bold'>Location</h4>
                        <p>Poland</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: .5 }}  
                className='w-full lg:w-1/2'
            >
                <div className='flex flex-col justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl text-justify'>{ABOUT}</p>
                    <a 
                        href="https://krystiankozak.com/resume_krystian_kozak.pdf"
                        target='_blank'
                        className='my-2 transtion group flex h-12 w-36 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-900 p-[2px] duration-50 hover:shadow-2xl hover:shadow-blue-900/30 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-700'
                    >
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#191919]">
                            Resume
                        </div>
                    </a>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About