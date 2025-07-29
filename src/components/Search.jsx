import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const { city, setCity, lat, setLat, lon, setLon, fetchWeather, error } = useContext(WeatherContext);
  return (
    <div className='flex justify-center items-center w-full flex-col'>
      <div className='w-1/2' >
        <h1 className='text-2xl font-bold flex justify-center items-center mt-10'>Find Weather By</h1>
        <div>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' className='form-input flex w-[265px] mt-6 min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-[37px] placeholder:text-[#4e7997] p-4 text-base font-normal leading-normal'  />
        </div>
        <h1 className='flex justify-center items-center w-full my-4'>OR</h1>
        <div className='flex w-[265px] gap-2 justify-start'>
          <input type="text" value={lat} onChange={(e) => setLat(e.target.value)} placeholder='Latitude' className='form-input flex w-[50px] mt-6 min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-[37px] placeholder:text-[#4e7997] p-4 text-base font-normal leading-normal'  />
          <input type="text" value={lon} onChange={(e) => setLon(e.target.value)} placeholder='Longitude' className='form-input flex w-[100px] mt-6 min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-[37px] placeholder:text-[#4e7997] p-4 text-base font-normal leading-normal'  />
        </div>
        <div className='flex justify-center items-center mt-4'>
          <button   disabled={!city && !lon && !lat} onClick={fetchWeather} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#47a6ea] text-[#0e151b] text-sm font-bold leading-normal tracking-[0.015em]">Search</button>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
      </div>
    </div>
  );
};

export default Search;