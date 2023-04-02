import React from 'react'
import Button from './Button'
import Input from './Input'
import Globe from '../assets/images/global.svg'
import ApartmentType from '../assets/images/home-2.svg'
import Budget from '../assets/images/wallet.svg'
import { motion } from 'framer-motion'

const container = {
  show: {
      transition: {
          staggerChildren: .3
      }
  }
}

const Search = (props) => {
  return (
    <motion.div className='SearchContainer'
    >
        <motion.p className="searchheader"
          initial={{y:20, opacity: 0}}
          animate={{y:0, opacity:1}}
          exit={{opacity: 0}}
          transition={{duration: .5, delay: 1}}
        >Search for the apartment you are looking for</motion.p>

        <motion.div className="searchFields"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{once: false}}
        >

            <Input placeholder='Location' icon={Globe} type='text' />
            <Input placeholder='Apartment Type' icon={ApartmentType} type='text' />
            <Input placeholder='Budget' icon={Budget} type='number' />

            <Button className='primarybutton' text='Search' />
        </motion.div>
    </motion.div>
  )
}

export default Search