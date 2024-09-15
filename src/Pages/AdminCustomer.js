// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaAddressBook, FaAddressCard, FaMobile, FaProductHunt, FaStore, FaWarehouse } from 'react-icons/fa';

// const AdminDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [expandedProductId, setExpandedProductId] = useState(null);

//   useEffect(() => {
//     // Fetch all products
//     axios.get('http://localhost:8000/products')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => console.error('Error fetching products', error));
//   }, []);

//   const handleCardClick = (serialnum) => {
//     if (expandedProductId === serialnum) {
//       // Collapse the currently expanded card if clicked again
//       setExpandedProductId(null);
//     } else {
//       // Expand the clicked card
//       setExpandedProductId(serialnum);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-200 p-6">
//       <center>
//         <h1 className="text-4xl font-bold mb-6 text-blue-800">📒Customer &  Product Registry</h1>
//       </center>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.serialnum}
//             className={`bg-${expandedProductId === product.serialnum ? 'white' : 'blue-100'} shadow-lg rounded-lg overflow-hidden transition-transform transform ${expandedProductId === product.serialnum ? 'scale-105' : 'hover:scale-105'} cursor-pointer`}
//             onClick={() => handleCardClick(product.serialnum)}
//           >
//             <div className="p-4">
//               <h2 className="text-xl font-semibold text-gray-800">{product.customer.name}</h2>
//               {expandedProductId === product.serialnum && (
//                 <div className="mt-4">
//                   <p><strong>Product Name:</strong> {product.appliances.productname}</p>
//                   <p><strong>Product Model:</strong> {product.appliances.model}</p>
//                   <p><strong>Product Serial ID:</strong> {product.serialnum}</p>
//                   <p><strong>Purchase Date:</strong> {product.purchaseDate}</p>
//                   <p><strong>Customer Email:</strong> {product.customer.email}</p>
//                   <p><strong>Customer Contact:</strong> {product.customer.contact}</p>
//                   <p><strong>Customer Address:</strong> {product.customer.address}</p>
//                   <p><strong>Customer Pincode:</strong> {product.customer.pincode}</p>
//                   <p><strong>Customer State:</strong> {product.customer.state}</p>
//                   <p><strong>Customer District:</strong> {product.customer.district}</p>
//                   <p><strong>Customer City:</strong> {product.customer.city}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [groupedProducts, setGroupedProducts] = useState({});
  const [expandedCustomerId, setExpandedCustomerId] = useState(null);

  useEffect(() => {
    // Fetch all products
    axios.get('http://localhost:8000/products')
      .then(response => {
        const products = response.data;

        // Group products by customer ID
        const grouped = products.reduce((acc, product) => {
          const customerId = product.customer.cid;
          if (!acc[customerId]) {
            acc[customerId] = {
              customer: product.customer,
              products: []
            };
          }
          acc[customerId].products.push(product);
          return acc;
        }, {});

        setGroupedProducts(grouped);
      })
      .catch(error => console.error('Error fetching products', error));
  }, []);

  const handleCardClick = (customerId) => {
    if (expandedCustomerId === customerId) {
      // Collapse the currently expanded card if clicked again
      setExpandedCustomerId(null);
    } else {
      // Expand the clicked card
      setExpandedCustomerId(customerId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <center>
        <h1 className="text-4xl font-bold mb-6 text-blue-800">👤 Customer  -  📒 Product Registry </h1>
      </center>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(groupedProducts).map((group, index) => (
          <div
            key={index}
            className={`bg-${expandedCustomerId === group.customer.cid ? 'blue-200' : 'white'} shadow-lg rounded-lg overflow-hidden transition-transform transform ${expandedCustomerId === group.customer.cid ? 'scale-105' : 'hover:scale-105'} cursor-pointer`}
            onClick={() => handleCardClick(group.customer.cid)}
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{group.customer.name}</h2>
              <p><strong>Email:</strong> {group.customer.email}</p>
              <p><strong>Contact:</strong> {group.customer.contact}</p>
              <p><strong>Address:</strong> {group.customer.address}</p>
              <p><strong>Pincode:</strong> {group.customer.pincode}</p>
              <p><strong>State:</strong> {group.customer.state}</p>
              <p><strong>District:</strong> {group.customer.district}</p>
              <p><strong>City:</strong> {group.customer.city}</p>

              {expandedCustomerId === group.customer.cid && (
                <div className="mt-4">
                  {group.products.length > 0 ? (
                    <ul>
                      {group.products.map((product) => (
                        <li key={product.serialnum} className="mb-2 p-2 bg-white rounded-md border-b border-gray-200">
                          <p><strong>Product Name:</strong> {product.appliances.productname}</p>
                          <p><strong>Product Model:</strong> {product.appliances.model}</p>
                          <p><strong>Product Serial ID:</strong> {product.serialnum}</p>
                          <p><strong>Purchase Date:</strong> {product.purchaseDate}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No products registered</p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
