import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <React.Fragment>
        <a href="https://www.linkedin.com/in/krystiankozak/" target="_blank" title='LinkedIn'>
            <FaLinkedin className='text-neutral-300 hover:text-neutral-100 duration-300'/>
        </a>
        <a href="https://github.com/kryniax" target="_blank" title='GitHub'>
            <FaGithub/>
        </a>
    </React.Fragment>
  )
}

export default Socials