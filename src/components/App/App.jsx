import HomePage from '../../pages/HomePage/HomePage.jsx';
import MoviesPage from '../../pages/MoviesPage/MoviesPage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';
import MovieCast from '../MovieCast/MovieCast.jsx';
import MovieReviews from '../MovieReviews/MovieReviews.jsx';

import { Routes, Route } from "react-router-dom";

export default function App(){

  return(
    <>
      <Navigation />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />

        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="reviews" element={<MovieReviews />} />
          <Route path="cast" element={<MovieCast />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </>
  )

}