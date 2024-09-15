// TechnicianTasks.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
//  // Adjust the path as necessary

// const TechnicianTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [technician, setTechnician] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false); // Modal visibility
//   const [availability, setAvailability] = useState('');
//   useEffect(() => {
//     const fetchTechnicianTasks = async () => {
//       try {
//         // Get technician ID from session storage
//         const id = sessionStorage.getItem('techid');
//         const techResponse = await axios.get(`http://localhost:8000/tech/${id}`);
//           setTechnician(techResponse.data);
//         if (id) {
//           // Fetch all service requests
//           const response = await axios.get('http://localhost:8000/servicerequests');
//           const allRequests = response.data;

//           // Filter requests for the specific technician
//           const technicianTasks = allRequests.filter(task => task.technician?.techId ==id);
//           setTasks(technicianTasks);
//         }
//       } catch (error) {
//         console.error('Error fetching technician tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnicianTasks();
//   }, []);

//   const handleStatusUpdate = async (taskId) => {
//     const formData = new FormData();
//     formData.append("reqid",taskId);
//     formData.append("sts",status);

//     try {
//       await axios.put('http://localhost:8000/servicerequests/sts',formData );

//       setTasks(prevTasks => prevTasks.map(task =>
//         task.reqid === taskId ? { ...task, status } : task
//       ));
//       setSelectedTask(null);
//       setStatus('');
//     } catch (error) {
//       console.error('Error updating task status:', error);
//     }
//   };
//   const handleAvailabilityUpdate = async () => {
//     const techId = sessionStorage.getItem('techid');
//     const formData = new FormData();
//     formData.append("techid",techId);
//     formData.append("sts",availability);
//     console.log(formData);
//     if (techId && availability) {
//       try {
//         await axios.put('http://localhost:8000/tech/sts', formData);
//         setTechnician(prevTech => ({ ...prevTech, availability }));
//         setModalOpen(false);
//         setAvailability('');
//       } catch (error) {
//         console.error('Error updating technician availability:', error);
//       }
//     }
//   };
//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
//       {technician && (
//         <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Technician Status</h2>
//           <p className="text-gray-700">Name: {technician.tname}</p>
//           <p className="text-gray-700">Availability: {technician.status}</p> {/* Assuming availability is a field */}
//           <p className="text-gray-700">Current Tasks: {tasks.length}</p>
//           <button
//             onClick={() => setModalOpen(true)}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//           >
//             Set Availability
//           </button>
       
//         </div>
//       )}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {tasks.length > 0 ? tasks.map(task => (
//           <div key={task.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold">{task.servicetype}</h2>
//             <p className="text-gray-700 mt-2">{task.product.appliances.productname}</p>
//             <p className="text-gray-700 mt-2">{task.product.appliances.model}</p>
//             <p className="text-gray-700 mt-2">{task.issuedes}</p>
//             <p className="text-gray-700 mt-2">{task.customer.name}</p>
//             <p className="text-gray-700 mt-2">{task.customer.address}</p>
//             {/* <p className="text-gray-700 mt-2">{task.issuedes}</p> */}
//             <p className={`mt-2 ${task.servicests === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
//               Status: {task.servicests}
//             </p>
//             <button
//               onClick={() => setSelectedTask(task)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//             >
//               Update Progress  
//             </button>
//           </div>
//         )) : (
//           <p className="text-gray-700">No tasks assigned.</p>
//         )}
//       </div>

//       {selectedTask && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Update Task Status</h2>
//             <p className="mb-2">Task: {selectedTask.title}</p>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="border rounded-lg p-2 w-full mb-4"
//             >
//               <option value="">Select Status</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//             <button
//               onClick={() => handleStatusUpdate(selectedTask.reqid)}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => setSelectedTask(null)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

