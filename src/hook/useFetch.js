import { useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

function useFetch(FEATURED_API, search_button, page) {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [count, setCount] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(FEATURED_API)
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong!!!");
          toastErrorNotify("Movie that you selected is not found");
          setLoading(true);
          setMovies([]);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.Search);
        if (data.Search !== undefined) {
          setMovies(data.Search);
          setCount(data.totalResults);
          setLoading(false);
          setError("");
          toastSuccessNotify("The selections you want are listed. Enjoy watching")
        } else if (data.Search === undefined) {
          // setError("error");
          // console.log(error);
          setMovies([]);
          toastErrorNotify("No results were found for the option you were looking for.");
          setTimeout(() => {
            setLoading(false);
          }, 1100);
          setCount(0)

        }
      });
  }, [search_button, page]);

  return { movies, loading, error, count, setMovies };
}

export default useFetch;
