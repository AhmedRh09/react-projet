import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <Link to={"/"}>
            <li>Home</li>
        </Link>
        <Link to={"/weather"}>
            <li>Weather</li>
        </Link>
        <Link to={"/about"}>
            <li>About</li>
        </Link>
        <Link to={"/contact"}>
            <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
