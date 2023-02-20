import React, { useContext } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App'






const NavBar = () => {

  const navigate = useNavigate()
  const [user, setUser] = useContext(UserContext)

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
        if (response.ok) {
        setUser(false)
        }}).then(navigate('/'))
    }

  return (
    <nav className='nav'>
      
        <Link to="/">
        <button className='button' type='button'>All Job Posts</button>
        </Link>
        <Link to="/create-job-post">
        <button className='button' type='button'>Create Job Post</button>
        </Link>
        <Link to="/user-job-posts">
        <button className='button' type='button'>User Job Posts</button>
        </Link>
        <button className="button" type="button" onClick={handleLogoutClick}>Log Out</button>
    </nav>
  )
}

export default NavBar