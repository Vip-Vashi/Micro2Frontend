// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaArrowLeft, FaSearch, FaUser } from "react-icons/fa";

// const BASE_URL = "http://localhost:8000/tech/";

// const UserRequestsPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [technicians, setTechnicians] = useState([]);
//   const [filteredTechnicians, setFilteredTechnicians] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [domainFilter, setDomainFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   useEffect(() => {
//     // Fetch user requests
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/servicerequests');
//         setRequests(response.data);
//       } catch (error) {
//         console.error("Failed to fetch requests", error);
//       }
//     };

//     // Fetch technicians
//     const fetchTechnicians = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/tech/all');
//         setTechnicians(response.data);
//         setFilteredTechnicians(response.data); // Initialize with all technicians
//       } catch (error) {
//         console.error("Failed to fetch technicians", error);
//       }
//     };

//     fetchRequests();
//     fetchTechnicians();
//   }, []);

//   const handleAssignTechnician = (request) => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedRequest(null);
//   };

//   const handleFilterChange = () => {
//     const filtered = technicians.filter((tech) => {
//       return (
//         (domainFilter === "" ||
//           tech.domain.toLowerCase().includes(domainFilter.toLowerCase())) &&
//         (locationFilter === "" ||
//           tech.district.toLowerCase().includes(locationFilter.toLowerCase()))
//       );
//     });
//     setFilteredTechnicians(filtered);

//   };
// console.log(filteredTechnicians);
//   const handleAssign = async (technicianId) => {
//     console.log("**********************")
//     console.log(selectedRequest.reqid);
//     console.log(technicianId);
//     const formData = new FormData();
//     formData.append("reqid",selectedRequest.reqid);
//     formData.append("techid",technicianId);
    
//     console.log(formData);
//     try {
//       await axios.put('http://localhost:8000/servicerequests/assign', formData);
//       // Optionally refresh the list of requests
//     //   const response = await axios.get(`${BASE_URL}/requests`);
//     //   setRequests(response.data);
//       handleCloseModal();
//     } catch (error) {
//       console.error("Failed to assign technician", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
//         <button
//           className="text-white flex items-center"
//           onClick={() => window.history.back()}
//         >
//           <FaArrowLeft className="mr-2" />
//           <span>Back</span>
//         </button>
//         <h1 className="text-xl font-bold">  Requests Appointments - Technician</h1>
//         <div></div>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-2">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-4"> <span className=" font-bold">Product Category : </span> {request.product.appliances.category}</p>
//             <p className="text-gray-700 mb-4"><span className=" font-bold">Product Name : </span>{request.product.appliances.productname}</p>
//             <p className="text-gray-700 mb-4"><span className=" font-bold">Product   Model        : </span>{request.product.appliances.model}</p>
//             <p className="text-gray-700 mb-4"><span className=" font-bold">Product Issues : </span>{request.issuedes}</p>
//             <p className="text-gray-700 mb-4"><span className=" font-bold">Customer Address : </span>{request.customer.address}</p> 
//             <p className="text-gray-700 mb-4"><span className=" font-bold">City  : </span>{request.customer.city}</p>
//            <span> <p className="text-gray-700 mb-4"><span className=" font-bold">Pincode : </span>{request.customer.district}-{request.customer.pincode}</p></span>
           
//             <button
//               onClick={() => handleAssignTechnician(request)}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//             >
//               Assign Technician
//             </button>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-xl font-bold mb-4">Assign Technician</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Domain</label>
//               <input
//                 type="text"
//                 value={domainFilter}
//                 onChange={(e) => setDomainFilter(e.target.value)}
//                 placeholder="Filter by domain"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Location</label>
//               <input
//                 type="text"
//                 value={locationFilter}
//                 onChange={(e) => setLocationFilter(e.target.value)}
//                 placeholder="Filter by location"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <button
//               onClick={handleFilterChange}
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300 mb-4"
//             >
//               Apply Filters
//             </button>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold mb-2">
//                 Available Technicians
//               </h3>
//               <ul>
//                 {filteredTechnicians.map((tech) => (
//                   <li
//                     key={tech.TechId}
//                     className="flex justify-between items-center mb-2 border-b py-2"
//                   >
//                     <div>
//                       <p className="font-semibold">{tech.tname}</p>
//                       <p className="text-gray-600">{tech.contact}</p>

//                       <p className="text-gray-600">
//                       {tech.district}- {tech.city}
//                       </p>
//                       <p className="text-gray-600">
//                         {tech.domain} - {tech.skill}
//                       </p>
//                       <p className="font-semibold">{tech.status}</p>
                     
//                     </div>
//                     <button
//                       onClick={() => handleAssign(( tech.TechId))}
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//                     >
//                       Assign
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserRequestsPage;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaArrowLeft } from "react-icons/fa";

