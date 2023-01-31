import { Route, Routes } from 'react-router-dom'
import { useState, useEffect} from "react";
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import './App.css'

function App() {

  useEffect(() => {
    console.log("Hello World")
  }, []);
  return (
    <main>
      <Routes>
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/login" element={<LoginPage/>}/>
      </Routes>
    </main>
  );
}

export default App;
