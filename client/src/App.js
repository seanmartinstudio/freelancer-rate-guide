import { Route, Routes } from 'react-router-dom'
import { useState, useEffect} from "react";

import './App.css';

function App() {
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
