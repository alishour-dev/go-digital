import { Link } from 'gatsby';
import React from 'react'
import { FaFacebookF, FaWhatsapp, FaInstagram, FaRegCopyright } from "react-icons/fa";
import "../styles/footer.scss"


const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://www.facebook.com/godigitaldesignn/" target="_blank" className="circle">
                    <FaFacebookF className="ic"/>
                </a>
                <a href="https://www.instagram.com/godigitaldesign/" target="_blank" className="circle">
                    <FaInstagram className="ic"/>
                </a>
                <a href="https://wa.me/+96178971073" target="_blank" className="circle">
                    <FaWhatsapp className="ic"/>
                </a>
            </div>
            <div className="copyrights">
                <p>Copyright</p>
                <FaRegCopyright className="copy-ic"/>
                <p>2018-2021 GoDigitalDesign.</p>
                <p>All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
