import React from "react";
import { useNavigate } from "react-router-dom";


const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = (movie) => {
  let navigate = useNavigate();
  const {Poster, Title, Year, imdbID} = movie

  return (
    <div
      className="movie"
      onClick={
        () =>
        navigate("/details", { state: { movie }})
      }
    >
      <img src={Poster.length > 10 ? Poster : defaultImage} alt="" />
      <div  className="d-flex align-items-baseline justify-content-between p-1 text-white">
        <h5>{Title}</h5>
        <span
            className={`tag ${
              Year >= 2010 ? "green" : Year >= 2000 ? "orange" : "red"
            }`}
          >
            {Year}
          </span>
      </div>
      <div className="movie-over">
        <h2>imdbID</h2>
        <p>{imdbID}</p>
      </div>
    </div>
  );
};

export default MovieCard;
