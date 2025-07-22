// src/Movies.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

function Movies({ movies }) {
  return (
    <div className="movies-container">
      <h2 className="section-title"> All Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movies/${movie.id}`} className="movie-link">
              <div className="movie-image-container">
                <img src={movie.image} alt={movie.title} className="movie-image" />
              </div>
              <div className="movie-title">{movie.title}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
