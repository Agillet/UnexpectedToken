import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [active, setActive] = useState(false);

  return (
    <nav id="top-nav-container">
      <div className={`top-nav ${active && 'open'}`}>
        <NavLink onClick={() => setActive(false)} exact to="/">Home</NavLink>
        <NavLink onClick={() => setActive(false)} exact to="/about-me">À propos</NavLink>
        <NavLink onClick={() => setActive(false)} exact to="/skills">Compétences</NavLink>
        <NavLink onClick={() => setActive(false)} exact to="/contact">Contact</NavLink>
      </div>
      <button className="mobile-menu-toggle" onClick={() => setActive(!active)}>
        <FontAwesomeIcon icon={active ? faTimes : faBars} />
      </button>
    </nav>
  )
}

export default Nav
