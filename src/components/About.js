import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/about.scss"
import Headline from './Headline'
import { FaUserTie } from "react-icons/fa";
import { gsap, Power3 } from "gsap";

const About = () => {

    useEffect(() => {

        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "center 80%",
                end: "bottom",
                toggleActions: "restart complete reverse reset"
            }
        });

        t1.from(".headline2", { y: "-100", opacity: 0, duration: 2, ease: Power3.easeOut})
        .from(".left-about", { x: "-200", opacity: 0, duration: 2, ease: Power3.easeOut})
        .from(".right-about", {x: "200", opacity: 0, duration: 2, ease: Power3.easeOut}, "-=2")

    });

    return (
        <div className="about" id="about">
            <Headline 
                title={'Who are we?'}
                icon={<FaUserTie className="headline-icon"/>}
                info={'Team of talents, who thrive & excel at every opportunity'}
                customClass = {"headline2"}
            />
            <div className="about-container">
                <div className="left-about">
                    <StaticImage 
                        src="../images/about-img.png"
                        alt="About Us"
                        className="static-img"
                        placeholder="blurred"
                    />
                </div>
                <div className="right-about">
                    <p>
                    GoDigital is a Full-Service social marketing agency. We’ve been providing a wide range of services to clients of all industries since 2018. From targeting a specific audience segment, to preparing &amp; Integrating the right strategies and tactics,  to producing and designing high-quality and engaging content, we ensure to not only successed but to excel in every campaign we’re contributing in.  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
