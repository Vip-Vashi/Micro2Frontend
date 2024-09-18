import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaMoneyBill, FaBox, FaCog, FaIndustry, FaTruck, FaToolbox, FaTasks } from 'react-icons/fa';
 
const Sidebar = () => {
  return (
    <aside className="w-64 mt-8 bg-gray-800 text-white h-screen fixed top-16 left-0 p-4 transition-transform duration-300 transform hover:translate-x-2">
      <div className="flex flex-col space-y-4">
        <Link
          to="/tech"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaToolbox className="text-2xl mr-2" />
          <span>Technician Details</span>
        </Link>
        <Link
          to="/reqs"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaTasks className="text-2xl mr-2" />
          <span>Service Requests</span>
        </Link>
        <Link
          to="/assign"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaToolbox className="text-2xl mr-2" />
          <span>Assign Technician</span>
        </Link>
        <Link
          to="/customer"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaUser className="text-2xl mr-2" />
          <span>Customer Registry</span>
        </Link>
        {/* <Link
          to="/material-details"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaIndustry className="text-2xl mr-2" />
          <span>Material Details</span>
        </Link>
        <Link
          to="/supplier-details"
          className="flex items-center text-white hover:text-gray-400 transition-colors duration-300 transform hover:scale-105"
        >
          <FaTruck className="text-2xl mr-2" />
          <span>Supplier Details</span>
        </Link> */}
      </div>
    </aside>
  );
};
 
export default Sidebar;
 