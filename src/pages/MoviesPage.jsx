import SearchMovie from "../components/SearchMovie/SearchMovie";
import MovieList from "../components/MovieList/MovieList";
import { useState } from "react";
import { getMovies } from "../components/tmdbAPI";

export default function MoviesPage({ toggleLoading, toggleError }) {
  const [searchResult, setSearchResult] = useState([]);

  async function searchMovies(filter) {
    toggleError(false);
    toggleLoading(true);
    try {
      const movies = await getMovies(filter);
      setSearchResult(movies);
    } catch {
      toggleError(true);
    } finally {
      toggleLoading(false);
    }
  }

  return (
    <>
      <SearchMovie handleSubmit={searchMovies} />
      <MovieList movieList={searchResult} />
    </>
  );
}
