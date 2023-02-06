import { Route, Routes, Navigate } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import axios from 'axios';
import SignupPage from './Pages/SignupPage'
import './App.css'

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
      <Routes>
      <Route exact path="/"
      element={
        user ? (
            <HomePage />
    ) : (
      <LandingPage />
    )
  }
/>
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="/signup" element={<SignupPage/>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
