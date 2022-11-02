import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import DogCard from './DogCard.jsx';

// renders home page / dashbard and fetches dog list data
// navbar that will link / redirect to conversations and user settings
const Home = () => {

  // how to render dog list? handle func or for loop to array?
  let dogs;
  const localDogs = [];

  useEffect(() => {
    fetch('http://localhost:3000/api/dogs')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dogs = data.filter(dog => dog.location === 'Chicago'); // make dynamic based on state
      console.log(dogs);
      dogs.map(dog => localDogs.push(<DogCard data={dog}/>));
      console.log(localDogs);
    })
    .catch(err => {
      console.log(err);
    });
  });

  return (
    <div className='home-page'>    
      <div className="home-navbar">
        <Link to="/conversations">Msgs</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <div className="home-logo">
        <h2>Collar Be Mine</h2>
      </div>
      <div className='home-dog-list'>
        {localDogs}
      </div>
    </div>
  );
};

export default Home;