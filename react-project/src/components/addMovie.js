// Dependencies
import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/movieContext';

const AddMovie = () => {
  // Local state
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Using the context.
  const [movies, setMovies] = useContext(MovieContext);

  // to handle save name data
  const updateName = e => {
    setName(e.target.value);
  }

  // to handle save price data
  const updatePrice = e => {
    setPrice(e.target.value);
  }

  // to handle submit
  const handleAddMovie = e => {
    e.preventDefault();

    // Calling the setMovies that is on my movieContext
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  }

  return (
    <form onSubmit={handleAddMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
      />

      <button>Submit</button>
    </form>
  );
}

export default AddMovie;
