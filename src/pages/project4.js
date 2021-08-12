import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel4 from "../components/ProjCarousel4"
import ProjNav from "../components/projNav"
import "../styles/proj-pages.scss";

const Project4 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Lazio - Sushi &amp; Italian Cuisine</h1>
        <ProjCarousel4 
            alt = { 'Lazio restaurant Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
        />
        <p>
            Lazio is a restaurant located in Tyre, South Lebanon, which specializes in its Italian Cuisine, in addition to serving Sushi. A diverse menu with a lot of tasteul and delightful dishes, as well as a cozy location/spot, just facing Tyre's famous golden beach, we managed to play our part in boosting Lazio's potential in marketing their diverse menu.  
        </p>
        <ProjNav
            link1 = {'/project3'}
            link2 = {'/project5'}
            text1 = {'Dental Care'}
            text2 = {'Diva Med'}
        />
    </div>
  </Layout>
)

export default Project4