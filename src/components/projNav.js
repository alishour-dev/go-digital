import { Link } from 'gatsby'
import React from 'react'
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const ProjNav = ({link1, link2, text1, text2}) => {
    return (
        <div className="projNav">
            <Link to={link1} class="prev">
                <h2>Prev</h2>
                <BsArrowLeftShort className="arrow"/>
                <p>{ text1 }</p>
            </Link>
            <Link to={link2} class="next">
                <h2>Next</h2>
                <BsArrowRightShort className="arrow"/>
                <p>{ text2 }</p>
            </Link>
        </div>
    )
}

export default ProjNav
