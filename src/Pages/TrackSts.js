// import React, { useState } from 'react';
// import axios from 'axios';

// const RequestStatusPage = () => {
//   const [requestId, setRequestId] = useState('');
//   const [status, setStatus] = useState('');
//   const [technician, setTechnician] = useState(null);
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Fetch service request by ID
//       const response = await axios.get(`http://localhost:8000/servicerequests/${requestId}`);
//       const serviceRequest = response.data;
//       console.log(serviceRequest)
//        console.log(serviceRequest.technician.techId);
//       if (serviceRequest) {
//         // if (   serviceRequest.status=== 'Assigned' || serviceRequest.status === 'Inprogress' || serviceRequest.status === 'Resolved') {
//          if (   serviceRequest.status != "") {
//           // Fetch technician details if assigned
//           const technicianResponse = await axios.get(`http://localhost:8000/tech/${serviceRequest.technician.techId}`);

//           setTechnician(technicianResponse.data);
//           console.log(technician);
//           setStatus(serviceRequest.status)
//         //   setStatus('Assigned');
//         } else {
//           setStatus('Dear Customer Your Request has been received !! We will assign the technician within 3-4 days');
//           setTechnician(null);
//         }
//       } else {

//         setStatus('Request not found');
//         setTechnician(null);
//       }
//     } catch (error) {
//     //   setError('Error fetching request status');
//       setStatus('No Request Found ');
//       setTechnician(null);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-4">Check Service Request Status</h1>
//         <form onSubmit={handleSubmit} className="mb-4">
//           <div className="mb-4">
//             <label htmlFor="requestId" className="block text-sm font-medium text-gray-700 mb-2">Request ID</label>
//             <input
//               id="requestId"
//               name="requestId"
//               type="text"
//               value={requestId}
//               onChange={(e) => setRequestId(e.target.value)}
//               placeholder="Enter request ID"
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Submit
//           </button>
//         </form>

//         {status && (
//           <div className="mt-4">
//             <p className="text-lg font-semibold">{status}</p>
//             {technician && (
//               <div className="mt-4">
//                 <h2 className="text-lg font-bold">Technician Details:</h2>
//                 <p>Name: {technician.tname}</p>
//                 {/* <p>Email: {technician.contact}</p> */}
//                 <p>Phone: {technician.contact}</p>
//               </div>
//             )}
//             {error && (
//               <p className="text-red-600 mt-4">{error}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestStatusPage;
// ************************************
// import React, { useState } from 'react';
// import axios from 'axios';

// const RequestTrackingPage = () => {
//   const [requestId, setRequestId] = useState('');
//   const [status, setStatus] = useState('');
//   const [technician, setTechnician] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setStatus('');
//     setTechnician(null);

//     try {
//       // Fetch service request by ID
//       const response = await axios.get(`http://localhost:8000/servicerequests/${requestId}`);
//       const serviceRequest = response.data;

//       if (serviceRequest && serviceRequest.servicests) {
//         // Check if technician is assigned
//         if (serviceRequest.technician && serviceRequest.technician.techId) {
//           // Fetch technician details
//           const technicianResponse = await axios.get(`http://localhost:8000/tech/${serviceRequest.technician.techId}`);
//           setTechnician(technicianResponse.data);
//         }
//         setStatus(serviceRequest.servicests);
//       } else {
//         setStatus('Request not found.');
//       }
//     } catch (err) {
//       setError('Error fetching request details.');
//       setStatus('Invalid Request Id');
//       console.error('Error fetching request details:', err); // Log error for debugging
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Track Your Request Status</h1>
//         <form onSubmit={handleSubmit} className="mb-6">
//           <div className="mb-4">
//             <label htmlFor="requestId" className="block text-sm font-medium text-gray-700 mb-2">Request ID</label>
//             <input
//               id="requestId"
//               name="requestId"
//               type="text"
//               value={requestId}
//               onChange={(e) => setRequestId(e.target.value)}
//               placeholder="Enter request ID"
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : 'Submit'}
//           </button>
//         </form>

