import React from 'react'
import Button from './Button'

const FooterInput = (props) => {
  return (
    <div className='inputField2'>
        <input className='input2' type={props.type} placeholder={props.placeholder} />
        <div className='inputIcon2'>
          <Button className='primarybutton' text='Subscribe' />
        </div>
    </div>
  )
}

export default FooterInput