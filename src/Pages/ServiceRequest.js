

// import React, { useState } from 'react'; 

// import axios from 'axios'; 
// import UserNav from '../Components/UserNav';

  

// const MultiPartForm = () => { 

//   const [formData, setFormData] = useState({ 

//     serviceType: '', 

//     serialNumber: '', 

//     productCategory: '', 

//     model: '', 

//     purchaseDate: '', 

//     preferredVisitDate: '', 

//     preferredTime: '', 

//     issueDescription: '', 

//     firstName: '', 

//     lastName: '', 

//     email: '', 

//     location: '', 

//     detailedAddress: '', 

//     mobilePhone: '', 

//     otp: '', 

//   }); 

//   const [otpSent, setOtpSent] = useState(false); 

  

//   const handleChange = (e) => { 

//     const { name, value } = e.target; 

//     setFormData({ 

//       ...formData, 

//       [name]: value, 

//     }); 

//   }; 

  

//   const handleSubmit = async (e) => { 

//     e.preventDefault(); 

//     // Implement your form submission logic here 

//     try { 

//       const response = await axios.post('http://localhost:8085/submit', formData); 

//       console.log('Form submitted successfully', response.data); 

//     } catch (error) { 

//       console.error('Error submitting form', error); 

//     } 

//   }; 

  

//   const handleGetOtp = () => { 

//     // Implement OTP sending logic here 

//     setOtpSent(true); 

//     console.log('OTP sent'); 

//   }; 

  

//   return ( 
// <>< UserNav/>
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8"> 

//       <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200"> 

//         <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Service Request Form</h1> 

//         <form onSubmit={handleSubmit}> 

//           {/* Product Information */} 

//           <div className="mb-8"> 

//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Information</h2> 

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

//               <div> 

//                 <label htmlFor="serviceType" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label> 

//                 <select 

//                   id="serviceType" 

//                   name="serviceType" 

//                   value={formData.serviceType} 

//                   onChange={handleChange} 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 > 

//                   <option value="">Select a service type</option> 

//                   <option value="demo">Demo</option> 

//                   <option value="installation">Installation</option> 

//                   <option value="repair">Repair</option> 

//                 </select> 

//               </div> 

//               <div> 

//                 <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-600 mb-2">Serial Number</label> 

//                 <input 

//                   id="serialNumber" 

//                   name="serialNumber" 

//                   type="text" 

//                   value={formData.serialNumber} 

//                   onChange={handleChange} 

//                   placeholder="Enter serial number" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600 mb-2">Product Category</label> 

//                 <input 

//                   id="productCategory" 

//                   name="productCategory" 

//                   type="text" 

//                   value={formData.productCategory} 

//                   onChange={handleChange} 

//                   placeholder="Enter product category" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="model" className="block text-sm font-medium text-gray-600 mb-2">Model</label> 

//                 <input 

//                   id="model" 

//                   name="model" 

//                   type="text" 

//                   value={formData.model} 

//                   onChange={handleChange} 

//                   placeholder="Enter model" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div className="col-span-1 md:col-span-2"> 

//                 <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-600 mb-2">Purchase Date</label> 

//                 <input 

//                   id="purchaseDate" 

//                   name="purchaseDate" 

//                   type="date" 

//                   value={formData.purchaseDate} 

//                   onChange={handleChange} 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//             </div> 

//           </div> 

  

//           {/* Service Request Details */} 

//           <div className="mb-8"> 

//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">Service Request Details</h2> 

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

//               <div> 

//                 <label htmlFor="preferredVisitDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Visit Date</label> 

//                 <input 

//                   id="preferredVisitDate" 

//                   name="preferredVisitDate" 

//                   type="date" 

//                   value={formData.preferredVisitDate} 

//                   onChange={handleChange} 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-600 mb-2">Preferred Time</label> 

//                 <input 

//                   id="preferredTime" 

//                   name="preferredTime" 

//                   type="time" 

//                   value={formData.preferredTime} 

//                   onChange={handleChange} 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div className="col-span-1 md:col-span-2"> 

//                 <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label> 

//                 <textarea 

