import React from 'react'
import Logo from '../assets/img/logo.svg'
import Socials from './Socials'

const Navbar = () => {
  return (
        <nav className='bg-[#191919] bg-opacity-90 h-24 lg:h-32 sticky top-0 flex items-center justify-between py-6 box-border z-50'>
            <div className='m-0 lg:m-8 flex items-center'>
                <a href="https://www.krystiankozak.com/">
                    <img src={Logo} alt='Logo' className='w-12 lg:w-16'/>
                </a>  
            </div>
            <div className='m-0 lg:m-8 w-s flex items-center justify-center gap-3 text-2xl'>
                <Socials/>
            </div>
        </nav>
  )
}

export default Navbar