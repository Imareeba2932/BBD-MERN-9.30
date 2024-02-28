import React from 'react'
// import Navbar from './Components/Navbar'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Components/About'

const App = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <BrowserRouter>
        <Routes>
            <Route path="/About" elements={<About />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App