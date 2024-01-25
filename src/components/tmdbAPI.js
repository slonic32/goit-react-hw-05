import axios from "axios";

const MOVIEKEY = "&api_key=a76360bdbcb3afa8307ed004edbb3d8c";

async function getTrandingMovies() {
  const trandingMovies = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US" + MOVIEKEY
  );
  return trandingMovies.data.results;
}

export { getTrandingMovies };
