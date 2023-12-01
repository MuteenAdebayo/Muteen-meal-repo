import React from 'react'
import Loading from './Loading'
import { useGlobalContext} from '../hooks/context'
  import '../Styles/mealList.css'
import { Link } from 'react-router-dom'

const MealList =()=>{
 const {isLoading,meals} = useGlobalContext();
console.log(isLoading,meals);
if(isLoading){
  return <Loading/>
}
if (meals.length < 1){
  return( 
  <h1 className='text-danger text-center'>No food Found for your Search</h1>
  );
}
return(
  <div id='below' className='container meal_list'>
  {
    meals.map((meal)=>{
    const {idMeal, strMeal ,strMealThumb,strCategory, } =meal;
    return<Link key={idMeal} to={`/meal/${idMeal}`} className='text-decoration-none my-3 mx-auto'>
        <div className='list_meal'>
        <img src={strMealThumb}/>
        <h4>{strMeal}</h4>
        <p>{strCategory}</p>
        </div>
      </Link>
    
    })
  }
  </div>
)
}


export default MealList