//                   id="issueDescription" 

//                   name="issueDescription" 

//                   value={formData.issueDescription} 

//                   onChange={handleChange} 

//                   placeholder="Describe the issue" 

//                   rows="4" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//             </div> 

//           </div> 

  

//           {/* User Details */} 

//           <div className="mb-8"> 

//             <h2 className="text-2xl font-semibold mb-4 text-gray-700">User Details</h2> 

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 

//               <div> 

//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">First Name</label> 

//                 <input 

//                   id="firstName" 

//                   name="firstName" 

//                   type="text" 

//                   value={formData.firstName} 

//                   onChange={handleChange} 

//                   placeholder="Enter first name" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-2">Last Name</label> 

//                 <input 

//                   id="lastName" 

//                   name="lastName" 

//                   type="text" 

//                   value={formData.lastName} 

//                   onChange={handleChange} 

//                   placeholder="Enter last name" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label> 

//                 <input 

//                   id="email" 

//                   name="email" 

//                   type="email" 

//                   value={formData.email} 

//                   onChange={handleChange} 

//                   placeholder="Enter email" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="location" className="block text-sm font-medium text-gray-600 mb-2">Location</label> 

//                 <input 

//                   id="location" 

//                   name="location" 

//                   type="text" 

//                   value={formData.location} 

//                   onChange={handleChange} 

//                   placeholder="Enter location" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div className="col-span-1 md:col-span-2"> 

//                 <label htmlFor="detailedAddress" className="block text-sm font-medium text-gray-600 mb-2">Detailed Address</label> 

//                 <textarea 

//                   id="detailedAddress" 

//                   name="detailedAddress" 

//                   value={formData.detailedAddress} 

//                   onChange={handleChange} 

//                   placeholder="Enter detailed address" 

//                   rows="3" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-600 mb-2">Mobile Phone</label> 

//                 <input 

//                   id="mobilePhone" 

//                   name="mobilePhone" 

//                   type="tel" 

//                   value={formData.mobilePhone} 

//                   onChange={handleChange} 

//                   placeholder="Enter mobile phone number" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//               <div> 

//                 <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2">OTP</label> 

//                 <input 

//                   id="otp" 

//                   name="otp" 

//                   type="text" 

//                   value={formData.otp} 

//                   onChange={handleChange} 

//                   placeholder="Enter OTP" 

//                   className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 

//                 /> 

//               </div> 

//             </div> 

//             <div className="flex items-center justify-between mt-4"> 

//               <button 

//                 type="button" 

//                 onClick={handleGetOtp} 

//                 className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300" 

//               > 

//                 Get OTP 

//               </button> 

//               <button 

//                 type="submit" 

//                 className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" 

//               > 

//                 Submit 

//               </button> 

//             </div> 

//           </div> 

//         </form> 

//       </div> 

//     </div> 

//  </> ); 

// }; 

  

// export default MultiPartForm; 

// import React, { useState, useEffect } from 'react'; 
// import axios from 'axios'; 
// import UserNav from '../Components/UserNav';

// const MultiPartForm = () => { 
//   const [formData, setFormData] = useState({ 
//     serviceType: '', 
//     serialNumber: '', 
//     productCategory: '', 
//     model: '', 
//     purchaseDate: '', 
//     preferredVisitDate: '', 
//     preferredTime: '', 
//     issueDescription: '', 
//     name: '', 
//     email: '', 
//     district:'',
//     city: '', 
//     pincode:'',
//     address: '', 
//     contact: '', 
//     otp: '', 
//   }); 

//   const [otpSent, setOtpSent] = useState(false); 

//   useEffect(() => {
//     // Fetch customerId from session or context
//     const customerId = getCustomerIdFromSession();

//     if (customerId) {
//       fetchUserDetails(customerId);
//     }
//   }, []);

//   const getCustomerIdFromSession = () => {
//     // Replace this with the actual method to get customerId from session
//     // For example, it might come from a global state or session storage
//     return sessionStorage.getItem('userid');
//   };

