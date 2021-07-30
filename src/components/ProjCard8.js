import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/projects.scss"
import { Carousel } from 'react-bootstrap'
import CardStructure from './CardStructure'

const ProjCard8 = ({alt}) => {

    const data = useStaticQuery(graphql`
        query {
            gallery: allFile(
            filter: {relativeDirectory: {eq: "proj-8"}}
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
        <CardStructure
            info = { 'Optimal - Multifunctional high chairs' }
        >
            <div className="img-container use-bootstrap">
                <Carousel fade controls={false} touch={false} indicators={false}>
                    {data.gallery.edges.map(({node}) => (
                        <Carousel.Item key={node.id}>
                            <GatsbyImage 
                                image={node.childImageSharp.gatsbyImageData}
                                alt={alt}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </CardStructure >
    )
}

export default ProjCard8
