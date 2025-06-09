import React from 'react'
import "./App.css"
import Nav from './component/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer/Footer'


function App() {
  return (
    <>
    
    <Nav/>
    <Outlet/>
    <Footer/>



    
    </>
  )
}

export default App
