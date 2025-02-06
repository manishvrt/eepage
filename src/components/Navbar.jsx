"use client";
import React, { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  // Menu items with dropdown options
  const menuItems = [
    {
      name: "Solutions",
      options: [
        {
          label: "Entrepreneur Growth Alliance™",
          link: "https://vrtmanagementgroup.com/entrepreneur-growth-alliance/",
        },
        {
          label: "Entrepreneur's EDGE™",
          link: "https://vrtmanagementgroup.com/entrepreneur-edge/",
        },
        {
          label: "Business Stages of Growth",
          link: "https://vrtmanagementgroup.com/7-stages-of-growth/",
        },
      ],
    },
    {
      name: "Resources",
      options: [
        {
          label: "Videos",
          link: "https://www.youtube.com/@vrt-management-group",
        },
        { label: "Podcast", link: "https://vrtpodcast.buzzsprout.com/" },
        { label: "Blog", link: "https://vrtmanagementgroup.com/blogs/" },
      ],
    },
    {
      name: "About us",
      options: [
        {
          label: "Who we are",
          link: "https://vrtmanagementgroup.com/who-we-are/",
        },
        {
          label: "Our Team",
          link: "https://vrtmanagementgroup.com/our-team-of-consultants/",
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`bg-[#ffffff] fixed top-0 hidden lg:block border-b w-full transition-all duration-300 ${
          hoveredMenu ? "h-5/6  " : "h-24"
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
              <Link href="https://vrtmanagementgroup.com/" target="_blank"
            rel="noopener noreferrer">
                <button className="text-[#ffffff] bg-[#ff0000] border border-[#ffffff]/10 small text-[14px] w-fit px-4 h-12 rounded-2xl">
                  Talk to Rajesh Tedla Sir
                </button>
              </Link>
            </div>
          </div>

          {/* Expanded Menu Options (Only when hovered) */}
          {hoveredMenu && (
            <div className="w-full   mt-20 flex flex-col justify-start ">
              <div className="   ">
                <div className="flex gap-4">
                  {menuItems
                    .find((item) => item.name === hoveredMenu)
                    ?.options.map((option, index) => (
                      <a
                        href={option.link}
                        target="_blank"
            rel="noopener noreferrer"
                        key={index}
                        className="flex bg-[#f4f4f4]/60  px-6 rounded-3xl items-center gap-3 py-6"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#ff0000]"></span>
                        <p className=" text-[#0c0c0c] text-2xl font-semibold gsans">
                          {option.label}
                        </p>
                      </a>
                    ))}
                </div>
              </div>
              <div className="w-full bg-[#f4f4f4]/60 flex flex-col justify-center items-center h-72 mt-10 rounded-[35px] ">
                <h1 className="text-5xl text-[#0c0c0c] gsans font-semibold ">
                  Ready to Shape the Future of Entrepreneurial Success?
                </h1> 
                <Link href="https://www.surveymonkey.com/r/Entrepreneur_Edge" target="_blank"
            rel="noopener noreferrer">
                  <button className=" mt-8 lg:mt-16 text-[#ffffff] tracking-tight font-semibold border border-[#ffffff]/20 small text-[18px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
                    Take the Survey Now
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
