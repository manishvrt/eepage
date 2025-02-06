"use client";
import { useState } from "react";
import Image from "next/image";
import DynamicNavbar from "./DynamicNav";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className=" h-screen bg-[#f4f4f4] text-white overflow-hidden flex items-center justify-start px-6 lg:px-16">
      {/* Background Gradient */}{" "}
      
      {/* Navbar */}{" "}
      <div className="absolute top-0 left-0 w-full z-20">
        <DynamicNavbar />
      </div>
      {/* Hero Section */}{" "}
      <section className="relative mt-16 max-w-6xl">
        {" "}
        <div className="">
            {/* <img src="/eelogo.png" className="w-60 rounded-3xl h-24 mb-6" alt=""/> */}
          <h2 className="text-7xl gsans  text-[#0c0c0c] font-bold">
            Unlock Your Entrepreneurial Potential with{" "}
            <span className="text-[#ff0000]">Entrepreneur’s EDGE</span>
          </h2>{" "}
          <p className="text-gray-800 small mt-4 text-xl">
            Transform your Business through proven psychometric assessment and
            research backed insights
          </p>{" "}
          <h1 className="mt-10 text-[#0c0c0c] font-semibold text-lg lg:text-2xl tracking-tight small">
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
          <Link
            href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" mt-8 lg:mt-16 text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-[16px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
              Begin Your Transformation
            </button>
          </Link>
        </div>
      </section>
      {/* Clients Section */}{" "}
    </div>
  );
}
