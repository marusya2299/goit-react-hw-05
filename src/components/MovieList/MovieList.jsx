import { Link } from "react-router-dom";

export default function MovieList({movies}){
    return(
        <ul>
            {movies.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
                    <h3>{movie.title}</h3>
                </Link></li>
            ))}
      </ul>
    )
}