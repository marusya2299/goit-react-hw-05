import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from "../../api";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function MovieDetailsPage(){
    const location = useLocation();
    const backLink = location.state?.from || "/";

    const { movieId } = useParams();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getMovieDetails = async () => {
            try {
            const data = await fetchMovieDetails(movieId);
            setMovie(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }};
        getMovieDetails();
      }, []);
    
      if (loading) return <Loader />;
      if (error) return <Error />;

    return(
        <>
            <Link to={backLink}>← Назад</Link>
                <p>Title: {movie.title}</p>
                <p>Genres: {movie.genres.map(g => g.name).join(", ")}</p>
                <p>Overview: {movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
                <p>Runtime: {movie.runtime}</p>
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            
            <Link to='cast'>Cast</Link>
            <Link to='reviews'>Reviews</Link>

            <Outlet />
        </>
    )
}