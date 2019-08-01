import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/Images/image"
import SEO from "../components/Seo"
import Main from "../components/Main"
import Benefits from "../components/Benefits"
import About from "../components/About"
import Get from "../components/Get"
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
    <Benefits />
    <About />
    <Get />
    <Contact />
  </Layout>
)

export default IndexPage
