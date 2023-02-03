import React, { useEffect, useContext } from 'react'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import { UserContext } from '../App'

const LandingPage = () => {

    const user = useContext(UserContext)

    

  return (
    <h1>LandingPage</h1>
  );
}

export default LandingPage