"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Section = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex H-FULL">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-10 h-full bg-gray-100 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64`}
      >
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white shadow-md md:hidden flex justify-between items-center p-4">
          <button className="text-gray-800 font-medium" onClick={toggleSidebar}>
            {isSidebarOpen ? "Close" : "Filters"}
          </button>
          <h2 className="text-xl font-bold">Logo</h2>
        </div>

        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
};

export default Section;
