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
import { WavyContainer, WavyLink } from "react-wavy-transitions";

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    axios.get('/users')
  .then(function (response) {
   setUser(response.data)
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
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
