import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">STRANGER THINGS</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Characters</li>
        <li>Episodes</li>
        <li>Upside Down</li>
      </ul>
    </nav>
  )
}

export default Navbar
