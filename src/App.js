import React from 'react'
import Home from './routes/Home'
import About from './routes/About'
import Navigation from './components/Navigation'
import Detail from './routes/Detail'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail' element={<Detail />} />
          {/* path='주소' element={표시} */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
