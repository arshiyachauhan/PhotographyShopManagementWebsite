
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve details from the booking page
  const { userName, selectedDate, userEmail, preferenceThemes } = location.state || {};

  // Handle sending email and showing confirmation once payment is "processed"
  useEffect(() => {
    if (userName && selectedDate && userEmail) {
      // Simulate payment processing
      setTimeout(() => {
        // After "payment" is processed, send the email and show confirmation
        emailjs
          .send(
            'Photography-Shop', // Replace with your EmailJS service ID
            'template_6vcug58', // Replace with your EmailJS template ID
            {
              userName,           // User's name
              to_email: userEmail, // User's email address
              selectedDate,        // The selected date for the appointment
              preferenceThemes,    // The user's preferred themes description
              thankYouMessage: `Thank you, ${userName}, for booking with us!`, // Custom thank-you message
            },
            'v19JW19qPqz5Un8d_' // Replace with your EmailJS user ID
          )
          .then((response) => {
            alert(
              `Booking successful! Your appointment is booked for ${selectedDate}. A confirmation email has been sent.`
            );

            // Store the booking in localStorage
            const booking = {
              userName,
              selectedDate,
              userEmail,
              preferenceThemes,
              status: 'Upcoming',
            };
            const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
            existingBookings.push(booking);
            localStorage.setItem('bookings', JSON.stringify(existingBookings));

            navigate('/dashboard'); // Redirect to the dashboard after booking
          })
          .catch((error) => {
            alert('There was an error sending the confirmation email.');
            console.error('EmailJS error:', error);
          });
      }, 2000); // Simulating a payment delay (2 seconds)
    } else {
      navigate('/'); // Redirect back to the booking page if no state was passed
    }
  }, [navigate, userName, selectedDate, userEmail, preferenceThemes]);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Processing </h2>
      <p className="text-center">Please wait while we process your request...</p>
    </div>
  );
};

export default Payment;
