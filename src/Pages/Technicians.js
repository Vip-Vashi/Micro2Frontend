// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // For accessibility reasons

// const TechnicianView = () => {
//   const [technicians, setTechnicians] = useState([]);
//   const [selectedTechnician, setSelectedTechnician] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [addModalIsOpen, setAddModalIsOpen] = useState(false);
//   const [newTechnician, setNewTechnician] = useState({
//     tname: '',
//     contact: '',
//     username: '',
//     password: '',
//     domain: '',
//     skill: '',
//     status: '',
//     district: '',
//     city: '',
//     pincode: ''
//   });

//   useEffect(() => {
//     fetchTechnicians();
//   }, []);

//   const fetchTechnicians = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/tech/all');
//       setTechnicians(response.data);
//     } catch (error) {
//       console.error('Error fetching technicians', error);
//     }
//   };

//   const fetchTechnicianTasks = async (techId) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/serviceRequests?technicianId=${techId}`);
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching technician tasks', error);
//     }
//   };

//   const openViewModal = (technician) => {
//     setSelectedTechnician(technician);
//     fetchTechnicianTasks(technician.id);
//   };

//   const closeViewModal = () => {
//     setSelectedTechnician(null);
//     setTasks([]);
//   };

//   const openAddModal = () => {
//     setAddModalIsOpen(true);
//   };

