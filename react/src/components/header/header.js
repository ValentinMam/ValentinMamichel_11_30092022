import React from 'react'

import Logo from './logo/logo'
import Navigation from './navigation/navigation'
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Navigation />
      </header>
    )
  }
}
export default Header
