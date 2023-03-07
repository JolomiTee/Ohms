import React from 'react'
import Content from '../utilities/Content'

const FAQ = () => {
  return (
    <div className='faqcards'>
        { Content[3].faqs.map((faq) => (
        <div className="faqcard">
          <div>
            <p className='text-blue question'>{faq.question}</p>
            <i className="fa fa-solid fa-chevron-up"></i>
          </div>
            <p className='text-grey'>{faq.answer}</p>
        </div>

        )) }
      </div>
  )
}

export default FAQ