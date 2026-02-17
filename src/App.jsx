import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'Central.js'
import { UserProvider } from './context/UserContext/UserContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
