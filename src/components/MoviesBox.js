import Rating from "./Rating";

const MoviesBox = (props) => {
  const { title, year, director, duration, genre, rate } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="gridItem">
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{director}</p>
          <p>{duration}</p>
          <div>
            {genre.map((genre, index) => (
              <div key={index}>
                {genre}
                <br />
              </div>
            ))}
          </div>
          <Rating rating={rate} />
          {/* <div className="addToList">
            <label htmlFor="add">
              Add to My List
              <input type="checkbox" name="add" id="add" />
              <span className="checkmark"></span>
            </label>
          </div> */}
        </div>
        <div className="flip-card-back">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviesBox;
