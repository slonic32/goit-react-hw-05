import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";
import NotFound from "../pages/NotFound";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <HomePage toggleLoading={setLoading} toggleError={setError} />
              }
            />
            <Route
              path="/movies"
              element={
                <MoviesPage toggleLoading={setLoading} toggleError={setError} />
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <MovieDetailsPage
                  toggleLoading={setLoading}
                  toggleError={setError}
                />
              }
            >
              <Route
                path="cast"
                element={
                  <MovieCast
                    toggleLoading={setLoading}
                    toggleError={setError}
                  />
                }
              />
              <Route
                path="reviews"
                element={
                  <MovieReviews
                    toggleLoading={setLoading}
                    toggleError={setError}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {loading && <Loader />}
      {error && <Error />}
    </>
  );
}
