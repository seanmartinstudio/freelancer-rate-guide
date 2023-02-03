import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App'

const LoginPage = () => {
  
  const user = useContext(UserContext)
  const navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user])
  

 return (
  <h1>LoginPage</h1>
 )
  }


export default LoginPage