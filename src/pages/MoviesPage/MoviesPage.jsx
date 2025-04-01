import { useState } from "react";
import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

import css from '../../pages/MoviesPage/MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={css.box}>
      <h2 className={css.header}>Search Movies</h2>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter movie name"
      />
      <button className={css.button} onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
      
    </div>
  );
};

export default MoviesPage;
