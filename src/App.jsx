import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 1500);
  };

  return (
    <React.Fragment>
      <div className='text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-900'>
        <div className='container mx-auto px-8'>
          {showContent && (
            <React.Fragment>
              <header>
                <Navbar/>
              </header>
              <main className='overflow-x-hidden'>
                <Hero/>
                <About/>
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
              </main>
            </React.Fragment>
          )}
          <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
        </div>
      </div>

    </React.Fragment>
  )
}

export default App
