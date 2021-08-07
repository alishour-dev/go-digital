import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => (
  
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