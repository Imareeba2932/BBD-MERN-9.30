import React from 'react'
import './App.css'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import EventHandling from './Components/EventHandling'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/EventHandling' element={<EventHandling />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App