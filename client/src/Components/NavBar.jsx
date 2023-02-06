import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav'>
        <Link to="/">
        <button className='button' type='button'>Home</button>
        </Link>
    </nav>
  )
}

export default NavBar