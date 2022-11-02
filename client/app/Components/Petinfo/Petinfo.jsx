import React from 'react'
import './petInfo.scss'

const Petinfo = () => {

  // on submit need to make a call to backend to add a dog
  // turn new user to false; 
//   redirect to home


  return (
    <article className='createControl'>
      <h1>Wooff , welcome, please enter your pet info</h1>
      <div className='createDog'>
      <form className='petInfoForm'>
        <label htmlFor='dogName'>Your Name:</label>
        <input type='text' id='dogName' /> <br />
        <label htmlFor='location'>Where are you ? </label>
        <input type='text' id='location' /> <br />
        <label htmlFor='dogBreed'>Dog Breed:</label>
        <input type='text' id='dogBreed'/> <br/>
        <label htmlFor="size">How big are you?</label>
        <select id="size" name="size">
         <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select> <br />
        <label htmlFor='personalBio'>Bio: </label>
        <input type='text' id='personalBio' className='largeField' aria-multiline='true'/> <br/>
        <label htmlFor='favActivities'>I love to: </label>
        <input type='text' id='favActivities' className='largeField'/> <br/>
          <input type="submit" value="Ready for Love 🐶"/> 
        
      </form>
    </div>
    </article>

  )
}

export default Petinfo;



