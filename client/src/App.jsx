import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './HOme'
import Quote from './Quote'

function App() {
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/quote' element={<Quote/>}></Route>
   </Routes> 
   </BrowserRouter>
  )
}

export default App
