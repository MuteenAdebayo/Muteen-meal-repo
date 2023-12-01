import React from 'react'
import { useGlobalContext } from '../hooks/context'
import { useRef } from 'react';
import '../Styles/searchForm.css'

const SearchForm = () => {
  const {searchValue ,setSearchValue} =useGlobalContext();
  const handleSubmit =((e)=>{
    e.preventDefault();
  });
   const inputContainer = useRef();
   const searchMeal = () => {
    setSearchValue(inputContainer.current.value)
   };
  return (
    <div className='my-3'>
    <form className=' search_box  mx-auto' onSubmit={handleSubmit}>
      <label htmlFor="Search" className='form-label text-success fw-bold fs-4 w-100 text-center'>Search for Your Favorite Meals</label>
      <input type="text" id='Search' 
      ref={inputContainer}
      onChange={searchMeal}
      placeholder='Explore Muteen Meal Shop ' className='border border-success w-100 form-control shadow-none bg-success-subtle text-success text-dark fs-5'/>
    </form>

    </div>
  )
}

export default SearchForm