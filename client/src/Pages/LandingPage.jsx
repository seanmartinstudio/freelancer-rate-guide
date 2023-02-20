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
    <div className='opening-card'>
    <h1>The Freelancer Rate Guide</h1>
    <h2>✔ Get the inside scoop on how much money freelance creatives bill for specific jobs.</h2>
    <h2>✔ Filter by job titles such as Photographer, Product Designer, Illustrator and more. </h2>
    <h2>✔ Please sign up to see and share!</h2>
    </div>
    </div>
  );
}

export default LandingPage