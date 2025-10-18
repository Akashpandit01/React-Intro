import { useSelector } from "react-redux";
import MovieGrid from "../components/MovieGrid";

export default function Watchlist() {
  const watchlist = useSelector(state => state.watchlist);
  return (
    <div className="p-4">
      {watchlist.length === 0 ? <p>No movies in watchlist</p> : <MovieGrid movies={watchlist} />}
    </div>
  );
}
