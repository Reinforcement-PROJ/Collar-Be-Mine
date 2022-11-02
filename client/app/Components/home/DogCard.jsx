import React, { useState, useEffect } from 'react';
import './dogCard.scss';

const DogCard = props => {

  return (
    <div className="dog-card">
      <div className="dog-info">
        Dog Info
        <li>My name: {props.data.dog_name}</li>
        <li>Breed: {props.data.dog_breed}</li>
        <li>Size: {props.data.dog_size}</li>
        <li>Pawrent: {props.data.owner_name}</li>
        <li>I love - {props.data.fav_activities}</li>
      </div>
      <img className="dog-img" src="https://www.akc.org/wp-content/uploads/2017/11/Vizsla-On-White-01.jpg"></img>
    </div>
  );
};

export default DogCard;