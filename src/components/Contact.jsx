import React from 'react'
import { CONTACT } from '../assets/data/data'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h2 className='my-10 text-center text-4xl'>Contact</h2>
        <div className='flex flex-col text-center tracking-tighter'>
            <p className='my-2'>{CONTACT.address}</p>
            <a href='tel:0048781580273' className='my-2'>{CONTACT.phoneNo}</a>
            <a href='mailto:dev@krystiankozak.com' className='my-2'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact