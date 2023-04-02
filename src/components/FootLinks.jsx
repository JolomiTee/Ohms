import React from 'react';
import Content from '../utilities/Content';
import { motion } from 'framer-motion';

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
            duration: .5,
        }
    }
  }


const FootLinks = () => {
  return (
    <div className='footlink'>
        { Content[4].footlinks.map((footlink) => (
            <motion.div className='footlinks'
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: false}}
            >
                <motion.p variants={item}>{footlink.title}</motion.p>

                {footlink.links.map((link) => (
                    <motion.ul className='footlist'>
                        <li variants={item}>{link.one}</li>
                        <li variants={item}>{link.two}</li>
                        <li variants={item}>{link.three}</li>
                        <li variants={item}>{link.four}</li>
                    </motion.ul>
                ))}
            </motion.div>
        ))}
    </div>
  )
}

export default FootLinks