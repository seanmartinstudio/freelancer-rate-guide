import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../App'
import { useState } from "react";
import axios from 'axios';

const SignupPage = () => {

  const navigate = useNavigate()
  const [user, setUser] = useContext(UserContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  })

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/users', {
      username: username,
      password: password
    })
    .then(response => {
      if(response.statusText === "Created") {
        navigate('/login')
      }
    })
    .catch(error => {
      setErrors(error.response.data.errors)
      setUsername("")
      setPassword("")
    })
  }

  const navigatToLoginPage = () => {
    navigate("/login")
  }
  
  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Signup Page</h2>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
    <br></br>
    <button className="button">Sign Up</button>
    <br></br>
    <button className="button" type="button" onClick={() => navigatToLoginPage()}>Already a user? Log In Here</button>
    <br></br>
    <br></br>
    <ul>
    {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  </form>
  )
}

export default SignupPage