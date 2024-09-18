// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const BASE_URL = 'http://localhost:8000/';

// const ViewServiceRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [selectedRequestId, setSelectedRequestId] = useState(null);
//   const [billSummary, setBillSummary] = useState(null);

//   useEffect(() => {
//     const fetchRequestsAndPayments = async () => {
//       try {
//         // Fetch all service requests
//         const requestsResponse = await axios.get(`${BASE_URL}servicerequests`);
//         setRequests(requestsResponse.data);

//         // Fetch all payments
//         const paymentsResponse = await axios.get(`${BASE_URL}payment/all`);
//         setPayments(paymentsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchRequestsAndPayments();
//   }, []);

//   const handleDownloadBill = (paymentDetails) => {
//     const { servicecharge, sparepartcharge, billamt, customer, product, issuedes } = paymentDetails;

//     const doc = new jsPDF();
//     doc.text('Stark Electronics', 70, 10);
//     doc.text('Bill Summary', 20, 15);

//     doc.autoTable({
//       startY: 20,
//       head: [['Title', 'Details']],
//       body: [
//         ['Customer Name', customer.name],
//         ['Customer Email', customer.email],
//         ['Product', product.appliances.productname],
//         ['Issue', issuedes],
//         ['Service Charges', `$${servicecharge}`],
//         ['Spare Parts Charges', `$${sparepartcharge}`],
//         ['Total Amount', `$${billamt}`],
//       ],
//     });
//     doc.save('bill_summary.pdf');
//   };

//   const filteredPayments = selectedRequestId
//     ? payments.filter(payment => payment.request.reqid == selectedRequestId)
//     : [];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Service Requests</h1>

//       {requests.length === 0 ? (
//         <div className="text-center text-gray-600">No service requests found.</div>
//       ) : (
//         requests.map((request) => (
//           <div key={request.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
//             <h2 className="text-3xl font-semibold mb-4 text-gray-800">Request Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-green-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Customer Information</h3>
//                 <p><strong>Name:</strong> {request.customer.name}</p>
//                 <p><strong>Email:</strong> {request.customer.email}</p>
//                 <p><strong>Phone:</strong> {request.customer.contact}</p>
//               </div>
//               <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Product Information</h3>
//                 <p><strong>Product Name:</strong> {request.product.appliances.productname}</p>
//                 <p><strong>Category:</strong> {request.product.appliances.category}</p>
//                 <p><strong>Model :</strong> {request.product.appliances.model}</p>
//               </div>
//               <div className="bg-orange-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Technician Information</h3>
//                 <p><strong>Name:</strong> {request.technician ? request.technician.tname : 'N/A'}</p>
//                 <p><strong>Domain:</strong> {request.technician ? request.technician.domain : 'N/A'}</p>
//                 <p><strong>Phone:</strong> {request.technician ? request.technician.contact : 'N/A'}</p>
//               </div>
//               <div className="bg-pink-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Service Information</h3>
               
//                 <p><strong>Issue Description:</strong> {request.issuedes}</p>
//                 <p><strong>Service Status:</strong> {request.servicests}</p>
//                 <p><strong>Remarks:</strong> {request.remark? request.remark :'N/A'}</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => setSelectedRequestId(request.id)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//               >
//                 View Payment Details
//               </button>
//             </div>

//             {selectedRequestId === request.id && filteredPayments.length > 0 && (
//               <div className="mt-6">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-800">Payment Details</h3>
//                 {filteredPayments.map(payment => (
//                   <div key={payment.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
//                     <p><strong>Service Charges:</strong> ${payment.servicecharge}</p>
//                     <p><strong>Spare Parts Charges:</strong> ${payment.sparepartcharge}</p>
//                     <p><strong>Total Amount:</strong> ${payment.billamt}</p>
//                     <p><strong>Status:</strong> {payment.status}</p>
//                     <button
//                       onClick={() => handleDownloadBill(payment)}
//                       className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500"
//                     >
//                       Download Bill
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))
      
//     )}
//     </div>
//   );
// };

// export default ViewServiceRequests;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Swal from 'sweetalert2'; // Import only if used elsewhere
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const BASE_URL = 'http://localhost:8000/';

// const ViewServiceRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [selectedRequestId, setSelectedRequestId] = useState(null);

//   useEffect(() => {
//     const fetchRequestsAndPayments = async () => {
//       try {
//         // Fetch all service requests
//         const requestsResponse = await axios.get(`${BASE_URL}servicerequests`);
//         setRequests(requestsResponse.data);

//         // Fetch all payments
//         const paymentsResponse = await axios.get(`${BASE_URL}payment/all`);
//         setPayments(paymentsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchRequestsAndPayments();
//   }, []);

//   // Filter payments based on selected request ID and status
//   const filteredPayments = selectedRequestId
//     ? payments.filter(payment => 
//         payment.request.reqid === selectedRequestId && payment.status === 'Completed'
//       )
//     : [];

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Service Requests</h1>

//       {requests.length === 0 ? (
//         <div className="text-center text-gray-600">No service requests found.</div>
//       ) : (
//         requests.map((request) => (
//           <div key={request.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
//             <h2 className="text-3xl font-semibold mb-4 text-gray-800">Request Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-green-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Customer Information</h3>
//                 <p><strong>Name:</strong> {request.customer ? request.customer.name : 'N/A'}</p>
//                 <p><strong>Email:</strong> {request.customer ? request.customer.email : 'N/A'}</p>
//                 <p><strong>Phone:</strong> {request.customer ? request.customer.contact : 'N/A'}</p>
//               </div>
//               <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Product Information</h3>
//                 <p><strong>Product Name:</strong> {request.product ? request.product.appliances.productname : 'N/A'}</p>
//                 <p><strong>Category:</strong> {request.product ? request.product.appliances.category : 'N/A'}</p>
//                 <p><strong>Model:</strong> {request.product ? request.product.appliances.model : 'N/A'}</p>
//               </div>
//               <div className="bg-orange-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Technician Information</h3>
//                 <p><strong>Name:</strong> {request.technician ? request.technician.tname : 'N/A'}</p>
//                 <p><strong>Domain:</strong> {request.technician ? request.technician.domain : 'N/A'}</p>
//                 <p><strong>Phone:</strong> {request.technician ? request.technician.contact : 'N/A'}</p>
//               </div>
//               <div className="bg-pink-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Service Information</h3>
//                 <p><strong>Issue Description:</strong> {request.issuedes}</p>
//                 <p><strong>Service Status:</strong> {request.servicests}</p>
//                 <p><strong>Remarks:</strong> {request.remark ? request.remark : 'N/A'}</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => setSelectedRequestId(request.reqid)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//               >
//                 {selectedRequestId == request.reqid ? 'Hide Payment Details' : 'View Payment Details'}
//               </button>
//             </div>

//             {selectedRequestId == request.reqid && filteredPayments.length > 0 && (
//               <div className="mt-6">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-800">Payment Details</h3>
//                 {filteredPayments.map(payment => (
//                   <div key={payment.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
//                     <p><strong>Service Charges:</strong> ${payment.servicecharge}</p>
//                     <p><strong>Spare Parts Charges:</strong> ${payment.sparepartcharge}</p>
//                     <p><strong>Total Amount:</strong> ${payment.billamt}</p>
//                     <p><strong>Status:</strong> {payment.status}</p>
//                     {/* Removed the download button */}
//                   </div>
//                 ))}
//                 {filteredPayments.length === 0 && (
//                   <div className="text-gray-600">No completed payment details found.</div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ViewServiceRequests;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import Swal from 'sweetalert2'; // Import only if used elsewhere
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const BASE_URL = 'http://localhost:8000/';

// const ViewServiceRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [payments, setPayments] = useState([]);
//   const [selectedRequestId, setSelectedRequestId] = useState(null);

