import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
// import Demo from './Demo';
import { Loader } from 'lucide-react';
import SearchForm from './SearchForm';
import Card from './Card';
function Movies({ setTotalResults }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
 
  const [isLoading, setIsLoading] = useState(false);
 
  console.log(query);
  console.log(movies);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=b0eec689`)
      .then((res) => {
        console.log(res.data);
        setTotalResults(res.data.totalResults);
        setMovies(res.data.Search);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <div className="flex justify-center m-20">
        <div className="m-4">
          <SearchForm
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            setQuery={setQuery}
          />
        </div>
      </div>
 
      {isLoading ? (
        <p>Searching...</p>
      ) : (
        <div className="grid grid-cols-3 p-4 gap-5">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
 
export default Movies;
 
 