import React from 'react'
import Content from '../utilities/Content'
import Star from '../assets/images/star.svg'
import Face from '../../src/assets/images/person1.svg'
import { motion } from 'framer-motion'

const item = {
  hidden: {opacity: 0, y: 20},
  show: {
      opacity: 1,
      y: 0,
      transition: {
          ease: 'easeInOut',
          duration: 1,
      }
  }
}
const TestimonialCard = () => {
  return (
    <div className="testimonialCards">
        { Content[2].testimonials.map((user) => (

          <motion.div className="testimonialCard" variants={item}>

            <div className='cardHeader'>

              <img src={Face} alt="" />

              <div className='cardMeta'>
                <p className='text-blue'>{user.name}</p>
                <small className='text-grey'>{user.country}</small>
              </div>

            </div>

            <div className='cardtestimonial'>

              <p className='text-grey'>{user.testimony}</p>

              <span className='rating text-grey'><img src={Star} alt="rating" /> {user.rating} / 5.0</span>

            </div>

          </motion.div>

        )) }


      </div>
  )
}

export default TestimonialCard