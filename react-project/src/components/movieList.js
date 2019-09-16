// Dependencies
import React, { useState, useContext} from 'react';

// components
import Movie from './movie';

// Context
import { MovieContext } from '../context/movieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <ul>
    {
      movies.map((movie, i) => (
        <li>
          <Movie
            name={movie.name}
            price={movie.price}
            key={movie.id}
          />
        </li>
      ))
    }
    </ul>
  );
}


export default MovieList;
