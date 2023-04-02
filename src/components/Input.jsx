import React from 'react'
import { delay, motion } from 'framer-motion'

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

const Input = (props) => {
  return (
    <motion.div className='inputField' variants={item}>
        <input className='input' type={props.type} placeholder={props.placeholder} />
        <div className='inputIcon'>
          <img src={props.icon} alt="Location" />
        </div>
    </motion.div>
  )
}

export default Input