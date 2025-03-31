import { Link } from "react-router-dom";
import css from '../../components/MovieList/MovieList.module.css';

export default function MovieList({movies}){
    return(
        <ul className={css.list}>
            {movies.map(movie => (
            <li className={css.listElement} key={movie.id}>
                <Link className={css.listLink} to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
                    <p className={css.listName}>{movie.title}</p>
                </Link>
            </li>
            ))}
      </ul>
    )
}