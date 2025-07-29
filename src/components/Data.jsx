import React from 'react'
import { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

const Data = () => {
  const { weather } = useContext(WeatherContext)

  if (!weather) {
    return <p>Loading data...</p>
  }

  return (
    <>
      <div className='flex flex-col w-full  p-4'>
        <div className='flex items-center justify-center'>
        <h1 className='text-2xl font-bold mb-4'>Weather Data of {weather.name}</h1>
        </div>
        <div className='w-[50%]'>
          {/* <table className='min-w-full bg-white border border-gray-200 rounded-lg'> */}
            <tbody classname='w-full'>
              <tr><td className='px-4 py-2 my-2 border-b'>Temperature</td><td className='px-4 py-2 border-b'>{weather.main.temp}°C</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Feels Like</td><td className='px-4 py-2 border-b'>{weather.main.feels_like}°C</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Humidity</td><td className='px-4 py-2 border-b'>{weather.main.humidity}%</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Wind Speed</td><td className='px-4 py-2 border-b'>{weather.wind.speed} km/h</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Pressure</td><td className='px-4 py-2 border-b'>{weather.main.pressure} hPa</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Visibility</td><td className='px-4 py-2 border-b'>{weather.visibility / 1000} km</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>UV Index</td><td className='px-4 py-2 border-b'>N/A</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Sunrise</td><td className='px-4 py-2 my-2 border-b'>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</td></tr>
              <tr><td className='px-4 py-2 my-2 border-b'>Sunset</td><td className='px-4 py-2 my-2 border-b'>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</td></tr>
            </tbody>
          {/* </table> */}
        </div>
      </div>
    </>
  )
}

export default Data