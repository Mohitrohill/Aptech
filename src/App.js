import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Courses from './components/pages/Courses'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/' exact Component={Home}/>
          <Route path='/courses'  Component={Courses}/>
          <Route path='/about' Component={About}/>
          <Route path='/contact'  Component={Contact}/>
        
        </Routes> 
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App