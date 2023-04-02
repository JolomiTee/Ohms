import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"

const container = {
  show: {
    staggerChildren: .5
  }
}
const item = {
  hidden: {opacity: 0, x: 1000},
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: .5,
      ease: 'easeInOut'
    }
  }
}

const FooterInput = (props) => {
  return (
    <motion.div className='inputField2'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: false}}
    >
        <input className='input2' type={props.type} placeholder={props.placeholder} />
        <motion.div className='inputIcon2'
        >
          <Button className='primarybutton' text='Subscribe' />
        </motion.div>
    </motion.div>
  )
}

export default FooterInput