import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import './App.css'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Dashboard from './pages/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
