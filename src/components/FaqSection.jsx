import React from 'react'
import Button from './Button'
import Content from '../utilities/Content'

const FaqSection = () => {
  return (
    <section className='faqSection'>
      <div className='faqHeader'>
        <h5 className="secondaryHeader">Frequently asked Questions</h5>
        <p>These are few of our most asked questions, if you have any other queston, please Contact us</p>
        <Button text='Contact us' className='primarybutton' />
      </div>

      <div className='faqcards'>
        { Content[3].faqs.map((faq) => (
        <div className="faqcard">
          <div>
            <p>{faq.question}</p>
            <i className="fa fa-solid fa-chevron-up"></i>
          </div>
            <p>{faq.answer}</p>
        </div>

        )) }
      </div>
    </section>
  )
}

export default FaqSection