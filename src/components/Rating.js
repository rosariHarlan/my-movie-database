const Rating = (props) => {
  const stars = props.rating;
  // const hasHalfStar = props.rating % 1 !== 0;
  const starsRate = [];
  for (let i = 0; i < 10; i++) {
    let starImg = "img/popcorn_color.svg";
    if (stars - 1 < i) {
      starImg = "img/popcorn_empty.svg";
    }

    starsRate.push(<img key={i} className="stars" src={starImg} alt="stars" />);
  }
  return <span>{starsRate}</span>;
};

export default Rating;

// if (i == stars && hasHalfStar) {
//   starImg = "half_star";
// } else if (i > stars - 1) {
//   starImg = "full star"
// }
