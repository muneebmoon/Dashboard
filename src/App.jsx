import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'Central.js'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
