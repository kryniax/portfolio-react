import React from 'react'
import Logo from '../assets/img/logo.svg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='m-8 flex flex-shrink-0 items-center'>
                <img src={Logo} alt='Logo' className='w-16'/>
            </div>
            <div className='m-8 flex items-center justify-center gap-3 text-2xl'>
                <FaLinkedin/>
                <FaGithub/>
            </div>
        </nav>
  )
}

export default Navbar