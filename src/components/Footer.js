import React from 'react'
import { Link } from "gatsby"
import { FaFacebookF, FaWhatsapp, FaInstagram, FaRegCopyright } from "react-icons/fa";
import Logo from "../images/logo.svg"


const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://www.facebook.com/godigitaldesignn/" target="_blank" rel="noopener noreferrer" className="circle">
                    <FaFacebookF className="ic"/>
                </a>
                <a href="https://www.instagram.com/godigitaldesign/" target="_blank" rel="noopener noreferrer" className="circle">
                    <FaInstagram className="ic"/>
                </a>
                <a href="https://wa.me/+96178971073" target="_blank" rel="noopener noreferrer" className="circle">
                    <FaWhatsapp className="ic"/>
                </a>
            </div>
            <div className="copyrights">
                <p>Copyright</p>
                <FaRegCopyright className="copy-ic"/>
                <p>2018-2021 GoDigitalDesign.</p>
                <p>All rights reserved.</p>
            </div>
            <Link to="/" className="logo">
                <img src={Logo} alt="Go Digital Design logo" />
            </Link>
        </div>
    )
}

export default Footer
