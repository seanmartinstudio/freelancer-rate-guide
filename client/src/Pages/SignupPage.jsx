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
  const [email, setEmail] = useState("")
  const [avatarFile, setAvatarFile] = useState(null);
  const [errors, setErrors] = useState([])

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  })

  const handleFormSubmit = (event) => {

    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('password', password);
    // formData.append('email', email);
    // formData.append('avatar', avatarFile);

    // event.preventDefault();
    // axios.post('/users', 
    //   formData
    // )
    // .then(response => {
    //   if(response.status === 201) {
    //     navigate('/login')
    //   }
    // })
    // .catch(() => {
    //   setErrors(["Username, Password and Email cannot be blank."])
    // })
    event.preventDefault();
    axios.post('/users', {
      username: username,
      password: password,
      email: email
    })
   .then(response => {
      if(response.status === 201) {
        navigate('/login')
      }
    })
    .catch((error) => {
      setErrors(error.response.data.errors)
    })
  }

  console.log(username, password, email)
  

  const navigatToLoginPage = () => {
    navigate("/login")
  }

  const handleAvatarChange = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  console.log("Avatar Submitted", avatarFile)
  
  return (
    <form onSubmit={handleFormSubmit}>
    <h2>Sign Up!</h2>
    <input type="text" id="username" name="username" placeholder="Username" onChange={(event) => setUsername(event.target.value)} value={username}></input>
    <input type="text" id="password" name="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
    <input type="text" id="email" name="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} value={email}></input>
    <br></br>
    {/* <br></br>
    <li>Add Optional Avatar Photo</li>
    <input type="file" accept="image/*" id="avatar" name="avatar" placeholder="Avatar" onChange={handleAvatarChange}></input>
    <br></br> */}
    <br></br>
    <button className="button">Sign Up</button>
    <br></br>
    <button className="button" type="button" onClick={() => navigatToLoginPage()}>Already a User? Log In Here</button>
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