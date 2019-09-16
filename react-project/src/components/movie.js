// Dependencies
import React from 'react';

const Movie = ({name, price}) => {
  console.log('Enter Movie Component!');

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
    </>
  );
}


export default Movie;
