// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [serviceRequests, setServiceRequests] = useState([]);
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [appliances, setAppliances] = useState([]);
//   const [isCustomerOpen, setIsCustomerOpen] = useState(false);
//   const [isAppliancesOpen, setIsAppliancesOpen] = useState(false);
//   const [isServiceRequestsOpen, setIsServiceRequestsOpen] = useState(false);

//   useEffect(() => {
//     const customerId = sessionStorage.getItem('userid');
    
//     if (customerId) {
//       // Fetch customer details (assuming the API provides an endpoint for this)
//       axios.get(`http://localhost:8000/customers/${customerId}`)
//         .then(response => setCustomerDetails(response.data))
//         .catch(error => console.error('Error fetching customer details', error));

//     //   // Fetch registered appliances for this customer (assuming the API provides an endpoint for this)
//     //   axios.get(`http://localhost:8080/customers/${customerId}/appliances`)
//     //     .then(response => setAppliances(response.data))
//     //     .catch(error => console.error('Error fetching registered appliances', error));

//       // Fetch all service requests and filter for this customer
//       axios.get('http://localhost:8000/servicerequests')
//         .then(response => {
//           const filteredRequests = response.data.filter(request => request.customer.cid == customerId);
//           setServiceRequests(filteredRequests);
//         })
//         .catch(error => console.error('Error fetching service requests', error));
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Customer Details Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//           <div className="p-4 cursor-pointer" onClick={() => setIsCustomerOpen(!isCustomerOpen)}>
//             <h2 className="text-xl font-semibold text-gray-800">Customer Details</h2>
//             <svg className={`w-6 h-6 float-right transition-transform ${isCustomerOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </div>
//           {isCustomerOpen && customerDetails && (
//             <div className="p-4 bg-gray-50">
//               <p><strong>Customer Name:</strong> {customerDetails.name}</p>
//               <p><strong>Email:</strong> {customerDetails.email}</p>
//               <p><strong>Phone:</strong> {customerDetails.contact}</p>
//               {/* Add more customer details here */}
//             </div>
//           )}
//         </div>

//         {/* Registered Appliances Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//           <div className="p-4 cursor-pointer" onClick={() => setIsAppliancesOpen(!isAppliancesOpen)}>
//             <h2 className="text-xl font-semibold text-gray-800">Registered Appliances</h2>
//             <svg className={`w-6 h-6 float-right transition-transform ${isAppliancesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </div>
//           {isAppliancesOpen && (
//             <div className="p-4 bg-gray-50">
//               {appliances.length > 0 ? (
//                 <ul>
//                   {appliances.map((appliance, index) => (
//                     <li key={index} className="mb-2 p-2 border-b border-gray-200">
//                       {appliance.name}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No appliances registered</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Service Requests Card */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//           <div className="p-4 cursor-pointer" onClick={() => setIsServiceRequestsOpen(!isServiceRequestsOpen)}>
//             <h2 className="text-xl font-semibold text-gray-800">Service Requests History</h2>
//             <svg className={`w-6 h-6 float-right transition-transform ${isServiceRequestsOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//             </svg>
//           </div>
//           {isServiceRequestsOpen && (
//             <div className="p-4 bg-gray-50">
//               {serviceRequests.length > 0 ? (
//                 <ul>
//                   {serviceRequests.map((request) => (
//                     <li key={request.reqid} className="mb-4 p-4 bg-white shadow-md rounded-md">
//                       <p><strong>Request ID:</strong> {request.reqid}</p>
//                       <p><strong>Service Type:</strong> {request.servicetype}</p>
//                       <p><strong>Issue Description:</strong> {request.issuedes}</p>
//                       <p><strong>Product Condition:</strong> {request.productCondition}</p>
//                       <p><strong>Status:</strong> {request.servicests}</p>
//                       {/* <p><strong>Preferred Date:</strong> {request.preferredDate}</p> */}
//                       {/* <p><strong>Feedback:</strong> {request.feedback}</p> */}
//                       {/* <p><strong>Rating:</strong> {request.rating}</p> */}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No service requests available</p>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';

