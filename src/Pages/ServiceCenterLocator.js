// import React, { useState } from 'react';

// // Data for the service center locations with their iframes
// const locations = {
//   '625001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.556398278233!2d78.6549207900934!3d10.80065670730146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf598ec0d80d9%3A0x12da43460b83d638!2sLG%20Service!5e0!3m2!1sen!2sin!4v1726287291816!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287741711!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600008': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287778500!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600020': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287903273!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600017': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287929424!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287975606!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288009975!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641005': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.30610760159!2d76.89060415820313!3d11.019141600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590804d6ae6d%3A0x9a54f68cafaabb28!2sLG%20Mobile%20Authorised%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288032525!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641004': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125230.04357495448!2d77.02769755820309!3d11.229091799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288061412!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641012': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125312.13592653781!2d76.91297915820311!3d11.035657999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d37b64d2c19b%3A0x5b029e48b4f4f5e2!2sLG%20TV%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288086262!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641014': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125290.46992444557!2d77.01707275820314!3d11.022315799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288112434!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641022': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125312.13592653781!2d76.91297915820311!3d11.035657999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d37b64d2c19b%3A0x5b029e48b4f4f5e2!2sLG%20TV%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288144561!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641029': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125248.42456469828!2d77.05535575820313!3d11.114851799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288176368!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641030': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125272.56392859443!2d77.05625965820312!3d11.119496299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288209382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641031': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125272.56392859443!2d77.05625965820312!3d11.119496299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288255641!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641039': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125236.59772745372!2d77.04068835820313!3d11.065459799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288289450!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125288.28631755612!2d77.03161415820315!3d11.058948199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288325640!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641041': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125302.43278784796!2d77.02623595820313!3d11.071493000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288376796!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641042': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125314.6933744875!2d77.01559475820312!3d11.093140199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288402957!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641043': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125236.59772745372!2d77.04068835820313!3d11.065459799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288431384!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
// };

// const ServiceCenterLocator = () => {
//   const [selectedPincode, setSelectedPincode] = useState('');

//   const handleChange = (e) => {
//     setSelectedPincode(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Service Center Locator</h1>
//       <label htmlFor="pincode">Enter your Pincode:</label>
//       <input
//         type="text"
//         id="pincode"
//         value={selectedPincode}
//         onChange={handleChange}
//         placeholder="Enter Pincode"
//       />
//       <div>
//         {selectedPincode && locations[selectedPincode] ? (
//           <div dangerouslySetInnerHTML={{ __html: locations[selectedPincode] }} />
//         ) : (
//           <p>Please enter a valid pincode to see the service center location.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceCenterLocator;
// import React, { useState } from 'react';

// // Data for the service center locations with their iframes
// const locations = {
//   '625001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.556398278233!2d78.6549207900934!3d10.80065670730146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf598ec0d80d9%3A0x12da43460b83d638!2sLG%20Service!5e0!3m2!1sen!2sin!4v1726287291816!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287741711!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600008': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287778500!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600020': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287903273!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600017': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287929424!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '600040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287975606!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288009975!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641005': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.30610760159!2d76.89060415820313!3d11.019141600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590804d6ae6d%3A0x9a54f68cafaabb28!2sLG%20Mobile%20Authorised%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288032525!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641004': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125230.04357495448!2d77.02769755820309!3d11.229091799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288061412!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   '641012': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125312.1356718097!2d77.00724855820315!3d11.226343999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f98b2d7162d1%3A0xd7b0ed3b56806a4c!2sLG%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288087322!5m2!1sen!2sin" class="w-full h-80 border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
//   // Add more locations here...
// };

// const ServiceCenterLocator = () => {
//   const [selectedPincode, setSelectedPincode] = useState('');

//   const handleChange = (e) => {
//     setSelectedPincode(e.target.value);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
//       <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Service Center Locator</h1>
//       <label htmlFor="pincode" className="block text-xl font-medium text-gray-700 mb-3">Enter your Pincode:</label>
//       <input
//         type="text"
//         id="pincode"
//         value={selectedPincode}
//         onChange={handleChange}
//         placeholder="Enter Pincode"
//         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
//       />
//       <div className="mt-6">
//         {selectedPincode && locations[selectedPincode] ? (
//           <div
//             dangerouslySetInnerHTML={{ __html: locations[selectedPincode] }}
//             className="w-full h-80 border-0 rounded-lg overflow-hidden shadow-md"
//           />
//         ) : (
//           <p className="text-center text-gray-500">Please enter a valid pincode to see the service center location.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceCenterLocator;
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly imported

