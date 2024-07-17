import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewproduct from './components/Viewproduct'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
//import { Route,Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
  return (
    <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Viewproduct/>}></Route>
      <Route path='/addproduct' element={<Addproduct/>}></Route>
      <Route path='/' element={<Viewproduct/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
