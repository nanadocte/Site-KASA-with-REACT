import { useParams } from 'react-router-dom'
import annonces from '../../datas/annonces.json'
import Collapse from '../../components/Collapse'
import arrowclose from '../../assets/arrowclose.png'

function Logement() {
  const { id } = useParams()
  const annonceId = annonces.find((annonce) => annonce.id === id)
  return (
    <div>
      {annonceId.pictures.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${annonceId.title} image ${index + 1}`}
        ></img>
      ))}
      <div>
        <h2>{annonceId.title}</h2>
        <p>{annonceId.location}</p>
        <ul>
          {' '}
          {annonceId.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <h3>{annonceId.host.name}</h3>
          <img src={annonceId.host.picture}></img>
        </div>
        <div>{annonceId.rating}</div>
      </div>
      <div>
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
