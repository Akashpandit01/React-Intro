import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme, theme } = useTheme();
  return (
    <button onClick={toggleTheme} className="px-2 py-1 border rounded">
      {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
