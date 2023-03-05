import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="heroImgContainer">
        <img src="../src/assets/images/heroImg.png" alt="Ohms" className='heroImage' />
      </div>
      <div>
        <h1 className='heroHeader'>Let us help you find a comfortable appartment that suits you.</h1>
        <p className='heroText'>Ohms help you relieve the stress of finding appartments yourself</p>
        
        <Button text='Get started' className="primarybutton"  />
        
      </div>

    </section>
  )
}

export default Hero