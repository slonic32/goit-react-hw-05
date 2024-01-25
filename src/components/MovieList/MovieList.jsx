import css from "./MovieList.module.css";
import { Link } from "react-router-dom";

export default function MovieList({ tranding }) {
  return (
    <ul className={css.list}>
      {tranding.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
