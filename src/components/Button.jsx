import React from 'react'
import { motion } from 'framer-motion'

const Button = (props) => {
  return (
    <motion.button className={props.className}
    initial={{x:-1000, opacity: 0}}
    animate={{x:0, opacity: 1}}
    transition={{delay: 1.2}}
    >{ props.text }</motion.button>
  )
}

export default Button