// {/* Availability Modal */}
// {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Set Technician Availability</h2>
//             <input
//               type="text"
//               value={availability}
//               onChange={(e) => setAvailability(e.target.value)}
//               placeholder="Enter availability status"
//               className="border rounded-lg p-2 w-full mb-4"
//             />
//             <button
//               onClick={handleAvailabilityUpdate}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setModalOpen(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default TechnicianTasks;
//****************************** */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TechnicianTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [technician, setTechnician] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false); // Modal visibility
//   const [availability, setAvailability] = useState('');
//   const [selectedStatus, setSelectedStatus] = useState(''); // Selected status for filtering

//   useEffect(() => {
//     const fetchTechnicianTasks = async () => {
//       try {
//         const id = sessionStorage.getItem('techid');
//         const techResponse = await axios.get(`http://localhost:8000/tech/${id}`);
//         setTechnician(techResponse.data);

//         if (id) {
//           const response = await axios.get('http://localhost:8000/servicerequests');
//           const allRequests = response.data;
//           const technicianTasks = allRequests.filter(task => task.technician?.techId == id);
//           setTasks(technicianTasks);
//         }
//       } catch (error) {
//         console.error('Error fetching technician tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnicianTasks();
//   }, []);

//   const handleStatusUpdate = async (taskId) => {
//     const formData = new FormData();
//     formData.append("reqid", taskId);
//     formData.append("sts", status);

//     try {
//       await axios.put('http://localhost:8000/servicerequests/sts', formData);
//       setTasks(prevTasks => prevTasks.map(task =>
//         task.reqid === taskId ? { ...task, status } : task
//       ));
//       setSelectedTask(null);
//       setStatus('');
//     } catch (error) {
//       console.error('Error updating task status:', error);
//     }
//   };

//   const handleAvailabilityUpdate = async () => {
//     const techId = sessionStorage.getItem('techid');
//     const formData = new FormData();
//     formData.append("techid", techId);
//     formData.append("sts", availability);

//     if (techId && availability) {
//       try {
//         await axios.put('http://localhost:8000/tech/sts', formData);
//         setTechnician(prevTech => ({ ...prevTech, availability }));
//         setModalOpen(false);
//         setAvailability('');
//       } catch (error) {
//         console.error('Error updating technician availability:', error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   const statusCategories = ['In Progress', 'Pending', 'Completed'];

//   const filteredTasks = selectedStatus
//     ? tasks.filter(task => task.servicests === selectedStatus)
//     : tasks;

