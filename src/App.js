import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Payment from './components/Payment';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div>
       
        <video className="video-background" autoPlay loop muted>
          <source src="./images/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar */}
        <div className="navbar">
          <div className="nav-links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/booking">Booking</Link>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>

        {/* Footer */}
        <footer>
          <div>Durga Photo Studio, Ram Das Building, Sanjauli, Shimla | 092188 65826</div>
          <div>
            <a href="https://www.facebook.com/people/Durga-Studio-Sanjauli/100064242962407/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Facebook</a>
            <a href="http://www.youtube.com/@durgastudiosanjauli1503" target="_blank" rel="noopener noreferrer" className="text-white mx-2">YouTube</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
