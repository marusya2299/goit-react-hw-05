import {fetchMovieReviews} from '../../api.js';

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import css from '../../components/MovieReviews/MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }};
      getMovieReviews();
    }, [movieId]);
    
    if (loading) return <Loader />;
    if (error) return <Error />;

    return (
      <ul className={css.list}>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li className={css.listElement} key={review.id}>
            <p className={css.header}>{review.author}</p>
            <p className={css.text}>{review.content}</p>
          </li>
        ))
      ) : (
        <p className={css.message}>We don't have any reviews for this movie.</p>
      )}
    </ul>
    )
  }
  