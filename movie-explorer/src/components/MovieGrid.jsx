import React, { useMemo } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  const movieCards = useMemo(() => movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />), [movies]);
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-4">{movieCards}</div>;
}
