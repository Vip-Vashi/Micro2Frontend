// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // For accessibility reasons

// const AdminReq = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/servicerequests');
//         setRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching service requests', error);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedBill(null);
//   };

//   // Inline styles
//   const modalStyles = {
//     content: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       background: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '90%',
//       maxHeight: '80%',
//       overflow: 'auto',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Customers Requests</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-2"><strong>Issue Description:</strong> {request.issuedes}</p>
//             <p className="text-gray-700 mb-2"><strong>Product Condition:</strong> {request.productCondition}</p>
//             <p className="text-gray-700 mb-2"><strong>Status:</strong> {request.servicests}</p>
//             <p className="text-gray-700 mb-2"><strong>Preferred Date:</strong> {request.preferredDate}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer:</strong> {request.customer.name}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer Address:</strong> {request.customer.address}</p>
//             <p className="text-gray-700 mb-2"><strong>District:</strong> {request.customer.district}</p>
//             <p className="text-gray-700 mb-2"><strong>City    :</strong> {request.customer.city}</p>
//             <p className="text-gray-700 mb-2"><strong>Pincode :</strong> {request.customer.pincode}</p>
//             <button
//               onClick={() => openModal(request.product.imageBlob)}
//               className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//             >
//               View Bill Invoice
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for viewing bill invoice */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="View Bill Invoice"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bill Invoice</h2>
//         {selectedBill && (
//           <img
//             src={`data:image/jpeg;base64,${selectedBill}`}
//             alt="Bill Invoice"
//             style={{
//               width: '100%',
//               height: 'auto',
//               maxHeight: '70vh',
//               objectFit: 'contain',
//             }}
//           />
//         )}
//         <button
//           onClick={closeModal}
//           className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default AdminReq;


//*************************************************/
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // For accessibility reasons

// const AdminReq = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
//   const [currentRequest, setCurrentRequest] = useState(null);
//   const [editForm, setEditForm] = useState({
//     servicetype: '',
//     issuedes: '',
//     productCondition: '',
//     servicests: '',
//     preferredDate: '',
//     feedback: ''
//     // product: 0,
//     // customer: 0,
//     // technician: 0
//   });

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/servicerequests');
//         setRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching service requests', error);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedBill(null);
//   };

//   const openEditModal = (request) => {
//     setCurrentRequest(request);
//     setEditForm({
//       servicetype: request.servicetype,
//       issuedes: request.issuedes,
//       productCondition: request.productCondition,
//       servicests: request.servicests,
//       preferredDate: request.preferredDate,
//       feedback: request.feedback,
//       product: currentRequest.product.productId,
//       customer: currentRequest.customer.cid,
//       technician: currentRequest.technician.TechId

