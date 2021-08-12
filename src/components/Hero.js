import React from 'react'
import { Link, parsePath } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image';
// import "../styles/hero.scss"
import { BsChevronDoubleDown, BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

// Images
import heroImg from "../images/hero-img.svg"
import Headline from './Headline';

const Hero = () => {

    return (
        <div className="hero">
            <div className="right-hero">
                <img src={heroImg} alt="You're Going Viral!!" />
            </div>
            <div className="left-hero">
                <h1>Let’s <span>Grow</span><br />Your <span>Business</span><br />to the <span>Next Level</span></h1>
                <div className="cta">
                    <Link to="#projects" role="button" tabIndex={0} className="btn" onKeyDown={ () =>  parsePath('#projects') }><h5>See Work</h5><BsBriefcaseFill className="btn-icon"/></Link>
                    <div className="scroll">
                        <p>Scroll for<br />more</p>
                        <BsChevronDoubleDown className="scroll-ic"/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <Headline 
                    title={'What we do?'}
                    icon={<AiOutlineThunderbolt className="headline-icon"/>}
                    info={'We create customer relationships that last forever!'}
                />
            </div>
            <StaticImage 
                className="hero-hand"
                src="../images/hero-hand.png"
                alt="It's Perfect!"
                placeholder="blurred"
            />
        </div>
    )
}

export default Hero
