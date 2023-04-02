import React from 'react'
import Button from '../components/Button'
import Content from '../utilities/Content'
import Stat from './Stat'
import HeroImg from '../assets/images/heroImg.png';
import { motion } from 'framer-motion';



const Hero = () => {
  return (
    <motion.section className='hero'>

      <motion.div className="heroImgContainer">
        <motion.img
          initial={{x:1000, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{delay: .3}}
        src={HeroImg} alt="Ohms" className='heroImage' />
      </motion.div>

      <motion.div className='aboutOhms'>
        <motion.h1 className='heroHeader'
          initial={{x:-1000, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{delay: .8}}
        >Let us help you find a comfortable appartment that suits you.</motion.h1>
        <motion.p className='heroText'
          initial={{x:-1000, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{delay: 1}}
        >Ohms help you relieve the stress of finding appartments yourself</motion.p>

        <Button text='Get started' className="primarybutton"  />

        <Stat />

      </motion.div>

    </motion.section>
  )
}

export default Hero