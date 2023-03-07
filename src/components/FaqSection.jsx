import React from 'react'
import Button from './Button'
import FAQ from '../components/FAQ'

const FaqSection = () => {
  return (
    <section className='faqSection'>
      <div className='faqHeader'>
        <h5 className="secondaryHeader">Frequently asked Questions</h5>
        <p>These are few of our most asked questions, if you have any other queston, please Contact us</p>
        <Button text='Contact us' className='primarybutton' />
      </div>

      <FAQ />

      
    </section>
  )
}

export default FaqSection