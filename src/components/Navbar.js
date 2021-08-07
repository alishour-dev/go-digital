import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

// Images
import logo from "../images/logo.svg"
import hands from "../images/letstalk-hands.svg"


const Navbar = ( {servicesPath, aboutPath, projectsPath, contactPath} ) => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
          <img src={ logo } alt="" />
      </Link>
      <div className="bars" onClick={handleClick} onKeyUp={handleClick} role="button" tabIndex={0}>
          <div className={click ? 'open' : 'close'}></div>
          <div className={click ? 'open' : 'close'}></div>
          <div className={click ? 'open' : 'close'}></div>
      </div>
      <nav className={click ? 'show' : 'hide'}>
        <div className="container">
          <Link to={ servicesPath } onClick={closeMobileMenu}>Services</Link>
          <Link to={ aboutPath } onClick={closeMobileMenu}>About Us</Link>
          <Link to={ projectsPath } onClick={closeMobileMenu}>Our Work</Link>
          <Link to={ contactPath } onClick={closeMobileMenu}>Lets Talk! <img src={ hands } alt="hands illustration"/></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
