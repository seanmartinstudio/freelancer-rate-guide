import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../App'
import axios from 'axios'

const NavBar = ( {showAvatar} ) => {

  const [activePage, setActivePage] = useState('home')
  const navigate = useNavigate()
  const [user, setUser] = useContext(UserContext)
  const [avatar, setAvatar] = useState(null)


  useEffect(() => {
    axios.get('/avatar')
    .then(function (response) {
      // handle success
      setAvatar(response.data.avatar)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }, [showAvatar])
  
console.log("Nav Bar showAvatar Boolen", showAvatar)
console.log("Avatar Obj Nav Page", avatar)

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
        if (response.ok) {
        setUser(false)
        }}).then(navigate('/'))
    }

    function handleNavigationClick(page) {
      setActivePage(page)
    }

  return (
    <nav className='nav'>
        <Link to="/">
        <button  type='button' className={activePage === 'home' ? 'active' : ''}
            onClick={() => handleNavigationClick('home')}>All Job Posts</button>
        </Link>
        <Link to="/create-job-post">
        <button type='button'  className={activePage === 'create-job-post' ? 'active' : ''}
            onClick={() => handleNavigationClick('create-job-post')}>Create Job Post</button>
        </Link>
        <Link to="/user-job-posts">
        <button  type='button'  className={activePage === 'user-job-posts' ? 'active' : ''}
            onClick={() => handleNavigationClick('user-job-posts')}>User Job Posts</button>
        </Link>
        {/* <Link to="how-to">
        <button  type='button'  className={activePage === 'about' ? 'active' : ''}
            onClick={() => handleNavigationClick('about')}>How To Use This Site</button>
        </Link> */}
        {/* <Link to="add-avatar">
        <button  type='button'  className={activePage === 'add-avatar' ? 'active' : ''}
            onClick={() => handleNavigationClick('add-avatar')}>Add Avatar</button>
        </Link> */}
        <button className="button" type="button" onClick={handleLogoutClick}>Log Out</button>
        {/* <figure>
        <div>
          {avatar ? <img src={avatar} alt='user-avatar' className='image'></img> : null }
        </div>
        <div className='avatar-text-container'>
        <figcaption>Welcome</figcaption>
        <figcaption>{user.username}</figcaption>
        </div>
        </figure> */}
    </nav>
  )
}

export default NavBar