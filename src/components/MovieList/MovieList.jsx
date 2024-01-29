import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ movieList }) {
  return (
    <ul className={css.list}>
      {movieList.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
