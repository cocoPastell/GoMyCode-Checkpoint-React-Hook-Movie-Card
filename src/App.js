import { useEffect, useState } from "react";
import "./App.css";
import { MovieCard } from "./MovieCard";


function App() {
  const [movies, setMovies] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmU2OGZkZjBjZGJiYzMyZTA1NWZmM2RiYmYyMjdkOSIsInN1YiI6IjY0OTQ2NTc5Y2ZlNDhmMDBhY2ExYWJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2GXkSiY3g1e-GhLALArf0gxMrHPQ1QScXnFE5M5uTWc",
    },
  };
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      );
      const toto = await response.json();
      setMovies(toto.results);
      return toto;
    }
    fetchMovies();
  }, []);
  

  return (
    <div className="App">
      <div className="search-nav">
        <div>
          <h1>Movies</h1>
        </div>
        <div>
          <form>
            <input
              type="text"
              placeholder="Filter by title or rating"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />

            <button>search</button>
          </form>
        </div>
        <div className="movies">
          {movies
            .filter((item) => {
              const titleMatch = item.title
                .toLowerCase()
                .includes(filterValue.toLowerCase());
              const ratingMatch = item.vote_average
                .toString()
                .includes(filterValue);

              return titleMatch || ratingMatch;
            })
            .map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
