// Router Imports
import { useSelector } from "react-redux";

// Component Imports
import Row from "../Row/Row";

const RowList = () => {
  const movies = useSelector((state) => state.movie.movies);

  // default row details
  let rowDetails = {
    header: "Watch These Movies",
    movies: [],
  };

  return (
    <div>
      {movies &&
        Object.keys(movies).map((movieType) => (
          <Row
            movieTitle={movieType}
            movieList={movies[movieType]}
            rowDetails={rowDetails}
            key={movieType}
          />
        ))}
    </div>
  );
};

export default RowList;
