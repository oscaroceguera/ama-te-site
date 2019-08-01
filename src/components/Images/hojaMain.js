import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HojaMain = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderHojaMain: file(relativePath: { eq: "hojaMain.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderHojaMain.childImageSharp.fluid} />
}

export default HojaMain
