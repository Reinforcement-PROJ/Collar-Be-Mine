import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

// renders home page / dashbard and fetches dog list data
// navbar that will link / redirect to conversations and user settings
const Home = () => {

  // how to render dog list? handle func or for loop to array?

  return (
    <div className='home-page'>
      <div className="home-navbar">
        <Link to="/conversations">Msgs</Link>
        <h2>Collar Be Mine</h2>
        <Link to="/settings">Settings</Link>
      </div>
      <div className='home-dog-list'>
      </div>
    </div>
  );
};

export default Home;