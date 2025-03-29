import { useState } from "react";
import { searchMovies } from "../../api";
import MovieList from "../../components/MovieList/MovieList";

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
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
      
    </div>
  );
};

export default MoviesPage;
