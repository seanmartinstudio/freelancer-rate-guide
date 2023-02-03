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
  const [user, setUser] = useState(true)

  
  useEffect(() => {
    axios.get('/users')
  .then(function (response) {
    // setUser(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }, []);

  

  return (
    <UserContext.Provider value={{user}}>
      <Routes>
      {/* {user
        ? <Route exact path="/" element={<HomePage/>} />
        : <Route exact path="/login" element={<LoginPage/>} />
      } */}
      <Route
      exact
      path="/"
      element={
        user ? (
          <HomePage />
    ) : (
      <LandingPage />
    )
  }
/>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>} />
      <Route exact path="signup" element={<SignupPage/>} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
