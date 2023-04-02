import React from 'react'
import Checks from './Checks'
import sectionImg from '../assets/images/sectionHero.png'
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

const Reasons = () => {
  return (
    <motion.div className='reasons'
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: false}}
      >
        <motion.h3 className='secondaryHeader'
          variants={item}
        >Why should you chose Ohms?</motion.h3>
        <motion.p className='text-white'
          variants={item}
        >At ohms, we provide you with the best service you can ever think of, we are quick and very intentional. Our services are top notch.</motion.p>

        <div className='checks'
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: false}}
        >
          <Checks value='Trusted' class='whyCheck' />
          <Checks value='Insurance' class='whyCheck whycheck2' />
          <Checks value='Affordable' class='whyCheck whycheck3' />
        </div>
      </motion.div>

      <div className="sectionImg">
        <img src={sectionImg} alt="Section img" className='sectionImg'/>
      </div>
    </motion.div>


  )
}

export default Reasons