import React from 'react'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../assets/data/data'

const Experience = () => {

    const modifySingleChars = (str) => {
        return str.replace(/ ([a-zA-Z]) /g,' $1' + '\u00A0');
    } 

  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: .5 }} 
            className='my-20 text-center text-4xl'
        >
            Experience
        </motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className='w-full lg:w-1/4'
                    >
                        <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1 }}
                        className='w-full max-w-xl lg:w-3/4'
                    >
                        <h6 className='mb-2 font-semibold'>
                            {experience.role}
                            <p className='text-sm text-blue-100'>
                                {experience.company}
                            </p>
                        </h6>
                        <p className='text-justify'>{modifySingleChars(experience.description)}</p>
                        {experience.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className='mr-2 mt-4 rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-blue-600'>
                                    {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience