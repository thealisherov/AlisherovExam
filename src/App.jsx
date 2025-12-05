import React, { useEffect } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {

useEffect(()=>{
  const admin = localStorage.getItem("admin")
  if (!admin) {
    localStorage.setItem(
      "admin",
      JSON.stringify({
        email:"admin@gmail.com",
        password:"admin123",
        role:"admin"
      })

    )
  }
},[]);

  return (
    <div >
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App