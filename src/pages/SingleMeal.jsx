import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Components/Loading'
import '../Styles/singleMeal.css'
import ReactPlayer from 'react-player/youtube'
const SingleMeal = () => {
  const {id} = useParams();
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const [isLoading,setIsLoading]=useState(true);
  const[meals,setMeals]=useState(null);

  const getData = async()=>{
    try {
      const res = await fetch(`${url} ${id}`);
      const data = await res.json();
      setIsLoading(false)
      console.log(data);
      if(data.meals){
       const {strYoutube,
        strMeal,
        strMealThumb,
        strInstructions,
        strTags,
        strCategory,
        strArea}= data.meals[0];
        setMeals(
          {
            strYoutube,
          strMeal,
          strMealThumb,
          strInstructions,
          strTags,
          strCategory,
          strArea
          }
        )
      }else{
        setMeals(null)
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    setTimeout(()=>{

      getData()
    }, 2000)
  },[id])
if(isLoading){
  return<Loading/>
}
  return (
    <div className='container mt-2'>
     <div className='singleMeal'>
      <img src={meals.strMealThumb} alt="" />
      <div className='mt-3'>
      <p><span className='bg-success text-white p-2 me-2 rounded-2'>Name:</span>{meals.strMeal}</p>
      <p><span className='bg-success text-white p-2 me-2 rounded-2'>Tags:</span>{meals.strTags}</p>
      <p><span className='bg-success text-white p-2 me-2 rounded-2'>Category:</span>{meals.strCategory}</p>
      <p><span className='bg-success text-white p-2 me-2 rounded-2'>Area:</span>{meals.strArea}</p>
      <p className='lh-lg'><span className='bg-success text-white p-2 me-2 rounded-2'>Instructions:</span>{meals.strInstructions}</p>
      <p className='lh-lg'><span className=' bg-success text-white p-2 me-2 rounded-2'>Video Instructions:</span></p>
      
      <div className='my-2'>
        <ReactPlayer url={meals.strYoutube} width={'100%'} height={'450px'} playing={true} controls={true}/>
      </div>
      </div>
     </div>
    </div>
  )
}

export default SingleMeal