// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TechNav from '../Components/TechNav';

// const BASE_URL = 'http://localhost:8000/';

// const TechnicianModulePage = () => {
//   const [tasks, setTasks] = useState([]);
// //   const [technicianId, setTechnicianId] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchTechnicianTasks = async () => {
//       try {
//         // Get technician ID from session storage
//         const id = sessionStorage.getItem('techid');
//         if (id) {
//         //   setTechnicianId(id);

//           // Fetch all service requests
//           const response = await axios.get('http://localhost:8000/servicerequests');
//           const allRequests = response.data;
//           console.log(allRequests);
//           // Filter tasks assigned to the technician
//           const assignedTasks = allRequests.filter(
//             request => request.technician?.techId == id
//           );
//           console.log(assignedTasks);
//           setTasks(assignedTasks);
//           console.log(tasks);
//         } else {
//           setError('No technician ID found in session storage');
//         }
//       } catch (err) {
//         setError('Failed to fetch tasks');
//       }
//     };

//     fetchTechnicianTasks();
//   }, []);

//   if (error) {
//     return <div className="p-8 text-red-600">{error}</div>;
//   }

//   return (
//     <>
//     <TechNav/>
//     <div className="flex flex-col min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Assigned Tasks</h1>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-blue-600 text-white">
//               <th className="p-4 text-left">Task ID</th>
//               <th className="p-4 text-left">Service Type</th>
//               <th className="p-4 text-left">Customer Name</th>
//               <th className="p-4 text-left">Status</th>
//               <th className="p-4 text-left">Product Condition</th>
//               <th className="p-4 text-left">Issue Details</th>
//               <th className="p-4 text-left">Date </th>


//             </tr>
//           </thead>
//           <tbody>
//             {tasks.length > 0 ? (
//               tasks.map((task) => (
//                 <tr key={task.reqid} className="border-b border-gray-200">
//                   <td className="p-4">{task.reqid}</td>
//                   <td className="p-4">{task.servicetype}</td>
//                   <td className="p-4">{task.customer.name}</td>
//                   <td className="p-4">{task.servicests}</td>
//                   <td className="p-4">{task.productCondition}</td>
//                   <td className="p-4">{task.issuedes}</td>
//                   <td className='p-4'>{task.preferredDate}</td>
//                   {/* <td className="p-4">
//                     <button
//                       onClick={() => alert(`Details for request ${task.reqid}`)} // Replace with actual detail view logic
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//                     >
//                       View Details
//                     </button>
//                   </td> */}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="p-4 text-center text-gray-500">
//                   No tasks assigned
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

// export default TechnicianModulePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechNav from '../Components/TechNav';

// Define the base URL for your API
const BASE_URL = 'http://localhost:8000/';

// Define the TechnicianModulePage component
const TechnicianModulePage = () => {
  // State to hold the tasks, error message, and modal data
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [selectedTask, setSelectedTask] = useState(null); // For modal data
  const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

  // useEffect to fetch technician tasks when the component mounts
  useEffect(() => {
    const fetchTechnicianTasks = async () => {
      try {
        // Get technician ID from session storage
        const id = sessionStorage.getItem('techid');
        if (id) {
          // Fetch all service requests
          const response = await axios.get(`${BASE_URL}servicerequests`);
          const allRequests = response.data;
          
          // Filter tasks assigned to the technician
          const assignedTasks = allRequests.filter(
            request => request.technician?.techId == id
          );
          
          // Update the tasks state
          setTasks(assignedTasks);
        } else {
          setError('No technician ID found in session storage');
        }
      } catch (err) {
        setError('Failed to fetch tasks');
      }
    };

    fetchTechnicianTasks();
  }, []);

  // Function to open the modal with the selected task details
  const handleViewInfo = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  // Function to render stars for rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const totalStars = 5;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
      stars += '⭐';
    }
    if (hasHalfStar) {
      stars += '⭐';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < totalStars; i++) {
      stars += '☆';
    }
    
    return stars;
  };

  if (error) {
    return <div className="p-8 text-red-600">{error}</div>;
  }

  return (
    <>
      <TechNav />
      <div className="flex flex-col min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Assigned Tasks</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">Task ID</th>
                <th className="p-4 text-left">Service Type</th>
                <th className="p-4 text-left">Customer Name</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Product Condition</th>
                <th className="p-4 text-left">Issue Details</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-left">Completed</th>
                <th className="p-4 text-left">Rating</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <tr key={task.reqid} className="border-b border-gray-200">
                    <td className="p-4">{task.reqid}</td>
                    <td className="p-4">{task.servicetype}</td>
                    <td className="p-4">{task.customer.name}</td>
                    <td className="p-4">{task.servicests}</td>
                    <td className="p-4">{task.productCondition}</td>
                    <td className="p-4">{task.issuedes}</td>
                    <td className='p-4'>{task.preferredDate}</td>
                    <td className="p-4">
                      {task.servicests === 'Completed' ? (
                        <span className="text-green-900 ">✅</span>
                      ) : (
                        <span>No</span>
                      )}
                    </td>
                    <td className="p-4">
                      {task.servicests === 'Completed' && task.rating !== undefined ? (
                        <span className="text-yellow-500">{renderStars(task.rating)}</span>
                      ) : (
                        <span>N/A</span>
                      )}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleViewInfo(task)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                      >
                        View Info
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="p-4 text-center text-gray-500">
                    No tasks assigned
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for displaying task details */}
      {isModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Task Details</h2>
            <p><strong>Task ID:</strong> {selectedTask.reqid}</p>
            <p><strong>Service Type:</strong> {selectedTask.servicetype}</p>
            <p><strong>Customer Name:</strong> {selectedTask.customer.name}</p>
            <p><strong>Customer Location:</strong> {selectedTask.customer.address}</p>
            <p><strong>City:</strong> {selectedTask.customer.city}</p>
            <p><strong>Status:</strong> {selectedTask.servicests}</p>
            <p><strong>Product Condition:</strong> {selectedTask.productCondition}</p>
            <p><strong>Issue Details:</strong> {selectedTask.issuedes}</p>
            <p><strong>Preferred Date:</strong> {selectedTask.preferredDate}</p>
            <p><strong>Service Details:</strong> {selectedTask.serviceDetails}</p>
            <p><strong>Rating:</strong> {selectedTask.servicests === 'Completed' ? renderStars(selectedTask.rating) : 'N/A'}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TechnicianModulePage;
