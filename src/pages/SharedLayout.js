import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}

export default SharedLayout