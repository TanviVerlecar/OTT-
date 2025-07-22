// src/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`https://ghibliapi.vercel.app/films/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} width="200" />
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Producer:</strong> {movie.producer}</p>
      <p><strong>Release Year:</strong> {movie.release_date}</p>
      <p><strong>Score:</strong> {movie.rt_score}</p>
    </div>
  );
}

export default MovieDetail;
