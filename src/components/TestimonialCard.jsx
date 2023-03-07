import React from 'react'
import Content from '../utilities/Content'
import Star from '../assets/images/star.svg'

const TestimonialCard = () => {
  return (
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
  )
}

export default TestimonialCard