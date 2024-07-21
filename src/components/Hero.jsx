import React from 'react'
import { motion } from 'framer-motion'

import { HERO_CONTENT } from '../assets/data/data'
import Me from '../assets/img/me.png'

const container = delay => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: .5, delay: delay }
    }
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className="pl-8 w-full lg:w-1/2">
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl'
                    >
                        Krystian Kozak
                    </motion.h1>
                    <motion.span 
                        variants={container(.5)}
                        initial="hidden"
                        animate="visible"
                        className='bg-gradient-to-r from-blue-300 via-slate-500 to-blue-900 bg-clip-text text-3xl text-transparent'
                    >
                        Frontend Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible" 
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'
                    >
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg: p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        src={Me} 
                        alt="It's me!" 
                        title="It's me!"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 0.6 }}
                        transition={{ duration: 1, delay: 1.2 }} 
                        className='opacity-60 w-96 mask'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero