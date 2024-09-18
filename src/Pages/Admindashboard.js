import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import AdminNavbar from './AdminNavbar';
//import Sidebar from './Sidebar';
import { FaUser, FaMoneyBill, FaBox, FaTools, FaServicestack, FaInbox, FaMailBulk } from 'react-icons/fa';
//import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import AdminNav from '../Components/AdminNav';
import Sidebar from '../Components/AdminSidebar';
//import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
 
// Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);
 
// Sample data for the charts
// const lineChartData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'User Growth',
//       data: [30, 50, 75, 90, 100, 120, 150],
//       fill: false,
//       borderColor: 'rgba(75, 192, 192, 1)',
//       tension: 0.1
//     }
//   ]
// };
 
// const barChartData = {
//   labels: ['January', 'February', 'March', 'April', 'May'],
//   datasets: [
//     {
//       label: 'Revenue',
//       data: [4000, 3500, 5000, 4500, 6000],
//       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1
//     }
//   ]
// };
 
// Main Admin Dashboard Component
const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
 const [techCount,setTechCount]=useState(0);
 const [prodCount,setProdCount]=useState(0);
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/servicerequests');
        setUserCount(response.data.length); // Assuming the API returns an array of users
      } catch (error) {
        console.error('Failed to fetch user count:', error);
      }
    };
 const fetchTechCount = async ()=>{
    try {
        const response = await axios.get('http://localhost:8000/tech/all');
        setTechCount(response.data.length); // Assuming the API returns an array of users
      } catch (error) {
        console.error('Failed to fetch user count:', error);
      }
 }
 const fetchProductCount = async ()=>{
    try {
        const response = await axios.get('http://localhost:8000/products');
        setProdCount(response.data.length); // Assuming the API returns an array of users
      } catch (error) {
        console.error('Failed to fetch user count:', error);
      }
 }
    fetchUserCount();
    fetchTechCount();
    fetchProductCount();
  }, []);
 
  return (
    <div className="flex flex-col min-h-screen">
      {/* <AdminNavbar /> */}
        <AdminNav/>
      <div className="flex flex-1  transition-transform duration-300 ease-in-out"> {/* Added transition for smoother movement */}
        {/* <Sidebar /> */}
       <Sidebar/>
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 ml-64 transition-opacity duration-500 ease-in-out">
          {/* Charts */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            
 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Stats Cards */}
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 ease-in-out duration-300"> {/* Scale animation */}
                <h3 className="text-xl font-semibold mb-4">Service Requests</h3>
                <p className="text-2xl font-bold">{userCount}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 ease-in-out duration-300"> {/* Scale animation */}
                <h3 className="text-xl font-semibold mb-4">Technicians </h3>
                <p className="text-2xl font-bold">{techCount}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition-transform hover:scale-105 ease-in-out duration-300"> {/* Scale animation */}
                <h3 className="text-xl font-semibold mb-4">Registered Appliances</h3>
                <p className="text-2xl font-bold">{prodCount}</p>
              </div>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Action Cards */}
              <Link to="/view" className="bg-blue-600 text-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:bg-blue-700 transition-colors ease-in-out duration-300">
                <div className="flex items-center">
                  <FaMailBulk className="text-3xl mr-4" />
                  <h3 className="text-xl font-semibold">Manage Requests</h3>
                </div>
                <span className="text-xl">&rarr;</span>
              </Link>
              <Link to="/tech" className="bg-green-600 text-white shadow-lg rounded-lg p-6 flex items-center justify-between hover:bg-green-700 transition-colors ease-in-out duration-300">
                <div className="flex items-center">
                  <FaTools className="text-3xl mr-4" />
                  <h3 className="text-xl font-semibold">Manage Technicians</h3>
                </div>
                <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
 
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-auto transition-opacity duration-500 ease-in-out">
        <div className="text-center">
          <p>&copy; 2024 @ All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> |
            <Link to="/terms-of-service" className="hover:underline"> Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};
 
export default AdminDashboard;