import React from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch2 from "../hook/useFetch2";
import loading_spin from "../helpers/loading_spin.gif";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";


const MovieDetail = () => {
  const location = useLocation();
  console.log(location);

  const moviee = location.state.movie;

  console.log(moviee);

  const id = moviee.imdbID;
  console.log(id);

  const API_KEY = "7e87f45e";
  const FEATURED_API = `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`;
  console.log(FEATURED_API);

  const { movie_details } = useFetch2(FEATURED_API);

  console.log(movie_details);

  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

  return (
    <div className="detailsPage">
      {movie_details ? (
        <div className="container py-5">
          <h1 className="text-center">{movie_details?.Title}</h1>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img 
                  src={
                    movie_details.Poster.length > 10
                      ? movie_details.Poster
                      : defaultImage
                  }
                  className="img-fluid rounded-start detailImg"
                  alt="..."
                />
              </div>
              <div className="col-md-8 d-flex flex-column ">
                <div className="card-body">
                  <h5 className="card-title">Overview</h5>
                  <p className="card-text">{movie_details?.Plot}</p>
                </div>
                <ul className="list-group ">
                  <li className="list-group-item">
                    {"Release Date : " + movie_details?.Released}
                  </li>
                  <li className="list-group-item">
                    {"Rate : " + movie_details?.imdbRating}
                  </li>
                  <li className="list-group-item">
                    {"Total Vote : " + movie_details?.imdbVotes}
                  </li>
                  <li className="list-group-item">
                    {"Total Runtime : " + movie_details?.Runtime}
                  </li>
                  <li className="list-group-item">
                    {"Movie Type : " + movie_details?.Type}
                  </li>
                  <li className="list-group-item">
                    {"Actors : " + movie_details?.Actors}
                  </li>
                  <li className="list-group-item">
                    {"Writer : " + movie_details?.Writer}
                  </li>
                  <li className="list-group-item">
                    {"Director : " + movie_details?.Director}
                  </li>
                  {/* <li className="list-group-item">
                    {"Language : " + movie_details?.Language}
                  </li> */}
                  <li className="list-group-item">
                    {"Country : " + movie_details?.Country}
                  </li>
                  {/* <li className="list-group-item">
                    {"BoxOffice : " + movie_details?.BoxOffice}
                  </li> */}

                  <li className="list-group-item">
                    <Link to={-1} className="card-link" style={{textDecoration:"none"}}>
                    <ArrowBackIosNewOutlined /><span >Back</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <img className="spin" src={loading_spin} alt="spin" />
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
