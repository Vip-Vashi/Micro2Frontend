import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from '../Components/Landing';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8000/customers', data);
      toast.success('Registration successful!');
      navigate('/login')
    } catch (error) {
      toast.error('Registration failed!');
    }
  };

  return (
    <>
    {/* <Navbar/> */}
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' }
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { 
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' },
                pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/, message: 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character' }
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              {...register('contact', { 
                required: 'Contact number is required',
                pattern: { value: /^[0-9]{10}$/, message: 'Contact number must be 10 digits' }
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              {...register('state', { required: 'State is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter State"
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              {...register('pincode', { required: 'Pincode is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Pincode"
            />
            {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">District</label>
            <input
              {...register('district', { required: 'District is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter District"
            />
            {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              {...register('city', { required: 'City is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter City"
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              {...register('address', { required: 'Address is required' })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Address"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg font-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
    </>
  );
};

export default SignupForm;
