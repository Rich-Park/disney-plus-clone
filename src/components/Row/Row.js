// router imports
import { Link } from "react-router-dom";

// Style Imports
import "./Row.scss";

const Row = ({ movieTitle, movieList, rowDetails }) => {
  // update row details based on movie type
  if (movieTitle === "recommend") {
    rowDetails.header = "Recommended for You";
  } else if (movieTitle === "new") {
    rowDetails.header = "New to Disney+";
  } else if (movieTitle === "original") {
    rowDetails.header = "Originals";
  } else if (movieTitle === "trending") {
    rowDetails.header = "Trending";
  }

  return (
    <div className="row">
      <h4>{rowDetails.header}</h4>
      <div className="row__content">
        {movieList.map((movie, key) => (
          <div className="row__wrap" key={key}>
            {movie.id}
            <Link to={"/detail/" + movie.id}>
              <img src={movie.cardImg} alt={movie.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
