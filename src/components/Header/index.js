import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Logo from '../Images/logo'

const Container = styled.div`
  padding-top: .7em;
  font-family: 'Roboto';
  border: 1px solid;
`

const Inner = styled.div`
  margin: 0 auto;
  padding: 0 9.8125em;
  display: flex;
  justify-content: space-between;
`

const Links = styled.p`
  font-size: 1.2em;
  padding-top: .5em;
`

const Link = styled.a`
  color: var(--text);
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  padding: 0 2.5em;
  transition: .3s;
  &:hover {
    opacity: 0.7;
  }
`

const Header = ({ links }) => (
  <Container>
    <Inner>
      <Logo />
      <Links>
        {
          links.map((item, key) => (
            <Link
              href={item.link}
              key={key}
            >
              {item.name}
            </Link>
          ))
        }
      </Links>
    </Inner>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  links: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  links: []
}

export default Header
