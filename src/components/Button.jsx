import React from 'react'
import { motion } from 'framer-motion'

const item = {
  hidden: {opacity: 0, y: 20},
  show: {
      opacity: 1,
      y: 0,
      transition: {
          ease: 'easeInOut',
          duration: .2,
      }
  }
}
const Button = (props) => {
  return (
    <motion.button className={props.className}
    variants={item}
    >{ props.text }</motion.button>
  )
}

export default Button