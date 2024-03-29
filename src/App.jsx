
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Header/Navbar'
import Login from './Components/Header/Auth/Login'
import Home from './Components/Header/Dashboard/Home'
import SignupForm from './Components/Header/Auth/Signup'
import LogIn from './Components/Header/Auth/Login'

function App() {
 

  return (
 <>
 
 <Navbar/>
 <Routes>
<Route path='/Login' element={<LogIn/>}/>
<Route path='/Signup' element={<SignupForm/>}/>
<Route path='/' element={<Home/>}/>

 </Routes>
 </>
  )
}

export default App
