import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

function Nav() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}
export default Nav
