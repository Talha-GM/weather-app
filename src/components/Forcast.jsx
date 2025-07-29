import React, { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Forcast = () => {
  const { lat, lon, unit, error, weather } = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const API_KEY = "084cd8825c01a4581cecc770a0f7270e";

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch forecast data');
        }
        const data = await response.json();
        const dailyData = data.list.filter((entry, index) => index % 8 === 0);
        setForecast(dailyData);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      }
    };
    fetchForecast();
  }, [lat, lon, unit]);

  return (
    <>
    <div className='forecast-container p-4'>
      <h1 className='text-2xl text-center m-4 font-bold'>{weather.name} Forecast</h1>
      {(error || fetchError) && <p className='text-red-500'>{error || fetchError}</p>}
      {forecast.length > 0 ? (
        <table className='min-w-full bg-white border rounded-[20px] border-gray-200'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='py-2 px-4 border-b'>Date</th>
              <th className='py-2 px-4 border-b'>Temperature</th>
              <th className='py-2 px-4 border-b'>Description</th>
              <th className='py-2 px-4 border-b'>Icon</th>
            </tr>
          </thead>
          <tbody>
            {forecast.map((day, index) => (
              <tr key={index} className='text-center'>
                <td className='py-2 px-4 border-b'>{new Date(day.dt * 1000).toLocaleDateString()}</td>
                <td className='py-2 px-4 border-b'>{day.main.temp}°{unit === 'metric' ? 'C' : 'F'}</td>
                <td className='py-2 px-4 border-b'>{day.weather[0].description}</td>
                <td className='py-2 px-4 border-b'>
                  <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='flex w-full h-screen justify-center items-center'>
        <p className='text-center '>Loading forecast...</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Forcast;