import { Route, Routes } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import axios from 'axios';
import SignupPage from './Pages/SignupPage'
import './App.css'
import PostJobPage from './Pages/PostJobPage';
import UserJobsPage from './Pages/UserJobsPage';
import AboutPage from './Pages/AboutPage';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    axios.get('/logged_user')
  .then(function (response) {
    if(response.status === 200) {
   setUser(response.data) }
  })
  .then(function () {
    console.log("App Js User:", user)
  })
  .catch(function (error) {
    console.log("App.js Error ->", error);
  })
  }, []);

 

  return (
    <UserContext.Provider value={[user, setUser]}>
      <nav>
        {user ? <NavBar/> : null}
      </nav>
      <Routes>
      <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/create-job-post" element={<PostJobPage/>} />
      <Route path="/user-job-posts" element={<UserJobsPage/>} />
      <Route path='how-to' element={<AboutPage/>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
