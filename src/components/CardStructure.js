import React from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import "../styles/projects.scss"

const CardStructure = ({ children, info }) => {
    
    return (
        <div className="card">
            {children}
            <div className="info">
                <p>{ info }</p>
                <BsArrowRightShort className="arrow"/>
            </div>
        </div>
    )
}

export default CardStructure
