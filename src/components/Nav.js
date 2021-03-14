import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav id="top-nav-container">
      <div className="top-nav">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/skills">à propos de moi</NavLink>
      </div>
    </nav>
  )
}

export default Nav
