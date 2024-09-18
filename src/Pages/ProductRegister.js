// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductRegistrationForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       // Prepare form data
//       const formData = new FormData();
//       formData.append('name', data.name);
//       formData.append('email', data.email);
//       formData.append('password', data.password);
//       formData.append('contact', data.contact);
      
//       formData.append('address', data.address);
//       formData.append('pincode', data.pincode);
//       formData.append('state', data.state);
//       formData.append('district', data.district);
//       formData.append('city', data.city);
//       formData.append('serialnum', data.serialnum);
//       formData.append('purchaseDate', data.purchaseDate);
//       formData.append('branch', data.branch);
//       if (data.imageBlob[0]) {
//         formData.append('imageBlob', data.imageBlob[0]);
//       }
//       formData.append('appliance', data.appliance);
//       formData.append('customer', data.customer);

//       await axios.post('http://localhost:8000/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast.success('Product registration successful!');
//     } catch (error) {
//       toast.error('Product registration failed!');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Product Registration</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             {...register('name', { required: 'Name is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             {...register('email', { 
//               required: 'Email is required',
//               pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' }
//             })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             {...register('password', { 
//               required: 'Password is required',
//               minLength: { value: 6, message: 'Password must be at least 6 characters' }
//             })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Contact</label>
//           <input
//             {...register('contact', { 
//               required: 'Contact number is required',
//               pattern: { value: /^[0-9]{10}$/, message: 'Contact number must be 10 digits' }
//             })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Role</label>
//           <select
//             {...register('role')}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="user">User</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Address</label>
//           <input
//             {...register('address')}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Pincode</label>
//           <input
//             {...register('pincode', { required: 'Pincode is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">State</label>
//           <input
//             {...register('state', { required: 'State is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">District</label>
//           <input
//             {...register('district', { required: 'District is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">City</label>
//           <input
//             {...register('city', { required: 'City is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Serial Number</label>
//           <input
//             type="number"
//             {...register('serialnum', { required: 'Serial number is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.serialnum && <p className="text-red-500 text-xs mt-1">{errors.serialnum.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
//           <input
//             type="date"
//             {...register('purchaseDate', { required: 'Purchase date is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.purchaseDate && <p className="text-red-500 text-xs mt-1">{errors.purchaseDate.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Branch</label>
//           <input
//             {...register('branch', { required: 'Branch is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Bill Image</label>
//           <input
//             type="file"
//             {...register('imageBlob', { required: 'Bill image is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.imageBlob && <p className="text-red-500 text-xs mt-1">{errors.imageBlob.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Appliance</label>
//           <input
//             {...register('appliance', { required: 'Appliance is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.appliance && <p className="text-red-500 text-xs mt-1">{errors.appliance.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Customer ID</label>
//           <input
//             {...register('customer', { required: 'Customer ID is required' })}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.customer && <p className="text-red-500 text-xs mt-1">{errors.customer.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
//         >
//           Register Product
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductRegistrationForm;
//============================================working code=========================================================================
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductRegistrationForm = () => {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();
//   const [appliances, setAppliances] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedAppliance, setSelectedAppliance] = useState('');
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [customerId, setCustomerId] = useState('');
//    const cid = sessionStorage.getItem('userId');
//   useEffect(() => {
//     setCustomerId((sessionStorage.getItem('userid')))
//     // Fetch appliances
//     axios.get('http://localhost:8000/appliances')
//       .then(response => {
//         setAppliances(response.data);
//       })
//       .catch(error => {
//         toast.error('Failed to load appliances');
//       });
//   }, []);

//   const handleApplianceChange = async (event) => {
//     const applianceId = event.target.value;
//     setSelectedAppliance(applianceId);
    
//     if (applianceId) {
//       // Fetch models for the selected appliance
//       try {
//         const response = await axios.get(`http://localhost:8000/appliances/${applianceId}/models`);
//         setModels(response.data.models);
//       } catch (error) {
//         toast.error('Failed to load models');
//       }
//     } else {
//       setModels([]);
//     }

//     setValue('appliance', applianceId);
//   };

//   const handleCustomerIdChange = async (event) => {
//     const id = event.target.value;
//     setCustomerId(id);
    
//     if (id) {
//       try {
//         const response = await axios.get(`http://localhost:8000/customers/${id}`);
//         setCustomerDetails(response.data);
        
//         // Set form values for customer details
//         setValue('name', response.data.name);
//         setValue('email', response.data.email);
//         setValue('contact', response.data.contact);
//         setValue('address', response.data.address);
//         setValue('pincode', response.data.pincode);
//         setValue('state', response.data.state);
//         setValue('district', response.data.district);
//         setValue('city', response.data.city);
//       } catch (error) {
//         toast.error('Failed to load customer details');
//       }
//     } else {
//       setCustomerDetails(null);
//     }
//   };

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('serialnum', data.serialnum);
//       formData.append('purchaseDate', data.purchaseDate);
//       formData.append('branch', data.branch);
//       if (data.imageBlob[0]) {
//         formData.append('imageBlob', data.imageBlob[0]);
//       }
//       formData.append('appliance', data.appliance);
//       formData.append('customer', customerId);

//       await axios.post('http://localhost:8000/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast.success('Product registration successful!');
//     } catch (error) {
//       toast.error('Product registration failed!');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Product Registration</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Product Details */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold">Product Details</h3>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Appliance</label>
//               <select
//                 {...register('appliance', { required: 'Appliance is required' })}
//                 onChange={handleApplianceChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select an appliance</option>
//                 {appliances.map(appliance => (
//                   <option key={appliance.applianceid} value={appliance.applianceid}>
//                     {appliance.productname}
//                   </option>
//                 ))}
//               </select>
//               {errors.appliance && <p className="text-red-500 text-xs mt-1">{errors.appliance.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Model</label>
//               <select
//                 {...register('model', { required: 'Model is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select a model</option>
//                 {models.map(model => (
//                   <option key={model.model} value={model.model}>
//                     {model.model}
//                   </option>
//                 ))}
//               </select>
//               {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Serial Number</label>
//               <input
//                 type="number"
//                 {...register('serialnum', { required: 'Serial number is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.serialnum && <p className="text-red-500 text-xs mt-1">{errors.serialnum.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
//               <input
//                 type="date"
//                 {...register('purchaseDate', { required: 'Purchase date is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.purchaseDate && <p className="text-red-500 text-xs mt-1">{errors.purchaseDate.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Branch</label>
//               <input
//                 {...register('branch', { required: 'Branch is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Bill Image</label>
//               <input
//                 type="file"
//                 {...register('imageBlob', { required: 'Bill image is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.imageBlob && <p className="text-red-500 text-xs mt-1">{errors.imageBlob.message}</p>}
//             </div>
//           </div>

//           {/* Customer Details */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold">Customer Details</h3>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Customer ID</label>
//               <input
//                 type="number"
//                 value={customerId}
//                 onFocus={handleCustomerIdChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>

//             {customerDetails && (
//               <>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     {...register('name')}
//                     defaultValue={customerDetails.name}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="email"
//                     {...register('email')}
//                     defaultValue={customerDetails.email}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Contact</label>
//                   <input
//                     {...register('contact')}
//                     defaultValue={customerDetails.contact}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     {...register('address')}
//                     defaultValue={customerDetails.address}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Pincode</label>
//                   <input
//                     {...register('pincode')}
//                     defaultValue={customerDetails.pincode}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">State</label>
//                   <input
//                     {...register('state')}
//                     defaultValue={customerDetails.state}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">District</label>
//                   <input
//                     {...register('district')}
//                     defaultValue={customerDetails.district}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">City</label>
//                   <input
//                     {...register('city')}
//                     defaultValue={customerDetails.city}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
//         >
//           Register Product
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductRegistrationForm;

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductRegistrationForm = () => {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();
//   const [appliances, setAppliances] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedAppliance, setSelectedAppliance] = useState('');
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [customerId, setCustomerId] = useState('');
//   const sessionCustomerId = sessionStorage.getItem('userid');

//   useEffect(() => {
//     if (sessionCustomerId) {
//       setCustomerId(sessionCustomerId);
//       fetchCustomerDetails(sessionCustomerId);
//     }

//     // Fetch appliances
//     axios.get('http://localhost:8000/appliances')
//       .then(response => {
//         setAppliances(response.data);
//       })
//       .catch(error => {
//         toast.error('Failed to load appliances');
//       });
//   }, [sessionCustomerId]);

//   const fetchCustomerDetails = async (id) => {
//     if (id) {
//       try {
//         const response = await axios.get(`http://localhost:8000/customers/${id}`);
//         setCustomerDetails(response.data);
        
//         // Set form values for customer details
//         setValue('name', response.data.name);
//         setValue('email', response.data.email);
//         setValue('contact', response.data.contact);
//         setValue('address', response.data.address);
//         setValue('pincode', response.data.pincode);
//         setValue('state', response.data.state);
//         setValue('district', response.data.district);
//         setValue('city', response.data.city);
//       } catch (error) {
//         toast.error('Failed to load customer details');
//       }
//     } else {
//       setCustomerDetails(null);
//     }
//   };

//   const handleApplianceChange = async (event) => {
//     const applianceId = event.target.value;
//     setSelectedAppliance(applianceId);
    
//     if (applianceId) {
//       // Fetch models for the selected appliance
//       try {
//         const response = await axios.get(`http://localhost:8000/appliances/${applianceId}`);
//         setModels(response.data.model);
//         console.log(models)
//       } catch (error) {
//         toast.error('Failed to load models');
//       }
//     } else {
//       setModels([]);
//     }

//     setValue('appliance', applianceId);
//   };

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('serialnum', data.serialnum);
//       formData.append('purchaseDate', data.purchaseDate);
//       formData.append('branch', data.branch);
//       if (data.imageBlob[0]) {
//         formData.append('imageBlob', data.imageBlob[0]);
//       }
//       formData.append('appliance', data.appliance);
//       formData.append('customer', customerId);

//       await axios.post('http://localhost:8000/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast.success('Product registration successful!');
//     } catch (error) {
//       toast.error('Product registration failed!');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Product Registration</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Product Details */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold">Product Details</h3>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Appliance</label>
//               <select
//                 {...register('appliance', { required: 'Appliance is required' })}
//                 onChange={handleApplianceChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select an appliance</option>
//                 {appliances.map(appliance => (
//                   <option key={appliance.applianceid} value={appliance.applianceid}>
//                     {appliance.productname}
//                   </option>
//                 ))}
//               </select>
//               {errors.appliance && <p className="text-red-500 text-xs mt-1">{errors.appliance.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Model</label>
//               <select
//                 {...register('model', { required: 'Model is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select a model</option>
//                 {models.map(model => (
//                   <option key={model.model} value={model.model}>
//                     {model.model}
//                   </option>
//                 ))}
//               </select>
//               {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Serial Number</label>
//               <input
//                 type="number"
//                 {...register('serialnum', { required: 'Serial number is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.serialnum && <p className="text-red-500 text-xs mt-1">{errors.serialnum.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
//               <input
//                 type="date"
//                 {...register('purchaseDate', { required: 'Purchase date is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.purchaseDate && <p className="text-red-500 text-xs mt-1">{errors.purchaseDate.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Branch</label>
//               <input
//                 {...register('branch', { required: 'Branch is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Bill Image</label>
//               <input
//                 type="file"
//                 {...register('imageBlob', { required: 'Bill image is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.imageBlob && <p className="text-red-500 text-xs mt-1">{errors.imageBlob.message}</p>}
//             </div>
//           </div>

//           {/* Customer Details */}
//           {customerDetails && (
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold">Customer Details</h3>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   {...register('name')}
//                   defaultValue={customerDetails.name}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   {...register('email')}
//                   defaultValue={customerDetails.email}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Contact</label>
//                 <input
//                   {...register('contact')}
//                   defaultValue={customerDetails.contact}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   {...register('address')}
//                   defaultValue={customerDetails.address}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Pincode</label>
//                 <input
//                   {...register('pincode')}
//                   defaultValue={customerDetails.pincode}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">State</label>
//                 <input
//                   {...register('state')}
//                   defaultValue={customerDetails.state}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">District</label>
//                 <input
//                   {...register('district')}
//                   defaultValue={customerDetails.district}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">City</label>
//                 <input
//                   {...register('city')}
//                   defaultValue={customerDetails.city}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
//         >
//           Register Product
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductRegistrationForm;

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const ProductRegistrationForm = () => {
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm();
//   const [appliances, setAppliances] = useState([]);
//   const [models, setModels] = useState([]);
//   const [selectedAppliance, setSelectedAppliance] = useState('');
//   const [customerDetails, setCustomerDetails] = useState(null);
//   const [customerId, setCustomerId] = useState('');
//   const sessionCustomerId = sessionStorage.getItem('userid');

//   const today = new Date().toISOString().split('T')[0];

//   useEffect(() => {
//     if (sessionCustomerId) {
//       setCustomerId(sessionCustomerId);
//       fetchCustomerDetails(sessionCustomerId);
//     }

//     // Fetch appliances
//     axios.get('http://localhost:8000/appliances')
//       .then(response => {
//         setAppliances(response.data);
//       })
//       .catch(error => {
//         toast.error('Failed to load appliances');
//       });
//   }, [sessionCustomerId]);

//   const fetchCustomerDetails = async (id) => {
//     if (id) {
//       try {
//         const response = await axios.get(`http://localhost:8000/customers/${id}`);
//         setCustomerDetails(response.data);
        
//         // Set form values for customer details
//         setValue('name', response.data.name);
//         setValue('email', response.data.email);
//         setValue('contact', response.data.contact);
//         setValue('address', response.data.address);
//         setValue('pincode', response.data.pincode);
//         setValue('state', response.data.state);
//         setValue('district', response.data.district);
//         setValue('city', response.data.city);
//       } catch (error) {
//         toast.error('Failed to load customer details');
//       }
//     } else {
//       setCustomerDetails(null);
//     }
//   };

//   const handleApplianceChange = async (event) => {
//     const applianceId = event.target.value;
//     setSelectedAppliance(applianceId);
    
//     if (applianceId) {
//       try {
//         // Fetch models for the selected appliance
//         const response = await axios.get(`http://localhost:8000/appliances/${applianceId}`);
        
//         setModels(response.data.model || []);
//         console.log(models);
//       } catch (error) {
//         toast.error('Failed to load models');
//       }
//     } else {
//       setModels([]);
//     }

//     setValue('appliance', applianceId);
//     setValue('model', ''); // Clear model field when appliance changes
//   };

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       formData.append('serialnum', data.serialnum);
//       formData.append('purchaseDate', data.purchaseDate);
//       formData.append('branch', data.branch);
//       if (data.imageBlob[0]) {
//         formData.append('imageBlob', data.imageBlob[0]);
//       }
//       formData.append('appliance', data.appliance);
//       formData.append('model', data.model);
//       formData.append('customer', customerId);

//       await axios.post('http://localhost:8000/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       toast.success('Product registration successful!');
//     } catch (error) {
//       toast.error('Product registration failed!');
//     }
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Product Registration</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Product Details */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-semibold">Product Details</h3>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Appliance</label>
//               <select
//                 {...register('appliance', { required: 'Appliance is required' })}
//                 onChange={handleApplianceChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select an appliance</option>
//                 {appliances.map(appliance => (
//                   <option key={appliance.applianceid} value={appliance.applianceid}>
//                     {appliance.productname}
//                   </option>
//                 ))}
//               </select>
//               {errors.appliance && <p className="text-red-500 text-xs mt-1">{errors.appliance.message}</p>}
//             </div>

//             {/* <div>
//               <label className="block text-sm font-medium text-gray-700">Model</label>
//               <div className="mt-1">
//                 {models.length > 0 ? (
//                   <ul className="list-disc pl-5">
//                     {models.map((model, index) => (
//                       <li key={index}>{model}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-500">No models available for the selected appliance</p>
//                 )}
//               </div>
//             </div> */}

//             <div>
//               <label className="block text-sm font-medium text-gray-700"> Model</label>
//               <input
//                 type="text"
//                 value={models}
//                 {...register('model', { required: 'Model is required' })}
//                 placeholder="Enter model"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Serial Number</label>
//               <input
//                 type="text"
//                 {...register('serialnum', { required: 'Serial number is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.serialnum && <p className="text-red-500 text-xs mt-1">{errors.serialnum.message}</p>}
//             </div>

//             <div>
//           <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
//           <input
//             type="date"
//             {...register('purchaseDate', { required: 'Purchase date is required' })}
//             max={today} // Set minimum date to today
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//           {errors.purchaseDate && <p className="text-red-500 text-xs mt-1">{errors.purchaseDate.message}</p>}
//         </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Branch</label>
//               <input
//                 {...register('branch', { required: 'Branch is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">Bill Image</label>
//               <input
//                 type="file"
//                 {...register('imageBlob', { required: 'Bill image is required' })}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.imageBlob && <p className="text-red-500 text-xs mt-1">{errors.imageBlob.message}</p>}
//             </div>
//           </div>

//           {/* Customer Details */}
//           {customerDetails && (
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold">Customer Details</h3>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   {...register('name')}
//                   defaultValue={customerDetails.name}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   {...register('email')}
//                   defaultValue={customerDetails.email}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Contact</label>
//                 <input
//                   {...register('contact')}
//                   defaultValue={customerDetails.contact}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Address</label>
//                 <input
//                   {...register('address')}
//                   defaultValue={customerDetails.address}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Pincode</label>
//                 <input
//                   {...register('pincode')}
//                   defaultValue={customerDetails.pincode}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">State</label>
//                 <input
//                   {...register('state')}
//                   defaultValue={customerDetails.state}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">District</label>
//                 <input
//                   {...register('district')}
//                   defaultValue={customerDetails.district}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">City</label>
//                 <input
//                   {...register('city')}
//                   defaultValue={customerDetails.city}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   readOnly
//                 />
//               </div>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
//         >
//           Register Product
//         </button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductRegistrationForm;


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserNav from '../Components/UserNav';

const ProductRegistrationForm = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [appliances, setAppliances] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedAppliance, setSelectedAppliance] = useState('');
  const [customerDetails, setCustomerDetails] = useState(null);
  const [customerId, setCustomerId] = useState(0);
  const sessionCustomerId = sessionStorage.getItem('userid');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (sessionCustomerId) {
      setCustomerId(sessionCustomerId);
      fetchCustomerDetails(sessionCustomerId);
    }

    // Fetch appliances
    axios.get('http://localhost:8000/appliances')
      .then(response => {
        setAppliances(response.data);
      })
      .catch(error => {
        toast.error('Failed to load appliances');
      });
  }, [sessionCustomerId]);

  const fetchCustomerDetails = async (id) => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:8000/customers/${id}`);
        setCustomerDetails(response.data);
        
        // Set form values for customer details
        setValue('name', response.data.name);
        setValue('email', response.data.email);
        setValue('contact', response.data.contact);
        setValue('address', response.data.address);
        setValue('pincode', response.data.pincode);
        setValue('state', response.data.state);
        setValue('district', response.data.district);
        setValue('city', response.data.city);
      } catch (error) {
        toast.error('Failed to load customer details');
      }
    } else {
      setCustomerDetails(null);
    }
  };

  const handleApplianceChange = async (event) => {
    const applianceId = event.target.value;
    setSelectedAppliance(applianceId);
    
    if (applianceId) {
      try {
        // Fetch models for the selected appliance
        const response = await axios.get(`http://localhost:8000/appliances/${applianceId}`);
        
        setModels(response.data.model || []);
      } catch (error) {
        toast.error('Failed to load models');
      }
    } else {
      setModels([]);
    }

    setValue('appliance', applianceId);
    setValue('model', ''); // Clear model field when appliance changes
  };

  const onSubmit = async (data) => {
    try {
        console.log(data);
      const formData = new FormData();
      formData.append('serialnum', data.serialnum);
      formData.append('purchaseDate', data.purchaseDate);
      formData.append('branch', data.branch);
      if (data.imageBlob[0]) {
        formData.append('imageBlob', data.imageBlob[0]);
      }
      formData.append('appliance', selectedAppliance);
    //   formData.append('model', data.model);
      formData.append('customer', customerId);

      await axios.post('http://localhost:8000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
console.log(formData);
      toast.success('Product registration successful!');
    } catch (error) {
      toast.error('Product registration failed!');
    }
  };

  return (
    <>
    <UserNav/>
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Product Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Product Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Appliance</label>
              <select
                {...register('appliance', { required: 'Appliance is required' })}
                onChange={handleApplianceChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select an appliance</option>
                {appliances.map(appliance => (
                  <option key={appliance.applianceid} value={appliance.applianceid}>
                    {appliance.productname}
                  </option>
                ))}
              </select>
              {errors.appliance && <p className="text-red-500 text-xs mt-1">{errors.appliance.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Model</label>
              <input
                type="text"
                value={models}
                {...register('model')}
                placeholder="Enter model"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Serial Number</label>
              <input
                type="text"
                {...register('serialnum', { required: 'Serial number is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.serialnum && <p className="text-red-500 text-xs mt-1">{errors.serialnum.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
              <input
                type="date"
                {...register('purchaseDate', { required: 'Purchase date is required' })}
                max={today} // Set maximum date to today
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.purchaseDate && <p className="text-red-500 text-xs mt-1">{errors.purchaseDate.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Branch</label>
              <input
                {...register('branch', { required: 'Branch is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bill Image</label>
              <input
                type="file"
                {...register('imageBlob', { required: 'Bill image is required' })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.imageBlob && <p className="text-red-500 text-xs mt-1">{errors.imageBlob.message}</p>}
            </div>
          </div>

          {/* Customer Details */}
          {customerDetails && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Customer Details</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  {...register('name')}
                  defaultValue={customerDetails.name}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register('email')}
                  defaultValue={customerDetails.email}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Contact</label>
                <input
                  {...register('contact')}
                  defaultValue={customerDetails.contact}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  {...register('address')}
                  defaultValue={customerDetails.address}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  {...register('pincode')}
                  defaultValue={customerDetails.pincode}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  {...register('state')}
                  defaultValue={customerDetails.state}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">District</label>
                <input
                  {...register('district')}
                  defaultValue={customerDetails.district}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  {...register('city')}
                  defaultValue={customerDetails.city}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>
            </div>
          )}
        </div>
       <center>
        <button
          type="submit"
          className="w-max px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700"
        >
          Register Product
        </button>
        </center>
      </form>
      <ToastContainer />
    </div>
  
  </>);
};

export default ProductRegistrationForm;