//   const fetchUserDetails = async (customerId) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/customers/${customerId}`);
//       const userData = response.data;
//       setFormData(prevState => ({
//         ...prevState,
//         name: userData.name || '',
//         contact: userData.contact || '',
//         email: userData.email || '',
//         pincode: userData.pincode || '',
//         address: userData.address || '',
//         district: userData.district || '',
//       }));
//     } catch (error) {
//       console.error('Error fetching user details', error);
//     }
//   };

//   const handleChange = (e) => { 
//     const { name, value } = e.target; 
//     setFormData({ 
//       ...formData, 
//       [name]: value, 
//     }); 
//   }; 

//   const handleSubmit = async (e) => { 
//     e.preventDefault(); 

//     try { 
//       const response = await axios.post('http://localhost:8085/submit', formData); 
//       console.log('Form submitted successfully', response.data); 
//     } catch (error) { 
//       console.error('Error submitting form', error); 
//     } 
//   }; 

//   const handleGetOtp = () => { 
//     // Implement OTP sending logic here 
//     setOtpSent(true); 
//     console.log('OTP sent'); 
//   }; 

//   return ( 
//     <>
//       <UserNav/>
//       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8"> 
//         <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200"> 
//           <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Service Request Form</h1> 
//           <form onSubmit={handleSubmit}> 
//             {/* Product Information */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Information</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="serviceType" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label> 
//                   <select 
//                     id="serviceType" 
//                     name="serviceType" 
//                     value={formData.serviceType} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   > 
//                     <option value="">Select a service type</option> 
//                     <option value="demo">Demo</option> 
//                     <option value="installation">Installation</option> 
//                     <option value="repair">Repair</option> 
//                   </select> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-600 mb-2">Serial Number</label> 
//                   <input 
//                     id="serialNumber" 
//                     name="serialNumber" 
//                     type="text" 
//                     value={formData.serialNumber} 
//                     onChange={handleChange} 
//                     placeholder="Enter serial number" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600 mb-2">Product Category</label> 
//                   <input 
//                     id="productCategory" 
//                     name="productCategory" 
//                     type="text" 
//                     value={formData.productCategory} 
//                     onChange={handleChange} 
//                     placeholder="Enter product category" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="model" className="block text-sm font-medium text-gray-600 mb-2">Model</label> 
//                   <input 
//                     id="model" 
//                     name="model" 
//                     type="text" 
//                     value={formData.model} 
//                     onChange={handleChange} 
//                     placeholder="Enter model" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-600 mb-2">Purchase Date</label> 
//                   <input 
//                     id="purchaseDate" 
//                     name="purchaseDate" 
//                     type="date" 
//                     value={formData.purchaseDate} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//               </div> 
//             </div> 

//             {/* Service Request Details */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">Service Request Details</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="preferredVisitDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Visit Date</label> 
//                   <input 
//                     id="preferredVisitDate" 
//                     name="preferredVisitDate" 
//                     type="date" 
//                     value={formData.preferredVisitDate} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-600 mb-2">Preferred Time</label> 
//                   <input 
//                     id="preferredTime" 
//                     name="preferredTime" 
//                     type="time" 
//                     value={formData.preferredTime} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label> 
//                   <textarea 
//                     id="issueDescription" 
//                     name="issueDescription" 
//                     value={formData.issueDescription} 
//                     onChange={handleChange} 
//                     placeholder="Describe the issue" 
//                     rows="4" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//               </div> 
//             </div> 

