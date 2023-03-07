import React from 'react'
import Content from '../utilities/Content'
import Star from '../assets/images/star.svg'
import Face from '../../src/assets/images/person1.svg'
const TestimonialCard = () => {
  return (
    <div className="testimonialCards">
        { Content[2].testimonials.map((user) => (

          <div className="testimonialCard">

            <div className='cardHeader'>

              <img src={Face} alt="" />

              <div className='cardMeta'>
                <p className='text-blue'>{user.name}</p>
                <small className='text-grey'>{user.country}</small>
              </div>

            </div>
            
            <div className='cardtestimonial'>

              <p className='text-grey'>{user.testimony}</p>

              <span className='rating text-grey'><img src={Star} alt="rating" /> {user.rating} / 5.0</span>

            </div>

          </div>

        )) }

        
      </div>
  )
}

export default TestimonialCard