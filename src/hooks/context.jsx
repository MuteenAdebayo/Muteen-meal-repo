
import { createContext, useContext, useEffect, useState} from 'react'

const Appcontext =createContext();
export const useGlobalContext = () => useContext(Appcontext);

export const AppProvider =({children})=>{
  const [isLoading, setIsLoading]= useState(true);
  const [meals, setMeals]= useState([]);
  const [searchValue, setSearchValue] =useState('');
  console.log(searchValue);

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const getData = async () =>{
    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      setIsLoading(false);
      // console.log(data.meals);
      if(data.meals){
        setMeals(data.meals)
      }else{
        setMeals([])
      }
      // setMeals(data.meals);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect (()=>{
    setTimeout(()=>{
      getData();
    },3000)
  }, [searchValue])


  return <Appcontext.Provider value={{ isLoading, meals, searchValue, setSearchValue}}>
      {children}
    
  </Appcontext.Provider>
}