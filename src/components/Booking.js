import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [userEmail, setUserEmail] = useState(''); // User email state
  const navigate = useNavigate();

  const handleBooking = () => {
    if (selectedDate && userEmail) {
      // Proceed to the payment page first
      navigate('/payment', { state: { selectedDate, userEmail } });
    } else {
      alert('Please select a date and provide your email.');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="date"
            className="form-control mb-3"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Enter your email address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button onClick={handleBooking} className="btn btn-primary w-100">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
