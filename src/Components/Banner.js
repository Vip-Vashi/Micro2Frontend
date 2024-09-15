import React from 'react';

const SupportPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Get Professional Help from LG Experts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img 
            src="https://www.lg.com/content/dam/channel/wcms/in/support/repair-request/get-professional-help-step-1.jpg" 
            alt="Choose a Product" 
            className="w-full h-42 object-cover rounded-md mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">Step 1: Choose a Product and Its Symptom</h2>
          <p className="text-gray-700 mb-4">
            Select the LG product you are experiencing issues with and describe the symptom. This helps our experts understand the problem better and provide more accurate assistance.
          </p>
          {/* <a
            href="/product-tips"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Product Tips
          </a> */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img 
            src="https://www.lg.com/content/dam/channel/wcms/in/support/repair-request/get-professional-help-step-2.jpg" 
            alt="Enter Contact Information" 
            className="w-full h-42 object-cover rounded-md mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">Step 2: Enter Your Contact Information and Confirm the Request</h2>
          <p className="text-gray-700 mb-4">
            Provide your contact details and confirm your request for support. This allows our team to reach out to you and proceed with the necessary steps to resolve your issue.
          </p>
          {/* <a
            href="/support-service"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Support Service
          </a> */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img 
            src="https://www.lg.com/content/dam/channel/wcms/in/support/repair-request/get-professional-help-step-3.jpg" 
            alt="Check Request Status" 
            className="w-full h-42 object-cover rounded-md mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">Step 3: Check the Request Status Easily Online</h2>
          <p className="text-gray-700 mb-4">
            Track the status of your support request online. Stay informed about the progress and updates on your request.
          </p>
          {/* <a
            href="/exclusive-promotion"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Check Request Status
          </a> */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img 
            src="https://www.lg.com/content/dam/channel/wcms/in/support/repair-request/get-professional-help-step-4.jpg" 
            alt="Receive Repair Services" 
            className="w-full h-42 object-cover rounded-md mb-4" 
          />
          <h2 className="text-xl font-semibold mb-2">Step 4: Receive LG-Certified Repair Services</h2>
          <p className="text-gray-700 mb-4">
            Get repair services from LG-certified experts using genuine LG parts. Rest assured that your appliance is in good hands.
          </p>
          {/* <a
            href="/repair-services"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            LG-Certified Repair Services
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
