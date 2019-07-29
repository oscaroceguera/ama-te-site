import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Images/image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <a name="beneficios"></a>
    <div style={{border: '1px solid red', height: '90vh'}}>
      <h1>BENEFICIOS</h1>
    </div>
    <a name="incluye"></a>
    <div style={{border: '1px solid red', height: '90vh'}}>
      <h1>¿QUÉ INCLUYE?</h1>
    </div>
  </Layout>
)

export default IndexPage
