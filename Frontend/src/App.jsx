import React from 'react'
import './App.css'
import{BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Home from './Components/Home'
import Login from './Components/Login'
import TodoList from './Components/TodoList'
import EventHandling from './Components/EventHandling'
import Signup from './Components/Signup'
import {SnackbarProvider} from 'notistack'
import ManageUser from './Components/ManageUser'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/EventHandling' element={<EventHandling />} />
          <Route path='/TodoList' element={<TodoList />} />
          <Route path='/ManageUser' element={<ManageUser />} />
        </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App