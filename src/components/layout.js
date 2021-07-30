import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/resets.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
