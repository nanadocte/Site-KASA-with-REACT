import annonces from '../../datas/annonces.json'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <div className="cards">
      {annonces.map((annonce) => (
        <Link to="/logement" key={annonce.id}>
          <article className="cards__item">
            <img
              className="cards__image"
              src={annonce.cover}
              alt={annonce.description}
            ></img>
            <h2 className="cards__titre">{annonce.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default Card
