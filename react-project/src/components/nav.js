// Dependencies
import React, { useContext } from 'react';

// Context
import { MovieContext } from '../context/movieContext';

// Styles
const divStyle = {
  backgroundColor: 'purple',
  color: 'white',
  height: '100px',
  width: '100%',
  textAlign: 'center'
};

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={divStyle}>
      <h3>Cristina Rojas - React Context API</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}

export default Nav;
