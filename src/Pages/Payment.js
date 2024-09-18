// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert for notifications

// const BASE_URL = 'http://localhost:8000/';

// const PaymentModal = ({ isOpen, onClose, onPayment }) => {
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [upiId, setUpiId] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardExpiry, setCardExpiry] = useState('');
//   const [cardCvc, setCardCvc] = useState('');

//   const handlePayment = () => {
//     if (paymentMethod === 'UPI' && !upiId) {
//       Swal.fire('Error', 'Please enter your UPI ID.', 'error');
//       return;
//     }
//     if (paymentMethod === 'Card' && (!cardNumber || !cardExpiry || !cardCvc)) {
//       Swal.fire('Error', 'Please fill in all card details.', 'error');
//       return;
//     }

//     onPayment(paymentMethod, { upiId, cardNumber, cardExpiry, cardCvc });
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
//           <h2 className="text-2xl font-bold mb-4">Select Payment Option</h2>
//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="UPI"
//                 checked={paymentMethod === 'UPI'}
//                 onChange={() => setPaymentMethod('UPI')}
//                 className="form-radio"
//               />
//               <span className="ml-2">UPI</span>
//             </label>
//             {paymentMethod === 'UPI' && (
//               <div className="mt-2">
//                 <label className="block text-gray-700 mb-2">UPI ID</label>
//                 <input
//                   type="text"
//                   value={upiId}
//                   onChange={(e) => setUpiId(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 value="Card"
//                 checked={paymentMethod === 'Card'}
//                 onChange={() => setPaymentMethod('Card')}
//                 className="form-radio"
//               />
//               <span className="ml-2">Card</span>
//             </label>
//             {paymentMethod === 'Card' && (
//               <div className="mt-2">
//                 <label className="block text-gray-700 mb-2">Card Number</label>
//                 <input
//                   type="text"
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <label className="block text-gray-700 mb-2 mt-2">Expiry Date</label>
//                 <input
//                   type="text"
//                   value={cardExpiry}
//                   onChange={(e) => setCardExpiry(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <label className="block text-gray-700 mb-2 mt-2">CVC</label>
//                 <input
//                   type="text"
//                   value={cardCvc}
//                   onChange={(e) => setCardCvc(e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             )}
//           </div>
//           <div className="flex justify-end">
//             <button
//               onClick={handlePayment}
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
//             >
//               Pay Now
//             </button>
//             <button
//               onClick={onClose}
//               className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// const CustomerPayment = () => {
//   const [paymentDetails, setPaymentDetails] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);

//   useEffect(() => {
//     const fetchPaymentDetails = async () => {
//       try {
//         const userId = sessionStorage.getItem('userid');
//         if (userId) {
//           // Fetch all payment records
//           const response = await axios.get(`${BASE_URL}payment/all`);
//           const allPayments = response.data;

//           // Filter records based on user ID
//           const userPayments = allPayments.filter(payment => payment.request.customer.cid == userId);
//           console.log(userPayments)

//           if (userPayments.length > 0) {
//             setPaymentDetails(userPayments[0]); // Assuming one record per user for simplicity
//           } else {
//             console.error('No payment details found for this user');
//           }
//         } else {
//           console.error('No user ID found in session storage');
//         }
//       } catch (error) {
//         console.error('Error fetching payment details:', error);
//       }
//     };

//     fetchPaymentDetails();
//   }, []);

//   const handlePayment = async (method, details) => {
//     try {
//       // Simulate payment process
//       // Example API call: await axios.post(`${BASE_URL}payment/${paymentDetails.id}/pay`, { method, details });

//       // For demo purposes, we assume payment is successful
//       const formData = new FormData();
//       formData.append("id",paymentDetails.pid);
//       formData.append("paysts","Paid");
//       await axios.put(`${BASE_URL}payment/paysts`,formData);
//       setIsPaid(true);
//       setIsModalOpen(false);
//       Swal.fire('Success', 'Payment completed successfully!', 'success');
//     } catch (error) {
//       Swal.fire('Error', 'Payment failed. Please try again.', 'error');
//     }
//   };

