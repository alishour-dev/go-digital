import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import "../styles/about.scss"
import Headline from './Headline'
import { FaUserTie } from "react-icons/fa";

const About = () => {

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
