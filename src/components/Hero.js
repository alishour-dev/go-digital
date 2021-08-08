import React, { useEffect } from 'react'
import { Link, parsePath } from "gatsby"
import "../styles/hero.scss"
import { BsChevronDoubleDown, BsBriefcaseFill } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

import { gsap, Power3 } from "gsap";

// Images
import heroImg from "../images/hero-img.svg"
import heroHand from "../images/hero-hand.svg"
import Headline from './Headline';

const Hero = () => {

    useEffect(() => {

        let t1 = gsap.timeline();

        t1.from(".left-hero", { x: "-150", opacity: 0, duration: 2, ease: Power3.easeOut})
        .from(".right-hero", {x: "150", opacity: 0, duration: 2, ease: Power3.easeOut}, "-=2")
        .from(".bottom", {y: "150", opacity: 0, duration: 2, ease: Power3.easeOut}, "-=1")
    })

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
            <img className="hero-hand" src={heroHand} alt="It's Perfect!" />
        </div>
    )
}

export default Hero
