import React from 'react'
import Button from '../components/Button'
import Content from '../utilities/Content'
import Stat from './Stat'
import HeroImg from '../assets/images/heroImg.png';
import { motion } from 'framer-motion';


const container = {
  show: {
      transition: {
          staggerChildren: 1
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
          duration: 2,
      }
  }
}

const Hero = () => {
  return (
    <motion.section className='hero'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{once: false}}
    >

      <motion.div className="heroImgContainer"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: false}}
      >
        <motion.img
          variants={item}
        src={HeroImg} alt="Ohms" className='heroImage' />
      </motion.div>

      <motion.div className='aboutOhms'
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: false}}
      >
        <motion.h1 className='heroHeader'
          variants={item}
        >Let us help you find a comfortable appartment that suits you.</motion.h1>
        <motion.p className='heroText'
          variants={item}
        >Ohms help you relieve the stress of finding appartments yourself</motion.p>

        <Button text='Get started' className="primarybutton"  />

        <Stat />

      </motion.div>

    </motion.section>
  )
}

export default Hero