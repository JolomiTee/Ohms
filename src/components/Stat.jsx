import React from 'react'
import Content from '../utilities/Content'
import { motion } from 'framer-motion'

const Stat = () => {

  const stat = Content[1]

  const customers = stat.customers
  const awards = stat.awards
  const rating = stat.ratings
  console.log(rating)

  return (
    <motion.div className='stat'
      initial={{y:1000, opacity:0}}
      animate={{y:0, opacity: 1}}
      transition={{delay: 1.3}}
    >

      <motion.div className='statItem'
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{delay: 1.6}}
                >
        <motion.p className="statNumber"
        >{customers.number}</motion.p>
        <p className="statDetail">{customers.text}</p>
      </motion.div>

      <motion.div className='statItem'
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 1.7}}
      >
        <motion.p className="statNumber"
        >{awards.number}</motion.p>
        <p className="statDetail">{awards.text}</p>
      </motion.div>
      <motion.div className='statItem'
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 1.8}}
      >
        <motion.p className="statNumber"
        >{rating.number}</motion.p>
        <p className="statDetail">{rating.text}</p>
      </motion.div>

    </motion.div>
  )
}

export default Stat