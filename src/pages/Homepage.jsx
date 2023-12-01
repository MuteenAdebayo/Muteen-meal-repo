import React from 'react'
import Banner from '../Components/Banner'
import SearchForm from '../Components/SearchForm'
import Meallist from '../Components/MealList'
import Loading from '../Components/Loading'
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <SearchForm/>
      {/* <Loading/> */}
      <Meallist/>
    </div>
  )
}

export default Homepage