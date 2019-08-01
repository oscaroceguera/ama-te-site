import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "../Header"
import "./styles.css"

const Container = styled.div`
  margin: 0 auto;
  padding: 0px;
`

const Main = styled.div`
  border: 1px solid white;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          links {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        links={data.site.siteMetadata.links}
      />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
