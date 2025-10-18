import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="flex justify-between p-4 shadow-md">
      <h1 className="font-bold text-xl">Movie Explorer</h1>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/watchlist" className="hover:underline">Watchlist</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
