import React from 'react'
import { NavLink } from 'react-router-dom'
import './logo.css'
import logo from '../../../assets/images/logo-header.png'

class Logo extends React.Component {
  render() {
    return (
      <NavLink to="/">
        <div className="logo">
          <img src={logo} alt="logo-kasa" />
        </div>
      </NavLink>
    )
  }
}
export default Logo