const AdminDashboard = () => {
  const [serviceRequests, setServiceRequests] = useState([]);
  const [customerDetails, setCustomerDetails] = useState(null);
  const [appliances, setAppliances] = useState([]);
  const [isCustomerOpen, setIsCustomerOpen] = useState(false);
  const [isAppliancesOpen, setIsAppliancesOpen] = useState(false);
  const [isServiceRequestsOpen, setIsServiceRequestsOpen] = useState(false);

  useEffect(() => {
    const customerId = sessionStorage.getItem('userid');
    
    if (customerId) {
      // Fetch customer details
      axios.get(`http://localhost:8000/customers/${customerId}`)
        .then(response => setCustomerDetails(response.data))
        .catch(error => console.error('Error fetching customer details', error));

      // Fetch all registered appliances and filter by customer ID
    //   axios.get('http://localhost:8000/products')
    //     .then(response => {
    //       const customerAppliances = response.data.filter(product => product.customer.cid == customerId);
    //       setAppliances(customerAppliances);
    //     })
    //     .catch(error => console.error('Error fetching registered appliances', error));
console.log(appliances);
      // Fetch all service requests and filter by customer ID
      axios.get('http://localhost:8000/servicerequests')
        .then(response => {
          const filteredRequests = response.data.filter(request => request.customer.cid == customerId);
          setServiceRequests(filteredRequests);
          setAppliances(filteredRequests);
        })
        .catch(error => console.error('Error fetching service requests', error));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
       <center> <h1 className="text-3xl font-bold mb-4 align-center"> 👤 Your History  </h1></center>  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className=" bg-pink-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className=" p-4 cursor-pointer " onClick={() => setIsCustomerOpen(!isCustomerOpen)}>
            <h2 className="text-xl font-semibold text-gray-800">Customer Details</h2>
            <svg className={`w-6 h-6 float-right transition-transform ${isCustomerOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        
         
          {isCustomerOpen && customerDetails && (
            <div className="p-4 bg-pink-100 bg-white rounded-md border-b border-gray-200">
              <div className='p-4 bg-white rounded-md border-b border-gray-200'>
              <p><strong>Customer Name:</strong> {customerDetails.name}</p>
              <p><strong>Email:</strong> {customerDetails.email}</p>
              <p><strong>Phone:</strong> {customerDetails.contact}</p>
              {/* Add more customer details here */}
              </div>
            </div>
          )}
         
         
        </div>

        {/* Registered Appliances Card */}
        <div className="bg-green-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-4 cursor-pointer" onClick={() => setIsAppliancesOpen(!isAppliancesOpen)}>
            <h2 className="text-xl font-semibold text-gray-800">Registered Appliances</h2>
            <svg className={`w-6 h-6 float-right transition-transform ${isAppliancesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isAppliancesOpen && (
            <div className="p-4 bg-green-50">
              {appliances.length > 0 ? (
                <ul>
                  {appliances.map((appliance, index) => (
                    <li key={index} className="mb-2 p-2 bg-white rounded-md border-b border-gray-200">
                      <p><strong>Product Name:</strong> {appliance.product.appliances.productname}</p>
                      <p><strong>Product Model:</strong> {appliance.product.appliances.model}</p>
                      <p><strong>Product SerialId:</strong> {appliance.product.serialnum}</p>
                      <p><strong>Purchase Date:</strong> {appliance.product.purchaseDate}</p>
                      {/* Add more appliance details here */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No appliances registered</p>
              )}
            </div>
          )}
        </div>

        {/* Service Requests Card */}
        <div className="bg-yellow-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-4 cursor-pointer" onClick={() => setIsServiceRequestsOpen(!isServiceRequestsOpen)}>
            <h2 className="text-xl font-semibold text-gray-800">Service Requests History</h2>
            <svg className={`w-6 h-6 float-right transition-transform ${isServiceRequestsOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isServiceRequestsOpen && (
            <div className="p-4 bg-yellow-50">
              {serviceRequests.length > 0 ? (
                <ul>
                  {serviceRequests.map((request) => (
                    <li key={request.reqid} className="mb-4 p-4 bg-white shadow-md rounded-md">
                      <p><strong>Request ID:</strong> {request.reqid}</p>
                      <p><strong>Service Type:</strong> {request.servicetype}</p>
                      <p><strong>Issue Description:</strong> {request.issuedes}</p>
                      <p><strong>Product Condition:</strong> {request.productCondition}</p>
                      {/* <p><strong>Status:</strong> {request.servicests}</p>
                      <p><strong>Preferred Date:</strong> {request.preferredDate}</p> */}
                      <p><strong>Feedback:</strong> {request.feedback}</p>
                      <p><strong>Rating:</strong> {request.rating}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No service requests available</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
