import React from 'react'
import FooterInput from './FooterInput'
import FootLinks from './FootLinks'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="subscribe">
        <p>Subscribe to our Newsletter</p>
        <FooterInput type='text' placeholder='johndoe@email.com' />
      </div>

      <div className="footlinks">
        <FootLinks />
      </div>
    </div>
  )
}

export default Footer