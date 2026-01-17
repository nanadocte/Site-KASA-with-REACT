function Rating({ nbStar, nbStarLeft, rating }) {
  return (
    <div className={rating}>
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
  )
}

export default Rating
