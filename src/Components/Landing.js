import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Appbar from './Appbar';


const Navbar = () => {
const [user, setUser] = useState(null); 
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogin = () => {
    // Logic to handle login (mocked for now)
    setUser({ email: 'user@example.com' });
  };

  const handleLogout = () => {
    // Logic to handle logout
    setUser(null);
  };
  return (
    <>

    <nav className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="https://www.watercadetennis.com/wp-content/uploads/2023/05/Stark-Electronics-Logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          </Link>
          <Link to="/" className="text-2xl font-bold hover:text-gray-400">Customer Support Service</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:bg-blue-500 px-4 py-2 rounded-md">Home</Link>
          {/* <Link to="/" className="hover:bg-blue-500 px-4 py-2 rounded-md">Services</Link>
          <Link to="/" className="hover:bg-blue-500 px-4 py-2 rounded-md">Products</Link>
          <Link to="/"className="hover:bg-blue-500 px-4 py-2 rounded-md">About Us</Link>
          <Link to="/" className="hover:bg-blue-500 px-4 py-2 rounded-md">Contact</Link> */}
          {/* {user ? (
            <>
              <Link to="/profile" className="hover:bg-gray-700 px-4 py-2 rounded-md">Profile</Link>
              <button onClick={handleLogout} className="hover:bg-red-700 px-4 py-2 rounded-md">Logout</button>
            </>
          ) : (
            <button onClick={handleLogin} className="hover:bg-gray-700 px-4 py-2 rounded-md">Login</button>
          )} */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Home</Link>
        <Link to="/" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Services</Link>
        <Link to="/" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Products</Link>
        <Link to="/" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">About Us</Link>
        <Link to="/" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Contact</Link>
        {user ? (
          <>
            <Link to="/profile" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Profile</Link>
            <button onClick={handleLogout} className="block w-full px-4 py-2 text-lg font-medium text-white bg-red-600 hover:bg-red-500">Logout</button>
          </>
        ) : (
          <Link to="/login" className="block px-4 py-2 text-lg font-medium text-white hover:bg-gray-700">Login</Link>
        )}
      </div>
    </nav>
 </> );
};

export default Navbar;
