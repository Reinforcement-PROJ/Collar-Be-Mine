import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import Home from './Components/login/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} /> {/* after successful login or new user form submission */}
    </Routes>
  );
};

export default App;
