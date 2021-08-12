import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel1 from "../components/ProjCarousel1"
// import "../styles/proj-pages.scss"
import ProjNav from "../components/projNav"

const Project1 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Mocassin Store</h1>
        <ProjCarousel1 
            alt = { 'Mocassin Store social media Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Mocassin Store specializes in selling latest trends and models of shoes &amp; bags, located in Alzrareya, Tyre district, south Lebanon. We managed Mocassin's social media presence with engaging posts, presenting their latest collection and a selection of products. A fruitful partnership with Mocassin store helped them not only grow exponentially, but also increased their monthly sales and ROI.
        </p>
        <ProjNav
            link1 = {'../#projects'}
            link2 = {'/project2'}
            text1 = {'Projects'}
            text2 = {'Al-Nabelsy'}
        />
    </div>
  </Layout>
)

export default Project1