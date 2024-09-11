import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
