// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'; // Import SweetAlert for success messages

// const BASE_URL = 'http://localhost:8000/';

// const TechnicianDashboard = () => {
//   const [technician, setTechnician] = useState(null);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   useEffect(() => {
//     const fetchTechnician = async () => {
//       try {
//         const id = sessionStorage.getItem('techid');
//         if (id) {
//           const response = await axios.get(`${BASE_URL}tech/${id}`);
//           setTechnician(response.data);
//         } else {
//           setError('No technician ID found in session storage');
//         }
//       } catch (err) {
//         setError('Failed to fetch technician details');
//       }
//     };

//     fetchTechnician();
//   }, []);

//   // Function to handle password change submission
//   const handleChangePassword = async () => {
//     if(oldPassword !== sessionStorage.getItem('techpwd')){
//       setPasswordError('Invalid Old Password');
//       return;
//     }
//     if (newPassword.length < 6) {
//       setPasswordError('New password must be at least 6 characters long.');
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setPasswordError('New password and confirm password must match.');
//       return;
//     }
//     if (newPassword === oldPassword) {
//       setPasswordError('New password cannot be the same as the old password.');
//       return;
//     }

//    const formData = new FormData()
//    formData.append("oldpwd",oldPassword);
//    formData.append("newpwd",newPassword);
//     try {
//       const id = sessionStorage.getItem('techid');
//       await axios.put(`${BASE_URL}tech/pwd/${id}`, formData);
//       Swal.fire({
//         icon: 'success',
//         title: 'Password Changed Successfully',
//         text: 'Your password has been updated.',
//       });
//       handleCloseModal(); // Close the modal on success
//     } catch (err) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to change password.',
//         text: 'Invalid Old Password !!  Please try again later.',
//       });
//     }
//   };

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setPasswordError('');
//   };

//   if (error) {
//     return <div className="p-8 text-red-600">{error}</div>;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="w-64 bg-blue-800 text-white p-6">
//         <h1 className="text-2xl font-bold mb-6">Technician Dashboard</h1>
//         <ul>
//           <li className="mb-4">
//             <Link to="/appointments" className="hover:underline">View Appointments</Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/worktracker" className="hover:underline">Work Tracker</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <h2 className="text-3xl font-bold mb-6">Technician Details</h2>

//         {technician ? (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-6">
//               <img
//                 src={`https://via.placeholder.com/150?text=${technician.tname.charAt(0)}`}
//                 alt={`${technician.tname}`}
//                 className="w-24 h-24 rounded-full border-4 border-blue-500 mr-6"
//               />
//               <div>
//                 <h3 className="text-2xl font-semibold">{technician.tname}</h3>
//                 <p className="text-gray-600">ID: {technician.techId}</p>
//                 <p className="text-gray-600">Phone: {technician.contact}</p>
//                 <p className="text-gray-600">Location: {technician.district}, {technician.city}</p>
//                 <p className="text-gray-600">Domain: {technician.domain}</p>
//                 <p className="text-gray-600">Skill: {technician.skill}</p>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold mb-4">Change Password Settings </h4>
//               {/* <p className="text-gray-700">{technician.additionalInfo || 'No additional information available.'}</p> */}
//               <button
//                 onClick={handleOpenModal}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//               >
//                 Change Password
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-700">Loading technician details...</p>
//         )}

//         {/* Password Change Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
//               <h2 className="text-2xl font-bold mb-4">Change Password</h2>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Old Password</label>
//                 <input
//                   type="password"
//                   value={oldPassword}
//                   onChange={(e) => setOldPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">New Password</label>
//                 <input
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Confirm New Password</label>
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               {passwordError && <p className="text-red-600 mb-4">{passwordError}</p>}
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleChangePassword}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={handleCloseModal}
//                   className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechnicianDashboard;
//********* */


// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2'; // Import SweetAlert for notifications

// const BASE_URL = 'http://localhost:8000/';

// const TechnicianDashboard = () => {
//   const [technician, setTechnician] = useState(null);
//   const [error, setError] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [oldPassword, setOldPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [taskCount, setTaskCount] = useState(0); // Track the number of tasks

//   // Fetch technician details
//   useEffect(() => {
//     const fetchTechnician = async () => {
//       try {
//         const id = sessionStorage.getItem('techid');
//         if (id) {
//           const response = await axios.get(`${BASE_URL}tech/${id}`);
//           setTechnician(response.data);
//         } else {
//           setError('No technician ID found in session storage');
//         }
//       } catch (err) {
//         setError('Failed to fetch technician details');
//       }
//     };

