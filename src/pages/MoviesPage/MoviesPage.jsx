import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

import css from '../../pages/MoviesPage/MoviesPage.module.css';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [inputValue, setInputValue] = useState(query); 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getMovies = async () => {
      setLoading(true);
      setError('');
      
      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [query]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === query) return;
    setSearchParams(inputValue ? { query: inputValue } : {});
  };

  return (
    <div className={css.box}>
      <h2 className={css.header}>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter movie name"
        />
        <button className={css.button} type="submit">Search</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}
