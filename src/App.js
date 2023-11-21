import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import Feature from './Feature';
import Access from './Access';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Testimonial from './Testimonial';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import Reset from './Reset';
import Feed from './Feed';
import Booking from './Booking';
import Profile from './Profile';
//import Pricing from './Pricing';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/dashboard" element={<Feed />} />
          <Route path="login" element={<Login />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/register' element={<Register />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/services" element={<Access />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