// Data for the service center locations with their iframes
const locations = {
  '625001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.556398278233!2d78.6549207900934!3d10.80065670730146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf598ec0d80d9%3A0x12da43460b83d638!2sLG%20Service!5e0!3m2!1sen!2sin!4v1726287291816!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287741711!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600008': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287778500!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600020': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287903273!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600017': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287929424!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287975606!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288009975!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641005': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.30610760159!2d76.89060415820313!3d11.019141600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590804d6ae6d%3A0x9a54f68cafaabb28!2sLG%20Mobile%20Authorised%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288032525!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641004': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125230.04357495448!2d77.02769755820309!3d11.229091799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288061412!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641018': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.30610760159!2d76.89060415820313!3d11.019141600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590804d6ae6d%3A0x9a54f68cafaabb28!2sLG%20Mobile%20Authorised%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288106541!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641029': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288149361!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641033': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288180820!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641046': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125230.04357495448!2d77.02769755820309!3d11.229091799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288202954!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '625001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.556398278233!2d78.6549207900934!3d10.80065670730146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf598ec0d80d9%3A0x12da43460b83d638!2sLG%20Service!5e0!3m2!1sen!2sin!4v1726287291816!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287741711!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600008': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124404.14335599709!2d80.13685925820316!3d12.995534099999979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287778500!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600020': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287903273!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600017': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5599870f9%3A0x22e52846cb7e04c1!2sLG%20DIRECT%20SERVICE!5e0!3m2!1sen!2sin!4v1726287929424!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '600040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124352.08287505785!2d80.11364875820314!3d13.099022200000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52638a7cb54077%3A0xf3517a6d016cdf19!2sLG%20TV%20Service%20Center!5e0!3m2!1sen!2sin!4v1726287975606!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641001': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250656.4342796851!2d76.85960011640621!3d11.000551999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b48e3f1b3f%3A0xc83b1f19645bdfea!2sLG%20service%20centre%20-%20Crystal%20air%20systems!5e0!3m2!1sen!2sin!4v1726288009975!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641005': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125320.30610760159!2d76.89060415820313!3d11.019141600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8590804d6ae6d%3A0x9a54f68cafaabb28!2sLG%20Mobile%20Authorised%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288032525!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641004': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125230.04357495448!2d77.02769755820309!3d11.229091799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288061412!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641012': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125312.13592653781!2d76.91297915820311!3d11.035657999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d37b64d2c19b%3A0x5b029e48b4f4f5e2!2sLG%20TV%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288086262!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641014': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125290.46992444557!2d77.01707275820314!3d11.022315799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288112434!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641022': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125312.13592653781!2d76.91297915820311!3d11.035657999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8d37b64d2c19b%3A0x5b029e48b4f4f5e2!2sLG%20TV%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288144561!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641029': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125248.42456469828!2d77.05535575820313!3d11.114851799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288176368!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641030': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125272.56392859443!2d77.05625965820312!3d11.119496299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288209382!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641031': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125272.56392859443!2d77.05625965820312!3d11.119496299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288255641!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641039': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125236.59772745372!2d77.04068835820313!3d11.065459799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288289450!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641040': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125288.28631755612!2d77.03161415820315!3d11.058948199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288325640!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641041': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125302.43278784796!2d77.02623595820313!3d11.071493000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288376796!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641042': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125314.6933744875!2d77.01559475820312!3d11.093140199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288402957!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '641043': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125236.59772745372!2d77.04068835820313!3d11.065459799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb36a5cdf975%3A0x7f602abbabeb51ff!2sLG%20Service%20Centre%20-%20Coimbatore!5e0!3m2!1sen!2sin!4v1726288431384!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'625020':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31441.477448232366!2d78.09603373955076!3d9.918571899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5872970610d%3A0xd2198a2d7cdc1bdb!2sDigital%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288259443!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'625002':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.113517052303!2d78.14454899999997!3d9.931594450000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b603044d9d%3A0x96f548621d4f3b8c!2sLG%20Service%20Center-%20Madurai!5e0!3m2!1sen!2sin!4v1726288290042!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'620001':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.557489568848!2d78.66522054999999!3d10.8006358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf56bc24883b3%3A0x44aaf5bd30000000!2sLG%20AC%20Sales%20and%20Service!5e0!3m2!1sen!2sin!4v1726288337249!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'620006':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.557489568848!2d78.66522054999999!3d10.8006358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf598ec0d80d9%3A0x12da43460b83d638!2sLG%20Service!5e0!3m2!1sen!2sin!4v1726288315537!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'627001':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5103312523634!2d77.70708021744385!3d8.73795860000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411974513bdc7%3A0x8b595ceadef21e71!2sLG%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288376490!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'627811':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.070435415408!2d77.3075746!3d8.965657400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429985e9c875d%3A0xb2b426b59bf2015d!2sLG%20SERVICE%20CENTER!5e0!3m2!1sen!2sin!4v1726288396961!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'641021': '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125203.21437252458!2d77.0441684582031!3d11.241835999999989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8fb0df3d850ff%3A0xbceea0dcf85b8b!2sLG%20Electronics%20Service%20Center!5e0!3m2!1sen!2sin!4v1726288103938!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
'627424':'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.510331252364!2d77.7092689!3d8.737958600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411974513bdc7%3A0x8b595ceadef21e71!2sLG%20Service%20Centre!5e0!3m2!1sen!2sin!4v1726288415439!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
};

