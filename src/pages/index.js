import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => (

  useEffect(() => {

    let t1 = gsap.timeline();
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-top",
        start: "top 80%",
        pin: "true"
      }
    });
    let t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "bottom"
      }
    });
    let t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top 50%",
        end: "bottom"
      }
    });
    let t5 = gsap.timeline({
      scrollTrigger: {
          trigger: ".contact",
          start: "top 50%",
          end: "bottom"
      }
    });

    t1.from(".navbar", {y: "-150", opacity: 0, duration: 1.5, ease: Power3.easeOut})
      .from(".left-hero", { x: "-150", opacity: 0, duration: 2, ease: Power3.easeOut})
      .from(".right-hero", {x: "150", opacity: 0, duration: 2, ease: Power3.easeOut}, "-=2")
      .from(".bottom", {y: "150", opacity: 0, duration: 1.5, ease: Power3.easeOut}, "-=1")
      .from(".hero-hand", {y: "150", opacity: 0, duration: 1.5, ease: Power3.easeOut})

    t2.from(".services-top", { y: "100", opacity: 0, duration: 2, ease: Power3.easeOut})

    t3.from(".headline2", { y: "-100", opacity: 0, duration: 2, ease: Power3.easeOut})
    .from(".left-about", { x: "-200", opacity: 0, duration: 1.5, ease: Power3.easeOut}, "-=1")
    .from(".right-about", {x: "200", opacity: 0, duration: 1.5, ease: Power3.easeOut}, "-=1.5")

    t4.from(".headline3", { y: "-100", opacity: 0, duration: 2, ease: Power3.easeOut})
    .from(".projects-container", { y: "-100", opacity: 0, duration: 1, ease: Power3.easeOut}, "-=1")

    t5.from(".headline4", { y: "-100", opacity: 0, duration: 2, ease: Power3.easeOut})
    .from(".contact-container", { y: "200", opacity: 0, duration: 1, ease: Power3.easeOut}, "-=1")

  }, []),
  
  <Layout
    servicesPath = {'#services'}
    aboutPath = {'#about'}
    projectsPath = {'#projects'}
    contactPath = {'#contact'}
  >
    <Seo title="Home" />
    <Hero />
    <Services />
    <About />
    <Projects />
    <Contact />

  </Layout>
)

export default IndexPage