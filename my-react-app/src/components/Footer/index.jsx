import logonoir from '../../assets/logonoir.svg'
import styled from 'styled-components'

const DivStyled = styled.div`
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 209px;
  gap: 15px;
`
const ImgStyled = styled.img`
  margin-top: 50px;
`
const PStyled = styled.p`
  font-size: 24px;
  color: #ffffffff;
`

function Footer() {
  return (
    <DivStyled>
      <ImgStyled src={logonoir} alt="logo"></ImgStyled>
      <PStyled>© 2020 Kasa. All rights reserved</PStyled>
    </DivStyled>
  )
}

export default Footer
