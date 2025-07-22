// src/TVShowDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div style={{ padding: '1rem' }}>
      <h2>{show.name}</h2>
      {show.image && <img src={show.image.original} alt={show.name} width="300" />}
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
      <p><strong>Language:</strong> {show.language}</p>
      <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
      <p><strong>Rating:</strong> {show.rating?.average}</p>
    </div>
  );
}

export default TVShowDetail;
