import { Link, useLocation } from "react-router-dom";
import css from '../../components/MovieList/MovieList.module.css';

export default function MovieList({movies}){
    const location = useLocation();

    return(
        <ul className={css.list}>
            {movies?.map(movie => (
            <li className={css.listElement} key={movie.id}>
                <Link className={css.listLink} to={`/movies/${movie.id}`} state={{ from: location }}>
                    <p className={css.listName}>{movie.title}</p>
                </Link>
            </li>
            ))}
      </ul>
    )
}