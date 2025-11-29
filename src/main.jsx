import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.jsx'
import DarkProvider from './Contex/DarkProvider.jsx'

createRoot(document.getElementById('root')).render(
  <DarkProvider>
  <RouterProvider router={router} >
      <App/>
  </RouterProvider>
  </DarkProvider>
)
