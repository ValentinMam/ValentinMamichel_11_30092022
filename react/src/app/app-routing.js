import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './modules/general/home/home'
import Notfound from './modules/general/not-found/not-found'
import Housing from './modules/general/housing/housing'
import About from './modules/general/about/about'

// import Login from './modules/general/login/login'
// import Signup from './modules/general/signup/signup'
// import Contact from './modules/general/contact/contact'

function AppRouting() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/apartements.json')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={<Housing data={data} />} />
          <Route path="/housing/*" element={<Notfound />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      )}
    </>
  )
}

export default AppRouting
