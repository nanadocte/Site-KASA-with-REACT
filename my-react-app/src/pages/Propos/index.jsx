import Banniere from '../../components/Banniere'
import paysage2 from '../../assets/paysage2.png'
import styled from 'styled-components'

const DivStyled = styled.div`
  position: relative;
  height: 223px;
  border-radius: 25px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

function Propos() {
  return (
    <DivStyled>
      <Banniere image={paysage2} />
      <h1>Hellloooo</h1>
    </DivStyled>
  )
}
export default Propos
