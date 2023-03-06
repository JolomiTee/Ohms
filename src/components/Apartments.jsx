import React from 'react'
import Search from './Search'
import Cards from './Cards'

const Apartments = () => {
  return (
    <section className='apartments'>
      <Search />

      <h2 className='secondaryHeader'>Apartments around you</h2>

      <div className='cards'>
        <Cards imgsrc='apt1.png' location='Kado Estate, Abuja' rooms={4} miles={1.3} price={130000} />
        <Cards imgsrc='apt2.png' location='Gwarimpa Estate, Abuja' rooms={6} miles={40} price={120000} />
        <Cards imgsrc='apt3.png' location='Katampe Extension, Abuja' rooms={3} miles={70} price={220000} />
      </div>
    </section>
  )
}

export default Apartments