//         {status && (
//           <div className="mt-4">
//             <p className="text-lg font-semibold">{status}</p>
//             {technician && (
//               <div className="mt-4">
//                 <h2 className="text-lg font-bold">Technician Details:</h2>
//                 <table className="w-full border border-gray-200">
//                   <tbody>
//                     <tr>
//                       <td className="border px-4 py-2 font-medium">Name</td>
//                       <td className="border px-4 py-2">{technician.tname}</td>
//                     </tr>
//                     <tr>
//                       <td className="border px-4 py-2 font-medium">Phone</td>
//                       <td className="border px-4 py-2">{technician.contact}</td>
//                     </tr>
//                     {/* Add more fields if needed */}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//             {error && (
//               <p className="text-red-600 mt-4">{error}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestTrackingPage;

// import React, { useState } from 'react';
// import axios from 'axios';

// // Star Rating Component
// const StarRating = ({ rating, setRating }) => {
//   return (
//     <div className="flex items-center">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <svg
//           key={star}
//           onClick={() => setRating(star)}
//           xmlns="http://www.w3.org/2000/svg"
//           className={`h-6 w-6 cursor-pointer ${rating >= star ? 'text-green-500' : 'text-gray-300'}`}
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           stroke="none"
//         >
//           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
//         </svg>
//       ))}
//     </div>
//   );
// };

// const RequestTrackingPage = () => {
//   const [requestId, setRequestId] = useState('');
//   const [status, setStatus] = useState('');
//   const [technician, setTechnician] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setStatus('');
//     setTechnician(null);

//     try {
//       // Fetch service request by ID
//       const response = await axios.get(`http://localhost:8000/servicerequests/${requestId}`);
//       const serviceRequest = response.data;

//       if (serviceRequest ) {
//         // Check if technician is assigned
//         if(serviceRequest.servicests){
//         if (serviceRequest.technician && serviceRequest.technician.techId) {
//           // Fetch technician details
//           const technicianResponse = await axios.get(`http://localhost:8000/tech/${serviceRequest.technician.techId}`);
//           setTechnician(technicianResponse.data);
//         }
//         setStatus(serviceRequest.servicests);
//     } else{
//         setStatus('Dear Customer Your Request has been received !! We will assign the technician within 3-4 days');
//     }

//       } else {
//         setStatus('Request not found.');
//       }
//     } catch (err) {
//       setError('Error fetching request details.');
//       setStatus('Invalid Request Id');
//       console.error('Error fetching request details:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFeedbackSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const formData = new FormData();
//       formData.append('reqid', requestId);
//       formData.append('rating', rating);
//       formData.append('feedback', feedback);

//       await axios.put('http://localhost:8000/servicerequests/rating', formData);
//       alert('Feedback submitted successfully!');
//       setRating(0);
//       setFeedback('');
//     } catch (err) {
//       setError('Error submitting feedback.');
//       console.error('Error submitting feedback:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">Track Your Request Status</h1>
//         <form onSubmit={handleSubmit} className="mb-6">
//           <div className="mb-4">
//             <label htmlFor="requestId" className="block text-sm font-medium text-gray-700 mb-2">Request ID</label>
//             <input
//               id="requestId"
//               name="requestId"
//               type="text"
//               value={requestId}
//               onChange={(e) => setRequestId(e.target.value)}
//               placeholder="Enter request ID"
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : 'Submit'}
//           </button>
//         </form>

//         {status && (
//           <div className="mt-4">
//             <p className="text-lg font-semibold">{status}</p>
//             {technician && (
//               <div className="mt-4">
//                 <h2 className="text-lg font-bold">Technician Details:</h2>
//                 <table className="w-full border border-gray-200">
//                   <tbody>
//                     <tr>
//                       <td className="border px-4 py-2 font-medium">Name</td>
//                       <td className="border px-4 py-2">{technician.tname}</td>
//                     </tr>
//                     <tr>
//                       <td className="border px-4 py-2 font-medium">Phone</td>
//                       <td className="border px-4 py-2">{technician.contact}</td>
//                     </tr>
//                     {/* Add more fields if needed */}
//                   </tbody>
//                 </table>
//                 {technician && (
//                   <form onSubmit={handleFeedbackSubmit} className="mt-6">
//                     <h2 className="text-lg font-bold mb-2">Provide Feedback</h2>
//                     <div className="mb-4">
//                       <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
//                       <StarRating rating={rating} setRating={setRating} />
//                     </div>
//                     <div className="mb-4">
//                       <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
//                       <textarea
//                         id="feedback"
//                         name="feedback"
//                         value={feedback}
//                         onChange={(e) => setFeedback(e.target.value)}
//                         placeholder="Enter your feedback here..."
//                         rows="4"
//                         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         required
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
//                       disabled={loading}
//                     >
//                       {loading ? 'Submitting...' : 'Submit Feedback'}
//                     </button>
//                   </form>
//                 )}
//               </div>
//             )}
//             {error && (
//               <p className="text-red-600 mt-4">{error}</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RequestTrackingPage;

