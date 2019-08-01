import styled from 'styled-components'
import hoja from '../../images/hoja.png'
import bolsa from '../../images/bolsa.png'

export const Container = styled.div`
  height: 630px;
  background: var(--bg-orange);
  display: flex;
  background-image:
    url(${bolsa}),
    url(${hoja});
  background-repeat: no-repeat;
  background-size: 450px, 600px;
  background-position: 
    top 100px right 140px,
    bottom 140px right 0px;
`

export const InnertLeft = styled.div`
  display: flex;
  align-items: center;
  width: 140.21px;
`

export const MsgRotate = styled.div`
  font-family: 'Playfair Display';
  font-weight: 700;
  transform: rotate(-90deg);
`

export const InnerRight = styled.div`
  padding: 9rem 2.5rem;
  width: 100%;
`

export const Title = styled.h1`
  font-family: 'Playfair Display';
  font-weight: 700;
  font-size: 2.5rem;
  
  span {
    font-weight: 900;
  }
`

export const Msg = styled.p`
  font-family: 'Roboto';
  font-size: 1.2rem;
`