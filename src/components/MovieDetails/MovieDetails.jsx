import css from "./MovieDetails.module.css";
import { getPosterURL } from "../tmdbAPI";
import { Link } from "react-router-dom";

export default function MovieDetails({ movieDetails }) {
  function printGenres(movieGenres) {
    const genres = [];
    movieGenres.map((item) => genres.push(item.name));
    return genres.join(" ");
  }

  return (
    <>
      <img
        src={getPosterURL(movieDetails.poster_path)}
        alt={movieDetails.titel}
      />
      <h1>
        {movieDetails.title} ({movieDetails.release_date.slice(0, 4)})
      </h1>
      <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{movieDetails.overview}</p>
      <h3>Genres</h3>
      <p>{printGenres(movieDetails.genres)}</p>
      <nav>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
