import { useParams } from 'react-router-dom'
import annonces from '../../datas/annonces.json'
import Collapse from '../../components/Collapse'
import arrowclose from '../../assets/arrowclose.png'
import { useState } from 'react'
import arrownext from '../../assets/arrownext.png'
import arrowprev from '../../assets/arrowprev.png'

function Logement() {
  const { id } = useParams()
  const [index, setIndex] = useState(0)
  const annonceId = annonces.find((annonce) => annonce.id === id)
  const nbPicture = annonceId.pictures.length - 1
  const nbStar = [...Array(Number(annonceId.rating))]
  const nbStarLeft = [...Array(Number(5 - annonceId.rating))]
  const nextImage = () => {
    index < nbPicture ? setIndex(index + 1) : setIndex(0)
  }
  const prevImage = () => {
    index > 0 ? setIndex(index - 1) : setIndex(nbPicture)
  }
  return (
    <div className="logement">
      <div className="logement__gallery">
        <img
          className="logement__image"
          src={annonceId.pictures[index]}
          alt={`${annonceId.title} image ${index + 1}`}
        ></img>
        <div className="logement__navigation">
          <img src={arrowprev} alt="previous image" onClick={prevImage}></img>
          <img src={arrownext} alt="next image" onClick={nextImage}></img>
        </div>
      </div>
      <div className="logement__info">
        <div className="logement__text">
          <h2 className="logement__title">{annonceId.title}</h2>
          <p className="logement__location">{annonceId.location}</p>
          <ul className="logement__tags">
            {' '}
            {annonceId.tags.map((tag, index) => (
              <li className="logement__tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{annonceId.host.name}</p>
            <img
              className="logement__host-img"
              src={annonceId.host.picture}
            ></img>
          </div>
          <div className="logement__rating">
            {nbStar.map((value, index) => (
              <i
                key={index}
                className="fa fa-star"
                aria-hidden="true"
                alt="star rating"
              ></i>
            ))}
            {nbStarLeft.map((value, index) => (
              <i
                key={index}
                className="fa fa-star fa-star--grey"
                aria-hidden="true"
                alt="star rating"
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="logement__details">
        <Collapse
          valeur="Description"
          contenu={annonceId.description}
          arrow={arrowclose}
        />
        <Collapse
          valeur="Équipements"
          contenu={annonceId.equipments}
          arrow={arrowclose}
        />
      </div>
    </div>
  )
}

export default Logement
