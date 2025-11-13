import React from "react";
import logoPng from "../assets/download.png"; // replace with your logo path
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoPng} alt="PawMart Logo" className="w-12 h-12" />
            <h1 className="text-2xl font-bold text-green-500">PawMart</h1>
          </div>
          <p className="text-gray-300">
            PawMart connects local pet owners and buyers for adoption and pet care products.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-green-500 transition">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-end">
          <p className="text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} PawMart. All rights reserved.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-500 text-center py-3">
        Designed with ❤️ by PawMart Team
      </div>
    </footer>
  );
};

export default Footer;
