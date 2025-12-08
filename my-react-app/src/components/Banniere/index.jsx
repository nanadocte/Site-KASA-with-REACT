import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 100%;
  height: 223px;
  object-fit: cover;

  border-radius: 25px;
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