//   const closeAddModal = () => {
//     setAddModalIsOpen(false);
//     setNewTechnician({
//       tname: '',
//       contact: '',
//       username: '',
//       password: '',
//       domain: '',
//       skill: '',
//       status: '',
//       district: '',
//       city: '',
//       pincode: ''
//     });
//   };

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewTechnician(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     try {
//      const response = await axios.post('http://localhost:8000/tech', newTechnician);
//      const requestData = {
//         technician: response.data,
//         password: newTechnician.password
//       };
//       await axios.post('http://localhost:8000/tech/sendmail', requestData);
//     //   await axios.post('http://localhost:8000/tech/sendmail', response.data,newTechnician.password);
//       fetchTechnicians();
//       closeAddModal();
//     } catch (error) {
//       console.error('Error adding technician', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Technician View</h1>
//       <button
//         onClick={openAddModal}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//       >
//         Add Technician
//       </button>

//       <div className="overflow-x-auto">
//       <div className="overflow-x-auto">
//   <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//     <thead>
//       <tr className="bg-gray-200 text-gray-700">
//         <th className="py-4 px-6 border-b text-left">Name</th>
//         <th className="py-4 px-6 border-b text-left">Contact</th>
//         <th className="py-4 px-6 border-b text-left">Username</th>
//         <th className="py-4 px-6 border-b text-left">Skill</th>
//         <th className="py-4 px-6 border-b text-left">Status</th>
//         <th className="py-4 px-6 border-b text-left">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {technicians.map(tech => (
//         <tr key={tech.id} className="hover:bg-gray-100">
//           <td className="py-4 px-6 border-b text-left">{tech.tname}</td>
//           <td className="py-4 px-6 border-b text-left">{tech.contact}</td>
//           <td className="py-4 px-6 border-b text-left">{tech.username}</td>
//           <td className="py-4 px-6 border-b text-left">{tech.skill}</td>
//           <td className="py-4 px-6 border-b text-left">{tech.status}</td>
//           <td className="py-4 px-6 border-b text-left">
//             <button
//               onClick={() => openViewModal(tech)}
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//             >
//               View
//             </button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>

//       </div>

//       {/* View Technician Tasks Modal */}
//       <Modal
//         isOpen={!!selectedTechnician}
//         onRequestClose={closeViewModal}
//         contentLabel="Technician Tasks"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tasks for {selectedTechnician?.tname}</h2>
//         {tasks.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//               <thead>
//                 <tr className="w-full bg-gray-200 text-gray-700">
//                   <th className="py-2 px-4 border-b">Service Type</th>
//                   <th className="py-2 px-4 border-b">Issue Description</th>
//                   <th className="py-2 px-4 border-b">Condition</th>
//                   <th className="py-2 px-4 border-b">Status</th>
//                   <th className="py-2 px-4 border-b">Preferred Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tasks.map(task => (
//                   <tr key={task.reqid} className="hover:bg-gray-100">
//                     <td className="py-2 px-4 border-b">{task.servicetype}</td>
//                     <td className="py-2 px-4 border-b">{task.issuedes}</td>
//                     <td className="py-2 px-4 border-b">{task.productCondition}</td>
//                     <td className="py-2 px-4 border-b">{task.servicests}</td>
//                     <td className="py-2 px-4 border-b">{task.preferredDate}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-gray-700">No tasks assigned.</p>
//         )}
//         <button
//           onClick={closeViewModal}
//           className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Close
//         </button>
//       </Modal>

//       {/* Add Technician Modal */}
//       <Modal
//         isOpen={addModalIsOpen}
//         onRequestClose={closeAddModal}
//         contentLabel="Add Technician"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Technician</h2>
//         <form onSubmit={handleAddSubmit}>
//           <div className="mb-4">
//             <label htmlFor="tname" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
//             <input
//               id="tname"
//               name="tname"
//               type="text"
//               value={newTechnician.tname}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact</label>
//             <input
//               id="contact"
//               name="contact"
//               type="text"
//               value={newTechnician.contact}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               value={newTechnician.username}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={newTechnician.password}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="domain" className="block text-sm font-medium text-gray-600 mb-2">Domain</label>
//             <input
//               id="domain"
//               name="domain"
//               type="text"
//               value={newTechnician.domain}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="skill" className="block text-sm font-medium text-gray-600 mb-2">Skill</label>
//             <select
//               id="skill"
//               name="skill"
//               value={newTechnician.skill}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Skill</option>
//               <option value="repair">Repair</option>
//               <option value="installation">Installation</option>
//               <option value="HVAC">HVAC</option>
//               <option value="Electrical">Electrical</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="status" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
//             <select
//               id="status"
//               name="status"
//               value={newTechnician.status}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Status</option>
//               <option value="Assigned">Assigned</option>
//               <option value="Available">Available</option>
//               <option value="In Progress">In Progress</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label>
//             <input
//               id="district"
//               name="district"
//               type="text"
//               value={newTechnician.district}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-2">City</label>
//             <input
//               id="city"
//               name="city"
//               type="text"
//               value={newTechnician.city}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label>
//             <input
//               id="pincode"
//               name="pincode"
//               type="text"
//               value={newTechnician.pincode}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Add Technician
//           </button>
//           <button
//             onClick={closeAddModal}
//             className="ml-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
//           >
//             Cancel
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// const modalStyles = {
//   content: {
//     maxWidth: '600px',
//     margin: 'auto',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   }
// };

// export default TechnicianView;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // For accessibility reasons

// const BASE_URL = 'http://localhost:8000/';

// const TechnicianView = () => {
//   const [technicians, setTechnicians] = useState([]);
//   const [selectedTechnician, setSelectedTechnician] = useState(null);
//   const [tasks, setTasks] = useState([]);
//   const [addModalIsOpen, setAddModalIsOpen] = useState(false);
//   const [newTechnician, setNewTechnician] = useState({
//     tname: '',
//     contact: '',
//     username: '',
//     password: '',
//     domain: '',
//     skill: '',
//     status: '',
//     district: '',
//     city: '',
//     pincode: ''
//   });

//   useEffect(() => {
//     fetchTechnicians();
//   }, []);

//   const fetchTechnicians = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}tech/all`);
//       setTechnicians(response.data);
//     } catch (error) {
//       console.error('Error fetching technicians', error);
//     }
//   };

//   const fetchTechnicianTasks = async (techId) => {
//     try {
//       const response = await axios.get(`${BASE_URL}servicerequests`);
//       const allRequests = response.data;
//       const technicianTasks = allRequests.filter(
//         request => request.technician?.techId == techId
//       );
//       setTasks(technicianTasks);
//       console.log(tasks)
//     } catch (error) {
//       console.error('Error fetching technician tasks', error);
//     }
//   };

//   const openViewModal = (technician) => {
//     setSelectedTechnician(technician);
//     fetchTechnicianTasks(technician.id);
//   };

//   const closeViewModal = () => {
//     setSelectedTechnician(null);
//     setTasks([]);
//   };

//   const openAddModal = () => {
//     setAddModalIsOpen(true);
//   };

//   const closeAddModal = () => {
//     setAddModalIsOpen(false);
//     setNewTechnician({
//       tname: '',
//       contact: '',
//       username: '',
//       password: '',
//       domain: '',
//       skill: '',
//       status: '',
//       district: '',
//       city: '',
//       pincode: ''
//     });
//   };

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewTechnician(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${BASE_URL}tech`, newTechnician);
//       const requestData = {
//         technician: response.data,
//         password: newTechnician.password
//       };
//       await axios.post(`${BASE_URL}tech/sendmail`, requestData);
//       fetchTechnicians();
//       closeAddModal();
//     } catch (error) {
//       console.error('Error adding technician', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Technician View</h1>
//       <button
//         onClick={openAddModal}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//       >
//         Add Technician
//       </button>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="py-4 px-6 border-b text-left">Name</th>
//               <th className="py-4 px-6 border-b text-left">Contact</th>
//               <th className="py-4 px-6 border-b text-left">Username</th>
//               <th className="py-4 px-6 border-b text-left">Skill</th>
//               <th className="py-4 px-6 border-b text-left">Status</th>
//               <th className="py-4 px-6 border-b text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {technicians.map(tech => (
//               <tr key={tech.id} className="hover:bg-gray-100">
//                 <td className="py-4 px-6 border-b text-left">{tech.tname}</td>
//                 <td className="py-4 px-6 border-b text-left">{tech.contact}</td>
//                 <td className="py-4 px-6 border-b text-left">{tech.username}</td>
//                 <td className="py-4 px-6 border-b text-left">{tech.skill}</td>
//                 <td className="py-4 px-6 border-b text-left">{tech.status}</td>
//                 <td className="py-4 px-6 border-b text-left">
//                   <button
//                     onClick={() => openViewModal(tech)}
//                     className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//                   >
//                     View
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* View Technician Tasks Modal */}
//       <Modal
//         isOpen={!!selectedTechnician}
//         onRequestClose={closeViewModal}
//         contentLabel="Technician Tasks"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tasks for {selectedTechnician?.tname}</h2>
//         {tasks.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {tasks.map(task => (
//               <div key={task.reqid} className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
//                 <h3 className="text-lg font-semibold mb-2">{task.servicetype}</h3>
//                 <p><strong>Issue Description:</strong> {task.issuedes}</p>
//                 <p><strong>Condition:</strong> {task.productCondition}</p>
//                 <p><strong>Status:</strong> {task.servicests}</p>
//                 <p><strong>Preferred Date:</strong> {task.preferredDate}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-700">No tasks assigned.</p>
//         )}
//         <button
//           onClick={closeViewModal}
//           className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Close
//         </button>
//       </Modal>

//       {/* Add Technician Modal */}
//       <Modal
//         isOpen={addModalIsOpen}
//         onRequestClose={closeAddModal}
//         contentLabel="Add Technician"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Technician</h2>
//         <form onSubmit={handleAddSubmit}>
//           <div className="mb-4">
//             <label htmlFor="tname" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
//             <input
//               id="tname"
//               name="tname"
//               type="text"
//               value={newTechnician.tname}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact</label>
//             <input
//               id="contact"
//               name="contact"
//               type="text"
//               value={newTechnician.contact}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
//             <input
//               id="username"
//               name="username"
//               type="text"
//               value={newTechnician.username}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               value={newTechnician.password}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="domain" className="block text-sm font-medium text-gray-600 mb-2">Domain</label>
//             <input
//               id="domain"
//               name="domain"
//               type="text"
//               value={newTechnician.domain}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="skill" className="block text-sm font-medium text-gray-600 mb-2">Skill</label>
//             <select
//               id="skill"
//               name="skill"
//               value={newTechnician.skill}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Skill</option>
//               <option value="repair">Repair</option>
//               <option value="installation">Installation</option>
//               <option value="HVAC">HVAC</option>
//               <option value="Electrical">Electrical</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="status" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
//             <select
//               id="status"
//               name="status"
//               value={newTechnician.status}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Status</option>
//               <option value="Assigned">Assigned</option>
//               <option value="Available">Available</option>
//               <option value="In Progress">In Progress</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label>
//             <input
//               id="district"
//               name="district"
//               type="text"
//               value={newTechnician.district}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-2">City</label>
//             <input
//               id="city"
//               name="city"
//               type="text"
//               value={newTechnician.city}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label>
//             <input
//               id="pincode"
//               name="pincode"
//               type="text"
//               value={newTechnician.pincode}
//               onChange={handleAddChange}
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Add Technician
//           </button>
//           <button
//             onClick={closeAddModal}
//             className="ml-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
//           >
//             Cancel
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// const modalStyles = {
//   content: {
//     maxWidth: '600px',
//     margin: 'auto',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   }
// };

// export default TechnicianView;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility reasons

const BASE_URL = 'http://localhost:8000/';

const TechnicianView = () => {
  const [technicians, setTechnicians] = useState([]);
  const [selectedTechnician, setSelectedTechnician] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [newTechnician, setNewTechnician] = useState({
    tname: '',
    contact: '',
    username: '',
    password: '',
    domain: '',
    skill: '',
    status: '',
    district: '',
    city: '',
    pincode: ''
  });

  useEffect(() => {
    fetchTechnicians();
  }, []);

  const fetchTechnicians = async () => {
    try {
      const response = await axios.get(`${BASE_URL}tech/all`);
      setTechnicians(response.data);
    } catch (error) {
      console.error('Error fetching technicians', error);
    }
  };

  const fetchTechnicianTasks = async (techId) => {
    try {
      const response = await axios.get(`${BASE_URL}servicerequests`);
      const allRequests = response.data;
      const technicianTasks = allRequests.filter(
        request => request.technician?.techId === techId
      );
      setTasks(technicianTasks);
    } catch (error) {
      console.error('Error fetching technician tasks', error);
    }
  };

  const openViewModal = (technician) => {
    setSelectedTechnician(technician);
    fetchTechnicianTasks(technician.techId);
  };

  const closeViewModal = () => {
    setSelectedTechnician(null);
    setTasks([]);
  };

  const openAddModal = () => {
    setAddModalIsOpen(true);
  };

  const closeAddModal = () => {
    setAddModalIsOpen(false);
    setNewTechnician({
      tname: '',
      contact: '',
      username: '',
      password: '',
      domain: '',
      skill: '',
      status: '',
      district: '',
      city: '',
      pincode: ''
    });
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewTechnician(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}tech`, newTechnician);
      const requestData = {
        technician: response.data,
        password: newTechnician.password
      };
      await axios.post(`${BASE_URL}tech/sendmail`, requestData);
      fetchTechnicians();
      closeAddModal();
    } catch (error) {
      console.error('Error adding technician', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Technicians 🛠️</h1>
      <button
        onClick={openAddModal}
        className="mb-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Add Technician
      </button>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-4 px-6 border-b text-left">Name</th>
              <th className="py-4 px-6 border-b text-left">Contact</th>
              <th className="py-4 px-6 border-b text-left">Username</th>
              <th className="py-4 px-6 border-b text-left">Skill</th>
              <th className="py-4 px-6 border-b text-left">Status</th>
              <th className="py-4 px-6 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {technicians.map(tech => (
              <tr key={tech.id} className="hover:bg-gray-100">
                <td className="py-4 px-6 border-b text-left">{tech.tname}</td>
                <td className="py-4 px-6 border-b text-left">{tech.contact}</td>
                <td className="py-4 px-6 border-b text-left">{tech.username}</td>
                <td className="py-4 px-6 border-b text-left">{tech.skill}</td>
                <td className="py-4 px-6 border-b text-left">{tech.status}</td>
                <td className="py-4 px-6 border-b text-left">
                  <button
                    onClick={() => openViewModal(tech)}
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Technician Tasks Modal */}
      <Modal
        isOpen={!!selectedTechnician}
        onRequestClose={closeViewModal}
        contentLabel="Technician Tasks"
        style={modalStyles}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tasks for {selectedTechnician?.tname}</h2>
        {tasks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tasks.map(task => (
              <div key={task.reqid} className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{task.servicetype}</h3>
                <p><strong>Issue Description:</strong> {task.issuedes}</p>
                <p><strong>Condition:</strong> {task.productCondition}</p>
                <p><strong>Status:</strong> {task.servicests}</p>
                <p><strong>Preferred Date:</strong> {task.preferredDate}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-700">No tasks assigned.</p>
        )}
        <button
          onClick={closeViewModal}
          className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </Modal>

      {/* Add Technician Modal */}
      <Modal
        isOpen={addModalIsOpen}
        onRequestClose={closeAddModal}
        contentLabel="Add Technician"
        style={modalStyles}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Technician</h2>
        <form onSubmit={handleAddSubmit}>
          <div className="mb-4">
            <label htmlFor="tname" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
            <input
              id="tname"
              name="tname"
              type="text"
              value={newTechnician.tname}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact</label>
            <input
              id="contact"
              name="contact"
              type="text"
              value={newTechnician.contact}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={newTechnician.username}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={newTechnician.password}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="domain" className="block text-sm font-medium text-gray-600 mb-2">Domain</label>
            <input
              id="domain"
              name="domain"
              type="text"
              value={newTechnician.domain}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="skill" className="block text-sm font-medium text-gray-600 mb-2">Skill</label>
            <select
              id="skill"
              name="skill"
              value={newTechnician.skill}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Skill</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
              <option value="HVAC">HVAC</option>
              <option value="Electrical">Electrical</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
            <select
              id="status"
              name="status"
            //   value={newTechnician.status}
            value={"Available"}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Status</option>
              <option value="Assigned">Assigned</option>
              <option value="Available">Available</option>
              <option value="In Progress">In Progress</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label>
            <input
              id="district"
              name="district"
              type="text"
              value={newTechnician.district}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-2">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={newTechnician.city}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label>
            <input
              id="pincode"
              name="pincode"
              type="text"
              value={newTechnician.pincode}
              onChange={handleAddChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Add Technician
          </button>
          <button
            onClick={closeAddModal}
            className="ml-4 px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

const modalStyles = {
  content: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  }
};

export default TechnicianView;
