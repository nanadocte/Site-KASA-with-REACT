import Banniere from '../../components/Banniere'
import paysage1 from '../../assets/paysage1.png'
import styled from 'styled-components'
import Card from '../../components/Card'

const WrapStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
  position: relative;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;

  p {
    z-index: 1;
    position: absolute;
    font-size: 48px;
    color: #ffffffff;
    margin: 25px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 1;
  }
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

function Home() {
  return (
    <div className="main">
      <WrapStyled>
        <Banniere image={paysage1} />
        <p>Chez vous partout et ailleurs </p>
      </WrapStyled>
      <div>
        <Card />
      </div>
    </div>
  )
}

export default Home
