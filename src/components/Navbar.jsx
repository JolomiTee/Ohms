import React from 'react'
import Button from '../components/Button'
import Logo from '../assets/images/Ohms.svg'
const Navbar = (props) => {
  console.log(props.logo)
  return (
      <nav>
        <img src={Logo} alt="Ohms" className='logo'/>

        <button><i className="fa fa-solid fa-bars-staggered"></i></button>

        <div className='navigation'>
          <ul>
            <li className='nav-item active'>{props.home}</li>
            <li className='nav-item'>{props.pricing}</li>
            <li className='nav-item'>{props.about}</li>
            <li className='nav-item'>{props.contact}</li>
          </ul>

          <div className='btn-group'>
            <button className='logIn'>{props.login}</button>
            <Button text={props.sign} className='primarybutton' />
          </div>

        </div>
      </nav>
  )
}

export default Navbar