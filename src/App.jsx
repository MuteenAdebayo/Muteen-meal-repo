import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Error from './pages/Error'
import Footer from './Components/Footer'
import { useGlobalContext } from './hooks/context'
import SingleMeal from './pages/SingleMeal'


function App() {

  return (
    <>
     <div className='container'>
       <Router>
         <Header/>
         <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/meal/:id' element={<SingleMeal/>}/>
           <Route path='*' element={<Error/>}/>
         </Routes>
          <Footer/>
       </Router>
     </div>
    </>
  )
}

export default App
