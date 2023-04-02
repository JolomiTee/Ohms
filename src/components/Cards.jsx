import React from 'react'
import aptType from '../assets/images/flatDescriptionIcon.svg'
import distance from '../assets/images/routing.svg'
import Button from './Button'
import { motion } from 'framer-motion'
const item = {
  hidden: {opacity: 0, y: 20},
  show: {
      opacity: 1,
      y: 0,
      transition: {
          ease: 'easeInOut',
          duration: .5,
      }
  }
}
const Cards = (props) => {
  return (
    <motion.div className='card' variants={item}>

      <div className="cardImageContainer">

        <img src={`../../src/assets/images/${props.imgsrc}`} alt="" className='cardImage' />

      </div>

      <div className="cardDetails">

        <p className='aptLocation'>{props.location}</p>

        <div className='metaInfoContainer'>

          <div className="apartmentMeta">
            <img src={aptType} alt="Apartment Icon" />
            {props.rooms} bedroom flat
          </div>

          <div className="apartmentMeta">
            <img src={distance} alt="Apartment Icon" />
            {props.miles} miles from you
          </div>

        </div>

        <div className='metaCta'>

          <p className='aptPrice'>N {props.price}</p>
          <Button className='primarybutton' text='View' />

        </div>
      </div>


    </motion.div>
  )
}

export default Cards