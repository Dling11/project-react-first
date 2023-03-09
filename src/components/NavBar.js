import React from 'react'
import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (
      <nav className='myNav'>
        <a href="https://www.facebook.com/rowelljay.rodriguez" target={"_blank"}>
          <img src="2.png" alt="dling" />
          </a>
          <div>
            <NavLink 
              to="/" className={({isActive})=> (
                isActive ? "active" : "notActive"
              )}
            > Home </NavLink>

            <NavLink 
              to="/about" className={({isActive})=> (
                isActive ? "active" : "notActive"
              )}
            > About </NavLink>

            <NavLink 
              to="/login" className={({isActive})=> (
                isActive ? "active" : "notActive"
              )}
            > Login </NavLink>
          </div>
          <a href="#" className='btn'>Arise</a>
      </nav>
  )
}

export default NavBar