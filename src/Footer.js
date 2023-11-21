import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import Logo from "./images/Logo.png";

function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="mr-4">
            <img
              className="h-10 w-auto"
              src={Logo}
              alt="Eventrov"
            />
          </a>
          <div className="text-white text-xs">
            &copy; 2023 Eventrov
          </div>
        </div>
        <div className="flex">
          <a href="#" className="text-white text-sm mr-4 hover:text-gray-400">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/eventrovevents/" className="text-white text-sm mr-4 hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/eventrov/" className="text-white text-sm hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