//   useEffect(() => {
//     const fetchRequestsAndPayments = async () => {
//       try {
//         // Fetch all service requests
//         const requestsResponse = await axios.get(`${BASE_URL}servicerequests`);
//         setRequests(requestsResponse.data);

//         // Fetch all payments
//         const paymentsResponse = await axios.get(`${BASE_URL}payment/all`);
//         setPayments(paymentsResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchRequestsAndPayments();
//   }, []);

//   // Filter payments based on selected request ID and status
//   const paymentsForSelectedRequest = payments.filter(payment => 
//     payment.request.reqid == selectedRequestId && payment.status === 'Completed'
//   );

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Service Requests</h1>

//       {requests.length === 0 ? (
//         <div className="text-center text-gray-600">No service requests found.</div>
//       ) : (
//         requests.map((request) => (
//           <div key={request.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
//             <h2 className="text-3xl font-semibold mb-4 text-gray-800">Request Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-green-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Customer Information</h3>
//                 <p><strong>Name:</strong> {request.customer ? request.customer.name : 'N/A'}</p>
//                 <p><strong>Email:</strong> {request.customer ? request.customer.email : 'N/A'}</p>
//                 <p><strong>Phone:</strong> {request.customer ? request.customer.contact : 'N/A'}</p>
//               </div>
//               <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Product Information</h3>
//                 <p><strong>Product Name:</strong> {request.product ? request.product.appliances.productname : 'N/A'}</p>
//                 <p><strong>Category:</strong> {request.product ? request.product.appliances.category : 'N/A'}</p>
//                 <p><strong>Model:</strong> {request.product ? request.product.appliances.model : 'N/A'}</p>
//               </div>
//               <div className="bg-orange-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Technician Information</h3>
//                 <p><strong>Name:</strong> {request.technician ? request.technician.tname : 'N/A'}</p>
//                 <p><strong>Domain:</strong> {request.technician ? request.technician.domain : 'N/A'}</p>
//                 <p><strong>Phone:</strong> {request.technician ? request.technician.contact : 'N/A'}</p>
//               </div>
//               <div className="bg-pink-50 p-4 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-700">Service Information</h3>
//                 <p><strong>Issue Description:</strong> {request.issuedes}</p>
//                 <p><strong>Service Status:</strong> {request.servicests}</p>
//                 <p><strong>Remarks:</strong> {request.remark ? request.remark : 'N/A'}</p>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 onClick={() => setSelectedRequestId(request.reqid)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//               >
//                 {selectedRequestId == request.reqid ? 'Hide Payment Details' : 'View Payment Details'}
//               </button>
//             </div>

//             {selectedRequestId == request.reqid && (
//               <div className="mt-6">
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-800">Payment Details</h3>
//                 {paymentsForSelectedRequest.length > 0 ? (
//                   paymentsForSelectedRequest.map(payment => (
//                     <div key={payment.id} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
//                       <p><strong>Service Charges:</strong> ${payment.servicecharge}</p>
//                       <p><strong>Spare Parts Charges:</strong> ${payment.sparepartcharge}</p>
//                       <p><strong>Total Amount:</strong> ${payment.billamt}</p>
//                       <p><strong>Status:</strong> {payment.status}</p>
//                       {/* Removed the download button */}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-gray-600">No completed payment details found.</div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default ViewServiceRequests;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const BASE_URL = 'http://localhost:8000/';

