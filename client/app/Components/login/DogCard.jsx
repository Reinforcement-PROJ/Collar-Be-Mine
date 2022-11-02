import React, { useState, useEffect } from 'react';
import './dogCard.scss';

const DogCard = props => {

  return (
    <div className="dog-card">
      <button>Plz show up...</button>
      <div className="pet-info">
        <p>Dog Name: {props.data.dog_name}</p>
        <p>Dog Breed: {props.data.dog_breed}</p>
        <p>Dog Size: {props.data.dog_size}</p>
        <p>Owner Name: {props.data.owner_name}</p>
        <p>Fav Activities: {props.data.fav_activities}</p>
      </div>
      <div className="pet-image">
        <img>?</img>
      </div>
    </div>
  );
};

export default DogCard;