import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/main.scss"

const Layout = ({ children, servicesPath, aboutPath, projectsPath, contactPath }) => {

  return (
    <>
      <Navbar 
        servicesPath = {servicesPath}
        aboutPath = {aboutPath}
        projectsPath = {projectsPath}
        contactPath = {contactPath}
      />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
