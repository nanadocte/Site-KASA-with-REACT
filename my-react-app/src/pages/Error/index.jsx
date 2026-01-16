import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainError = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 139px;
  @media (max-width: 768px) {
    font-size: 113px;
  }
`

const TitreStyled = styled.h1`
  font-size: 288px;
  margin: 100px 0 0 0;
  @media (max-width: 768px) {
    font-size: 96px;
  }
`
const ParaStyled = styled.p`
  font-size: 36px;
  margin: 0;
  text-align: center;
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const LinkStyled = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
  margin-bottom: 125px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

function Error() {
  return (
    <ContainError>
      <TitreStyled>404</TitreStyled>
      <ParaStyled>Oups! La page que vous demandez n'existe pas</ParaStyled>
      <LinkStyled to="/">Retournez sur la page d'accueil</LinkStyled>
    </ContainError>
  )
}

export default Error
