import React from 'react'

const Navbar = (props) => {
  return (
      <nav>
        <img src={`../../src/assets/images/${props.logo}`} alt="Ohms" className='logo'/>

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
            <button className='signUp'>{props.sign}</button>
          </div>

        </div>
      </nav>
  )
}

export default Navbar