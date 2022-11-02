import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './conversations.scss';
import logo from '../../assets/logo.png';
import msgLogo from '../../assets/msg-logo.png';
import settingsLogo from '../../assets/settings-gear.png';

const Conversations = () => {
  return (
    <div className="conversationsWrapper">
      <div className="navbar">
        {/* <h4>nav bar here</h4> */}
        {/* <Link to="/home" className="home-img"> <img src={msgLogo}></img> </Link> */}
        {/* <img className="logo-img" alt="collar be mine logo" src={logo}></img> */}
        <Link to="/settings" className="settings-img"> <img  src={settingsLogo}></img> </Link>
      </div>
      <div className="content">
        <div className="matches">
          Woof woof matches
        </div>
        <div className="conversations">
          Messages here
        </div>
      </div>
    </div>
  );
};

export default Conversations;