import React from 'react'

const Input = (props) => {
  return (
    <div className='inputField'>
        <input className='input' type={props.type} placeholder={props.placeholder} />
        <img src={props.icon} className='inputIcon' alt="Location" />
    </div>
  )
}

export default Input