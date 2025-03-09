import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes } from "react-router-dom"

import React from 'react'

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
    
      <Routes>
      
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App

