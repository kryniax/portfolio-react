import React from 'react'
import { motion } from 'framer-motion'
import Socials from './Socials'
import { CONTACT } from '../assets/data/data'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: .5 }}  
          className='my-10 text-center text-4xl'
        >
          Contact
        </motion.h2>
        <div className='flex flex-col items-center text-center tracking-tighter'>
            <a 
                href="https://krystiankozak.com/resume_krystian_kozak.pdf"
                target='_blank'
                title='My Resume'
                className='my-2 transtion group flex h-12 w-36 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-900 p-[2px] duration-50 hover:shadow-2xl hover:shadow-blue-900/30 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-700'
            >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#191919]">
                    Resume
                </div>
            </a>
            <p className='my-2'>{CONTACT.address}</p>
            <a href='tel:+48781580273' className='my-2'>{CONTACT.phoneNo}</a>
            <a href='mailto:dev@krystiankozak.com' className='my-2'>{CONTACT.email}</a>
            <div className='flex gap-2 text-xl py-4'>
              <Socials/>
            </div>
        </div>
    </div>
  )
}

export default Contact