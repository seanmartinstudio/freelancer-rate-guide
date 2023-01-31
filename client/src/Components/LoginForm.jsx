import React from 'react'
import { useState } from "react";
import axios from 'axios';

const LoginForm = ( {setUser, setShowLogin} ) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('/login', {
      username: username,
      password: password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Login Page</h2>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
    <br></br>
    <button className="button">Login</button>
    <br></br>
    <button className="button" type="button" onClick={() => setShowLogin(false)}>New User? Sign Up Here</button>
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

export default LoginForm