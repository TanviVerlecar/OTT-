import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ movies, shows }) {
  return (
    <div className="home-container">
      <h2 className="section-title"> Featured Movies</h2>
      <div className="media-grid">
        {movies.slice(0, 6).map(movie => (
          <div key={movie.id} className="media-card">
            <Link to={`/movies/${movie.id}`} className="media-link">
              <div className="media-image-container">
                <img src={movie.image} alt={movie.title} className="media-image" />
              </div>
              <div className="media-title">{movie.title}</div>
            </Link>
          </div>
        ))}
      </div>

      <h2 className="section-title"> Featured TV Shows</h2>
      <div className="media-grid">
        {shows.slice(0, 6).map(show => (
          <div key={show.id} className="media-card">
            <Link to={`/tvshows/${show.id}`} className="media-link">
              <div className="media-image-container">
                <img src={show.image?.medium} alt={show.name} className="media-image" />
              </div>
              <div className="media-title">{show.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
