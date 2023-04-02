import React, { useState } from 'react'
import Content from '../utilities/Content'
import { motion } from 'framer-motion'

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

const FAQ = () => {
  return (
    <motion.div className='faqcards'
    >
        { Content[3].faqs.map((faq) => (
        <motion.div className="faqcard" variants={item}>
          <div>
            <p className='text-blue question'>{faq.question}</p>
            <i className="fa fa-solid fa-chevron-up"></i>
          </div>
            <p className='text-grey'>{faq.answer}</p>
        </motion.div>

        )) }
      </motion.div>
  )
}

export default FAQ