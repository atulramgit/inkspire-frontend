import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <main className='w-full bg-[#ffffff] dark:bg-[#181A2A]'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default AppLayout