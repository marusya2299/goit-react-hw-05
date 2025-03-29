import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetchPopularMovies();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getPopularMovies();
  }, []);

  if (loading) return <p>Loading popular movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
}