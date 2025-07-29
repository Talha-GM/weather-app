import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const API_KEY = "084cd8825c01a4581cecc770a0f7270e";
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState(46.8045);
  const [lon, setLon] = useState(8.2325);
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' for Celsius, 'imperial' for Fahrenheit
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const fetchWeather = async () => {
    try {
      let url = '';
      if (city) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
      } else if (lat && lon) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
      } else {
        throw new Error('Please enter a city name or both latitude and longitude.');
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('City Not Found!');
      }
      const data = await response.json();
      console.log(data)
      setWeather(data);
      setError(null);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <WeatherContext.Provider value={{ weather, lat, lon, city, unit, error, setLat, setLon, setCity, setUnit, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}; 