import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../redux/watchlistSlice";

const MovieCard = React.memo(({ movie }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector(state => state.watchlist);
  const isInWatchlist = watchlist.some(m => m.imdbID === movie.imdbID);

  const handleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeMovie(movie.imdbID));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return (
    <div className="border p-2 rounded shadow">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
      <h3 className="font-bold">{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={handleWatchlist} className="mt-2 px-2 py-1 border rounded w-full">
        {isInWatchlist ? "Remove" : "Add to Watchlist"}
      </button>
    </div>
  );
});

export default MovieCard;
