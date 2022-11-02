import React, {useState} from 'react'
import './petInfo.scss'
import { useDispatch, useSelector } from 'react-redux'
import { SET_LOCATION, SET_SIZE } from '../../Store/action.js';
import { useNavigate } from 'react-router-dom';

const Petinfo = () => {
    const [dog, setDog] = useState({name: '', breed: '', bio: '', favActivity: ''})
  const petStore = useSelector((state) => state.petReducer)
  const userData = useSelector((state) => state.userReducer)
  console.log(userData)
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handleChange = (e, type) => {
    e.preventDefault(); 
    if (type === 'location') dispatch(SET_LOCATION(e.target.value))
    if (type === 'size') dispatch(SET_SIZE(e.target.value))
    else {
        const name = e.target.name;
        const value = e.target.value;
        setDog({...dog, [name]:value});
    }
}
  // on submit need to make a call to backend to add a dog
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitted ')
    const { userId, display_name } = userData; 
    const { location, size } = petStore; 
    const { name, breed, bio, favActivity } = dog; 
    // console.log('HII')
    const body = {
      user_id: userId,
      owner_name: userData.display_name,
      dog_name: name,
      dog_breed: breed,
      location: location,
      dog_size: size,
      personal_bio: bio,
      fav_activities: favActivity,
      conversations_id: Math.floor(Math.random() * 10),
      matches_id: Math.floor(Math.random() * 10), 
    }
    console.log('inside handle submit')
      const addPet = await fetch('http://localhost:3000/api/dogs', {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
      })
    if (addPet.status === 200) {
        console.log('hit, success')
        navigate('/home');
    }
        // navigate to home ?
  }
  // turn new user to false; 
//   redirect to home


  return (
    <article className='createControl'>
      <h1>Wooff , welcome, please enter your pet info</h1>
      <div className='createDog'>
        <form className='petInfoForm' onSubmit={handleSubmit}>
        <label htmlFor='dogName'>Your Name:</label>
        <input 
        type='text' 
        id='dogName' 
        name='name'
        value={dog.name}
        onChange={handleChange}
        /> <br />
        <label htmlFor='loc'>Where are you ? </label>
        <input 
        type='text' 
        id='loc' 
        onChange={(e) => handleChange(e, 'location')}/> <br />
        <label htmlFor='dogBreed'>Dog Breed:</label>
        <input
        type='text'
        id='dogBreed'
        name='breed'
        value={dog.breed}
        onChange={handleChange}
        /><br/>
        <label htmlFor="size">How big are you?</label>
        <select 
        id="size" 
        name="size"
        onChange={(e) => handleChange(e, 'size')}>
         <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select> <br />
        <label htmlFor='personalBio'>Bio: </label>
        <input 
        type='text' 
        id='personalBio'
        name='bio'
        value={dog.bio}
        onChange={handleChange} 
        className='largeField'
        /> <br/>
        <label htmlFor='favActivities'>I love to: </label>
        <input
        type='text'
        id='favActivities'
        name='favActivity'
        value={dog.favActivity}
        onChange={handleChange}
        className='largeField'
        /> <br/>
          <input type="submit" value='Ready for Love 🐶'/> 
      </form>
    </div>
    </article>
  )
}

export default Petinfo;



