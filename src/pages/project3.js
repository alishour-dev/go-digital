import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel3 from "../components/ProjCarousel3"
import ProjNav from "../components/projNav"
import "../styles/proj-pages.scss";

const Project3 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Family Dental Care</h1>
        <ProjCarousel3 
            alt = { 'Family Dental Care Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Family Dental care is a dental clinic run by Dr. Fidel Fouani, located in Beirut and Zahle, Lebanon. Dr Fidel is known as one of the best in the field, with a solid reputation and happy clients every day. We managed to spread the word about his incredible skills futher by designing and posting Instagram content, which helped many Lebanese individuals get a better and healthier smile!
        </p>
        <ProjNav
            link1 = {'/project2'}
            link2 = {'/project4'}
            text1 = {'Al-Nabelsi'}
            text2 = {'Lazio'}
        />
    </div>
  </Layout>
)

export default Project3