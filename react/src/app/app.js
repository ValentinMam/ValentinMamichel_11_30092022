import './app.css'
import React from 'react'
import AppRouting from './app-routing'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.title = 'Kasa React App'
  // }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <AppRouting />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
