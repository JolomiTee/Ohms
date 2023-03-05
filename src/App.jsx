import React from 'react'
import './assets/css/App.css'
// import './assets/css/Components.css'
import '../src/assets/css/Components.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stat from './components/Stat'
import Content from './utilities/Content'

function App() {
  const Nav = Content.map(item => {
    return <Navbar key={Content.id} {...item} />
  })

  return (
    <>
      {Nav}
      <Hero />
    </>
  )
}

export default App