import React, { useState } from 'react';
import axios from 'axios';

// Star Rating Component
const StarRating = ({ rating, setRating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => setRating(star)}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 cursor-pointer ${rating >= star ? 'text-green-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="none"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const RequestTrackingPage = () => {
  const [requestId, setRequestId] = useState('');
  const [status, setStatus] = useState('');
  const [remarks, setRemarks] = useState(''); // State for remarks
  const [technician, setTechnician] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStatus('');
    setTechnician(null);
    setRemarks(''); // Clear remarks on new request

    try {
      // Fetch service request by ID
      const response = await axios.get(`http://localhost:8000/servicerequests/${requestId}`);
      const serviceRequest = response.data;

      if (serviceRequest) {
        // Check if technician is assigned
        if (serviceRequest.servicests) {
          if (serviceRequest.technician && serviceRequest.technician.techId) {
            // Fetch technician details
            const technicianResponse = await axios.get(`http://localhost:8000/tech/${serviceRequest.technician.techId}`);
            setTechnician(technicianResponse.data);
          }
          setStatus(serviceRequest.servicests);
          // Update remarks if status is "Pending"
          if (serviceRequest.servicests === 'Pending') {
            setRemarks(serviceRequest.remark || ''); // Set remarks if available
          }
        } else {
          setStatus('Dear Customer, Your Request has been received! We will assign the technician within 3-4 days');
        }
      } else {
        setStatus('Request not found.');
      }
    } catch (err) {
      setError('Error fetching request details.');
      setStatus('Invalid Request Id');
      console.error('Error fetching request details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('reqid', requestId);
      formData.append('rating', rating);
      formData.append('feedback', feedback);

      await axios.put('http://localhost:8000/servicerequests/rating', formData);
      alert('Feedback submitted successfully!');
      setRating(0);
      setFeedback('');
    } catch (err) {
      setError('Error submitting feedback.');
      console.error('Error submitting feedback:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Track Your Request Status</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="requestId" className="block text-sm font-medium text-gray-700 mb-2">Request ID</label>
            <input
              id="requestId"
              name="requestId"
              type="text"
              value={requestId}
              onChange={(e) => setRequestId(e.target.value)}
              placeholder="Enter request ID"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </form>

        {status && (
          <div className="mt-4">
            <p className="text-lg font-semibold">{status}</p>
            {remarks && status === 'Pending' && (
              <div className="mt-4">
                <h2 className="text-lg font-bold">Remarks:</h2>
                <p className="text-gray-700">{remarks}</p>
              </div>
            )}
            {technician && (
              <div className="mt-4">
                <h2 className="text-lg font-bold">Technician Details:</h2>
                <table className="w-full border border-gray-200">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 font-medium">Name</td>
                      <td className="border px-4 py-2">{technician.tname}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2 font-medium">Phone</td>
                      <td className="border px-4 py-2">{technician.contact}</td>
                    </tr>
                    {/* Add more fields if needed */}
                  </tbody>
                </table>
                {technician && (
                  <form onSubmit={handleFeedbackSubmit} className="mt-6">
                    <h2 className="text-lg font-bold mb-2">Provide Feedback</h2>
                    <div className="mb-4">
                      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                      <StarRating rating={rating} setRating={setRating} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
                      <textarea
                        id="feedback"
                        name="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback here..."
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Feedback'}
                    </button>
                  </form>
                )}
              </div>
            )}
            {error && (
              <p className="text-red-600 mt-4">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestTrackingPage;
