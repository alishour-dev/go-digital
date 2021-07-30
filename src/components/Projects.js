import React, { useState } from 'react'
import "../styles/projects.scss"
import Headline from './Headline'
import { MdWork } from "react-icons/md";
import { CgAdd, CgRemove } from "react-icons/cg";
import ProjCard1 from './ProjCard1';
import ProjCard2 from './ProjCard2';
import ProjCard3 from './ProjCard3';
import ProjCard4 from './ProjCard4';
import ProjCard5 from './ProjCard5';
import ProjCard6 from './ProjCard6';
import ProjCard7 from './ProjCard7';
import ProjCard8 from './ProjCard8';


const Projects = () => {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <div className="projects" id="proj">
            <Headline 
                title={'What we did?'}
                icon={<MdWork className="headline-icon"/>}
                info={'Our Work'}
            />
            <div className="projects-container">
                <div className="top-projects">
                    <ProjCard1 
                        alt = { 'first Project' }
                    />
                    <ProjCard2 
                        alt = { 'first Project' }
                    />
                    <ProjCard3 
                        alt = { 'first Project' }
                    />
                    <ProjCard4 
                        alt = { 'first Project' }
                    />
                </div>
                <div className={`bottom-projects ${toggle ? 'show-bottom' : 'hide-bottom'}`}>
                    <ProjCard5 
                        alt = { 'first Project' }
                    />
                    <ProjCard6 
                        alt = { 'first Project' }
                    />
                    <ProjCard7 
                        alt = { 'first Project' }
                    />
                    <ProjCard8 
                        alt = { 'first Project' }
                    />
                </div>
                <div className='btn' onClick={toggleHandler}><h5>{ toggle ? 'view less' : 'view more' }</h5>{ toggle ? <CgRemove className="btn-icon"/> : <CgAdd className="btn-icon"/>}</div>
            </div>
        </div>
    )
}

export default Projects