//             {/* User Details */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">User Details</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2"> Name</label> 
//                   <input 
//                     id="name" 
//                     name="name" 
//                     type="text" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     placeholder="Enter the name" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact</label> 
//                   <input 
//                     id="contact" 
//                     name="contact" 
//                     type="text" 
//                     value={formData.contact} 
//                     onChange={handleChange} 
//                     placeholder="Enter Contact details" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label> 
//                   <input 
//                     id="email" 
//                     name="email" 
//                     type="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     placeholder="Enter email" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label> 
//                   <input 
//                     id="pincode" 
//                     name="pincode" 
//                     type="text" 
//                     value={formData.pincode} 
//                     onChange={handleChange} 
//                     placeholder="Enter pincode" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-2"> Address</label> 
//                   <textarea 
//                     id="address" 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleChange} 
//                     placeholder="Enter  address" 
//                     rows="3" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label> 
//                   <input 
//                     id="district" 
//                     name="district" 
//                     type="text" 
//                     value={formData.district} 
//                     onChange={handleChange} 
//                     placeholder="Enter district" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2">OTP</label> 
//                   <input 
//                     id="otp" 
//                     name="otp" 
//                     type="text" 
//                     value={formData.otp} 
//                     onChange={handleChange} 
//                     placeholder="Enter OTP" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//               </div> 
//               <div className="flex items-center justify-between mt-4"> 
//                 <button 
//                   type="button" 
//                   onClick={handleGetOtp} 
//                   className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300" 
//                 > 
//                   Get OTP 
//                 </button> 
//                 <button 
//                   type="submit" 
//                   className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" 
//                 > 
//                   Submit 
//                 </button> 
//               </div> 
//             </div> 
//           </form> 
//         </div> 
//       </div> 
//     </>
//   ); 
// }; 

// export default MultiPartForm; 

// import React, { useState, useEffect } from 'react'; 
// import axios from 'axios'; 
// import UserNav from '../Components/UserNav';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const MultiPartForm = () => { 
//   const [formData, setFormData] = useState({ 
//     serviceType: '', 
//     serialNumber: '', 
//     productId:'',
//     productCategory: '', 
//     productName:'',
//     model: '', 
//     purchaseDate: '', 
//     preferredVisitDate: '', 
//     productCondition: '', 
//     issueDescription: '', 
//     name: '', 
//     email: '', 
//     district: '',
//     city: '', 
//     pincode: '',
//     address: '', 
//     contact: '', 
//     otp: '', 
//   }); 
//   const [data , setdata]= useState({
//     servicetype:'',
//     issuedes:'',
//     productCondition:'',
//     product:{
//       productId:'',
//     },
//     customer:{
//       cid:''
//     }

//   });
//   const today = new Date().toISOString().split('T')[0];
//   const [otpSent, setOtpSent] = useState(false); 

//   useEffect(() => {
//     // Fetch customerId from session or context
//     const customerId = getCustomerIdFromSession();

//     if (customerId) {
//       fetchUserDetails(customerId);
//     }
//   }, []);

//   const getCustomerIdFromSession = () => {
//     // Replace this with the actual method to get customerId from session
//     // For example, it might come from a global state or session storage
//     return sessionStorage.getItem('userid');
//   };

//   const fetchUserDetails = async (customerId) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/customers/${customerId}`);
//       const userData = response.data;
//       setFormData(prevState => ({
//         ...prevState,
//         name: userData.name || '',
//         contact: userData.contact || '',
//         email: userData.email || '',
//         pincode: userData.pincode || '',
//         address: userData.address || '',
//         district: userData.district || '',
//       }));
//     } catch (error) {
//       console.error('Error fetching user details', error);
//     }
//   };

//   const fetchProductDetails = async (serialNumber) => {
//     try {
//       const response = await axios.get(`http://localhost:8000/products/serialnum/${serialNumber}`);
//       const productData = response.data;
//       setFormData(prevState => ({
//         ...prevState,
//         productId:productData.productId,
//         productCategory: productData.appliances.category || '',
//         productName: productData.appliances.productname || '',
//         model: productData.appliances.model || '',
//         purchaseDate: productData.purchaseDate || '',
//       }));
//     } catch (error) {
//       console.error('Error fetching product details', error);
//       // Optionally handle case when product is not found
//       setFormData(prevState => ({
//         ...prevState,
//         productCategory: '',
//         model: '',
//         purchaseDate: '',
//       }));
//     }
//   };

//   const handleChange = (e) => { 
//     const { name, value } = e.target; 
//     setFormData(prevState => {
//       const updatedFormData = { ...prevState, [name]: value };

//       // Fetch product details if serial number changes
//       if (name === 'serialNumber') {
//         fetchProductDetails(value);
//       }

//       return updatedFormData;
//     }); 
//   }; 

