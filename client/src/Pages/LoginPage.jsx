import React, { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { UserContext } from '../App'
import { useState } from "react"
import axios from 'axios'

const LoginPage = () => {
  
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
    axios.post('/login', {
      username: username,
      password: password
    })
    .then(response => {
      console.log(response)
      setUser(response.data)
    })
    .catch(error => {
      setErrors(error.response.data.errors)
      setUsername("")
      setPassword("")
    });
  }

  const navigatToSignupPage = () => {
    navigate("/signup")
  }


 return (
  <form onSubmit={handleFormSubmit}>
  <h2>Login!</h2>
  <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
  <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
  <br></br>
  <button className="button">Login</button>
  <br></br>
  <button className="button" type="button" onClick={() => navigatToSignupPage()}>New User? Sign Up Here</button>
  <br></br>
  <br></br>
  <ul>
  <ul>
  {errors.map((error) => (
      <li key={error}>{error}</li>
    ))}
  </ul>
  </ul>
</form>
)
}


export default LoginPage