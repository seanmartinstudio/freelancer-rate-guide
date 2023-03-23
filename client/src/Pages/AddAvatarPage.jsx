// import React from 'react'
// import { useState, useContext } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { UserContext } from '../App'


// const AddAvatarPage = ( {showAvatar, setShowAvatar} ) => {

//     const navigate = useNavigate()
//     const [avatarFile, setAvatarFile] = useState(null);
//     console.log("Add Avatar Page Avatar State:", avatarFile)

//     const [user, setUser] = useContext(UserContext)



// const handleAvatarChange = (event) => {
//     setAvatarFile(event.target.files[0]);
//     }

// const handleFormSubmit = (event) => {
//     const formData = new FormData();
//     formData.append('avatar', avatarFile);

//     event.preventDefault()
//     axios.post('/add_avatar/' + user.id, 
//       formData
//     )
//     .then(setShowAvatar(true))
//     .catch((error) => {
//       console.log("Avatar Page Submit Error:", error)
//     })
// }    





//   return (
//     <form onSubmit={handleFormSubmit}>
//     <br></br>
//     <li>Add Optional Avatar Photo</li>
//     <input type="file" accept="image/*" id="avatar" name="avatar" placeholder="Avatar" onChange={handleAvatarChange}></input>
//     <br></br>
//     <button className="button">Add Photo</button>
//     </form>
//   )
// }

// export default AddAvatarPage