import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddAvatarPage = () => {

    const navigate = useNavigate()
    const [avatarFile, setAvatarFile] = useState(null);
    console.log("Add Avatar Page Avatar State:", avatarFile)

const handleAvatarChange = (event) => {
    setAvatarFile(event.target.files[0]);
    }

const handleFormSubmit = (event) => {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    event.preventDefault()
    axios.post('/avatar', 
      formData
    )
    .then(response => {
      if(response.status === 201) {
        navigate('/')
      }
    })
    .catch((error) => {
      console.log("Avatar Page Submit Error:", error)
    })
}    



  return (
    <form onSubmit={handleFormSubmit}>
    <br></br>
    <li>Add Optional Avatar Photo</li>
    <input type="file" accept="image/*" id="avatar" name="avatar" placeholder="Avatar" onChange={handleAvatarChange}></input>
    <br></br>
    <button className="button">Sign Up</button>
    </form>
  )
}

export default AddAvatarPage