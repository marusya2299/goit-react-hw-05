import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../../api';

import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import css from '../../pages/HomePage/HomePage.module.css';

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
      }};

    getPopularMovies();
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className={css.box}>
      <h2 className={css.header}>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
}