const ServiceCenterLocator = () => {
  const [selectedPincode, setSelectedPincode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPin, setSelectedPin] = useState('625001');
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filteredSuggestions = Object.keys(locations).filter(pincode =>
        pincode.startsWith(value)
        
      );
      setSuggestions(filteredSuggestions);
    } else {
      // setError('Sorry !! No Service Center Available For this Location');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (pincode) => {
    setInputValue(pincode);
    setSuggestions([]);
    setSelectedLocation(pincode);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto max-w-md mx-auto mt-10">
    <center> <h1 className="text-3xl font-bold mb-4 align-center">Service Centers Locator 🔎</h1></center> 
      <div className="relative mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter pincode"
          className="w-full p-2 border border-gray-300 rounded"
        />
          {isLoading && <p className="text-center text-gray-500">Loading map...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg">
            {suggestions.map(pincode => (
              <li
                key={pincode}
                onClick={() => handleSuggestionClick(pincode)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {pincode}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedLocation ?  (
        // <div className="mt-4 map-container">
        //   <div className='map-container w-full h-96' dangerouslySetInnerHTML={{ __html: locations[selectedLocation] }} />
        // </div>
        <div className="map-container mt-6">
           <div
              className="w-full  h-96 border border-gray-100 rounded-lg overflow-hidden"
              dangerouslySetInnerHTML={{ __html: locations[selectedLocation] }}
             />
          </div>
      ):(
        <p>No service center available for the applied pincode.</p>
      )}
    </div>

  //   <div className="p-6 max-w-3xl mx-auto">
  //   <h1 className="text-3xl font-bold mb-4">Service Centers Locator 🔎</h1>
  //   <div className="mb-4">
    
  //     <label htmlFor="pin-select" className="block text-lg font-medium text-gray-700">
  //       Select a PIN code:
  //     </label>
  //     <select
  //       id="pin-select"
  //       value={selectedPin}
  //       onChange={(e) => setSelectedPin(e.target.value)}
  //       className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
  //     >
        
  //       {Object.keys(locations).map((pin) => (
  //         <option key={pin} value={pin}>
  //           {pin}
  //         </option>
  //       ))}
  //     </select>
  //   </div>
  //   <div className="map-container mt-6">
  //     <div
  //       className="w-full  h-96 border border-gray-200 rounded-lg overflow-hidden"
  //       dangerouslySetInnerHTML={{ __html: locations[selectedPin] }}
  //     />
  //   </div>
  // </div>

  );
};

export default ServiceCenterLocator;

