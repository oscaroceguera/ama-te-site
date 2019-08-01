import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// medium: 270px,
// large: 470px,

const WidthSize = {
  medium: '270px',
  large: '470px'
}

const ButtonStyled = styled.button`
  background-color: #00BFA5;
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 500;
  height: 60px;
  transition: .3s;
  width: ${props => WidthSize[props.width]};

  &:hover {
    opacity: 0.7;
  }
`

const Button = ({ msg, width}) => {
  return <ButtonStyled width={width}>{msg}</ButtonStyled>
}

Button.defaultProps = {
  width: 'medium'
}

Button.propTypes = {
  msg: PropTypes.string.isRequired,
  width: PropTypes.string
}

export default Button