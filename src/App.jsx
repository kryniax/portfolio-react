import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'


function App() {

  return (
    <React.Fragment>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600 selection: text-cyan-900'>
        <div className='flixed top-0 -z-10 h-full w-full'></div>
        <div className='container mx-auto px-8'>
          <Navbar/>
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
        </div>
      </div>

    </React.Fragment>
  )
}

export default App
