import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel7 from "../components/ProjCarousel7"
import "../styles/main.scss"
import ProjNav from "../components/projNav"

const Project7 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Nutri Fit</h1>
        <ProjCarousel7 
            alt = { 'Nutri Fit social media Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Nutri Fit is a nutrition center which helps client arrange a specific diet program, run by a group of skilled and experienced staff. It also delivers healthy meals to any individual client interested, in addition to schools, institutes, and other businesses. We managed to create digital content to promote Nutri Fit's services on social media.
        </p>
        <ProjNav
            link1 = {'/project6'}
            link2 = {'/project8'}
            text1 = {'HIC'}
            text2 = {'Optimal'}
        />
    </div>
  </Layout>
)

export default Project7