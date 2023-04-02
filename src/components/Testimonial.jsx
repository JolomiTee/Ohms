import React from 'react'
import TestimonialCard from './TestimonialCard'
import { motion } from 'framer-motion';

const container = {
  show: {
      transition: {
          staggerChildren: .5
      }
  }
}
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
const Testimonial = () => {
  return (
    <motion.div className='testimonial'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: false}}
    >
      <motion.div variants={item}>
        <h4 className='secondaryHeader'>What our customers say about us</h4>
        <a href="#" className='text-white'>View more <i className="fa fa-solid fa-chevron-right"></i></a>
      </motion.div>

      <TestimonialCard />
    </motion.div>
  )
}

export default Testimonial