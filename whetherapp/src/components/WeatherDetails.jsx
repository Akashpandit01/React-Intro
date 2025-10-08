import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function WeatherDetails() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "9abfc7464c88dee50861d6c8ccac24f0";


  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=${API_KEY}`)

        const data = await response.json();

        if (data.cod === 200) {
          setWeather(data);
          setError(null);
        } else {
          setError("City not found!");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Weather in {weather.name}</h1>
      <h2>{weather.weather[0].main}</h2>
      <p>🌡️ Temperature: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>

      {/* 🗺️ Bonus: Google Map Embed */}
      <iframe
        title="map"
        width="400"
        height="300"
        style={{ border: 0, marginTop: "20px" }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${city}`}
      ></iframe>
    </div>
  );
}

export default WeatherDetails;
