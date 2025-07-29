import React from 'react';
import { TiWeatherCloudy } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';



function Navbar() {
    return (
        <>
            <nav className=" text-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold flex mt-1.5">
                        <span className='mt-1.5'>< TiWeatherCloudy /></span>
                        WeatherWise</h1>
                    <ul className="flex gap-4">
                        <div>
                        {/* <input type="text" placeholder='Search' className=' form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e151b] focus:outline-0 focus:ring-0 border-none bg-[#e7eef3] focus:border-none h-[32px] placeholder:text-[#4e7997] px-4  border-l-0 pl-2 text-base font-normal leading-normal" '/> */}
                        </div>
                        <li><Link to="/search" className="hover:underline bg-[#e7eef3] p-1 rounded-2xl    ">SEARCH</Link></li>
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/forcast" className="hover:underline">7-day forcast</Link></li>
                        <li><Link to="/data" className="hover:underline">Weather Data</Link></li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
}

export default Navbar;
