import {fetchMovieCredits} from '../../api.js';

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import css from '../../components/MovieCast/MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();

  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setActors(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }};
      getMovieCredits();
    }, [movieId]);
    
    if (loading) return <Loader />;
    if (error) return <Error />;

    return(
      <ul className={css.list}>
        {actors?.map(actor =>
          <li className={css.listElement} key={actor.id}>
            <div className={css.imageBox}>
              {actor.profile_path && (
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="100"
                />
              )}
            </div>

            <div className={css.textBox}>
              <p className={css.text}>Name: {actor.name}</p>
              <p className={css.text}>Character: {actor.character}</p>
            </div>
          </li>
        )}
      </ul>
    )
}
  