//   // Calculate the count of tasks that are either In Progress or Pending
//   const currentTaskCount = tasks.filter(task => task.servicests === 'In Progress' || task.servicests === 'Pending').length;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
//       {technician && (
//         <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Technician Status</h2>
//           <p className="text-gray-700">Name: {technician.tname}</p>
//           <p className="text-gray-700">Availability: {technician.status}</p>
//           <p className="text-gray-700">Current Tasks: {currentTaskCount}</p> {/* Updated count */}
//           <button
//             onClick={() => setModalOpen(true)}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//           >
//             Set Availability
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         {statusCategories.map(category => (
//           <div
//             key={category}
//             onClick={() => setSelectedStatus(category)}
//             className={`bg-gray-300 shadow-md rounded-lg p-6 cursor-pointer hover:bg-blue-200 transition-colors duration-300 ${
//               selectedStatus === category ? 'bg-gray-300' : ''
//             }`}
//           >
//             <h2 className="text-xl font-semibold">{category}</h2>
//             <p className="text-gray-700 mt-2">Click to view {category} tasks</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredTasks.length > 0 ? filteredTasks.map(task => (
//           <div key={task.reqid} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold">{task.servicetype}</h2>
//             <p className="text-gray-700 mt-2">Product Name : {task.product.appliances.productname}</p>
//             <p className="text-gray-700 mt-2">Product Model : {task.product.appliances.model}</p>
//             <p className="text-gray-700 mt-2">Product Issue : {task.issuedes}</p>
//             <p className="text-gray-700 mt-2">Customer Name  :{task.customer.name}</p>
//             <p className="text-gray-700 mt-2">Customer Address :{task.customer.address}</p>
//             <p className={`mt-2 ${task.servicests === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
//               Status: {task.servicests}
//             </p>
//             {task.servicests === 'Completed' && (
//               <>
//                 <p className="mt-2 font-semibold">Feedback:</p>
//                 <p className="text-gray-700 mt-2">{task.feedback}</p>
//                 <p className="mt-2 font-semibold">Rating:</p>
//                 <p className="text-gray-700 mt-2">{task.rating}</p>
//               </>
//             )}
//             <button
//               onClick={() => setSelectedTask(task)}
//               disabled={task.servicests === 'Completed'}
//               className={`mt-4 px-4 py-2 rounded-lg transition-colors duration-300 ${
//                 task.servicests === 'Completed'
//                   ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
//                   : 'bg-blue-500 text-white hover:bg-blue-600'
//               }`}
//             >
//               Update Progress
//             </button>
//           </div>
//         )) : (
//           <p className="text-gray-700">No tasks available for the selected status.</p>
//         )}
//       </div>

//       {selectedTask && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Update Task Status</h2>
//             <p className="mb-2">Task: {selectedTask.servicetype}</p>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="border rounded-lg p-2 w-full mb-4"
//             >
//               <option value="">Select Status</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//             <button
//               onClick={() => handleStatusUpdate(selectedTask.reqid)}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => setSelectedTask(null)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Set Technician Availability</h2>
//             <input
//               type="text"
//               value={availability}
//               onChange={(e) => setAvailability(e.target.value)}
//               placeholder="Enter availability status"
//               className="border rounded-lg p-2 w-full mb-4"
//             />
//             <button
//               onClick={handleAvailabilityUpdate}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setModalOpen(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnicianTasks;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TechnicianTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [technician, setTechnician] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false); // Modal visibility
//   const [availability, setAvailability] = useState(''); // Dropdown state for availability
//   const [selectedStatus, setSelectedStatus] = useState(''); // Selected status for filtering

//   useEffect(() => {
//     const fetchTechnicianTasks = async () => {
//       try {
//         const id = sessionStorage.getItem('techid');
//         const techResponse = await axios.get(`http://localhost:8000/tech/${id}`);
//         setTechnician(techResponse.data);

//         if (id) {
//           const response = await axios.get('http://localhost:8000/servicerequests');
//           const allRequests = response.data;
//           const technicianTasks = allRequests.filter(task => task.technician?.techId == id);
//           setTasks(technicianTasks);
//         }
//       } catch (error) {
//         console.error('Error fetching technician tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnicianTasks();
//   }, []);

//   const handleStatusUpdate = async (taskId) => {
//     const formData = new FormData();
//     formData.append("reqid", taskId);
//     formData.append("sts", status);

//     try {
//       await axios.put('http://localhost:8000/servicerequests/sts', formData);
//       setTasks(prevTasks => prevTasks.map(task =>
//         task.reqid === taskId ? { ...task, status } : task
//       ));
//       setSelectedTask(null);
//       setStatus('');
//     } catch (error) {
//       console.error('Error updating task status:', error);
//     }
//   };

//   const handleAvailabilityUpdate = async () => {
//     const techId = sessionStorage.getItem('techid');
//     const formData = new FormData();
//     formData.append("techid", techId);
//     formData.append("sts", availability);

//     if (techId && availability) {
//       try {
//         await axios.put('http://localhost:8000/tech/sts', formData);
//         setTechnician(prevTech => ({ ...prevTech, availability }));
//         setModalOpen(false);
//         setAvailability('');
//       } catch (error) {
//         console.error('Error updating technician availability:', error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   const statusCategories = ['In Progress', 'Pending', 'Completed'];
//   const availabilityOptions = ['In Service', 'Available', 'Assigned'];

//   const filteredTasks = selectedStatus
//     ? tasks.filter(task => task.servicests === selectedStatus)
//     : tasks;

//   // Calculate the count of tasks that are either In Progress or Pending
//   const currentTaskCount = tasks.filter( task => task.servicests === 'Assigned' || task.servicests === 'In Progress' || task.servicests === 'Pending').length;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
//       {technician && (
//         <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Technician Status</h2>
//           <p className="text-gray-700">Name: {technician.tname}</p>
//           <p className="text-gray-700">Availability: {technician.status}</p>
//           <p className="text-gray-700">Current Tasks: {currentTaskCount}</p> {/* Updated count */}
//           <button
//             onClick={() => setModalOpen(true)}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//           >
//             Set Availability
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         {statusCategories.map(category => (
//           <div
//             key={category}
//             onClick={() => setSelectedStatus(category)}
//             className={`bg-gray-300 shadow-md rounded-lg p-6 cursor-pointer hover:bg-blue-200 transition-colors duration-300 ${
//               selectedStatus === category ? 'bg-gray-300' : ''
//             }`}
//           >
//             <h2 className="text-xl font-semibold">{category}</h2>
//             <p className="text-gray-700 mt-2">Click to view {category} tasks</p>
//           </div>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredTasks.length > 0 ? filteredTasks.map(task => (
//           <div key={task.reqid} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold">{task.servicetype}</h2>
//             <p className="text-gray-700 mt-2">Product Name : {task.product.appliances.productname}</p>
//             <p className="text-gray-700 mt-2">Product Model : {task.product.appliances.model}</p>
//             <p className="text-gray-700 mt-2">Product Issue : {task.issuedes}</p>
//             <p className="text-gray-700 mt-2">Customer Name  :{task.customer.name}</p>
//             <p className="text-gray-700 mt-2">Customer Address :{task.customer.address}</p>
//             <p className={`mt-2 ${task.servicests === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
//               Status: {task.servicests}
//             </p>
//             {task.servicests === 'Completed' && (
//               <>
//                 <p className="mt-2 font-semibold">Feedback:</p>
//                 <p className="text-gray-700 mt-2">{task.feedback}</p>
//                 <p className="mt-2 font-semibold">Rating:</p>
//                 <p className="text-gray-700 mt-2">{task.rating}</p>
//               </>
//             )}
//             <button
//               onClick={() => setSelectedTask(task)}
//               disabled={task.servicests === 'Completed'}
//               className={`mt-4 px-4 py-2 rounded-lg transition-colors duration-300 ${
//                 task.servicests === 'Completed'
//                   ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
//                   : 'bg-blue-500 text-white hover:bg-blue-600'
//               }`}
//             >
//               Update Progress
//             </button>
//           </div>
//         )) : (
//           <p className="text-gray-700">No tasks available for the selected status.</p>
//         )}
//       </div>

//       {selectedTask && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Update Task Status</h2>
//             <p className="mb-2">Task: {selectedTask.servicetype}</p>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="border rounded-lg p-2 w-full mb-4"
//             >
//               <option value="">Select Status</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//             <button
//               onClick={() => handleStatusUpdate(selectedTask.reqid)}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => setSelectedTask(null)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {modalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Set Technician Availability</h2>
//             <select
//               value={availability}
//               onChange={(e) => setAvailability(e.target.value)}
//               className="border rounded-lg p-2 w-full mb-4"
//             >
//               <option value="">Select Availability</option>
//               {availabilityOptions.map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//             <button
//               onClick={handleAvailabilityUpdate}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Save
//             </button>
//             <button
//               onClick={() => setModalOpen(false)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnicianTasks;
//******************** */


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TechnicianTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [status, setStatus] = useState('');
  const [remarks, setRemarks] = useState(''); // State for remarks
  const [loading, setLoading] = useState(true);
  const [technician, setTechnician] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility
  const [availability, setAvailability] = useState(''); // Dropdown state for availability
  const [selectedStatus, setSelectedStatus] = useState(''); // Selected status for filtering

  useEffect(() => {
    const fetchTechnicianTasks = async () => {
      try {
        const id = sessionStorage.getItem('techid');
        const techResponse = await axios.get(`http://localhost:8000/tech/${id}`);
        setTechnician(techResponse.data);

        if (id) {
          const response = await axios.get('http://localhost:8000/servicerequests');
          const allRequests = response.data;
          const technicianTasks = allRequests.filter(task => task.technician?.techId == id);
          setTasks(technicianTasks);
        }
      } catch (error) {
        console.error('Error fetching technician tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnicianTasks();
  }, []);

  const handleStatusUpdate = async (taskId) => {
    const formData = new FormData();
    formData.append("reqid", taskId);
    formData.append("sts", status);
    if (status === 'Pending') {
      formData.append("remarks", remarks); // Include remarks if status is In Progress
      try {
        await axios.put('http://localhost:8000/servicerequests/stspending', formData);
        setTasks(prevTasks => prevTasks.map(task =>
          task.reqid === taskId ? { ...task, status, remarks: status === 'Pending' ? remarks : task.remarks } : task
        ));
        setSelectedTask(null);
        setStatus('');
        setRemarks(''); // Clear remarks after updating
      } catch (error) {
        console.error('Error updating task status:', error);
      }
    }

    try {
      await axios.put('http://localhost:8000/servicerequests/sts', formData);
      setTasks(prevTasks => prevTasks.map(task =>
        task.reqid === taskId ? { ...task, status, remarks: status === 'Pending' ? remarks : task.remarks } : task
      ));
      setSelectedTask(null);
      setStatus('');
      setRemarks(''); // Clear remarks after updating
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleAvailabilityUpdate = async () => {
    const techId = sessionStorage.getItem('techid');
    const formData = new FormData();
    formData.append("techid", techId);
    formData.append("sts", availability);

    if (techId && availability) {
      try {
        await axios.put('http://localhost:8000/tech/sts', formData);
        setTechnician(prevTech => ({ ...prevTech, availability }));
        setModalOpen(false);
        setAvailability('');
      } catch (error) {
        console.error('Error updating technician availability:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  const statusCategories = ['In Progress', 'Pending', 'Completed'];
  const availabilityOptions = ['In Service', 'Available', 'Assigned'];

  const filteredTasks = selectedStatus
    ? tasks.filter(task => task.servicests === selectedStatus)
    : tasks;

  // Calculate the count of tasks that are either In Progress or Pending
  const currentTaskCount = tasks.filter(task => 
    task.servicests === 'Assigned' || 
    task.servicests === 'In Progress' || 
    task.servicests === 'Pending'
  ).length;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      {technician && (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-2">Technician Status</h2>
          <p className="text-gray-700">Name: {technician.tname}</p>
          <p className="text-gray-700">Availability: {technician.status}</p>
          <p className="text-gray-700">Current Tasks: {currentTaskCount}</p> {/* Updated count */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Set Availability
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {statusCategories.map(category => (
          <div
            key={category}
            onClick={() => setSelectedStatus(category)}
            className={`bg-gray-300 shadow-md rounded-lg p-6 cursor-pointer hover:bg-blue-200 transition-colors duration-300 ${
              selectedStatus === category ? 'bg-gray-300' : ''
            }`}
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-700 mt-2">Click to view {category} tasks</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.length > 0 ? filteredTasks.map(task => (
          <div key={task.reqid} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold">{task.servicetype}</h2>
            <p className="text-gray-700 mt-2">Product Name: {task.product.appliances.productname}</p>
            <p className="text-gray-700 mt-2">Product Model: {task.product.appliances.model}</p>
            <p className="text-gray-700 mt-2">Product Issue: {task.issuedes}</p>
            <p className="text-gray-700 mt-2">Customer Name: {task.customer.name}</p>
            <p className="text-gray-700 mt-2">Customer Address: {task.customer.address}</p>
            <p className={`mt-2 ${task.servicests === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
              Status: {task.servicests}
            </p>
            {task.servicests === 'Completed' && (
              <>
                <p className="mt-2 font-semibold">Feedback:</p>
                <p className="text-gray-700 mt-2">{task.feedback}</p>
                <p className="mt-2 font-semibold">Rating:</p>
                <p className="text-gray-700 mt-2">{task.rating}</p>
              </>
            )}
            {task.servicests === 'Pending' && (
              <>
                <p className="mt-2 font-semibold">Remarks:</p>
                <p className="text-gray-700 mt-2">{task.remark}</p>
               
              </>
            )}
            <button
              onClick={() => setSelectedTask(task)}
              disabled={task.servicests === 'Completed'}
              className={`mt-4 px-4 py-2 rounded-lg transition-colors duration-300 ${
                task.servicests === 'Completed'
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Update Progress
            </button>
          </div>
        )) : (
          <p className="text-gray-700">No tasks available for the selected status.</p>
        )}
      </div>

      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Update Task Status</h2>
            <p className="mb-2">Task: {selectedTask.servicetype}</p>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            {status === 'Pending' && (
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks here..."
                className="border rounded-lg p-2 w-full mb-4 h-24"
              />
            )}
            <button
              onClick={() => handleStatusUpdate(selectedTask.reqid)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Update
            </button>
            <button
              onClick={() => setSelectedTask(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Set Technician Availability</h2>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="border rounded-lg p-2 w-full mb-4"
            >
              <option value="">Select Availability</option>
              {availabilityOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <button
              onClick={handleAvailabilityUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Save
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicianTasks;




























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TechnicianTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [technician, setTechnician] = useState(null); // Add technician state

//   useEffect(() => {
//     const fetchTechnicianTasks = async () => {
//       try {
//         const techId = sessionStorage.getItem('techid');
//         if (techId) {
//           // Fetch technician details
//           const techResponse = await axios.get(`http://localhost:8000/technicians/${techId}`);
//           setTechnician(techResponse.data);

//           // Fetch all service requests
//           const response = await axios.get('http://localhost:8000/servicerequests');
//           const allRequests = response.data;

//           // Filter requests for the specific technician
//           const technicianTasks = allRequests.filter(task => task.technician?.techId === techId);
//           setTasks(technicianTasks);
//         }
//       } catch (error) {
//         console.error('Error fetching technician tasks:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTechnicianTasks();
//   }, []);

//   const handleStatusUpdate = async (taskId) => {
//     const formData = new FormData();
//     formData.append("reqid", taskId);
//     formData.append("sts", status);

//     try {
//       await axios.put('http://localhost:8000/servicerequests/sts', formData);
//       setTasks(prevTasks => prevTasks.map(task =>
//         task.reqid === taskId ? { ...task, status } : task
//       ));
//       setSelectedTask(null);
//       setStatus('');
//     } catch (error) {
//       console.error('Error updating task status:', error);
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>

//       {/* Technician Availability Card */}
//       {technician && (
//         <div className="bg-white shadow-md rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold mb-2">Technician Status</h2>
//           <p className="text-gray-700">Name: {technician.name}</p>
//           <p className="text-gray-700">Availability: {technician.availability}</p> {/* Assuming availability is a field */}
//           <p className="text-gray-700">Current Tasks: {tasks.length}</p>
//         </div>
//       )}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {tasks.length > 0 ? tasks.map(task => (
//           <div key={task.reqid} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
//             <h2 className="text-xl font-semibold">{task.servicetype}</h2>
//             <p className="text-gray-700 mt-2">{task.product.appliances.productname}</p>
//             <p className="text-gray-700 mt-2">{task.product.appliances.model}</p>
//             <p className="text-gray-700 mt-2">{task.issuedes}</p>
//             <p className="text-gray-700 mt-2">{task.customer.name}</p>
//             <p className="text-gray-700 mt-2">{task.customer.address}</p>
//             <p className={`mt-2 ${task.servicests === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
//               Status: {task.servicests}
//             </p>
//             <button
//               onClick={() => setSelectedTask(task)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//             >
//               Update Status
//             </button>
//           </div>
//         )) : (
//           <p className="text-gray-700">No tasks assigned.</p>
//         )}
//       </div>

//       {selectedTask && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-xl font-semibold mb-4">Update Task Status</h2>
//             <p className="mb-2">Task: {selectedTask.servicetype}</p>
//             <select
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//               className="border rounded-lg p-2 w-full mb-4"
//             >
//               <option value="">Select Status</option>
//               <option value="Pending">Pending</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Completed">Completed</option>
//             </select>
//             <button
//               onClick={() => handleStatusUpdate(selectedTask.reqid)}
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => setSelectedTask(null)}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 ml-2"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TechnicianTasks;
