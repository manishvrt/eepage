"use client";
import { useState } from "react";
import Image from "next/image";
import DynamicNavbar from "./DynamicNav";
export default function HomePage() {
  return (
    <div className=" min-h-screen bg-white text-white overflow-hidden flex items-end px-6 lg:px-16 pb-16">
      {/* Background Gradient */}{" "}
      <div className="absolute inset-0 flex justify-center items-center">
        {" "}
        <div className="w-[120%] h-[120%]  rounded-full blur-[120px] opacity-30" />{" "}
      </div>
      {/* Navbar */}{" "}
      <div className="absolute top-0 left-0 w-full z-20">
        <DynamicNavbar />
      </div>
      {/* Hero Section */}{" "}
      <section className="relative  max-w-6xl">
        {" "}
        <div className="flex space-x-2 mb-4">
          {" "}
          <span className="bg-blue-600 text-white px-3 py-1 text-xs rounded-full">
            Enterprise Partner
          </span>{" "}
          <span className="bg-gray-700 text-white px-3 py-1 text-xs rounded-full">
            Professional Partner of the Year
          </span>{" "}
        </div>{" "}
        <h2 className="text-7xl gsans font-bold">
          Unlock Your Entrepreneurial Potential with{" "}
          <span className="text-[#ff0000]">Entrepreneur’s EDGE</span>
        </h2>{" "}
        <p className="text-gray-200 small mt-4 text-xl">
          Transform your Business through proven psychometric assessment and
          research backed insights
        </p>{" "}
        <h1 className="mt-10 text-[#ffffff] font-semibold text-lg lg:text-2xl tracking- small">
            A{" "}
            <span className="font-semibold text-[#ffffff]">
              4-week intensive program
            </span>{" "}
            designed to unlock your unique{" "}
            <span className="font-semibold text-[#ffffff]">
              competencies, driving forces, and behaviors
            </span>{" "}
            empowering you to accelerate your entrepreneurial success.
          </h1>
          <button className=" mt-8 lg:mt-16 text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-[18px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
          Begin Your Transformation
        </button>
      </section>
      {/* Clients Section */}{" "}
    </div>
  );
}
