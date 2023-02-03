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
      setUser(response.data)
    })
    .catch(error => {
      setErrors(error.response.data.errors)
      setUsername("")
      setPassword("")
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
  {/* <button className="button" type="button" onClick={() => setShowLogin(false)}>New User? Sign Up Here</button> */}
  <br></br>
  <br></br>
  <ul>
  <div>
  {errors.map((error) => (
      <p key={error}>{error}</p>
    ))}
  </div>
  </ul>
</form>
)
}


export default LoginPage