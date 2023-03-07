import React from 'react'
import Checks from './Checks'

const Reasons = () => {
  return (
    <div className='reasons'>
      <h3 className='secondaryHeader'>Why should you chose Ohms?</h3>
      <p>At ohms, we provide you with the best service you can ever think of, we are quick and very intentional. Our services are top notch.</p>

      <div className='checks'>
        <Checks value='Trusted' class='whyCheck' />
        <Checks value='Insurance' class='whyCheck whycheck2' />
        <Checks value='Affordable' class='whyCheck whycheck3' />
      </div>
    </div>
  )
}

export default Reasons