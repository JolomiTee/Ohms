import React from 'react'
import FooterInput from './FooterInput'
import FootLinks from './FootLinks'
import { motion } from 'framer-motion'

const container = {
  show: {
    transition: {
      staggerChildren: 1
    }
  }
}

const item = {
  hidden: {opacity: 0, x: 20},
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    }

  }
}

const Footer = () => {
  return (
    <motion.div className='footer'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: false}}


    >

      <motion.div className="subscribe" variants={item}>
        <p className='text-white'>Subscribe to our Newsletter</p>
        <FooterInput type='text' placeholder='johndoe@email.com' />
      </motion.div>

      <motion.div className='footlinks text-white'
        variants={item}
      >
        <FootLinks />
      </motion.div>

      <div className='footnote text-white'>
        <p>&copy; 2023 JolomiTee & QuakeSilver <br />
          Made with ❤ and 🤗
        </p>
      </div>
    </motion.div>
  )
}

export default Footer