const ViewServiceRequests = () => {
  const [requests, setRequests] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceStatusFilter, setServiceStatusFilter] = useState('');

  useEffect(() => {
    const fetchRequestsAndPayments = async () => {
      try {
        // Fetch all service requests
        const requestsResponse = await axios.get(`${BASE_URL}servicerequests`);
        setRequests(requestsResponse.data);

        // Fetch all payments
        const paymentsResponse = await axios.get(`${BASE_URL}payment/all`);
        setPayments(paymentsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRequestsAndPayments();
  }, []);

  // Filter requests based on search term and service status
  const filteredRequests = requests.filter(request => {
    const customerName = request.customer ? request.customer.name.toLowerCase() : '';
    const technicianName = request.technician ? request.technician.tname.toLowerCase() : '';
    const isMatchingSearchTerm = customerName.includes(searchTerm.toLowerCase()) || technicianName.includes(searchTerm.toLowerCase());
    const isMatchingServiceStatus = serviceStatusFilter ? request.servicests === serviceStatusFilter : true;
    return isMatchingSearchTerm && isMatchingServiceStatus;
  });

  // Function to download the bill
  const downloadBill = (payment) => {
    if (!payment) return;

    const doc = new jsPDF();
    doc.text('Stark Electronics', 70, 10);
    doc.text('Bill Summary', 20, 15);

    doc.autoTable({
      startY: 20,
      head: [['Title', 'Details']],
      body: [
        ['Customer Name', `${payment.request.customer.name}`],
        ['Customer Email', `${payment.request.customer.email}`],
        ['Product', `${payment.request.product.appliances.productname}`],
        ['Issue', `${payment.request.issuedes}`],
        ['Service Charges', `${payment.servicecharge}`],
        ['Spare Parts Charges', `${payment.sparepartcharge}`],
        ['Total Amount', `${payment.billamt}`],
      ],
    });

    doc.save('bill_summary.pdf');
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Service Requests</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by customer or technician name"
          className="p-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={serviceStatusFilter}
          onChange={(e) => setServiceStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Assigned">Assigned</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {filteredRequests.length === 0 ? (
        <div className="text-center text-gray-600">No service requests found.</div>
      ) : (
        filteredRequests.map((request) => {
          // Get payments related to this request
          const paymentsForRequest = payments.filter(payment => payment.request.reqid === request.reqid);

          return (
            <div key={request.id} className="bg-white shadow-lg rounded-lg p-6 mb-6">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Request Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Customer Information</h3>
                  <p><strong>Name:</strong> {request.customer ? request.customer.name : 'N/A'}</p>
                  <p><strong>Email:</strong> {request.customer ? request.customer.email : 'N/A'}</p>
                  <p><strong>Phone:</strong> {request.customer ? request.customer.contact : 'N/A'}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Product Information</h3>
                  <p><strong>Product Name:</strong> {request.product ? request.product.appliances.productname : 'N/A'}</p>
                  <p><strong>Category:</strong> {request.product ? request.product.appliances.category : 'N/A'}</p>
                  <p><strong>Model:</strong> {request.product ? request.product.appliances.model : 'N/A'}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Technician Information</h3>
                  <p><strong>Name:</strong> {request.technician ? request.technician.tname : 'N/A'}</p>
                  <p><strong>Domain:</strong> {request.technician ? request.technician.domain : 'N/A'}</p>
                  <p><strong>Phone:</strong> {request.technician ? request.technician.contact : 'N/A'}</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Service Information</h3>
                  <p><strong>Issue Description:</strong> {request.issuedes}</p>
                  <p><strong>Service Status:</strong> {request.servicests}</p>
                  <p><strong>Remarks:</strong> {request.remark ? request.remark : 'N/A'}</p>
                </div>
              </div>

              {paymentsForRequest.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Payment Details</h3>
                  {paymentsForRequest.map(payment => (
                    <div key={payment.id} className="bg-gray-300 p-4 rounded-lg shadow-md mb-4">
                      <p><strong>Service Charges:</strong> {payment.servicecharge}</p>
                      <p><strong>Spare Parts Charges:</strong> {payment.sparepartcharge}</p>
                      <p><strong>Total Amount:</strong> {payment.billamt}</p>
                      <p><strong>Status:</strong> {payment.status}</p>
                      <div className="mt-4">
                        <button
                          onClick={() => downloadBill(payment)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                        >
                          Download Bill
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ViewServiceRequests;
