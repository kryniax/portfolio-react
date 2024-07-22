import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <React.Fragment>
        <a href="https://www.linkedin.com/in/krystiankozak/" target="_blank">
            <FaLinkedin/>
        </a>
        <a href="https://github.com/kryniax" target="_blank">
            <FaGithub/>
        </a>
    </React.Fragment>
  )
}

export default Socials