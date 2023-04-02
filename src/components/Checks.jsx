import React from 'react'
import check from '../assets/images/circleTick.svg'
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

const Checks = (props) => {
  return (
    <motion.div className={props.class} variants={item}
    >
        <p>{props.value}</p>
        <img src={check} alt="Check icon" className='checkicon' />
    </motion.div>
  )
}

export default Checks