// Router Imports
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movie/movieSlice";

// Component Imports
import Row from "../Row/Row";

const RowList = () => {
  const movies = useSelector(selectMovies);

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
