import React, { useState } from 'react';

// Sample data for the appliances and their FAQs
const appliances = [
  {
    id: 1,
    name: 'Washing Machine',
    image: 'https://static.vecteezy.com/system/resources/previews/030/786/320/non_2x/interior-of-modern-laundry-room-with-washing-machine-basket-and-towels-generative-ai-photo.jpeg',
    faqs: [
      { question: ' How To Fix Power Issue (Top/Front Loading Washing Machine)?', answer: 'Step 1: Confirm whether the power cord is correctly connected to power socket or not. - Unplug the power cord & put it back to the power socket.                               Step 2: Check whether other appliance or mobile charger/adaptor is working in same power socket' },
      { question: 'What should I do if the washing machine is not spinning?', answer: 'Check if the load is balanced and redistribute the clothes. If the problem persists, there may be an issue with the motor or belt.' }
    ]
  },
  {
    id: 2,
    name: 'Refrigerator',
    image: 'https://img.freepik.com/premium-photo/sleek-modern-refrigerator-near-light-grey-wall-home-appliance_955834-32494.jpg',
    faqs: [
      { question: 'Why is my refrigerator making a loud noise?', answer: 'Loud noises could be caused by a faulty fan, a loose part, or ice buildup. Check the fan and ice maker, or contact a technician if the noise continues.' },
      { question: 'How do I defrost my refrigerator?', answer: 'Turn off the refrigerator and leave the door open to let the ice melt. You can speed up the process by placing towels around the base to catch the water.' }
    ]
  },
  {
    id: 2,
    name: 'AirConditioner',
    image: 'https://static.vecteezy.com/system/resources/previews/025/739/597/non_2x/close-up-shot-of-newly-installed-white-air-conditioner-working-ac-hanging-on-the-pastel-color-wall-with-a-lot-of-copy-space-for-text-background-generative-ai-free-photo.jpg',
    faqs: [
      { question: 'Why is my refrigerator making a loud noise?', answer: 'Loud noises could be caused by a faulty fan, a loose part, or ice buildup. Check the fan and ice maker, or contact a technician if the noise continues.' },
      { question: 'How do I defrost my refrigerator?', answer: 'Turn off the refrigerator and leave the door open to let the ice melt. You can speed up the process by placing towels around the base to catch the water.' }
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
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ for Home Appliances</h1>
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
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold">{faq.question}</p>
                <p className="text-gray-700">{faq.answer}</p>
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
