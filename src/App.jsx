import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Forcast from './components/Forcast'
import Data from './components/Data'
import Search from './components/Search'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/forcast' element={<Forcast />}></Route>
        <Route path='/data' element={<Data />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </>
  )
}

export default App
