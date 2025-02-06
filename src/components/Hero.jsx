import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import DynamicNavbar from "./DynamicNav";
import Link from "next/link";
const Hero = () => {
  return (
    <div
      className="relative bg-[#f4f4f4] h-screen bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1614850523011-8f49ffc73908?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      // }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Navbar (Placed at the top) */}
      <div className="absolute top-0 left-0 w-full z-20">
        <DynamicNavbar />
      </div>

      {/* Text Content */}
      <div className="absolute lg:mt-16 mt-6 px-3  lg:pt-0 lg:px-20 inset-0  flex flex-col items-start justify-center text-[#0c0c0c] ">
        <h1 className="text-4xl text-[#0c0c0c] gsans md:text-6xl font-bold">
          Unlock Your Entrepreneurial Potential with{" "}
          <span className="text-[#ff0000]">Entrepreneur’s EDGE</span>
        </h1>
        <p className="mt-8 text-md tracking-tight text-zinc-700 small md:text-xl">
          Transform your Business through proven psychometric assessment and
          research backed insights
        </p>
        <div className="flex justify-center items-center gap-3">
          <h1 className="mt-10 text-[#0c0c0c] font-semibold text-lg lg:text-3xl tracking- small">
            A{" "}
            <span className="font-semibold text-[#0c0c0c]">
              4-week intensive program
            </span>{" "}
            designed to unlock your unique{" "}
            <span className="font-semibold text-[#0c0c0c]">
              competencies, driving forces, and behaviors
            </span>{" "}
            empowering you to accelerate your entrepreneurial success.
          </h1>
        </div>
        <a href="https://www.surveymonkey.com/r/Entrepreneur_Edge" target="_blank"
            rel="noopener noreferrer">
          <button className=" mt-8 lg:mt-16 text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-[18px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
            Begin Your Transformation
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
