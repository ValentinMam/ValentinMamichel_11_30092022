import React from 'react'

import './footer.css'
import logo from '../../assets/images/logo-footer.png'

function Logo() {
  return (
    <footer>
      <img src={logo} alt="logo-kasa" />
      <p>© 2022 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Logo
