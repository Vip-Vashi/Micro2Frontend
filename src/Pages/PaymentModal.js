import React, { useState } from 'react';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'; // Import jsPDF
import 'jspdf-autotable'; // Import jsPDF autotable plugin
import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const PaymentModal = ({ isOpen, onClose, onPayment, amount }) => {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [password, setPassword] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  
  const validateUPI = () => upiId.includes('@');
  const validateCard = () => {
    const currentYear = new Date().getFullYear();
    return (
      cardNumber.length === 16 &&
      !isNaN(cardNumber) &&
      expiryMonth >= 1 &&
      expiryMonth <= 12 &&
      expiryYear >= currentYear &&
      cvv.length === 3 &&
      !isNaN(cvv)
    );
  };

  const handlePayment = async () => {
    if (paymentMethod === 'UPI' && !validateUPI()) {
      Swal.fire('Error', 'UPI ID must contain "@" symbol', 'error');
      return;
    }
    if (paymentMethod === 'Card' && !validateCard()) {
      Swal.fire('Error', 'Please check your card details.', 'error');
      return;
    }
    if (paymentMethod === 'PayPal' && (!password || password.length !== 6 || isNaN(password))) {
      Swal.fire('Error', 'Password must be exactly 6 digits long and numeric', 'error');
      return;
    }

    // Generate OTP and show as notification
    const otp = Math.floor(1000 + Math.random() * 9000); 
    // Generate a 4-digit OTP
    toast.success( `Your  4-digit OTP has been generated: ${otp}`);
    Swal.fire({
      title: 'OTP Generated',
      text: `A 4-digit OTP has been generated: ${otp}`,
      icon: 'info',
      confirmButtonText: 'OK'
    });

    try {
      // Simulate sending OTP to user's email
      // await axios.post(`${BASE_URL}send-otp`, { email: userEmail, otp });
      console.log(`Generated OTP: ${otp}`); // For testing purposes

      // Prompt user for OTP
      const { value: enteredOtp } = await Swal.fire({
        title: 'Enter OTP',
        input: 'text',
        inputLabel: 'Enter the OTP sent to your email.',
        inputPlaceholder: 'Enter OTP',
        inputAttributes: {
          maxlength: 4,
          minlength: 4,
          pattern: '[0-9]*',
          type: 'number'
        },
        showCancelButton: true,
        confirmButtonText: 'Verify',
        cancelButtonText: 'Cancel'
      });

      if (enteredOtp === otp.toString()) {
        Swal.fire('Success', 'OTP verified. Processing payment...', 'success');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate payment processing

        await onPayment(paymentMethod, { upiId, cardNumber, expiryMonth, expiryYear, cvv, password });
        setPaymentStatus('completed'); // Assuming payment is completed
      } else {
        Swal.fire('Error', 'Invalid OTP. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error during payment process:', error);
      Swal.fire('Error', 'An error occurred. Please try again.', 'error');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Bill Summary', 20, 10);
    doc.autoTable({
      startY: 20,
      head: [['Service', 'Charge']],
      body: [
        ['Service Charges', `$${amount.serviceCharges}`],
        ['Spare Parts Charges', `$${amount.sparePartsCharges}`],
        ['Total Amount', `$${amount.total}`],
      ],
    });
    doc.save('bill_summary.pdf');
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Select Payment Option</h2>
          <div className="flex mb-4">
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="UPI"
                checked={paymentMethod === 'UPI'}
                onChange={() => setPaymentMethod('UPI')}
                className="form-radio"
              />
              <span className="ml-2">UPI</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Card"
                checked={paymentMethod === 'Card'}
                onChange={() => setPaymentMethod('Card')}
                className="form-radio"
              />
              <span className="ml-2">Card</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                value="PayPal"
                checked={paymentMethod === 'PayPal'}
                onChange={() => setPaymentMethod('PayPal')}
                className="form-radio"
              />
              <span className="ml-2">PayPal</span>
            </label>
          </div>

          {paymentMethod === 'UPI' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">UPI ID</label>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter UPI ID"
              />
               <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter 6-digit password"
              />
            </div>
            
          )}

          {paymentMethod === 'Card' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter card number"
              />
              <label className="block text-gray-700 mb-2 mt-2">Expiry Month (MM)</label>
              <input
                type="number"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="MM"
              />
              <label className="block text-gray-700 mb-2 mt-2">Expiry Year (YYYY)</label>
              <input
                type="number"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="YYYY"
              />
              <label className="block text-gray-700 mb-2 mt-2">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter CVV"
              />
            </div>
          )}

          {paymentMethod === 'PayPal' && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter 6-digit password"
              />
            </div>
          )}

          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Amount: ${amount.total}</p>
            <div>
              <button
                onClick={handlePayment}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
              >
                Pay Now
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Cancel
          </button>
        </div>
        <ToastContainer/>
      </div>
    )
  );
};

export default PaymentModal;
