'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // Menu items with dropdown options
  const menuItems = [
    { name: "Solutions", options: ["Entrepreneur Growth Alliance™", "Entrepreneur's EDGE™", "Business Stages of Growth"] },
    { name: "Resources", options: ["Videas", "Podcast", "Blog"] },
    { name: "About us", options: ["Who we are", "Our Team"] },
  ];

  return (
    <div 
      className={`bg-[#f4f4f4] fixed top-0 hidden lg:block border-b w-full transition-all duration-300 ${
        hoveredMenu ? "h-5/6 " : "h-24"
      }`} // Adjust height when hovered
      onMouseLeave={() => setHoveredMenu(null)} // Close on mouse leave
    >
      {/* Navbar container */}
      <div className="px-20 py-4 flex flex-col justify-start items-center w-full">
        <div className="flex justify-between w-full items-center">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-semibold tracking-wide gsans text-[#ffffff]">
              <img src="/vrtlogo.png" className="w-32 h-16" alt="Logo" />
            </h1>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-6 text-[#0c0c0c] items-center">
            {/* Home (No Dropdown) */}
            <button className="border small text-[14px] border-zinc-300 w-fit px-4 h-12 rounded-2xl">
              Home
            </button>

            {/* Other Menu Items (Expands Navbar on Hover) */}
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
              >
                <button className="border small text-[14px] border-zinc-300 w-fit px-4 h-12 rounded-2xl">
                  {item.name}
                </button>
              </div>
            ))}

            {/* Special Button */}
            <button className="text-[#ffffff] bg-[#ff0000] border border-[#ffffff]/10 small text-[14px] w-fit px-4 h-12 rounded-2xl">
              Talk to Rajesh Tedla Sir
            </button>
          </div>
        </div>

        {/* Expanded Menu Options (Only when hovered) */}
        {hoveredMenu && (
          <div className="w-full   mt-20 flex justify-start ">
            <div className="   gap-4  text-left">
              <div className="flex gap-4">
              {menuItems
                .find((item) => item.name === hoveredMenu)
                ?.options.map((option, index) => (
                  <div key={index} className="flex bg-[#ffffff]  px-6 rounded-3xl items-center gap-3 py-6">
                    <span className="w-2 h-2 rounded-full bg-[#ff0000]"></span>
                    <p className=" text-[#0c0c0c] text-2xl font-semibold gsans">{option}</p>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
