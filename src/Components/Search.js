import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { SearchIcon } from '@heroicons/react/solid'; // Heroicons for the search icon

const Banner = () => {
  return (
    <div className="relative bg-gray-600 text-white h-64 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* <img
          src="https://via.placeholder.com/1500x500" // Replace with your banner image URL
          alt="Banner"
          className="object-cover w-full h-full opacity-30"
        /> */}
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Service Center Locator</h1>
        <div className="flex justify-center items-center bg-white p-2 rounded-lg shadow-lg">
          {/* <input
            type="text"
            placeholder="Search..."
            className="w-80 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
         <Link to={'/servicecenter'} ><FaSearchLocation className="h-6 w-6 text-gray-500 ml-2" /> </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
