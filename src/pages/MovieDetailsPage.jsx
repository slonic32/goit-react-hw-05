import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../components/tmdbAPI";
import MovieDetails from "../components/MovieDetails/MovieDetails";

export default function MovieDetailsPage({ toggleLoading, toggleError }) {
  const [movieDetails, setMovieDetails] = useState(undefined);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMoviesDetails() {
      toggleError(false);
      toggleLoading(true);
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch {
        toggleError(true);
      } finally {
        toggleLoading(false);
      }
    }
    fetchMoviesDetails();
  }, [toggleLoading, toggleError, movieId]);

  return (
    <>
      {movieDetails && <MovieDetails movieDetails={movieDetails} />}

      <Outlet />
    </>
  );
}
