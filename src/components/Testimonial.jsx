import React from 'react'
import TestimonialCard from './TestimonialCard'
import Content from '../utilities/Content'
import Star from '../assets/images/star.svg'

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <div>
        <h4 className='secondaryHeader'>What our customers say about us</h4>
        <a href="#">View more <i className="fa fa-solid fa-chevron-right"></i></a>
      </div>

      <div className="testimonialCards">
        { Content[2].testimonials.map((user) => (

          <div className="testimonialCard">

            <div className='cardHeader'>

              <img src={`../../src/assets/images/${user.img}`} alt="" />

              <div className='cardMeta'>
                <p>{user.name}</p>
                <small>{user.country}</small>
              </div>

            </div>
            
            <div className='cardtestimonial'>

              <p>{user.testimony}</p>

              <span className='rating'><img src={Star} alt="rating" /> {user.rating} / 5.0</span>

            </div>

          </div>

        )) }

        
      </div>
    </div>
  )
}

export default Testimonial