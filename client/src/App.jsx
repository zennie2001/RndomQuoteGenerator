import React, { Suspense} from 'react'
import './App.css'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
 import { ToastContainer } from 'react-toastify';

//import Quote from './Quote'
import Home from './Home'
const Quote = React.lazy(()=>import('./Quote'))

function App() {
  

  return (
   <BrowserRouter>
    <ToastContainer/>
   <Routes>
    <Route path='/register' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/' element={<Home/>} />
   
    <Route path='/quote' element={
      <Suspense fallback={<div>Loading...</div>}>
        <Quote/>
        </Suspense>} 
    />
    
   </Routes> 
   
   </BrowserRouter>
  )
}

export default App
