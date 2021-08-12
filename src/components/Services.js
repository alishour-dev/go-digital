import React, { useState } from 'react'
import ServiceCard from './ServiceCard'
import { CgAdd, CgRemove } from "react-icons/cg";
import "../styles/services.scss";

// Images
import img1 from "../images/services/service-1.svg"
import img2 from "../images/services/service-2.svg"
import img3 from "../images/services/service-3.svg"
import img4 from "../images/services/service-4.svg"
import img5 from "../images/services/service-5.svg"
import img6 from "../images/services/service-6.png"
import img7 from "../images/services/service-7.svg"
import img8 from "../images/services/service-8.svg"
import img9 from "../images/services/service-9.svg"

const Services = () => {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <div className="services" id="services">
            <ul className="services-top">
                <ServiceCard 
                    src={img1}
                    text="Identifying &amp; evaluating target audience"
                    alt="Targeting Service"
                />
                <ServiceCard 
                    src={img2}
                    text="Creating an effective Social Media Strategy"
                    alt="Social Media Strategy"
                />
                <ServiceCard 
                    src={img3}
                    text="Creating data-driven paid social campaigns"
                    alt="social campaigns"
                />
                <ServiceCard 
                    src={img4}
                    text="Creating high-performing up-to-date content"
                    alt="high-performing up-to-date content"
                />
                <ServiceCard 
                    src={img5}
                    text="Posting scheduled, organic, engaing content"
                    alt="Regular content posts"
                />
                <ServiceCard 
                    src={img6}
                    text="Tracking &amp; optimizing engagement + PPC rates"
                    alt="Tracking rates"
                />
            </ul>
            <ul className={`services-bottom ${toggle ? 'show-bottom' : 'hide-bottom'}`}>
                <ServiceCard 
                    src={img7}
                    text="Day-to-day accounts management &amp; support"
                    alt="accounts management"
                />
                <ServiceCard 
                    src={img8}
                    text="Developing brand awareness"
                    alt="brand awareness"
                />
                <ServiceCard 
                    src={img9}
                    text="Completing market &amp; competitior analysis"
                    alt="competitior analysis"
                />
            </ul>
            <div className='btn' role="button" tabIndex={0} onClick={toggleHandler} onKeyDown={toggleHandler}><h5>{ toggle ? 'view less' : 'view more' }</h5>{ toggle ? <CgRemove className="btn-icon"/> : <CgAdd className="btn-icon"/>}</div>
        </div>
    )
}

export default Services
