import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Router, Route, Switch from react-router-dom
import { useState } from 'react';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  const [count, setCount] = useState(0);

  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LandingPage />} />
     </Routes>
     
     
     
     
     
     </BrowserRouter>
  );
}

export default App;
