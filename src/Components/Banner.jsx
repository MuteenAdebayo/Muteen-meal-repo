import React from 'react'
import '../Styles/banner.css'
import bgimage from '../assets/bgimg.avif'
const Banner = () => {
  return (
    <div className='banner justify-content-md-start' style={{backgroundImage:`url(${bgimage})`}}>
     <div className='healthy'>
      <h1>Healthy Foods</h1>
       <h1 className=''>Explore different meals</h1>
       <button className='btn btn-success'>
        <a href="#below" >See more Below</a>
       </button>
     </div>
    </div>
  )
}

export default Banner