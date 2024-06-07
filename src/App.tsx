import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'

export const App = () => {

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, [])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
