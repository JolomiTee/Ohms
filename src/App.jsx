import React from 'react'
import './assets/css/App.css'
import './assets/css/Components.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stat from './components/Stat'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stat />
    </div>
  )
}

export default App
