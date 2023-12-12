import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout.js'
import Home from './components/Home/Home.js'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
