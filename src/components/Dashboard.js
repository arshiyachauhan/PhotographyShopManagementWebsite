import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  // Load bookings from localStorage when the component mounts
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    // Update the booking status based on the current date
    const updatedBookings = storedBookings.map((booking) => {
      const currentDate = new Date();
      const bookingDate = new Date(booking.selectedDate);
      
      if (bookingDate < currentDate) {
        booking.status = 'Completed';
      } else if (bookingDate >= currentDate) {
        booking.status = 'Upcoming';
      }
      return booking;
    });
    setBookings(updatedBookings);
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Your Dashboard</h2>
      <h3 className="mb-3">Booking History</h3>
      {bookings.length > 0 ? (
        <ul className="list-group">
          {bookings.map((booking, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              Date: {booking.selectedDate}
              <span className={`badge ${booking.status === 'Completed' ? 'bg-success' : 'bg-warning'} badge-pill`}>
                {booking.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">You have no past bookings.</p>
      )}
    </div>
  );
};

export default Dashboard;
