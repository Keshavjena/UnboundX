import React, { useState } from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo"><a href="/">UnboundX</a></div>
        <div className='nav__pages'>
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Explore">Explore</a>
          <a href="/Contact">Contact Us</a>
        </div>
      <div className='login'><a href="/Login">Login</a></div>
    </nav>
  )
}

export default Navbar