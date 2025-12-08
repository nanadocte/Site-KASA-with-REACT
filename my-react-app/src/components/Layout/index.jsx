import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const MainStyled = styled.main`
  flex-grow: 1;
  margin: 0 90px 0 90px;
`
function Nav() {
  return (
    <>
      <Header></Header>
      <MainStyled>
        <Outlet />
      </MainStyled>
      <Footer></Footer>
    </>
  )
}
export default Nav