//   const handleSubmit = async (e) => { 
//     e.preventDefault(); 
//     // setdata({
//     //   servicetype:formData.serviceType,
//     //   issuedes:formData.issueDescription,
//     //   productCondition:formData.productCondition,
//     //   product:{
//     //     productId:formData.productId,
//     //   },
//     //   customer:{
//     //     cid:sessionStorage.getItem('userid')
//     //   }
//     // })
//     // console.log("**********************");
//     // console.log(data);
    
//     try { 
//       setdata({
//         servicetype:formData.serviceType,
//         issuedes:formData.issueDescription,
//         productCondition:formData.productCondition,
//         product:{
//           productId:formData.productId,
//         },
//         customer:{
//           cid:sessionStorage.getItem('userid')
//         }
//       })
//       console.log("**********************");
//       console.log(data);
//       const response = await axios.post('http://localhost:8000/servicerequests', data); 
//       console.log('Form submitted successfully', response.data); 
//       toast.success('Request Submission successful!');
//     } catch (error) { 
//       toast.error('Request failed!');
//       console.error('Error submitting form', error); 
//     } 
    
  
    
  
//   }; 

//   const handleGetOtp = () => { 
//     // Implement OTP sending logic here 
//     setOtpSent(true); 
//     console.log('OTP sent'); 
//   }; 

//   return ( 
//     <>
//       <UserNav/>
//       <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8"> 
//         <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200"> 
//           <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Service Request Form</h1> 
//           <form onSubmit={handleSubmit}> 
//             {/* Product Information */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Information</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="serviceType" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label> 
//                   <select 
//                     id="serviceType" 
//                     name="serviceType" 
//                     value={formData.serviceType} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   > 
//                     <option value="">Select a service type</option> 
//                     <option value="Demo">Demo</option> 
//                     <option value="Installation">Installation</option> 
//                     <option value="Repair">Repair</option> 
//                   </select> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-600 mb-2">Serial Number</label> 
//                   <input 
//                     id="serialNumber" 
//                     name="serialNumber" 
//                     type="text" 
//                     value={formData.serialNumber} 
//                     onChange={handleChange} 
//                     placeholder="Enter serial number" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 

//                 <div> 
//                   <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600 mb-2">Product Category</label> 
//                   <input 
//                     id="productCategory" 
//                     name="productCategory" 
//                     type="text" 
//                     value={formData.productCategory} 
//                     onChange={handleChange} 
//                     placeholder="Enter product category" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                     disabled
//                   /> 
//                 </div> 
               
//                 <div> 
//                   <label htmlFor="model" className="block text-sm font-medium text-gray-600 mb-2">Model</label> 
//                   <input 
//                     id="model" 
//                     name="model" 
//                     type="text" 
//                     value={formData.model} 
//                     onChange={handleChange} 
//                     placeholder="Enter model" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                     disabled
//                   /> 
//                 </div> 
//                 <div className='col-span-1 md:col-span-2'> 
//                   <label htmlFor="productName" className=" block text-sm font-medium text-gray-600 mb-2">Product Name</label> 
//                   <input 
//                     id="productName" 
//                     name="productName" 
//                     type="text" 
//                     value={formData.productName} 
//                     onChange={handleChange} 
//                     placeholder="Enter product Name" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                     disabled
//                   /> 
//                 </div>
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-600 mb-2">Purchase Date</label> 
//                   <input 
//                     id="purchaseDate" 
//                     name="purchaseDate" 
//                     type="date" 
//                     value={formData.purchaseDate} 
                   
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                     disabled
//                   /> 
//                 </div> 
//               </div> 
//             </div> 

//             {/* Service Request Details */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">Service Request Details</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="preferredVisitDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Visit Date</label> 
//                   <input 
//                     id="preferredVisitDate" 
//                     name="preferredVisitDate" 
//                     type="date" 
//                     min={today} 
//                     value={formData.preferredVisitDate} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="productCondition" className="block text-sm font-medium text-gray-600 mb-2">Product Condition</label> 
//                   <input 
//                     id="productCondition" 
//                     name="productCondition" 
//                     type="text" 
//                     value={formData.productCondition} 
//                     onChange={handleChange} 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label> 
//                   <textarea 
//                     id="issueDescription" 
//                     name="issueDescription" 
//                     value={formData.issueDescription} 
//                     onChange={handleChange} 
//                     placeholder="Describe the issue" 
//                     rows="4" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//               </div> 
//             </div> 

