import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white mt-4 py-8">
      <div className="container flex items-center justify-start mx-auto text-center">
        <div>
        {/* Logo and Description */}
        <h1 className="text-2xl text-start font-bold nico m-2">AanganConnect</h1>
        <p className="text-sm text-start font-light ml-4 w-[60%] mb-6">
          Transforming the way communities connect and thrive with seamless,
          secure, and efficient society management solutions.
        </p>
        </div>
        <div>

        {/* Navigation Links */}
        <div className="flex justify-center font-thin  space-x-16 mb-6 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/features" className="hover:underline">Features</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/about" className="hover:underline">About us</Link>
          <Link to="/contact" className="hover:underline">Contact us</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          © Copyright 2024 - Aangan Connect
        </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
