import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_KEY = " http://www.omdbapi.com/apikey.aspx?VERIFYKEY=ce0857ff-b52c-4959-9432-652fc194e96c"; 

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Link to="/">← Back to Search</Link>
      <h1>{movie.Title} ({movie.Year})</h1>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"} alt={movie.Title} width="200" />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
