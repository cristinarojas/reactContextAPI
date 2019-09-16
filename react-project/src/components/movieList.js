// Dependencies
import React, { useContext} from 'react';

// components
import Movie from './movie';

// Context
import { MovieContext } from '../context/movieContext';

const MovieList = () => {
    console.log('Enter MovieList Component!');
    
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
