import React from 'react'
import Button from '../components/Button'
import Content from '../utilities/Content'
import Stat from './Stat'
import HeroImg from '../assets/images/heroImg.png'

const Hero = () => {
  return (
    <section className='hero'>

      <div className="heroImgContainer">
        <img src={HeroImg} alt="Ohms" className='heroImage' />
      </div>

      <div className='aboutOhms'>
        <h1 className='heroHeader'>Let us help you find a comfortable appartment that suits you.</h1>
        <p className='heroText'>Ohms help you relieve the stress of finding appartments yourself</p>
        
        <Button text='Get started' className="primarybutton"  />
        
        <Stat />
        
      </div>

    </section>
  )
}

export default Hero