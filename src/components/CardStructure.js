import React from 'react'
import { Link } from "gatsby"
import { BsArrowRightShort } from "react-icons/bs";
// import "../styles/projects.scss"

const CardStructure = ({ children, info, projLink }) => {
    
    return (
        <Link to={ projLink } className="card">
            {children}
            <div className="info">
                <p>{ info }</p>
                <BsArrowRightShort className="arrow"/>
            </div>
        </Link>
    )
}

export default CardStructure
