import React, { useState, useEffect } from 'react';
import './settings.scss';
import logo from '../../assets/logo.png'
import backgroundImg from '../../assets/okeykat-w6elADh_jww-unsplash.jpg'

const Settings = () => {
  return (
    <div className='settingsWrapper'>
      <div className='settingsImage'>
      </div>
      <section className='settingsContent'>
      <img src={logo} alt="collar be mine logo" />
      <button>Username</button>
      <button>Location</button>
      <button>Dog Info</button>
      <button>Bio & Favs</button>
      <button>Privacy</button>
      </section>
    </div>
  );
}



export default Settings;