//     });
//     setEditModalIsOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalIsOpen(false);
//     setCurrentRequest(null);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
// console.log("*****************")
// console.log(editForm)
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:8000/servicerequests/${currentRequest.reqid}`, editForm);
//       const updatedRequests = requests.map(req =>
//         req.reqid === currentRequest.reqid ? { ...req, ...editForm } : req
//       );
//       setRequests(updatedRequests);
//       closeEditModal();
//     } catch (error) {
//       console.error('Error updating service request', error);
//     }
//   };

//   // Inline styles
//   const modalStyles = {
//     content: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       background: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '90%',
//       maxHeight: '80%',
//       overflow: 'auto',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Customers Requests</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-2"><strong>Issue Description:</strong> {request.issuedes}</p>
//             <p className="text-gray-700 mb-2"><strong>Product Condition:</strong> {request.productCondition}</p>
//             <p className="text-gray-700 mb-2"><strong>Status:</strong> {request.servicests}</p>
//             <p className="text-gray-700 mb-2"><strong>Preferred Date:</strong> {request.preferredDate}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer:</strong> {request.customer.name}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer Address:</strong> {request.customer.address}</p>
//             <p className="text-gray-700 mb-2"><strong>District:</strong> {request.customer.district}</p>
//             <p className="text-gray-700 mb-2"><strong>Pincode:</strong> {request.customer.pincode}</p>

//             <button
//               onClick={() => openModal(request.product.imageBlob)}
//               className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-2"
//             >
//               View Bill Invoice
//             </button>
//             <button
//               onClick={() => openEditModal(request)}
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for viewing bill invoice */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="View Bill Invoice"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bill Invoice</h2>
//         {selectedBill && (
//           <img
//             src={`data:image/jpeg;base64,${selectedBill}`}
//             alt="Bill Invoice"
//             style={{
//               width: '100%',
//               height: 'auto',
//               maxHeight: '70vh',
//               objectFit: 'contain',
//             }}
//           />
//         )}
//         <button
//           onClick={closeModal}
//           className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Close
//         </button>
//       </Modal>

//       {/* Modal for editing request */}
//       <Modal
//         isOpen={editModalIsOpen}
//         onRequestClose={closeEditModal}
//         contentLabel="Edit Service Request"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Service Request</h2>
//         {currentRequest && (
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label htmlFor="servicetype" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label>
//               <input
//                 id="servicetype"
//                 name="servicetype"
//                 type="text"
//                 value={editForm.servicetype}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="issuedes" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label>
//               <textarea
//                 id="issuedes"
//                 name="issuedes"
//                 value={editForm.issuedes}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="productCondition" className="block text-sm font-medium text-gray-600 mb-2">Product Condition</label>
//               <input
//                 id="productCondition"
//                 name="productCondition"
//                 type="text"
//                 value={editForm.productCondition}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="servicests" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
//               <input
//                 id="servicests"
//                 name="servicests"
//                 type="text"
//                 value={editForm.servicests}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Date</label>
//               <input
//                 id="preferredDate"
//                 name="preferredDate"
//                 type="date"
//                 value={editForm.preferredDate}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="feedback" className="block text-sm font-medium text-gray-600 mb-2">Feedback</label>
//               <textarea
//                 id="feedback"
//                 name="feedback"
//                 value={editForm.feedback}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 mr-2"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={closeEditModal}
//               className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//             >
//               Cancel
//             </button>
//           </form>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default AdminReq;
//******* */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';

// Modal.setAppElement('#root'); // For accessibility reasons

// const AdminReq = () => {
//   const [requests, setRequests] = useState([]);
//   const [selectedBill, setSelectedBill] = useState(null);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [editModalIsOpen, setEditModalIsOpen] = useState(false);
//   const [currentRequest, setCurrentRequest] = useState(null);
//   const [editForm, setEditForm] = useState({
//     servicetype: '',
//     issuedes: '',
//     productCondition: '',
//     servicests: '',
//     preferredDate: '',
//     feedback: ''
//   });

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/servicerequests');
//         setRequests(response.data);
//       } catch (error) {
//         console.error('Error fetching service requests', error);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const openModal = (bill) => {
//     setSelectedBill(bill);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedBill(null);
//   };

//   const openEditModal = (request) => {
//     setCurrentRequest({
//       ...request,
//       product: request.product || { id: null },
//       customer: request.customer || { id: null },
//       technician: request.technician || { id: null }
//     });
//     setEditForm({
//       servicetype: request.servicetype,
//       issuedes: request.issuedes,
//       productCondition: request.productCondition,
//       servicests: request.servicests,
//       preferredDate: request.preferredDate,
//       feedback: request.feedback
//     });
//     setEditModalIsOpen(true);
//   };

//   const closeEditModal = () => {
//     setEditModalIsOpen(false);
//     setCurrentRequest(null);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();

//     if (!currentRequest || !currentRequest.product || !currentRequest.customer || !currentRequest.technician) {
//       console.error('Missing required fields in currentRequest');
//       return;
//     }

//     try {
//       console.log("***")
//       console.log(editForm);
//       const formData = new FormData();
//       formData.append('servicetype', editForm.servicetype);
//       formData.append('issuedes', editForm.issuedes);
//       formData.append('productCondition', editForm.productCondition);
//       formData.append('servicests', editForm.servicests);
//       formData.append('feedback', editForm.feedback);
//       formData.append('preferredDate', editForm.preferredDate);
//       formData.append('product', currentRequest.product.productId);
//       formData.append('customer', currentRequest.customer.cid);
//       formData.append('technician', currentRequest.technician.TechId);
//        console.log(formData);
//       await axios.put(`http://localhost:8000/servicerequests/edit/${currentRequest.reqid}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const updatedRequests = requests.map(req =>
//         req.reqid === currentRequest.reqid ? { ...req, ...editForm } : req
//       );
//       setRequests(updatedRequests);
//       closeEditModal();
//     } catch (error) {
//       console.error('Error updating service request', error);
//     }
//   };

