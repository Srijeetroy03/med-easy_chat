import React from 'react'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='leftNav'>
        <p className='green-text'><b>MedEasy</b></p>
      </div>
      <div className="rightNav">
        <ul>
          <li className='green-text'><b>Melly</b></li>
          <li className='grey-text'><b>Find Hospital</b></li>
          <li className='grey-text'><b>Doctors</b></li>
          <li className='grey-text'><b>Blog</b></li>
          <li className='grey-text'><b>Login</b></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
