import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from 'axios';


const SignupForm = ( {onLogin, setShowLogin} ) => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    const handleFormSubmit = (event) => {
      event.preventDefault();
      axios.post('/users', {
        username: username,
        password: password
      })
      .then(() => {
        navigate('/login')
      })
      .catch(error => {
        console.log("Signup Error", error.response.data.errors)
        // setErrors(error.response.data.errors)
        // setUsername("")
        // setPassword("")
      })
    }

   return (

    <form onSubmit={handleFormSubmit}>
    <h2>Signup Page</h2>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
    <br></br>
    <button className="button">Sign Up</button>
    <br></br>
    <button className="button" type="button" onClick={() => setShowLogin(true)}>Already a user? Log In Here</button>
    <br></br>
    <br></br>
    {/* <ul>
    {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul> */}
  </form>
  )
  
}
export default SignupForm