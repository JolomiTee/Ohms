import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div>
        <h4 className='secondaryHeader'>What our customers say about us</h4>
        <a href="#" className='text-white'>View more <i className="fa fa-solid fa-chevron-right"></i></a>
      </div>

      <TestimonialCard />
    </div>
  )
}

export default Testimonial