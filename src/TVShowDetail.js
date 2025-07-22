// src/TVShowDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './TVShowDetail.css';

function TVShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(res => setShow(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div className="tvshow-detail-container">
      <h2 className="tvshow-detail-title">{show.name}</h2>
      {show.image && (
        <img
          src={show.image.original}
          alt={show.name}
          className="tvshow-detail-image"
        />
      )}
      <div className="tvshow-detail-summary" dangerouslySetInnerHTML={{ __html: show.summary }} />
      <div className="tvshow-detail-info">
        <p><strong>Language:</strong> {show.language}</p>
        <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
        <p><strong>Rating:</strong> {show.rating?.average || 'N/A'}</p>
      </div>
    </div>
  );
}

export default TVShowDetail;
