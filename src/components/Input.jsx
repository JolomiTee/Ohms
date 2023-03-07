import React from 'react'

const Input = (props) => {
  return (
    <div className='inputField'>
        <input className='input' type={props.type} placeholder={props.placeholder} />
        <div className='inputIcon'>
          <img src={props.icon} alt="Location" />
        </div>
    </div>
  )
}

export default Input