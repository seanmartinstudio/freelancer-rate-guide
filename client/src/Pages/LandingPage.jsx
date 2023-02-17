import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../App'

const LandingPage = () => {

    const navigate = useNavigate()
    const user = useContext(UserContext)

    const navigatToSignupPage = () => {
      navigate('/signup')
    }

    const navigateToLoginPage = () => {
      navigate('/login')
    }

    

  return (
    <div>
    <nav className='nav'>
      <button className='button' type='button' onClick={() => navigateToLoginPage()}>Log in</button>
      <button className='button' type='button' onClick={() => navigatToSignupPage()}>Sign up</button>
    </nav>
    <h1>Welcome To The Freelancer Rate Guide</h1>
    </div>
  );
}

export default LandingPage