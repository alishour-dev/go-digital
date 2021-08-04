import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel8 from "../components/ProjCarousel8"
import "../styles/proj-pages.scss"
import ProjNav from "../components/projNav"

const Project8 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Optimal High Chairs</h1>
        <ProjCarousel8 
            alt = { 'Optimal marketing Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Optimal delivers high-quality multifunctional high chairs for infants and kids younger than 6 years old. The design is functional, efficient, and helps infants sit in a comfortable yet healthy chair. We assisted Optimal in creating a stronger social media presence wih regular engaging posts. 
        </p>
        <ProjNav
            link1 = {'/project7'}
            link2 = {'../#projects'}
            text1 = {'Nutri Fit'}
            text2 = {'Projects'}
        />
    </div>
  </Layout>
)

export default Project8