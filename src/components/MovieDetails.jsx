import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 
function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  console.log(movieId);
 
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieId}&apikey=b0eec689`)
      .then((data) => {
        console.log(data);
        setMovieDetails(data.data);
      });
  }, []);
 
  return <div>{movieDetails.Director}</div>;
}
 
export default MovieDetails;
 
 