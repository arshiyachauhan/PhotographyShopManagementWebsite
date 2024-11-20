import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [userName, setUserName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [preferenceThemes, setPreferenceThemes] = useState('');
  const navigate = useNavigate();

  const handleBooking = () => {
    if (userName && selectedDate && userEmail) {
      // Navigate to the payment page with all the booking details
      navigate('/payment', {
        state: { userName, selectedDate, userEmail, preferenceThemes },
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="container">
      {/* <h2 className="text-center mb-4">Book an Appointment</h2> */}
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold' }}>Make a Booking</h2>
      <h6>Check the dashboard for available dates</h6>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="date"
            className="form-control mb-3"
            placeholder="Select a date"
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
          <textarea
            className="form-control mb-3"
            placeholder="Describe your preferred themes (optional)"
            value={preferenceThemes}
            onChange={(e) => setPreferenceThemes(e.target.value)}
          ></textarea>
          <button onClick={handleBooking} className="btn btn-primary w-100">
            Proceed to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;

