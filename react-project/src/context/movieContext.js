// Dependencies
import React, { useState, createContext } from 'react';

// Exporting MovieContext
export const MovieContext = createContext();

// Exporting MovieProvider
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Diario de una pasion',
      price: '$10',
      id: 1
    },
    {
      name: 'Minions',
      price: '$20',
      id: 2
    },
    {
      name: 'Spiderman',
      price: '$30',
      id: 3
    }
  ]);

  // This will render all the child components
  // that will be wrapper between this.
  return (
    <MovieContext.Provider
      value={[movies, setMovies]}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
