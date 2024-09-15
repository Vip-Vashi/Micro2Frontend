import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user] = useState({ email: 'user@example.com' }); // Mocked user data

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">User Profile</h2>
          <p className="mt-2">Email: {user.email}</p>
        </div>
        <Link to="/settings" className="block mb-2 text-gray-400 hover:text-gray-200">Settings</Link>
        <Link to="/orders" className="block mb-2 text-gray-400 hover:text-gray-200">Orders</Link>
        <button className="bg-red-600 hover:bg-red-500 w-full py-2 text-white rounded">Logout</button>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}!</h1>
        <p className="text-lg">Here you can manage your profile, view orders, and update your settings.</p>
      </main>
    </div>
  );
};

export default Profile;
