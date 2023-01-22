import { useEffect } from "react";

// firebase imports
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";

// redux imports
import { useDispatch, useSelector } from "react-redux";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../../features/user/userSlice";

// router imports
import { useNavigate } from "react-router-dom";

// Style Imports
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.name);
  const userPhoto = useSelector((state) => state.user.photo);

  // dispatch user login details
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  // use google popup authentication and dispatch user login details
  const handleAuth = async () => {
    // sign in functionality
    if (!userName) {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("Sign In Result: ", result);
        setUser(result.user);
      } catch (err) {
        console.log("Sign In Error", err);
      }
      // sign out functionality
    } else if (userName) {
      try {
        const result = await signOut(auth);
        console.log("Sign Out Result: ", result);
        dispatch(setSignOutState());
        navigate("/");
      } catch (err) {
        console.log("Sign Out Error: ", err);
      }
    }
  };

  // if the user is logged in, redirect to home page
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  return (
    <div className="nav">
      <a className="nav__logo">
        <img src="/images/logo.svg" alt="Disney+" />
      </a>
      {!userName ? (
        <div className="nav__login" onClick={handleAuth}>
          Login
        </div>
      ) : (
        <>
          <div className="nav__menu">
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="original" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="movies" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="signout">
            <img className="user-photo" src={userPhoto} alt="Log Out" />
            <div className="dropdown">
              <span onClick={handleAuth}>Sign out</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
