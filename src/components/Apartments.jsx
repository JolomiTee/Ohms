import React from 'react'
import Search from './Search'
import Cards from './Cards'

const Apartments = () => {
  return (
    <section className='apartments'>
      <Search />

      <h2 className='apartmentHeader'>Apartments around you</h2>

      <div className='cards'>
        <Cards imgsrc='apt1.png' location='Kado Estate, Abuja' rooms={4} miles={100} price={130000} />
      </div>
    </section>
  )
}

export default Apartments