// const BASE_URL = "http://localhost:8000/";

// const UserRequestsPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [technicians, setTechnicians] = useState([]);
//   const [filteredTechnicians, setFilteredTechnicians] = useState([]);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [domainFilter, setDomainFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");

//   useEffect(() => {
//     // Fetch user requests
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}servicerequests`);
//         setRequests(response.data);
//       } catch (error) {
//         console.error("Failed to fetch requests", error);
//       }
//     };

//     // Fetch technicians
//     const fetchTechnicians = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}tech/all`);
//         setTechnicians(response.data);
//         setFilteredTechnicians(response.data); // Initialize with all technicians
//       } catch (error) {
//         console.error("Failed to fetch technicians", error);
//       }
//     };

//     fetchRequests();
//     fetchTechnicians();
//   }, []);

//   const handleAssignTechnician = (request) => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedRequest(null);
//   };

//   const handleFilterChange = () => {
//     const filtered = technicians.filter((tech) => {
//       return (
//         (domainFilter === "" ||
//           tech.domain.toLowerCase().includes(domainFilter.toLowerCase())) &&
//         (locationFilter === "" ||
//           tech.district.toLowerCase().includes(locationFilter.toLowerCase()))
//       );
//     });
//     setFilteredTechnicians(filtered);
//   };

//   const handleAssign = async (technicianId) => {
//     if (typeof selectedRequest.reqid !== 'number' || isNaN(selectedRequest.reqid) || 
//       typeof technicianId !== 'number' || isNaN(technicianId)) {
//     console.error("Invalid data for assignment:", selectedRequest.reqid, technicianId);
//     return;
//   }
//     const formData = new FormData();
//     formData.append("reqid", selectedRequest.reqid);
//     formData.append("techid", technicianId);
//      console.log(formData);
//     try {
//       await axios.put(`${BASE_URL}servicerequests/assign`, formData);
//       // Optionally refresh the list of requests
//       handleCloseModal();
//     } catch (error) {
//       console.error("Failed to assign technician", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
//         <button
//           className="text-white flex items-center"
//           onClick={() => window.history.back()}
//         >
//           <FaArrowLeft className="mr-2" />
//           <span>Back</span>
//         </button>
//         <h1 className="text-xl font-bold">Requests Appointments - Technician</h1>
//         <div></div>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-2">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Category: </span>{request.product.appliances.category}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Name: </span>{request.product.appliances.productname}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Model: </span>{request.product.appliances.model}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Issues: </span>{request.issuedes}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Customer Address: </span>{request.customer.address}</p> 
//             <p className="text-gray-700 mb-4"><span className="font-bold">City: </span>{request.customer.city}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Pincode: </span>{request.customer.district}-{request.customer.pincode}</p>
//             <button
//               onClick={() => handleAssignTechnician(request)}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//             >
//               Assign Technician
//             </button>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-xl font-bold mb-4">Assign Technician</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Domain</label>
//               <input
//                 type="text"
//                 value={domainFilter}
//                 onChange={(e) => setDomainFilter(e.target.value)}
//                 placeholder="Filter by domain"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Location</label>
//               <input
//                 type="text"
//                 value={locationFilter}
//                 onChange={(e) => setLocationFilter(e.target.value)}
//                 placeholder="Filter by location"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <button
//               onClick={handleFilterChange}
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300 mb-4"
//             >
//               Apply Filters
//             </button>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold mb-2">Available Technicians</h3>
//               <ul>
//                 {filteredTechnicians.map((tech) => (
//                   <li
//                     key={tech.TechId}
//                     className="flex justify-between items-center mb-2 border-b py-2"
//                   >
//                     <div>
//                     {/* <p className="font-semibold">{tech.techId}</p> */}
//                       <p className="font-semibold">{tech.tname}</p>
//                       <p className="text-gray-600">{tech.contact}</p>
//                       <p className="text-gray-600">{tech.district} - {tech.city}</p>
//                       <p className="text-gray-600">{tech.domain} - {tech.skill}</p>
//                       <p className="font-semibold">{tech.status}</p>
//                     </div>
//                     <button
                    
//                       onClick={() =>
//                         {console.log("Assign button clicked for technicianId:", tech.techId);
//                         handleAssign(tech.techId)}}
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//                     >
//                       Assign
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserRequestsPage;
//******************************************************/

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaArrowLeft } from "react-icons/fa";

// const BASE_URL = "http://localhost:8000/";

// const UserRequestsPage = () => {
//   const [requests, setRequests] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [domainFilter, setDomainFilter] = useState("");
//   const [locationFilter, setLocationFilter] = useState("");
//   const [filteredTechnicians, setFilteredTechnicians] = useState([]);

