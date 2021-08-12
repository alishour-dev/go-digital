import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjCarousel5 from "../components/ProjCarousel5"
import ProjNav from "../components/projNav"

const Project5 = () => (
    <Layout
        servicesPath = {'../#services'}
        aboutPath = {'../#about'}
        projectsPath = {'../#projects'}
        contactPath = {'../#contact'}
    >
    <Seo title="Home" />
    <div className="project-page">
        <h1>Diva Med Center</h1>
        <ProjCarousel5 
            alt = { 'Diva Medical Center marketing Images' }
            carouselClass = { 'img-container use-bootstrap' }
            fadeSlide = { false }
            controls = { true }
            touch = { true }
            indicators = { true }
            interval = {6000}
            variant = {"dark"}
        />
        <p>
            Diva Medical center is a beauty center based in Tyre, South Lebanon, which offers various medical services such as: plastic surgeries, Botox, nose filler, lip iller, thread lift, mesotherapy, dermatology, skin care Laser hair removal, and PRP. Run by the experienced and skillful Dr Wehbi, Diva is now considered a power horse in this domain, yet their collaboration with us for a stronger social media presence helped them in boosting their business even more by spreading the word over these services to interested clients.
        </p>
        <ProjNav
            link1 = {'/project4'}
            link2 = {'/project6'}
            text1 = {'Lazio'}
            text2 = {'HIC'}
        />
    </div>
  </Layout>
)

export default Project5