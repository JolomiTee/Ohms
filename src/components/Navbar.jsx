import React, { useState } from 'react';
import Logo from '../assets/images/Ohms.svg';
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false)

  const isOpen = () => {
      setOpenMenu(prev => !openMenu)
  }

  const item = {
    exit: {
        opacity: 0,
        x: 1000,
        transition: {
            ease: "easeInOut",
            duration: .4,
            delay: .3
        }
    }
  }



  return (
      <motion.nav initial="initial" animate="animate">
        <img src={Logo} alt="Ohms" className='logo'/>

        <button title='Menu items' role='button' type='button' onClick={isOpen}><i className="fa fa-solid fa-bars-staggered"></i></button>

        <AnimatePresence>
          {
            openMenu &&

            <motion.div className='navigation'
              variants={item}
              initial={{x:1000, opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration: .4}}
              exit="exit"

            >
              <ul>
                <li className='nav-item active'>Home</li>
                <li className='nav-item'>Pricing</li>
                <li className='nav-item'>About</li>
                <li className='nav-item'>Contact</li>
              </ul>

              <div className='btn-group'>
                <button className='logIn'>Login</button>
                <button className='primarybutton'>Sign in</button>
              </div>

            </motion.div>
          }

        </AnimatePresence>


      </motion.nav>
  )
}

export default Navbar