//   if (!paymentDetails) {
//     return <div className="p-8 text-center">Loading payment details...</div>;
//   }

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Customer Payment</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
//         <p><strong>Customer ID:</strong> {paymentDetails.request.product.customer.cid}</p>
//         <p><strong>Amount Due:</strong> {paymentDetails.billamt}</p>
//         <p><strong>Status:</strong> {paymentDetails.status}</p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           disabled={isPaid}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-50"
//         >
//           Pay Now
//         </button>
//       </div>

//       <PaymentModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onPayment={handlePayment}
//       />
//     </div>
//   );
// };

// export default CustomerPayment;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import PaymentModal from './PaymentModal'; // Adjust the import path if necessary

// const BASE_URL = 'http://localhost:8000/';

// const CustomerPayment = () => {
//   const [paymentDetails, setPaymentDetails] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isPaid, setIsPaid] = useState(false);

//   useEffect(() => {
//     const fetchPaymentDetails = async () => {
//       try {
//         const userId = sessionStorage.getItem('userid');
//         if (userId) {
//           const response = await axios.get(`${BASE_URL}payment/all`);
//           const allPayments = response.data;

//           const userPayments = allPayments.filter(payment => payment.request.customer.cid == userId);
//           if (userPayments.length > 0) {
//             setPaymentDetails(userPayments[0]);
//           } else {
//             console.error('No payment details found for this user');
//           }
//         } else {
//           console.error('No user ID found in session storage');
//         }
//       } catch (error) {
//         console.error('Error fetching payment details:', error);
//       }
//     };

//     fetchPaymentDetails();
//   }, []);

//   const handlePayment = async (method, details) => {
//     try {
//       // Simulate payment process
//       const formData = new FormData();
//       formData.append('id', paymentDetails.pid);
//       formData.append('paysts', 'Paid');
//       await axios.put(`${BASE_URL}payment/paysts`, formData);

//       setIsPaid(true);
//       setIsModalOpen(false);
//       Swal.fire('Success', 'Payment completed successfully!', 'success');
//     } catch (error) {
//       Swal.fire('Error', 'Payment failed. Please try again.', 'error');
//     }
//   };

//   if (!paymentDetails) {
//     return <div className="p-8 text-center">Loading payment details...</div>;
//   }

//   const { request, billamt, sparepartscharges, servicecharges } = paymentDetails;
//   const totalAmount =  sparepartscharges + servicecharges;

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-center">Customer Payment</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
//         <div className="mb-4">
//           <h3 className="text-xl font-semibold">Service Details</h3>
//           <p><strong>Customer ID:</strong> {request.customer.cid}</p>
//           <p><strong>Product Name:</strong> {request.product.appliances.productname}</p>
//           <p><strong>Service Charges:</strong> {paymentDetails.servicecharge}</p>
//           <p><strong>Spare Parts Charges:</strong> {paymentDetails.sparepartcharge}</p>
//           <p><strong>Total Amount Due:</strong> {paymentDetails.billamt}</p>
//         </div>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           disabled={isPaid}
//           className={`mt-4 px-4 py-2 rounded-lg font-semibold ${
//             isPaid ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500'
//           }`}
//         >
//           Pay Now
//         </button>
//       </div>

//       <PaymentModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onPayment={handlePayment}
//         amount={{
//           serviceCharges: paymentDetails.servicecharge,
//           sparePartsCharges: paymentDetails.sparepartcharge,
//           total: paymentDetails.billamt,
//         }}
//       />
//     </div>
//   );
// };

// export default CustomerPayment;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert for notifications
import PaymentModal from './PaymentModal'; // Ensure this import path is correct
import jsPDF from 'jspdf'; // Import jsPDF
import 'jspdf-autotable';

const BASE_URL = 'http://localhost:8000/';

