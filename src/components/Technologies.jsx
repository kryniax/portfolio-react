import React from 'react'
import { motion } from 'framer-motion'

import { BiLogoTypescript } from 'react-icons/bi'
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa'
import { RiJavascriptFill, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}  
            className='my-20 text-center text-4xl'
        >
            Technologies
        </motion.h2>
        <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: .5 }}  
            className='flex flex-wrap items-center justify-center gap-4'
        >
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <RiReactjsLine 
                    color='#61DBFB' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>React</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <BiLogoTypescript 
                    color='#3178C6' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>TypeScript</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <RiJavascriptFill 
                    color='#f7df1e' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <FaNodeJs 
                    color='#68a063' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>Node.js</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <SiMongodb 
                    color='#00ED64' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>MongoDB</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <RiTailwindCssFill 
                    color='#06b6d4' 
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>Tailwind</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <FaCss3Alt
                    color='#2965f1'
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>CSS3</span>
            </div>
            <div className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 px-6 py-4'>
                <FaHtml5
                    color='#f06529'
                    className='text-7xl'
                />
                <span className='text-sm text-neutral-400'>HTML5</span>
            </div>
        </motion.div>
    </div>
  )
}

export default Technologies