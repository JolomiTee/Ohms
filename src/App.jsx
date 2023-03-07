import React from 'react'

import './assets/css/App.css'
import '../src/assets/css/Components.css'
import Content from './utilities/Content'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Apartment from './components/Apartments'
import Reasons from './components/Reasons'
import Testimonial from './components/Testimonial'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'



function App() {
  const Nav = Content.map(item => {
    return <Navbar key={Content.id} {...item} />
  })

  return (
    <>
      {Nav}
      <Hero />
      <Apartment />
      <section className='blueSection'>
        <Reasons />
        <Testimonial />
      </section>
      <FaqSection />
      <footer className='blueSection'>
        <Footer />
      </footer>
    </>
  )
}

export default App
