import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logomobile from '../../assets/logomobile.png'
import styled from 'styled-components'

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 5% 10%;
  @media (max-width: 768px) {
    gap: 15px;
  }
`

const LinkStyled = styled(Link)`
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const ContainLink = styled.div`
  display: flex;
  gap: 57px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 26px;
  }
`

function Header() {
  return (
    <NavStyled>
      <img className="logo" src={logo} alt="logo"></img>
      <img className="logo--mobile" src={logomobile} alt="logo"></img>

      <ContainLink className="header__liens">
        <LinkStyled className="header__title" to="/">
          Accueil
        </LinkStyled>
        <LinkStyled className="header__title" to="/propos">
          A propos
        </LinkStyled>
      </ContainLink>
    </NavStyled>
  )
}

export default Header
