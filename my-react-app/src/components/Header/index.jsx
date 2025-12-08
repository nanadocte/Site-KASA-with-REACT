import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 45px 90px 45px 90px;
`

const LinkStyled = styled(Link)`
  color: #000000;
  font-size: 24px;
`

const ContainLink = styled.div`
  display: flex;
  gap: 57px;
  align-items: center;
`

function Header() {
  return (
    <NavStyled>
      <img src={logo} alt="logo"></img>
      <ContainLink>
        <LinkStyled to="/">Accueil</LinkStyled>
        <LinkStyled to="/propos">A propos</LinkStyled>
      </ContainLink>
    </NavStyled>
  )
}

export default Header
