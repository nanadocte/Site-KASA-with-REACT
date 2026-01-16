import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`

function Banniere({ image, className }) {
  return (
    <ImgStyled
      className={className}
      src={image}
      alt="photo paysage bannière"
    ></ImgStyled>
  )
}

export default Banniere
