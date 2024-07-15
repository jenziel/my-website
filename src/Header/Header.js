import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
function Header() {
  return (
    <div>
      <header className="App-header">
        <Link style={{textDecoration: 'none', color:'black'}} to='/'>
        <p className="Header-title">
         Jen Ziel
        </p>
        </Link>
        <NavBar/>
      </header>
    </div>
  )
}

export default Header
