import { useEffect, useState } from "react";

export const useFetch2 = (url) => {
  const [movie_details, setMovie_details] = useState();
  


  useEffect(() => {

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          
            setMovie_details([]);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        setMovie_details(data);
        
      });
  },);

  return { movie_details };
};


export default useFetch2;