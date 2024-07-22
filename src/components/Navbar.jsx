import React from 'react'
import Logo from '../assets/img/logo.svg'
import Socials from './Socials'

const Navbar = () => {
  return (
        <nav className='w-full h-18 flex items-center justify-between py-6'>
            <div className='m-8 flex flex-shrink-0 items-center'>
                <img src={Logo} alt='Logo' className='w-16'/>
            </div>
            <div className='m-8 flex items-center justify-center gap-3 text-2xl'>
                <ul>
                    <li>
                        <a>About me</a>
                    </li>
                </ul>
                <Socials/>
            </div>
        </nav>
  )
}

export default Navbar