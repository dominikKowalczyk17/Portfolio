import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import './App.scss'
import About from './components/About/About.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
