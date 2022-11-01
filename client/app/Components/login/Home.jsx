import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// renders home page / dashbard and fetches dog list data
// navbar that will link / redirect to conversations and user settings
const Home = () => {

  // how to render dog list? handle func or for loop to array?

  return (
    <div className='home-page'>
      <div className="home-navbar">
      <h2>Collar Be Mine</h2>
      <nav>
        <Link to="/conversations">Msgs</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </div>
    <div className='home-dog-list'>
    </div>
  </div>
  );
};

export default Home;