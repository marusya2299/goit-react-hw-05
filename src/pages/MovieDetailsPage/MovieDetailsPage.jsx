import { useParams, Link, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from "../../api";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { TiArrowLeftThick } from "react-icons/ti";
import css from '../../pages/MovieDetailsPage/MovieDetailsPage.module.css';

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
        <div className={css.box}>
            <Link className={css.backButton} to={backLink}><TiArrowLeftThick />Go back</Link>

            <div className={css.imagePlusDescription}>
                <div className={css.imageBox}>
                    <img className={css.image} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                
                <div className={css.descriptionsBox}>
                    <p className={css.nameMovie}>{movie.title}</p>

                    <p className={css.descriptionTitle}>Genres</p>
                    <ul className={css.genresList}>
                        {movie.genres.map(genre => 
                        <li className={css.genreElement} key={genre.id}>{genre.name}</li>)}
                    </ul>

                    <p className={css.descriptionTitle}>Overview</p>
                    <p className={css.description}>{movie.overview}</p>

                    <p className={css.descriptionTitle}>Release date</p>
                    <p className={css.description}>{movie.release_date}</p>

                    <p className={css.descriptionTitle}>Runtime</p>
                    <p className={css.description}>Runtime: {movie.runtime}</p>
                </div>
            </div>

            <p className={css.descriptionTitle}>Additional</p>
            <div className={css.additionalBox}>
                <Link className={css.additional} to='cast'>Cast</Link>
                <Link className={css.additional} to='reviews'>Reviews</Link>
            </div>

            <Outlet />
        </div>
    )
}