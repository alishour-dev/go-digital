import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel6 from "../components/ProjCarousel6"
import "../styles/proj-pages.scss"
import ProjNav from "../components/projNav"

const Project6 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>HIC - Certified Courses</h1>
        <ProjCarousel6 
            alt = { 'HIC Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            HIC is an institute that helps students, graduates, or even anyone interested in learning new things everyday, by delivering high-quality academic resources and certified courses such as Autocad courses, Autodesk Revit, Adobe, SketchUp, AutoDesk 3DS Max, in addition to offering Language courses, such as learning German, French, English, and Arabic. Their huge library of subjects and courses they offer made HIC a valuable institute to attend.
        </p>
        <ProjNav
            link1 = {'/project5'}
            link2 = {'/project7'}
            text1 = {'Diva Med'}
            text2 = {'Nutri Fit'}
        />
    </div>
  </Layout>
)

export default Project6