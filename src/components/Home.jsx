import React, { useContext, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const Home = () => {
    const { weather, unit, setUnit, fetchWeather } = useContext(WeatherContext);

    useEffect(() => {
        fetchWeather();
    }, [unit]);

    if (!weather) {
        return "Loading.."
    }
    const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;
    return (
        <div className='flex w-auto h-full flex-col justify-center space-y-1.5 items-center'>
            <div className='justify-center mt-4'>
                <h1 className='font-bold text-2xl'>
                    Current Weather of {weather.name}
                </h1>
            </div>
            <div className='text-xl mt-4'>
                {weather.weather[0].main}
            </div>
            <div className=''>
                <img src={iconUrl} style={{ borderRadius: "12px" }} className=' bg-blue-200  h-[300px] w-[500px]' />
            </div>
            <div className='flex justify-center items-center gap-4'>
                <p>Temperature: {weather.main.temp}{unit === 'metric' ? '°C' : '°F'}</p>
                <button className={`w-[106px] h-[34px] flex items-center rounded-full px-1 transition duration-300 ${unit === 'metric' ? 'bg-blue-200' : 'bg-red-200'}`} onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>{unit === 'metric' ? 'change to °F' : 'change to °C'}</button>
            </div>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} km/h</p>
        </div>
    )
}

export default Home