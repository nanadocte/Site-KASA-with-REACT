import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 100%;
  height: 223px;
  object-fit: cover;
`

function Banniere({ image }) {
  return <ImgStyled src={image} alt="photo paysage bannière"></ImgStyled>
}

export default Banniere
