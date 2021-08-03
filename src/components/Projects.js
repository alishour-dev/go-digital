import React, { useState } from 'react'
import "../styles/projects.scss"
import Headline from './Headline'
import { MdWork } from "react-icons/md";
import { CgAdd, CgRemove } from "react-icons/cg";
import ProjCarousel1 from './ProjCarousel1';
import ProjCarousel2 from './ProjCarousel2';
import ProjCarousel3 from './ProjCarousel3';
import ProjCarousel4 from './ProjCarousel4';
import ProjCarousel5 from './ProjCarousel5';
import ProjCarousel6 from './ProjCarousel6';
import ProjCarousel7 from './ProjCarousel7';
import ProjCarousel8 from './ProjCarousel8';
import CardStructure from './CardStructure';


const Projects = () => {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }
l
    return (
        <div className="projects" id="projects">
            <Headline 
                title={'What we did?'}
                icon={<MdWork className="headline-icon"/>}
                info={'Our Work'}
            />
            <div className="projects-container">
                <div className="top-projects">
                    <CardStructure info = { 'Mocassin Store IG Campaign' }>
                        <ProjCarousel1 
                            alt = { 'Mocassin Store social media Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1000}
                         />
                    </CardStructure>
                    
                    <CardStructure info = { 'Al-Nabelsi Snack IG Campaign' }>
                        <ProjCarousel2 
                            alt = { 'Al-Nabelsi Snack menu Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1300}
                         />
                    </CardStructure>

                    <CardStructure info = { 'Family Dental Care, Dr. Fouani' }>
                        <ProjCarousel3 
                            alt = { 'Family Dental Care Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1200}
                         />
                    </CardStructure>

                    <CardStructure info = { 'Lazio - Shushi & Italian Cuisine' }>
                        <ProjCarousel4 
                            alt = { 'Lazio restaurant Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1400}
                         />
                    </CardStructure>
                </div>
                <div className={`bottom-projects ${toggle ? 'show-bottom' : 'hide-bottom'}`}>
                    <CardStructure info = { 'Diva Med Center IG ad campaign' }>
                        <ProjCarousel5 
                            alt = { 'Diva Medical Center marketing Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1200}
                        />
                    </CardStructure>

                    <CardStructure info = { 'HIC, The best certified courses!' }>
                        <ProjCarousel6 
                            alt = { 'HIC Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1280}
                        />
                    </CardStructure>

                    <CardStructure info = { 'Nutri Fit - Run by Jinan Trad' }>
                        <ProjCarousel7 
                            alt = { 'Nutri Fit social media Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1000}
                        />
                    </CardStructure>

                    <CardStructure info = { 'Optimal: Functional & affordable' }>
                        <ProjCarousel8 
                            alt = { 'Optimal marketing Images' }
                            carouselClass = { 'img-container use-bootstrap' }
                            fadeSlide = { true }
                            controls = { false }
                            touch = { false }
                            indicators = { false }
                            interval = {1000}
                        />
                    </CardStructure>
                </div>
                <div className='btn' role="button" tabIndex={0} onClick={toggleHandler} onKeyDown={toggleHandler}><h5>{ toggle ? 'view less' : 'view more' }</h5>{ toggle ? <CgRemove className="btn-icon"/> : <CgAdd className="btn-icon"/>}</div>
            </div>
        </div>
    )
}

export default Projects