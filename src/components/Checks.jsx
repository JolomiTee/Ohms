import React from 'react'
import check from '../assets/images/circleTick.svg'

const Checks = (props) => {
  return (
    <div className={props.class}>
        <p>{props.value}</p>
        <img src={check} alt="Check icon" className='checkicon' />
    </div>
  )
}

export default Checks