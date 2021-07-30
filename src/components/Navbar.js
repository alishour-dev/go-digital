import React, { useState } from "react"
import { Link } from "gatsby"
import "../styles/navbar.scss"

// Images
import logo from "../images/logo.svg"
import hands from "../images/letstalk-hands.svg"


const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
          <img src={ logo } alt="" />
      </Link>
      <div className="bars" onClick={handleClick}>
          <div className={click ? 'open' : 'close'}></div>
          <div className={click ? 'open' : 'close'}></div>
          <div className={click ? 'open' : 'close'}></div>
      </div>
      <nav className={click ? 'show' : 'hide'}>
        <div className="container">
          <Link to="#services" onClick={closeMobileMenu}>Services</Link>
          <Link to="#about" onClick={closeMobileMenu}>About Us</Link>
          <Link to="#projects" onClick={closeMobileMenu}>Our Work</Link>
          <Link to="#contact" onClick={closeMobileMenu}>Lets Talk! <img src={ hands } alt="hands illustration"/></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
