import React from 'react'
import { Header, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    // <div>HomeLayout</div>
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout