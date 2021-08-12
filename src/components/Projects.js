import React, { useState } from 'react'
import Headline from './Headline'
import { MdWork } from "react-icons/md";
import "../styles/projects.scss";
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

    return (
        <div className="projects" id="projects">
            <Headline 
                title={'What we did?'}
                icon={<MdWork className="headline-icon"/>}
                info={'Check out some of our featured work, and get inspired!'}
                customClass = {"headline3"}
            />
            <div className="projects-container">
                <div className="top-projects">
                    <CardStructure 
                        info = { 'Mocassin Store IG Campaign' }
                        projLink = { '/project1' }
                    >
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
                    
                    <CardStructure
                        info = { 'Al-Nabelsi Snack IG Campaign' }
                        projLink = { '/project2' }
                    >
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

                    <CardStructure
                        info = { 'Family Dental Care, Dr. Fouani' }
                        projLink = { '/project3' }
                    >
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

                    <CardStructure
                        info = { 'Lazio - Shushi & Italian Cuisine' }
                        projLink = { '/project4' }
                    >
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
                    <CardStructure
                        info = { 'Diva Med Center IG ad campaign' }
                        projLink = { '/project5' }
                    >
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

                    <CardStructure
                        info = { 'HIC, The best certified courses!' }
                        projLink = { '/project6' }
                    >
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

                    <CardStructure
                        info = { 'Nutri Fit - Run by Jinan Trad' }
                        projLink = { '/project7' }
                    >
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

                    <CardStructure
                        info = { 'Optimal: Functional & affordable' }
                        projLink = { '/project8' }
                    >
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