//   useEffect(() => {
//     // Fetch user requests
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}servicerequests`);
//         setRequests(response.data.filter(request => !request.technician || !request.technician.techId));
//       } catch (error) {
//         console.error("Failed to fetch requests", error);
//       }
//     };

//     // Fetch technicians
//     const fetchTechnicians = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}tech/all`);
//         setFilteredTechnicians(response.data); // Initialize with all technicians
//       } catch (error) {
//         console.error("Failed to fetch technicians", error);
//       }
//     };

//     fetchRequests();
//     fetchTechnicians();
//   }, []);

//   const handleAssignTechnician = (request) => {
//     setSelectedRequest(request);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedRequest(null);
//   };

//   const handleFilterChange = () => {
//     const filtered = filteredTechnicians.filter((tech) => {
//       return (
//         (domainFilter === "" || tech.domain.toLowerCase().includes(domainFilter.toLowerCase())) &&
//         (locationFilter === "" || tech.district.toLowerCase().includes(locationFilter.toLowerCase()))
//       );
//     });
//     setFilteredTechnicians(filtered);
//   };

//   const handleAssign = async (technicianId) => {
//     // if (typeof selectedRequest.reqid !== 'number' || isNaN(selectedRequest.reqid) ||
//     //     typeof technicianId !== 'number' || isNaN(technicianId)) {
//     //   console.error("Invalid data for assignment:", selectedRequest.reqid, technicianId);
//     //   return;
//     // }
//     console.log(technicianId)
//     const formData = new FormData();
//     formData.append("reqid", selectedRequest.reqid);
//     formData.append("techid", technicianId);
//     try {
//       await axios.put(`${BASE_URL}servicerequests/assign`, formData);
//       handleCloseModal();
//       // Optionally refresh the list of requests
//       const response = await axios.get(`${BASE_URL}servicerequests`);
//       setRequests(response.data.filter(request => !request.technician || !request.technician.techId));
//     } catch (error) {
//       console.error("Failed to assign technician", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
//         <button
//           className="text-white flex items-center"
//           onClick={() => window.history.back()}
//         >
//           <FaArrowLeft className="mr-2" />
//           <span>Back</span>
//         </button>
//         <h1 className="text-xl font-bold">Requests Appointments - Technician</h1>
//         <div></div>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-semibold mb-2">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Category: </span>{request.product.appliances.category}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Name: </span>{request.product.appliances.productname}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Model: </span>{request.product.appliances.model}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Product Issues: </span>{request.issuedes}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Customer Address: </span>{request.customer.address}</p> 
//             <p className="text-gray-700 mb-4"><span className="font-bold">City: </span>{request.customer.city}</p>
//             <p className="text-gray-700 mb-4"><span className="font-bold">Pincode: </span>{request.customer.district}-{request.customer.pincode}</p>
//             <button
//               onClick={() => handleAssignTechnician(request)}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//             >
//               Assign Technician
//             </button>
//           </div>
//         ))}
//       </div>
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-xl font-bold mb-4">Assign Technician</h2>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Domain</label>
//               <input
//                 type="text"
//                 value={domainFilter}
//                 onChange={(e) => setDomainFilter(e.target.value)}
//                 placeholder="Filter by domain"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2">Location</label>
//               <input
//                 type="text"
//                 value={locationFilter}
//                 onChange={(e) => setLocationFilter(e.target.value)}
//                 placeholder="Filter by location"
//                 className="w-full px-4 py-2 border rounded mb-4"
//               />
//             </div>
//             <button
//               onClick={handleFilterChange}
//               className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300 mb-4"
//             >
//               Apply Filters
//             </button>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold mb-2">Available Technicians</h3>
//               <ul>
//                 {filteredTechnicians.map((tech) => (
//                   <li
//                     key={tech.TechId}
//                     className="flex justify-between items-center mb-2 border-b py-2"
//                   >
//                     <div>
//                       <p className="font-semibold">{tech.tname}</p>
//                       <p className="text-gray-600">{tech.contact}</p>
//                       <p className="text-gray-600">{tech.district} - {tech.city}</p>
//                       <p className="text-gray-600">{tech.domain} - {tech.skill}</p>
//                       <p className="font-semibold">{tech.status}</p>
//                     </div>
//                     <button
//                       onClick={() => handleAssign(tech.techId)}
//                       className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
//                     >
//                       Assign
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex justify-end mt-4">
//               <button
//                 onClick={handleCloseModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserRequestsPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BASE_URL = "http://localhost:8000/";

const UserRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [domainFilter, setDomainFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredTechnicians, setFilteredTechnicians] = useState([]);
  const [techniciansPage, setTechniciansPage] = useState(1);
  const [techniciansPerPage] = useState(3); // Number of technicians per page

  useEffect(() => {
    // Fetch user requests
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${BASE_URL}servicerequests`);
        setRequests(response.data.filter(request => !request.technician || !request.technician.techId));
      } catch (error) {
        console.error("Failed to fetch requests", error);
      }
    };

    // Fetch technicians
    const fetchTechnicians = async () => {
      try {
        const response = await axios.get(`${BASE_URL}tech/all`);
        setFilteredTechnicians(response.data); // Initialize with all technicians
      } catch (error) {
        console.error("Failed to fetch technicians", error);
      }
    };

    fetchRequests();
    fetchTechnicians();
  }, []);

  const handleAssignTechnician = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleFilterChange = () => {
    const filtered = filteredTechnicians.filter((tech) => {
      return (
        (domainFilter === "" || tech.domain.toLowerCase().includes(domainFilter.toLowerCase())) &&
        (locationFilter === "" || tech.district.toLowerCase().includes(locationFilter.toLowerCase()))
      );
    });
    setFilteredTechnicians(filtered);
  };

  const handleAssign = async (technicianId) => {
    if (typeof selectedRequest.reqid !== 'number' || isNaN(selectedRequest.reqid) ||
        typeof technicianId !== 'number' || isNaN(technicianId)) {
      console.error("Invalid data for assignment:", selectedRequest.reqid, technicianId);
      return;
    }
    const formData = new FormData();
    formData.append("reqid", selectedRequest.reqid);
    formData.append("techid", technicianId);
    try {
      await axios.put(`${BASE_URL}servicerequests/assign`, formData);
      handleCloseModal();
      // Optionally refresh the list of requests
      const response = await axios.get(`${BASE_URL}servicerequests`);
      setRequests(response.data.filter(request => !request.technician || !request.technician.techId));
      // alert("Technician Assigned Successfully!!")
      toast.success("Technician Assigned Successfully!!")
    } catch (error) {
      console.error("Failed to assign technician", error);
    }
  };

  // Pagination logic
  const indexOfLastTechnician = techniciansPage * techniciansPerPage;
  const indexOfFirstTechnician = indexOfLastTechnician - techniciansPerPage;
  const currentTechnicians = filteredTechnicians.slice(indexOfFirstTechnician, indexOfLastTechnician);

  const paginate = (pageNumber) => setTechniciansPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button
          className="text-white flex items-center"
          onClick={() => window.history.back()}
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>
        <h1 className="text-xl font-bold">Requests Appointments - Technician</h1>
        <div></div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-4">
        {requests.map((request) => (
          <div key={request.reqid} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{request.servicetype}</h2>
            <p className="text-gray-700 mb-4"><span className="font-bold">Product Category: </span>{request.product.appliances.category}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Product Name: </span>{request.product.appliances.productname}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Product Model: </span>{request.product.appliances.model}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Product Issues: </span>{request.issuedes}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Customer Address: </span>{request.customer.address}</p> 
            <p className="text-gray-700 mb-4"><span className="font-bold">City: </span>{request.customer.city}</p>
            <p className="text-gray-700 mb-4"><span className="font-bold">Pincode: </span>{request.customer.district}-{request.customer.pincode}</p>
            <button
              onClick={() => handleAssignTechnician(request)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
            >
              Assign Technician
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Assign Technician</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Domain</label>
              <input
                type="text"
                value={domainFilter}
                onChange={(e) => setDomainFilter(e.target.value)}
                placeholder="Filter by domain"
                className="w-full px-4 py-2 border rounded mb-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Location</label>
              <input
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="Filter by location"
                className="w-full px-4 py-2 border rounded mb-4"
              />
            </div>
            <button
              onClick={handleFilterChange}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition-colors duration-300 mb-4"
            >
              Apply Filters
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Available Technicians</h3>
              <ul>
                {currentTechnicians.map((tech) => (
                  <li
                    key={tech.TechId}
                    className="flex justify-between items-center mb-2 border-b py-2"
                  >
                    <div>
                      <p className="font-semibold">{tech.tname}</p>
                      <p className="text-gray-600">{tech.contact}</p>
                      <p className="text-gray-600">{tech.district} - {tech.city}</p>
                      <p className="text-gray-600">{tech.domain} - {tech.skill}</p>
                      <p className="font-semibold">{tech.status}</p>
                    </div>
                    <button
                      onClick={() => handleAssign(tech.techId)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors duration-300"
                    >
                      Assign
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => paginate(techniciansPage - 1)}
                disabled={techniciansPage === 1}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Previous
              </button>
              <span>Page {techniciansPage}</span>
              <button
                onClick={() => paginate(techniciansPage + 1)}
                disabled={indexOfLastTechnician >= filteredTechnicians.length}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Next
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-4"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
        <ToastContainer />
    </div>
  );
};

export default UserRequestsPage;
