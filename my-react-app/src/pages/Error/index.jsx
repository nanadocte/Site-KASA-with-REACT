import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContainError = styled.div`
  color: #ff6060;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 139px;
`

const TitreStyled = styled.h1`
  font-size: 288px;
  margin: 0;
`
const ParaStyled = styled.p`
  font-size: 36px;
  margin: 0;
`
const LinkStyled = styled(Link)`
  font-size: 18px;
  text-decoration: underline;
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
