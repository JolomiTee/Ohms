import React from 'react'
import FooterInput from './FooterInput'
import FootLinks from './FootLinks'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="subscribe">
        <p className='text-white'>Subscribe to our Newsletter</p>
        <FooterInput type='text' placeholder='johndoe@email.com' />
      </div>

      <div className='footlinks text-white'>
        <FootLinks />
      </div>

      <div className='footnote text-white'>
        <p>&copy; 2023 JolomiTee & QuakeSilver <br />
          Made with ❤ and 🤗
        </p>
      </div>
    </div>
  )
}

export default Footer