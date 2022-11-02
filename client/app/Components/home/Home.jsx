import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import msgLogo from '../../assets/msg-logo.png';
import settingsLogo from '../../assets/settings-gear.png';
import './home.scss';
import DogCard from './DogCard.jsx';

// renders home page / dashbard and fetches dog list data
// navbar that will link / redirect to conversations and user settings
const Home = () => {

  // how to render dog list? handle func or for loop to array?
  let dogs;
  const [localDogs, setLocalDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/dogs')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dogs = data.filter(dog => dog.location === 'Chicago'); // make dynamic based on state
      console.log(dogs);
      setLocalDogs(dogs.map(dog => <DogCard data={dog} key={Math.random()}/>));
      console.log(localDogs);
    })
    .catch(err => {
      console.log(err);
    });
  }, []); // add location to the array here

  return (
    <div className='home-page'>
      <div className="home-navbar">
        <Link to="/conversations" className="msg-logo"> <img src={msgLogo}></img> </Link>
        <img className="logo-img" alt="collar be mine logo" src={logo}></img>
        <Link to="/settings" className="msg-logo"> <img  src={settingsLogo}></img> </Link>
      </div>
      <div className='home-dog-list'>
        {localDogs}
      </div>
    </div>
  );
};

export default Home;