const CustomerPayment = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isPaid, setIsPaid] = useState(false);
  const [billSummary, setBillSummary] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const userId = sessionStorage.getItem('userid');
        if (userId) {
          // Fetch all payment records
          const response = await axios.get(`${BASE_URL}payment/all`);
          const allPayments = response.data;

          // Filter records based on user ID
          const userPayments = allPayments.filter(payment => payment.request.customer.cid == userId);
          console.log(userPayments);

          if (userPayments.length > 0) {
            setPaymentDetails(userPayments);
          } else {
            console.error('No payment details found for this user');
          }
        } else {
          console.error('No user ID found in session storage');
        }
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, []);

  const handlePayment = async (method, details) => {
    try {
      // Simulate payment process
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate payment processing

      // Update payment status
      const formData = new FormData();
      formData.append("id", selectedPayment.pid);
      formData.append("paysts", "Paid");
      await axios.put(`${BASE_URL}payment/paysts`, formData);

      // Fetch updated payment status
      const response = await axios.get(`${BASE_URL}payment/all`);
      const updatedPayments = response.data;
      const updatedPayment = updatedPayments.find(payment => payment.pid === selectedPayment.pid);
      
      if (updatedPayment) {
        setIsPaid(true);
        setIsModalOpen(false);

        // Display payment success notification
        Swal.fire('Success', 'Payment completed successfully!', 'success');

        // Generate and display bill summary as a PDF
        setBillSummary({
          serviceCharges: updatedPayment.servicecharge,
          sparePartsCharges: updatedPayment.sparepartcharge,
          total: updatedPayment.billamt,
          customername: updatedPayment.request.customer.name,
          mail: updatedPayment.request.customer.email,
          product: updatedPayment.request.product.appliances.productname,
          issue: updatedPayment.request.issuedes
        });
      }

    } catch (error) {
      console.error('Error during payment process:', error);
      Swal.fire('Error', 'Payment failed. Please try again.', 'error');
    }
  };

  const downloadBill = () => {
    if (!billSummary) return;

    const doc = new jsPDF();
    doc.text('Stark Electronics', 70, 10);
    doc.text('Bill Summary', 20, 15);

    doc.autoTable({
      startY: 20,
      head: [['Title', 'Details']],
      body: [
        ['Customer Name', `${billSummary.customername}`],
        ['Customer Email', `${billSummary.mail}`],
        ['Product', `${billSummary.product}`],
        ['Issue', `${billSummary.issue}`],
        ['Service Charges', `${billSummary.serviceCharges}`],
        ['Spare Parts Charges', `${billSummary.sparePartsCharges}`],
        ['Total Amount', `${billSummary.total}`],
      ],
    });
    doc.save('bill_summary.pdf');
  };

  if (paymentDetails.length === 0) {
    return <div className="p-8 text-center">No payment details...</div>;
  }

  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Payment</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Request ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Charges</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spare Parts Charges</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paymentDetails.map(payment => (
              <tr key={payment.pid}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.request.reqid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.servicecharge}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.sparepartcharge}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.billamt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {payment.status === 'Paid' ? (
                    <button
                      onClick={() => {
                        setBillSummary({
                          serviceCharges: payment.servicecharge,
                          sparePartsCharges: payment.sparepartcharge,
                          total: payment.billamt,
                          customername: payment.request.customer.name,
                          mail: payment.request.customer.email,
                          product: payment.request.product.appliances.productname,
                          issue: payment.request.issuedes
                        });
                        downloadBill();
                      }}
                      className="text-green-600 hover:text-green-900"
                    >
                      Download Bill
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedPayment(payment);
                        setIsModalOpen(true);
                      }}
                      className="text-blue-600 hover:text-blue-900"
                      disabled={isPaid}
                    >
                      Pay Now
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPayment={handlePayment}
        amount={{
          serviceCharges: selectedPayment?.servicecharge || 0,
          sparePartsCharges: selectedPayment?.sparepartcharge || 0,
          total: selectedPayment?.billamt || 0
        }}
      />
    </div>
  );
};

export default CustomerPayment;
