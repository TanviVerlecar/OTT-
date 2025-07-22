import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Movies from './Movies';
import MovieDetail from './MovieDetail';
import TVShows from './TVShows';
import TVShowDetail from './TVShowDetail';

function App() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get('https://ghibliapi.vercel.app/films');
      setMovies(res.data);
    };

    const fetchShows = async () => {
      const res = await axios.get('https://api.tvmaze.com/shows');
      setShows(res.data);
    };

    fetchMovies();
    fetchShows();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home movies={movies} shows={shows} />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/tvshows" element={<TVShows shows={shows} />} />
        <Route path="/tvshows/:id" element={<TVShowDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
