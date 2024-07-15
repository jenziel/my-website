import React from 'react'
import'./NavBar.css'
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div className='nav-bar'>
        <NavLink style={{textDecoration: 'none'}} className='nav-bar-btn' to='/cv'>CV</NavLink>
        <NavLink style={{textDecoration: 'none'}} className='nav-bar-btn' to='/'>Software Projects</NavLink>
        {/* <NavLink style={{textDecoration: 'none'}} className='nav-bar-btn' to='/graphics'>Graphic Inspo</NavLink> */}
        <NavLink style={{textDecoration: 'none'}} className='nav-bar-btn' to='/contact' >Contact</NavLink>
    </div>
  )
}

export default NavBar
