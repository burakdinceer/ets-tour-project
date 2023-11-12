import React from 'react'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout