import { useState } from 'react'
import arrownext from '../../assets/arrownext.png'
import arrowprev from '../../assets/arrowprev.png'
import styled from 'styled-components'

const ArrowStyles = styled.img`
  cursor: pointer;
`

function Slideshow({ nbPicture, annonceId }) {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    index < nbPicture ? setIndex(index + 1) : setIndex(0)
  }
  const prevImage = () => {
    index > 0 ? setIndex(index - 1) : setIndex(nbPicture)
  }
  return (
    <div className="gallery">
      <img
        className="gallery__image"
        src={annonceId.pictures[index]}
        alt={
          annonceId.pictures.length > 1
            ? `${annonceId.title} image ${index + 1}`
            : `${annonceId.title}`
        }
      ></img>{' '}
      {annonceId.pictures.length > 1 && (
        <div className="gallery__navigation">
          <ArrowStyles
            src={arrowprev}
            alt="previous image"
            onClick={prevImage}
          ></ArrowStyles>
          <ArrowStyles
            src={arrownext}
            alt="next image"
            onClick={nextImage}
          ></ArrowStyles>
        </div>
      )}
    </div>
  )
}

export default Slideshow
