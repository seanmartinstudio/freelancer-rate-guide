import React from 'react'
import { useState } from "react";
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';

const LoginPage = () => {

  //This boolean value toggles the LoginForm and SignupForm button via ternary.
  const [showLogin, setShowLogin] = useState(true)

 return (
  <div>
  { showLogin 
  ? <LoginForm  setShowLogin={setShowLogin}/>
  : <SignupForm  setShowLogin={setShowLogin}/>
  }
  </div>
 )
  }


export default LoginPage