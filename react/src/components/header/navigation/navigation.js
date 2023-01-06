import React from 'react'
import { NavLink } from 'react-router-dom'

import './navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => {
            return nav.isActive ? 'nav-active' : ''
          }}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => {
            return nav.isActive ? 'nav-active' : ''
          }}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Navigation
