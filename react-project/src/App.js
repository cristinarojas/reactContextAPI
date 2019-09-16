// Dependencies
import React from 'react';

// Styles
import './App.css';

// Provider
import { MovieProvider } from './context/movieContext';

// Components
import Nav from './components/nav';
import MovieList from './components/movieList';
import AddMovie from './components/addMovie';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
