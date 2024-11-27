"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md px-6 py-4 md:px-10 z-50">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Logo</div>

        {/* Hamburger Menu */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="space-y-1">
            <span className="block h-0.5 w-8 bg-gray-800"></span>
            <span className="block h-0.5 w-8 bg-gray-800"></span>
            <span className="block h-0.5 w-8 bg-gray-800"></span>
          </div>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className="flex flex-col items-start mt-16 space-y-8 px-6">
          <li>
            <a href="#home" className="text-lg hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-lg hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Page Content */}
      <div className="mt-20">
        {/* Add padding-top to avoid overlap with the Navbar */}
        <h1 className="text-3xl font-bold text-center mt-4">Welcome!</h1>
        <p className="text-center mt-2">Scroll down to explore the content.</p>
      </div>
    </div>
  );
};

export default Navbar;
