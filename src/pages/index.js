import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <About />
    <Projects />
    <Contact />

  </Layout>
)

export default IndexPage

// export const pageQuery = graphql`
//   query {
//     gallery: allFile(
//       filter: {relativeDirectory: {eq: "proj-1"}}
//       sort: {fields: base, order: ASC}
//     ) {
//       edges {
//         node {
//           id
//           base
//           publicURL
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 50})
//           }
//         }
//       }
//     }
//   }
// `
