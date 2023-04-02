import React from 'react'
import Button from './Button'
import FAQ from '../components/FAQ'
import { motion } from 'framer-motion'

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

const FaqSection = () => {
  return (
    <motion.section className='faqSection'
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{once: false}}
    >
      <motion.div className='faqHeader'
        variants={item}

      >
        <motion.h5 className="secondaryHeader">Frequently asked Questions</motion.h5>
        <motion.p className='text-grey'>These are few of our most asked questions, if you have any other queston, please Contact us</motion.p>
        <Button text='Contact us' className='primarybutton' />
      </motion.div>

      <FAQ />


    </motion.section>
  )
}

export default FaqSection