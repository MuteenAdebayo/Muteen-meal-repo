import React from 'react'
import '../Styles/error.css'
import Errorimage from '../assets/Thespaceman.jpg'

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
    
      <img src={Errorimage}/>
   
   </div>
  )     
 }

export default Error