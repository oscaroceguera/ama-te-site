import React from 'react'
import {
  Container,
  InnerRight,
  InnertLeft,
  MsgRotate,
  Title,
  Msg
} from './styles'
import Button from '../Button'

const data = {
  msgRotate: '-100% Natural-',
  title: 'Aumenta la desintoxicación <br /> <span>natural de tu cuerpo.</span>',
  msg: 'Elimina las excusas y retoma tus buenos hábitos de<br /> alimentación, mejorando tu edad metabólica y luciendo mas<br /> joven y sano.'
}

const Main = () => (
  <Container>
    <InnertLeft>
      <MsgRotate>{data.msgRotate}</MsgRotate>
    </InnertLeft>
    <InnerRight>
      <Title dangerouslySetInnerHTML={{__html: data.title}} />
      <Msg dangerouslySetInnerHTML={{ __html: data.msg }} />
      <br />
      <Button msg='Quiero comprar' />
    </InnerRight>
  </Container>
)

export default Main