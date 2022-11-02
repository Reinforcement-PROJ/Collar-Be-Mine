import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import Petinfo from './Components/Petinfo/Petinfo';
import Home from './Components/home/Home';
import Settings from './Components/settings/Settings';
import Conversations from './Components/conversations/Conversations';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/petinfo" element={<Petinfo />} />
      <Route path="/home" element={<Home />} /> {/* after successful login or new user form submission */}
      <Route path="/settings" element={<Settings />} />
      <Route path="/conversations" element={<Conversations />} />
    </Routes>
  );
};

export default App;
