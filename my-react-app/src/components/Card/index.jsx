import annonces from '../../datas/annonces.json'

function Card() {
  return (
    <div className="cards">
      {annonces.map((annonce) => (
        <article className="cards__item" key={annonce.id}>
          <img
            className="cards__image"
            src={annonce.cover}
            alt={annonce.description}
          ></img>
          <h2 className="cards__titre">{annonce.title}</h2>
        </article>
      ))}
    </div>
  )
}

export default Card
