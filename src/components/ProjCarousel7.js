import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/main.scss"
import { Carousel } from 'react-bootstrap'

const ProjCarousel7 = ( { alt, carouselClass, fadeSlide, controls, touch, indicators, interval, variant } ) => {

    const data = useStaticQuery(graphql`
        query {
            gallery: allFile(
            filter: {relativeDirectory: {eq: "proj-7"}}
            sort: {fields: base, order: ASC}
            ) {
                edges {
                    node {
                        id
                        base
                        publicURL
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, webpOptions: {quality: 50})
                        }
                    }
                }
            }
        }
    `)

    return (
        <div className={ carouselClass }>
            <Carousel fade={fadeSlide} controls={controls} touch={touch} indicators={indicators} variant={variant}>
                {data.gallery.edges.map(({node}) => (
                    <Carousel.Item key={node.id} interval = {interval}>
                        <GatsbyImage 
                            image={node.childImageSharp.gatsbyImageData}
                            alt={alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default ProjCarousel7
