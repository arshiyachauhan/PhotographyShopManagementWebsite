import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve selected date and user email from the booking page
  const { selectedDate, userEmail } = location.state || {};

  // Handle sending email and showing confirmation once payment is "processed"
  useEffect(() => {
    if (selectedDate && userEmail) {
      // Simulate payment processing here...
      setTimeout(() => {
        // After "payment" is processed, send the email and show confirmation
        emailjs.send(
          'Photography-Shop',          // Your EmailJS service ID
          'template_6vcug58',         // Your EmailJS template ID
          {
            to_email: userEmail,      // User's email address
            selectedDate: selectedDate,  // The selected date for the appointment
          },
          'v19JW19qPqz5Un8d_'              // Your EmailJS user ID
        )
        .then((response) => {
          alert(`Payment successful! Your appointment is booked for ${selectedDate}. A confirmation email has been sent.`);

          // Store the booking in localStorage
          const booking = { selectedDate, userEmail, status: 'Upcoming' };
          const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
          existingBookings.push(booking);
          localStorage.setItem('bookings', JSON.stringify(existingBookings));

          navigate('/dashboard');  // Redirect to the dashboard after booking
        })
        .catch((error) => {
          alert('There was an error sending the confirmation email.');
          console.error('EmailJS error:', error);
        });
      }, 2000);  // Simulating a payment delay (2 seconds)
    } else {
      navigate('/');  // If no state was passed, redirect back to the booking page
    }
  }, [navigate, selectedDate, userEmail]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Processing Payment</h2>
      <p className="text-center">Please wait while we process your payment...</p>
    </div>
  );
};

export default Payment;