//     fetchTechnician();
//   }, []);

//   // Fetch the number of assigned tasks
//   const fetchTaskCount = useCallback(async () => {
//     try {
//       const id = sessionStorage.getItem('techid');
//       if (id) {
//         const response = await axios.get(`${BASE_URL}servicerequests`);
//         const allRequests = response.data;

//         // Filter tasks assigned to the technician
//         const assignedTasks = allRequests.filter(
//           request => request.technician?.techId == id
//         );

//         // Check if the number of tasks has increased
//         if (taskCount < assignedTasks.length) {
//           Swal.fire({
//             icon: 'info',
//             title: 'New Tasks Assigned!',
//             text: `You have ${assignedTasks.length - taskCount} new tasks assigned.`,
//           });
//         }

//         // Update the task count
//         setTaskCount(assignedTasks.length);
//       } else {
//         setError('No technician ID found in session storage');
//       }
//     } catch (err) {
//       setError('Failed to fetch tasks');
//     }
//   }, [taskCount]);

//   // Fetch task count on component mount and periodically
//   useEffect(() => {
//     fetchTaskCount(); // Initial fetch

//     const intervalId = setInterval(() => {
//       fetchTaskCount();
//     }, 30000); // Poll every 30 seconds

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, [fetchTaskCount]);

//   // Handle password change submission
//   const handleChangePassword = async () => {
//     if (oldPassword !== sessionStorage.getItem('techpwd')) {
//       setPasswordError('Invalid Old Password');
//       return;
//     }
//     if (newPassword.length < 6) {
//       setPasswordError('New password must be at least 6 characters long.');
//       return;
//     }
//     if (newPassword !== confirmPassword) {
//       setPasswordError('New password and confirm password must match.');
//       return;
//     }
//     if (newPassword === oldPassword) {
//       setPasswordError('New password cannot be the same as the old password.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('oldpwd', oldPassword);
//     formData.append('newpwd', newPassword);

//     try {
//       const id = sessionStorage.getItem('techid');
//       await axios.put(`${BASE_URL}tech/pwd/${id}`, formData);
//       Swal.fire({
//         icon: 'success',
//         title: 'Password Changed Successfully',
//         text: 'Your password has been updated.',
//       });
//       handleCloseModal(); // Close the modal on success
//     } catch (err) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed to change password.',
//         text: 'Invalid Old Password !! Please try again later.',
//       });
//     }
//   };

//   const handleOpenModal = () => setIsModalOpen(true);
//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setOldPassword('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setPasswordError('');
//   };

//   if (error) {
//     return <div className="p-8 text-red-600">{error}</div>;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <nav className="w-64 bg-blue-800 text-white p-6">
//         <h1 className="text-2xl font-bold mb-6">Technician Dashboard</h1>
//         <ul>
//           <li className="mb-4">
//             <Link to="/appointments" className="hover:underline">View Appointments</Link>
//           </li>
//           <li className="mb-4">
//             <Link to="/worktracker" className="hover:underline">Work Tracker</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         <h2 className="text-3xl font-bold mb-6">Technician Details</h2>

//         {technician ? (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <div className="flex items-center mb-6">
//               <img
//                 src={`https://via.placeholder.com/150?text=${technician.tname.charAt(0)}`}
//                 alt={`${technician.tname}`}
//                 className="w-24 h-24 rounded-full border-4 border-blue-500 mr-6"
//               />
//               <div>
//                 <h3 className="text-2xl font-semibold">{technician.tname}</h3>
//                 <p className="text-gray-600">ID: {technician.techId}</p>
//                 <p className="text-gray-600">Phone: {technician.contact}</p>
//                 <p className="text-gray-600">Location: {technician.district}, {technician.city}</p>
//                 <p className="text-gray-600">Domain: {technician.domain}</p>
//                 <p className="text-gray-600">Skill: {technician.skill}</p>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold mb-4">Change Password Settings</h4>
//               <button
//                 onClick={handleOpenModal}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//               >
//                 Change Password
//               </button>
//             </div>
//           </div>
//         ) : (
//           <p className="text-gray-700">Loading technician details...</p>
//         )}

//         {/* Password Change Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
//               <h2 className="text-2xl font-bold mb-4">Change Password</h2>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Old Password</label>
//                 <input
//                   type="password"
//                   value={oldPassword}
//                   onChange={(e) => setOldPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">New Password</label>
//                 <input
//                   type="password"
//                   value={newPassword}
//                   onChange={(e) => setNewPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-2">Confirm New Password</label>
//                 <input
//                   type="password"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//               {passwordError && <p className="text-red-600 mb-4">{passwordError}</p>}
//               <div className="flex justify-end">
//                 <button
//                   onClick={handleChangePassword}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   onClick={handleCloseModal}
//                   className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TechnicianDashboard;