//   const modalStyles = {
//     content: {
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       background: 'white',
//       padding: '20px',
//       borderRadius: '8px',
//       maxWidth: '90%',
//       maxHeight: '80%',
//       overflow: 'auto',
//     },
//     overlay: {
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Customers Requests</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {requests.map((request) => (
//           <div key={request.reqid} className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">{request.servicetype}</h2>
//             <p className="text-gray-700 mb-2"><strong>Issue Description:</strong> {request.issuedes}</p>
//             <p className="text-gray-700 mb-2"><strong>Product Condition:</strong> {request.productCondition}</p>
//             <p className="text-gray-700 mb-2"><strong>Status:</strong> {request.servicests}</p>
//             <p className="text-gray-700 mb-2"><strong>Preferred Date:</strong> {request.preferredDate}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer:</strong> {request.customer.name}</p>
//             <p className="text-gray-700 mb-2"><strong>Customer Address:</strong> {request.customer.address}</p>
//             <p className="text-gray-700 mb-2"><strong>District:</strong> {request.customer.district}</p>
//             <p className="text-gray-700 mb-2"><strong>Pincode:</strong> {request.customer.pincode}</p>

//             <button
//               onClick={() => openModal(request.product.imageBlob)}
//               className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-2"
//             >
//               View Bill Invoice
//             </button>
//             <button
//               onClick={() => openEditModal(request)}
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal for viewing bill invoice */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="View Bill Invoice"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bill Invoice</h2>
//         {selectedBill && (
//           <img
//             src={`data:image/jpeg;base64,${selectedBill}`}
//             alt="Bill Invoice"
//             style={{
//               width: '100%',
//               height: 'auto',
//               maxHeight: '70vh',
//               objectFit: 'contain',
//             }}
//           />
//         )}
//         <button
//           onClick={closeModal}
//           className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Close
//         </button>
//       </Modal>

//       {/* Modal for editing request */}
//       <Modal
//         isOpen={editModalIsOpen}
//         onRequestClose={closeEditModal}
//         contentLabel="Edit Service Request"
//         style={modalStyles}
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Service Request</h2>
//         {currentRequest && (
//           <form onSubmit={handleEditSubmit}>
//             <div className="mb-4">
//               <label htmlFor="servicetype" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label>
//               <input
//                 id="servicetype"
//                 name="servicetype"
//                 type="text"
//                 value={editForm.servicetype}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="issuedes" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label>
//               <textarea
//                 id="issuedes"
//                 name="issuedes"
//                 value={editForm.issuedes}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="productCondition" className="block text-sm font-medium text-gray-600 mb-2">Product Condition</label>
//               <input
//                 id="productCondition"
//                 name="productCondition"
//                 type="text"
//                 value={editForm.productCondition}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="servicests" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
//               <input
//                 id="servicests"
//                 name="servicests"
//                 type="text"
//                 value={editForm.servicests}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Date</label>
//               <input
//                 id="preferredDate"
//                 name="preferredDate"
//                 type="date"
//                 value={editForm.preferredDate}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="feedback" className="block text-sm font-medium text-gray-600 mb-2">Feedback</label>
//               <textarea
//                 id="feedback"
//                 name="feedback"
//                 value={editForm.feedback}
//                 onChange={handleEditChange}
//                 className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows="3"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 mr-2"
//             >
//               Save Changes
//             </button>
//             <button
//               onClick={closeEditModal}
//               className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
//             >
//               Cancel
//             </button>
//           </form>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default AdminReq;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // For accessibility reasons

const AdminReq = () => {
  const [requests, setRequests] = useState([]);
  const [selectedBill, setSelectedBill] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);
  const [editForm, setEditForm] = useState({
    servicetype: '',
    issuedes: '',
    productCondition: '',
    servicests: '',
    preferredDate: '',
    feedback: '',
    product: '',
    customer: '',
    technician: ''
  });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:8000/servicerequests');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching service requests', error);
      }
    };

    fetchRequests();
  }, []);

  const openModal = (bill) => {
    setSelectedBill(bill);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedBill(null);
  };

  const openEditModal = (request) => {
    setCurrentRequest(request);
    setEditForm({
      servicetype: request.servicetype || '',
      issuedes: request.issuedes || '',
      productCondition: request.productCondition || '',
      servicests: request.servicests || '',
      preferredDate: request.preferredDate || '',
      feedback: request.feedback || '',
      product: request.product?.productId || '',
      customer: request.customer?.cid || '',
      technician: request.technician?.TechId || ''
    });
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setEditModalIsOpen(false);
    setCurrentRequest(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!currentRequest) return;

    try {
      // Convert form data to URLSearchParams for backend @RequestParam
      const formData = new FormData();
      // formData.append('servicetype', editForm.servicetype);
      // formData.append('issuedes', editForm.issuedes);
      // formData.append('productCondition', editForm.productCondition);
      formData.append('reqid',currentRequest.reqid)
      formData.append('sts', editForm.servicests);
      // formData.append('feedback', editForm.feedback);
      // formData.append('preferredDate', editForm.preferredDate);
      // formData.append('product', editForm.product);
      // formData.append('customer', editForm.customer);
      // formData.append('technician', editForm.technician);

      await axios.put('http://localhost:8000/servicerequests/sts', formData);
       
      const updatedRequests = requests.map(req =>
        req.reqid === currentRequest.reqid ? { ...req, ...editForm } : req
      );

      setRequests(updatedRequests);
      closeEditModal();
      window.location.reload();
    } catch (error) {
      console.error('Error updating service request', error);
    }
  };

  // Inline styles
  const modalStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '90%',
      maxHeight: '80%',
      overflow: 'auto',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Customers Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {requests.map((request) => (
          <div key={request.reqid} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{request.servicetype}</h2>
            <p className="text-gray-700 mb-2"><strong>Issue Description:</strong> {request.issuedes}</p>
            <p className="text-gray-700 mb-2"><strong>Product Condition:</strong> {request.productCondition}</p>
            <p className="text-gray-700 mb-2"><strong>Status:</strong> {request.servicests}</p>
            <p className="text-gray-700 mb-2"><strong>Preferred Date:</strong> {request.preferredDate}</p>
            <p className="text-gray-700 mb-2"><strong>Customer:</strong> {request.customer.name}</p>
            <p className="text-gray-700 mb-2"><strong>Customer Address:</strong> {request.customer.address}</p>
            <p className="text-gray-700 mb-2"><strong>District:</strong> {request.customer.district}</p>
            <p className="text-gray-700 mb-2"><strong>Pincode:</strong> {request.customer.pincode}</p>

            <button
              onClick={() => openModal(request.product.imageBlob)}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mr-2"
            >
              View Bill Invoice
            </button>
            <button
              onClick={() => openEditModal(request)}
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Modal for viewing bill invoice */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="View Bill Invoice"
        style={modalStyles}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bill Invoice</h2>
        {selectedBill && (
          <img
            src={`data:image/jpeg;base64,${selectedBill}`}
            alt="Bill Invoice"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '70vh',
              objectFit: 'contain',
            }}
          />
        )}
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        >
          Close
        </button>
      </Modal>

      {/* Modal for editing request */}
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Service Request"
        style={modalStyles}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Service Request</h2>
        {currentRequest && (
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label htmlFor="servicetype" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label>
              <input
                id="servicetype"
                name="servicetype"
                type="text"
                value={editForm.servicetype}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="issuedes" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label>
              <textarea
                id="issuedes"
                name="issuedes"
                value={editForm.issuedes}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productCondition" className="block text-sm font-medium text-gray-600 mb-2">Product Condition</label>
              <input
                id="productCondition"
                name="productCondition"
                type="text"
                value={editForm.productCondition}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="servicests" className="block text-sm font-medium text-gray-600 mb-2">Status</label>
              <input
                id="servicests"
                name="servicests"
                type="text"
                value={editForm.servicests}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Date</label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={editForm.preferredDate}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-600 mb-2">Feedback</label>
              <textarea
                id="feedback"
                name="feedback"
                value={editForm.feedback}
                onChange={handleEditChange}
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 mr-2"
            >
              Save Changes
            </button>
            <button
              onClick={closeEditModal}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Cancel
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default AdminReq;