//             {/* User Details */} 
//             <div className="mb-8"> 
//               <h2 className="text-2xl font-semibold mb-4 text-gray-700">User Details</h2> 
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
//                 <div> 
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label> 
//                   <input 
//                     id="name" 
//                     name="name" 
//                     type="text" 
//                     value={formData.name} 
//                     onChange={handleChange} 
//                     placeholder="Enter the name" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact</label> 
//                   <input 
//                     id="contact" 
//                     name="contact" 
//                     type="text" 
//                     value={formData.contact} 
//                     onChange={handleChange} 
//                     placeholder="Enter Contact details" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label> 
//                   <input 
//                     id="email" 
//                     name="email" 
//                     type="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     placeholder="Enter email" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label> 
//                   <input 
//                     id="pincode" 
//                     name="pincode" 
//                     type="text" 
//                     value={formData.pincode} 
//                     onChange={handleChange} 
//                     placeholder="Enter pincode" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div className="col-span-1 md:col-span-2"> 
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-2"> Address</label> 
//                   <textarea 
//                     id="address" 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleChange} 
//                     placeholder="Enter address" 
//                     rows="3" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label> 
//                   <input 
//                     id="district" 
//                     name="district" 
//                     type="text" 
//                     value={formData.district} 
//                     onChange={handleChange} 
//                     placeholder="Enter district" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//                 <div> 
//                   <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2">OTP</label> 
//                   <input 
//                     id="otp" 
//                     name="otp" 
//                     type="text" 
//                     value={formData.otp} 
//                     onChange={handleChange} 
//                     placeholder="Enter OTP" 
//                     className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                   /> 
//                 </div> 
//               </div> 
//               <div className="flex items-center justify-between mt-4"> 
//                 <button 
//                   type="button" 
//                   onClick={handleGetOtp} 
//                   className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300" 
//                 > 
//                   Get OTP 
//                 </button> 
//                 <button 
//                   type="submit" 
//                   className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300" 
//                 > 
//                   Submit 
//                 </button> 
//               </div> 
//             </div> 
//           </form> 

//         </div>
//         <ToastContainer /> 
//       </div> 
//     </>
//   ); 
// }; 