import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert for notifications

const BASE_URL = 'http://localhost:8000/';

const TechnicianDashboard = () => {
  const [technician, setTechnician] = useState(null);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [taskCount, setTaskCount] = useState(0); // Track the number of tasks

  // Fetch technician details
  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const id = sessionStorage.getItem('techid');
        if (id) {
          const response = await axios.get(`${BASE_URL}tech/${id}`);
          setTechnician(response.data);
        } else {
          setError('No technician ID found in session storage');
        }
      } catch (err) {
        setError('Failed to fetch technician details');
      }
    };

    fetchTechnician();
  }, []);

  // Fetch the number of assigned tasks
  const fetchTaskCount = useCallback(async () => {
    try {
      const id = sessionStorage.getItem('techid');
      if (id) {
        const response = await axios.get(`${BASE_URL}servicerequests`);
        const allRequests = response.data;

        // Filter tasks assigned to the technician
        const assignedTasks = allRequests.filter(
          request => request.technician?.techId == id
        );

        // Check if the number of tasks has increased
        if (taskCount < assignedTasks.length) {
          const notified = localStorage.getItem('notified');
          
          // Show notification only if it hasn't been shown yet
          if (!notified) {
            Swal.fire({
              icon: 'info',
              title: 'New Tasks Assigned!',
              text: `You have ${assignedTasks.length - taskCount} new tasks assigned.`,
              willClose: () => {
                // Mark as notified in localStorage when user closes the alert
                localStorage.setItem('notified', 'true');
              }
            });
          }
        }

        // Update the task count
        setTaskCount(assignedTasks.length);
      } else {
        setError('No technician ID found in session storage');
      }
    } catch (err) {
      setError('Failed to fetch tasks');
    }
  }, [taskCount]);

  // Fetch task count on component mount and periodically
  useEffect(() => {
    fetchTaskCount(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchTaskCount();
    }, 30000); // Poll every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [fetchTaskCount]);

  // Handle password change submission
  const handleChangePassword = async () => {
    if (oldPassword !== sessionStorage.getItem('techpwd')) {
      setPasswordError('Invalid Old Password');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('New password and confirm password must match.');
      return;
    }
    if (newPassword === oldPassword) {
      setPasswordError('New password cannot be the same as the old password.');
      return;
    }

    const formData = new FormData();
    formData.append('oldpwd', oldPassword);
    formData.append('newpwd', newPassword);

    try {
      const id = sessionStorage.getItem('techid');
      await axios.put(`${BASE_URL}tech/pwd/${id}`, formData);
      Swal.fire({
        icon: 'success',
        title: 'Password Changed Successfully',
        text: 'Your password has been updated.',
      });
      handleCloseModal(); // Close the modal on success
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to change password.',
        text: 'Invalid Old Password !! Please try again later.',
      });
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  if (error) {
    return <div className="p-8 text-red-600">{error}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-blue-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-6">Technician Dashboard</h1>
        <ul>
          <li className="mb-4">
            <Link to="/appointments" className="hover:underline">View Appointments</Link>
          </li>
          <li className="mb-4">
            <Link to="/worktracker" className="hover:underline">Work Tracker</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">Technician Details</h2>

        {technician ? (
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <img
                src={`https://via.placeholder.com/150?text=${technician.tname.charAt(0)}`}
                alt={`${technician.tname}`}
                className="w-24 h-24 rounded-full border-4 border-blue-500 mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold">{technician.tname}</h3>
                <p className="text-gray-900">ID: {technician.techId}</p>
                <p className="text-gray-900">Phone: {technician.contact}</p>
                <p className="text-gray-900">Location: {technician.district}, {technician.city}</p>
                <p className="text-gray-900">Domain: {technician.domain}</p>
                <p className="text-gray-900">Skill: {technician.skill}</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Change Password Settings</h4>
              <button
                onClick={handleOpenModal}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Change Password
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-700">Loading technician details...</p>
        )}

        {/* Password Change Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
              <h2 className="text-2xl font-bold mb-4">Change Password</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Old Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              {passwordError && <p className="text-red-600 mb-4">{passwordError}</p>}
              <div className="flex justify-end">
                <button
                  onClick={handleChangePassword}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                >
                  Submit
                </button>
                <button
                  onClick={handleCloseModal}
                  className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicianDashboard;
