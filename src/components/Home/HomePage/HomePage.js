import { useEffect } from "react";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../features/movie/movieSlice";
import { selectUserName } from "../../../features/user/userSlice";

// firebase imports
import db from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

// Component Imports
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../../Viewers/Viewers";
import RowList from "../../RowList/RowList";

// Style Imports
import "./HomePage.scss";

// Refactor to make reusable (4 rows) and viewers since all 5 have same styling besides video in viewers
const HomePage = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    // get documents from firebase and store based on type
    const getMovies = async () => {
      try {
        let allMovies = {
          recommend: [],
          new: [],
          original: [],
          trending: [],
        };

        // get documents
        const querySnapshot = await getDocs(collection(db, "movies"));
        const snapshotData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        // update allMovies to hold movie data from firebase
        for (let movie of snapshotData) {
          const movieType = movie.data.type;
          allMovies[movieType] = [
            ...allMovies[movieType],
            { id: movie.id, ...movie.data },
          ];
        }

        dispatch(setMovies(allMovies));
      } catch (err) {
        console.log("Error getting firebase documents: ", err);
      }
    };
    getMovies();
  }, [userName, dispatch]);

  return (
    <div className="home">
      <ImageSlider />
      <Viewers />
      <RowList />
    </div>
  );
};

export default HomePage;
