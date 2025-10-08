import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_OMDB_API_KEY http://www.omdbapi.com/apikey.aspx?VERIFYKEY=ce0857ff-b52c-4959-9432-652fc194e96c"; 

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Movie Search App 🎬</h1>
      <input
        type="text"
        placeholder="Enter movie title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", borderRadius: "5px", border: "1px solid #ccc" }}
      />
      <button
        onClick={searchMovies}
        style={{ marginLeft: "10px", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.imdbID} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} width="150" />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
