import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hook/useFetch";
import spinner from "../helpers/spinner.gif";
import nodata from "../helpers/notdata.png";
import Paginate from "../components/pagination";





const API_KEY = "7e87f45e";

const Main = () => {
  const [title, setTitle] = useState("Pokemon");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [search_button, setSrcBtn] = useState(true);

  const FEATURED_API = `https://www.omdbapi.com/?apikey=${API_KEY}&y=${year}&type=${type}&page=${page}&s=${title}`;

  const { movies, count, loading, error } = useFetch(
    FEATURED_API,
    search_button,
    page,
    setPage
  );
  const pageCount = Math.ceil(count / 10);
  console.log(pageCount);
  console.log(count);
  console.log(error);

  // const location = useLocation();
  // const newpage = location.state.currentPage;
  // console.log(newpage);

  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(count / 10); i++) {
  //   pageNumbers.push(i);
  // }
  // console.log(pageNumbers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search_button === true) {
      setSrcBtn(false);
      setPage(1)
    } else {
      setSrcBtn(true);
      setPage(1)
    }

    // if (title !== "pokemon") {
    //   axios
    //     .get(
    //       `https://www.omdbapi.com/?apikey=${API_KEY}&y=${year}&type=${type}&page=${page}&s=` +
    //         title
    //     )
    //     .then((res) => setMovies(res.data.Search));
    // } else if (title === "pokemon") {
    //   axios
    //     .get(
    //       `https://www.omdbapi.com/?apikey=${API_KEY}&y=${year}&type=${type}&page=${page}&s=` +
    //         title
    //     )
    //     .then((res) => setMovies(res.data.Search));
    // } else {
    //   toastWarnNotify("Please enter a text");
    //   alert("Please enter a text");
    // }
  };

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
          }}
        >
          <img src={spinner} alt="ssss" />
        </div>
      ) : (
        <>
          <form className="search" onSubmit={handleSubmit}>
            <div className="inputMain">
              <div>
                <input
                style={{textIndent:"0.6rem"}}
                  type="search"
                  className="search-input"
                  placeholder="Search a movie..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  style={{textIndent:"0.6rem"}}
                  type="number"
                  className="search-input"
                  placeholder="Search movie years"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div>
                <select
                  style={{textIndent:"0.6rem"}}
                  name=""
                  id=""
                  className="search-input"
                  placeholder="Search a movie type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="movie">Movie</option>
                  <option value="series">Series</option>
                  <option value="episode">Episode</option>
                </select>
              </div>
            </div>
            <div className="btnMain">
              <button type="submit" className="button-83">Search</button>
            </div>
          </form>
          <div className="d-flex justify-content-center flex-wrap " style={{backgroundColor:"#ffd9c0"}}>
            {(movies.length !== 0 ) ? (movies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))) : (<img className="noDataImg" src={nodata} alt="nodata"/>) }
            
          </div>
          <div className="paginateMain">
            {<Paginate pageCount={pageCount} page={page} setPage={setPage} />}
          </div>
         
        </>
      )}
    </div>
  );
};

export default Main;
