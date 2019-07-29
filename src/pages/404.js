import React from "react"
import {Link} from 'gatsby'
import styled from 'styled-components'
import { up, down, between, only } from 'styled-breakpoints';

import SEO from "../components/seo"

const Container = styled.div`
  background: var(--bg-orange);
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  text-align: center;
  color: var(--text);
  ${only('tablet')} {
    font-size: 2.5em;
  }
  ${between('tablet', 'desktop')} {
    font-size: 3.5em;
  }
  ${up('lgDesktop')} {
    font-size: 3em;
  }
`

const Msg = styled.p`
  text-align: center;
  font-size: 1.5em;
  color: var(--text);
  margin: 0 auto;
  ${only('tablet')} {
    width: 55%;
    text-align: center;
  }
  ${down('tablet')} {
    width: 70%;
  }
`

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <Title>¡404: NOT FOUND!</Title>
    <Msg>Acabas de llegar a una ruta que no existe :(, <Link to='/'>regresar al home</Link></Msg>
  </Container>
)

export default NotFoundPage
