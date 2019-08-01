import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bolsa = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderBolsa: file(relativePath: { eq: "bolsa.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderBolsa.childImageSharp.fluid} />
}

export default Bolsa
