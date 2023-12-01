import React, { useState } from 'react'
// import Error404 from '../assets/Error404.jpeg'
import '../Styles/error.css'
import Error404 from '../assets/Thespaceman.jpg'

 const Error = () => {

 
  return (
    
   <div className='Error'>
    <div className='lost'>
      <h2>404</h2>
      <p className='space'>Lost in Space</p>
      <p className='reached'>You have reached the edge of the universe .<br/>The page you have requested could not be found.<br/>Don't worry and return to the previous page.
      </p>
      
       <button ><a href="/">Go Home</a></button>
      
    </div>
    
      <img src={Error404} alt="" />
   
   </div>
  )     
 }

export default Error