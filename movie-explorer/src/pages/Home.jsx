import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, fetchMovies, removeFromWatchlist } from "../redux/movieSlice";





const Home = () => {
  const dispatch = useDispatch();
  const { movies, watchlist, loading, error } = useSelector((state) => state.movies);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      dispatch(fetchMovies(searchTerm));
    }
  };

  const toggleWatchlist = (movie) => {
    if (watchlist.find((m) => m.imdbID === movie.imdbID)) {
      dispatch(removeFromWatchlistt(movie));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Movie Explorer</h1>

      <div>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search movies..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading movies...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
              alt={movie.Title}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <button onClick={() => toggleWatchlist(movie)}>
              {watchlist.find((m) => m.imdbID === movie.imdbID)
                ? "Remove from Watchlist"
                : "Add to Watchlist"}
            </button>
          </div>
        ))}
      </div>

      {watchlist.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h2>My Watchlist</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {watchlist.map((movie) => (
              <div key={movie.imdbID} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", textAlign: "center" }}>
                <img
                  src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
                  alt={movie.Title}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <button onClick={() => toggleWatchlist(movie)}>Remove</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
