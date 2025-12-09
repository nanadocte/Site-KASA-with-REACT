import annonces from '../../datas/annonces.json'

function Card() {
  return (
    <div>
      {annonces.map((annonce) => (
        <article key={annonce.id}>
          <img src={annonce.picture} alt="Photo super"></img>
          <h2>{annonce.title}</h2>
        </article>
      ))}
    </div>
  )
}

export default Card
