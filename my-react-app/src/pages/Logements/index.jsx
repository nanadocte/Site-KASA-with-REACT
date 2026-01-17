import { useParams, Navigate } from 'react-router-dom'
import annonces from '../../datas/annonces.json'
import Collapse from '../../components/Collapse'
import arrowclose from '../../assets/arrowclose.png'
import Slideshow from '../../components/Slideshow'
import Rating from '../../components/Rating'

function Logement() {
  const { id } = useParams()
  const annonceId = annonces.find((annonce) => annonce.id === id)
  if (!annonceId) {
    return <Navigate to="/error" replace />
  }
  const nbPicture = annonceId.pictures.length - 1
  const nbStar = [...Array(Number(annonceId.rating))]
  const nbStarLeft = [...Array(Number(5 - annonceId.rating))]

  return (
    <div className="logement">
      <Slideshow nbPicture={nbPicture} annonceId={annonceId} />
      <div className="logement__info">
        <div className="logement__text">
          <h2 className="logement__title">{annonceId.title}</h2>
          <p className="logement__location">{annonceId.location}</p>
          <ul className="logement__tags">
            {' '}
            {annonceId.tags.map((tag, index) => (
              <li className="logement__tag" key={`${id} ${index}`}>
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
          <Rating
            rating="logement__rating"
            nbStar={nbStar}
            nbStarLeft={nbStarLeft}
          />
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
