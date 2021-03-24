import Rating from "./Rating";

const MoviesBox = (props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="gridItem">
          <h2>{props.title}</h2>
          <p>{props.year}</p>
          <p>{props.director}</p>
          <p>{props.duration}</p>
          <p key="genre">
            {props.genre.map((genre) => (
              <>
                {genre}
                <br />
              </>
            ))}
          </p>
          <Rating rating={props.rate} />
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
