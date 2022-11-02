import React, { useState, useEffect } from 'react';
import './dogCard.scss';

const DogCard = props => {
  // const [dogImg, setDogImg] = useState('')
  // useEffect(() => {
  //   fetch('https://dog.ceo/api/breeds/image/random')
  //   .then(response => response.json())
  //   .then(data => {
  //     setDogImg(data.message)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }, []); // add location to the array here

  const [images, setImages] = useState('');

  useEffect(async () => {
    const dogPic = await fetch('https://dog.ceo/api/breeds/image/random')
    const dogPicPar = await dogPic.json();
    setImages(dogPicPar.message)
  },[])


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
      <img className="dog-img" src={images}></img>
    </div>
  );
};

export default DogCard;