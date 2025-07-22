// src/TVShows.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TVShows.css';

function TVShows({ shows }) {
  return (
    <div className="tvshows-container">
      <h2 className="tvshows-title">All TV Shows</h2>
      <div className="tvshows-grid">
        {shows.map(show => (
          <Link key={show.id} to={`/tvshows/${show.id}`} className="tvshow-card">
            {show.image && <img src={show.image.medium} alt={show.name} className="tvshow-image" />}
            <p className="tvshow-title">{show.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TVShows;
