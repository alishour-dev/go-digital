import React from 'react'
import { Link } from "gatsby"
import "../styles/hero.scss"
import { BsChevronDoubleDown, BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

// Images
import heroImg from "../images/hero-img.svg"
import heroHand from "../images/hero-hand.svg"
import Headline from './Headline';

const Hero = () => {
    return (
        <div className="hero">
            <div className="right">
                <img src={heroImg} alt="You're Going Viral!!" />
            </div>
            <div className="left">
                <h1>Let’s <span>Grow</span><br />Your <span>Business</span><br />to the <span>Next Level</span></h1>
                <Link to="#projects" className="btn"><h5>See Work</h5><BsBriefcaseFill className="btn-icon"/></Link>
                <div className="scroll">
                    <p>Scroll for<br />more</p>
                    <BsChevronDoubleDown />
                </div>
            </div>
            <div className="bottom">
                <Headline 
                    title={'What we do?'}
                    icon={<AiOutlineThunderbolt className="headline-icon"/>}
                    info={'We create customer relationships that last forever!'}
                />
            </div>
            <img className="hero-hand" src={heroHand} alt="It's Perfect!" />
        </div>
    )
}

export default Hero
