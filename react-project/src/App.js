// Dependencies
import React from 'react';

// Styles
import './App.css';

// Providers
import { MovieProvider } from './context/movieContext';
import { FoodProvider } from './context/foodContext';

// Components
import Nav from './components/nav';
import MovieList from './components/movieList';
import AddMovie from './components/addMovie';
import FoodFavorite from './components/foodFavorite';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />

        <FoodProvider>
          <FoodFavorite />
        </FoodProvider>
      </MovieProvider>
    </div>
  );
}

export default App;
