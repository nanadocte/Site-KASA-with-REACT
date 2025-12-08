import Banniere from '../../components/Banniere'
import paysage1 from '../../assets/paysage1.png'
import styled from 'styled-components'

const WrapStyled = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  position: relative;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    z-index: 1;
    position: absolute;
    bottom: 28px;
    left: 230px;
    font-size: 48px;
    font-weight: bold;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

function Home() {
  return (
    <WrapStyled>
      <Banniere image={paysage1} />

      <p>Chez vous partout et ailleurs </p>
    </WrapStyled>
  )
}

export default Home
