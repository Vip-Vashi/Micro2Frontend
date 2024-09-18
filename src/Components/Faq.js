// import React, { useState } from 'react';

// // Sample data for the appliances and their FAQs
// const appliances = [
//   {
//     id: 1,
//     name: 'Washing Machine',
//     image: 'https://static.vecteezy.com/system/resources/previews/030/786/320/non_2x/interior-of-modern-laundry-room-with-washing-machine-basket-and-towels-generative-ai-photo.jpeg',
//     faqs: [
//       { question: ' How To Fix Power Issue (Top/Front Loading Washing Machine)?', answer: 'Step 1: Confirm whether the power cord is correctly connected to power socket or not. - Unplug the power cord & put it back to the power socket.                               Step 2: Check whether other appliance or mobile charger/adaptor is working in same power socket' },
//       { question: 'What should I do if the washing machine is not spinning?', answer: 'Check if the load is balanced and redistribute the clothes. If the problem persists, there may be an issue with the motor or belt.' }
//     ]
//   },
//   {
//     id: 2,
//     name: 'Refrigerator',
//     image: 'https://img.freepik.com/premium-photo/sleek-modern-refrigerator-near-light-grey-wall-home-appliance_955834-32494.jpg',
//     faqs: [
//       { question: 'Why is my refrigerator making a loud noise?', answer: 'Loud noises could be caused by a faulty fan, a loose part, or ice buildup. Check the fan and ice maker, or contact a technician if the noise continues.' },
//       { question: 'How do I defrost my refrigerator?', answer: 'Turn off the refrigerator and leave the door open to let the ice melt. You can speed up the process by placing towels around the base to catch the water.' }
//     ]
//   },
//   {
//     id: 2,
//     name: 'AirConditioner',
//     image: 'https://static.vecteezy.com/system/resources/previews/025/739/597/non_2x/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg',
//     faqs: [
//       { question: 'How To Fix No Cooling Issue?', answer: 'Low cooling issue comes in air conditioner mainly due to following reasons  - > Unset Cooling mode  - >Dirty and Blocked filters  - >Low Voltage as per requirement (200V-240V) ' },
//       { question: 'How To Solve Leaking Issue?', answer: 'Water drip out through air conditioner due to bent or twisted drain pipes  . ->Drain pipe should be inclined downward direction. ->End point of drain pipe should not be dipped into water body/bucket ->Clean the air filter after every 20 days.,Run the AC on MSOON Mode' }
//     ]
//   }
//   // Add more appliances as needed
// ];

// const FAQPage = () => {
//   const [selectedAppliance, setSelectedAppliance] = useState(null);

//   const handleCardClick = (appliance) => {
//     setSelectedAppliance(appliance);
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Home Appliances</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {appliances.map((appliance) => (
//           <div
//             key={appliance.id}
//             className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
//             onClick={() => handleCardClick(appliance)}
//           >
//             <img
//               src={appliance.image}
//               alt={appliance.name}
//               className="w-full h-80 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold">{appliance.name}</h2>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedAppliance && (
//         <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4">{selectedAppliance.name} FAQs</h2>
//           <div>
//             {selectedAppliance.faqs.map((faq, index) => (
//               <div key={index} className="mb-4">
//                 <p className="text-lg font-semibold">{faq.question}</p>
//                 <p className="text-gray-700">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={() => setSelectedAppliance(null)}
//             className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Back to FAQ List
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FAQPage;
import React, { useState } from 'react';

// Sample data for the appliances and their FAQs, including demo videos
const appliances = [
  {
    id: 1,
    name: 'Washing Machine',
    image: 'https://static.vecteezy.com/system/resources/previews/030/786/320/non_2x/interior-of-modern-laundry-room-with-washing-machine-basket-and-towels-generative-ai-photo.jpeg',
    faqs: [
      { 
        question: 'How To Fix Power Issue (Top/Front Loading Washing Machine)?', 
        answer: 'Step 1: Confirm whether the power cord is correctly connected to power socket or not. - Unplug the power cord & put it back to the power socket. Step 2: Check whether other appliance or mobile charger/adaptor is working in same power socket',
        // videoUrl: 'https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcQtpSE7ZnZX5L-XuL7-hpDOHWMHD5wq9iObkQ' // Sample video URL
      },
      { 
        question: 'What should I do if the washing machine is not spinning?', 
        answer: 'Check if the load is balanced and redistribute the clothes. If the problem persists, there may be an issue with the motor or belt.',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample video URL
      }
    ]
  },
  {
    id: 2,
    name: 'Refrigerator',
    image: 'https://img.freepik.com/premium-photo/sleek-modern-refrigerator-near-light-grey-wall-home-appliance_955834-32494.jpg',
    faqs: [
      { 
        question: 'Why is my refrigerator making a loud noise?', 
        answer: 'Loud noises could be caused by a faulty fan, a loose part, or ice buildup. Check the fan and ice maker, or contact a technician if the noise continues.',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample video URL
      },
      { 
        question: 'How do I defrost my refrigerator?', 
        answer: 'Turn off the refrigerator and leave the door open to let the ice melt. You can speed up the process by placing towels around the base to catch the water.',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample video URL
      }
    ]
  },
  {
    id: 3,
    name: 'Air Conditioner',
    image: 'https://static.vecteezy.com/system/resources/previews/025/739/597/non_2x/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg',
    faqs: [
      { 
        question: 'How To Fix No Cooling Issue?', 
        answer: 'Low cooling issue comes in air conditioner mainly due to following reasons -> Unset Cooling mode -> Dirty and Blocked filters -> Low Voltage as per requirement (200V-240V)',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample video URL
      },
      { 
        question: 'How To Solve Leaking Issue?', 
        answer: 'Water drip out through air conditioner due to bent or twisted drain pipes. -> Drain pipe should be inclined downward direction. -> End point of drain pipe should not be dipped into water body/bucket -> Clean the air filter after every 20 days., Run the AC on MOON Mode',
        // videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Sample video URL
      }
    ]
  }
  // Add more appliances as needed
];

const FAQPage = () => {
  const [selectedAppliance, setSelectedAppliance] = useState(null);

  const handleCardClick = (appliance) => {
    setSelectedAppliance(appliance);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Home Appliances</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appliances.map((appliance) => (
          <div
            key={appliance.id}
            className="bg-white rounded-lg shadow-md cursor-pointer overflow-hidden"
            onClick={() => handleCardClick(appliance)}
          >
            <img
              src={appliance.image}
              alt={appliance.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{appliance.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedAppliance && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{selectedAppliance.name} FAQs</h2>
          <div>
            {selectedAppliance.faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <p className="text-lg font-semibold mb-2">{faq.question}</p>
                <p className="text-gray-700 mb-2">{faq.answer}</p>
                {faq.videoUrl && (
                  <div className="mb-4">
                    <iframe 
                      width="560" 
                      height="315" 
                      src={faq.videoUrl} 
                      title={`Demo Video for ${faq.question}`} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => setSelectedAppliance(null)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Back to FAQ List
          </button>
        </div>
      )}
    </div>
  );
};

export default FAQPage;

