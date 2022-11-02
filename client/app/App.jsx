import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import Petinfo from './Components/Petinfo/Petinfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/petinfo" element={<Petinfo />} />
    </Routes>
  );
};

export default App;
