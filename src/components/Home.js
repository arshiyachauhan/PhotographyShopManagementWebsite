import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Durga Photo Studio</h2>
      <p>
        At Durga Photo Studio, we capture your precious moments with a touch of creativity and professionalism. Whether it's a wedding, birthday, engagement, or portrait session, we are here to make your memories timeless.
      </p>
      
      <h3>Photoshoot and Videography Categories</h3>
      <ul className="categories-list">
        <li>Birthdays</li>
        <li>House Parties</li>
        <li>Wedding Movies</li>
        <li>Pre-Wedding</li>
        <li>Portrait Sessions</li>
        <li>Kid Photoshoots</li>
        <li>Corporate Events</li>
      </ul>
      
      <p>
        Explore our gallery to see our work or book an appointment to capture your special moments. We look forward to being part of your story!
      </p>
    </div>
  );
}

export default Home;
