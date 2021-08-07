import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel2 from "../components/ProjCarousel2"
import "../styles/main.scss"
import ProjNav from "../components/projNav"

const Project2 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Al-Nabelsi Snack</h1>
        <ProjCarousel2 
            alt = { 'Al-Nabelsi Snack menu Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Al-Nabelsi is a snack and bakery shop located in Abbessieh, Tyre district, south Lebanon. It specializes with a delightful taste and freshly grilled beef and chicken. After managing and delivering a social media campaign, we were able to help Al-Nabelsi grow their audience online, which instanly affected an improvement in monthly sales and revenues. A guaranteed growth and ROI was delivered in just a manner of little time!
        </p>
        <ProjNav
            link1 = {'/project1'}
            link2 = {'/project3'}
            text1 = {'Mocassin'}
            text2 = {'Dental Care'}
        />
    </div>
  </Layout>
)

export default Project2