// export default MultiPartForm; 

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserNav from '../Components/UserNav';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiPartForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    serialNumber: '',
    productId: '',
    productCategory: '',
    productName: '',
    model: '',
    purchaseDate: '',
    preferredVisitDate: '',
    productCondition: '',
    issueDescription: '',
    name: '',
    email: '',
    district: '',
    city: '',
    pincode: '',
    address: '',
    contact: '',
    otp: '',
  });

  const today = new Date().toISOString().split('T')[0];
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    const customerId = getCustomerIdFromSession();
    if (customerId) {
      fetchUserDetails(customerId);
    }
  }, []);

  const getCustomerIdFromSession = () => {
    return sessionStorage.getItem('userid');
  };

  const fetchUserDetails = async (customerId) => {
    try {
      const response = await axios.get(`http://localhost:8000/customers/${customerId}`);
      const userData = response.data;
      setFormData(prevState => ({
        ...prevState,
        name: userData.name || '',
        contact: userData.contact || '',
        email: userData.email || '',
        pincode: userData.pincode || '',
        address: userData.address || '',
        district: userData.district || '',
      }));
    } catch (error) {
      console.error('Error fetching user details', error);
    }
  };

  const fetchProductDetails = async (serialNumber) => {
    try {
      const response = await axios.get(`http://localhost:8000/products/serialnum/${serialNumber}`);
      const productData = response.data;
      setFormData(prevState => ({
        ...prevState,
        productId: productData.productId,
        productCategory: productData.appliances.category || '',
        productName: productData.appliances.productname || '',
        model: productData.appliances.model || '',
        purchaseDate: productData.purchaseDate || '',
      }));
    } catch (error) {
      console.error('Error fetching product details', error);
      setFormData(prevState => ({
        ...prevState,
        productCategory: '',
        model: '',
        purchaseDate: '',
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => {
      const updatedFormData = { ...prevState, [name]: value };

      if (name === 'serialNumber') {
        fetchProductDetails(value);
      }

      return updatedFormData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the data object directly
    const data = {
      servicetype: formData.serviceType,
      issuedes: formData.issueDescription,
      productCondition: formData.productCondition,
      preferredDate: formData.preferredVisitDate,
      product: {
        productId: formData.productId,
      },
      customer: {
        cid: sessionStorage.getItem('userid'),
      },
    };

    try {
      // Submit the form with the constructed data object
      const response = await axios.post('http://localhost:8000/servicerequests', data);
      await axios.post('http://localhost:8000/servicerequests/mail',response.data);
      console.log('Form submitted successfully', response.data);
      toast.success('Request Submission successful!');
    } catch (error) {
      toast.error('Request failed!');
      console.error('Error submitting form', error);
    }
  };

  const handleGetOtp = () => {
    // Implement OTP sending logic here
    setOtpSent(true);
    console.log('OTP sent');
  };

  return (
    <>
      <UserNav />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Service Request Form</h1>
          <form onSubmit={handleSubmit}>
            {/* Product Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Product Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-600 mb-2">Service Type</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service type</option>
                    <option value="Demo">Demo</option>
                    <option value="Installation">Installation</option>
                    <option value="Repair">Repair</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="serialNumber" className="block text-sm font-medium text-gray-600 mb-2">Serial Number</label>
                  <input
                    id="serialNumber"
                    name="serialNumber"
                    type="text"
                    value={formData.serialNumber}
                    onChange={handleChange}
                    placeholder="Enter serial number"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="productCategory" className="block text-sm font-medium text-gray-600 mb-2">Product Category</label>
                  <input
                    id="productCategory"
                    name="productCategory"
                    type="text"
                    value={formData.productCategory}
                    onChange={handleChange}
                    placeholder="Enter product category"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-gray-600 mb-2">Model</label>
                  <input
                    id="model"
                    name="model"
                    type="text"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Enter model"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div className='col-span-1 md:col-span-2'>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-600 mb-2">Product Name</label>
                  <input
                    id="productName"
                    name="productName"
                    type="text"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="Enter product Name"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-600 mb-2">Purchase Date</label>
                  <input
                    id="purchaseDate"
                    name="purchaseDate"
                    type="date"
                    min={today}
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Service Request Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Service Request Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredVisitDate" className="block text-sm font-medium text-gray-600 mb-2">Preferred Visit Date</label>
                  <input
                    id="preferredVisitDate"
                    name="preferredVisitDate"
                    type="date"
                    min={today}
                    value={formData.preferredVisitDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="productCondition" className="block text-sm font-medium text-gray-600 mb-2">Product Condition</label>
                  <input
                    id="productCondition"
                    name="productCondition"
                    type="text"
                    value={formData.productCondition}
                    onChange={handleChange}
                    placeholder="Enter product condition"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-600 mb-2">Issue Description</label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    value={formData.issueDescription}
                    onChange={handleChange}
                    placeholder="Describe the issue"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  />
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">Customer Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-600 mb-2">Contact Number</label>
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="district" className="block text-sm font-medium text-gray-600 mb-2">District</label>
                  <input
                    id="district"
                    name="district"
                    type="text"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="Enter district"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-600 mb-2">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">Pincode</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter pincode"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* OTP Verification */}
            {/* <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">OTP Verification</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-600 mb-2">Enter OTP</label>
                  <input
                    id="otp"
                    name="otp"
                    type="text"
                    value={formData.otp}
                    onChange={handleChange}
                    placeholder="Enter OTP"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={!otpSent}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleGetOtp}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {otpSent ? 'Resend OTP' : 'Get OTP'}
                  </button>
                </div>
              </div>
            </div> */}

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MultiPartForm;
