"use client";
import { useState } from "react";
import Image from "next/image";
import DynamicNavbar from "./DynamicNav";
import Link from "next/link";
export default function HomePage() {
  return (
    <div className=" lg:h-screen bg-red-50/60 pb-10 lg:pb-0 text-white overflow-hidden flex items-center ">
      {/* Background Gradient */} {/* Navbar */}{" "}
      <div className="absolute top-0 left-0 w-full z-20">
        <DynamicNavbar />
      </div>
      {/* Hero Section */}{" "}
      <section className="relative items-center lg:grid lg:grid-cols-5   ">
        <div className="lg:col-span-2 mt-24 lg:mt-0 flex justify-start">
          <div className="bg-[#ffffff] overflow-hidden  l">
            <img
              src="/herocover.jpg"
              className="w-[40svw] lg:h-screen object-cover"
              alt=""
            />
          </div>
        </div>{" "}
        <div className="lg:col-span-3 px-6 lg:px-16 mt-6 lg:mt-10">
          {/* <img src="/eelogo.png" className="w-60 rounded-3xl h-24 mb-6" alt=""/> */}
          <h2 className="lg:text-5xl text-3xl gsans  text-[#0c0c0c] font-bold">
            Unlock Your Entrepreneurial Potential with{" "}
            <span className="text-[#ff0000]">Entrepreneur’s EDGE™</span>
          </h2>{" "}
          <p className="text-gray-700 tracking-tight small mt-4 text-md lg:text-xl">
            Transform your Business through proven psychometric assessment and
            research backed insights
          </p>{" "}
          <div className="mt-12 text-[#0c0c0c]   flex flex-col bg-[#ffffff] p-6 rounded-3xl   text-md lg:text-xl tracking-tight small">
            A 4 - week intensive program designed to empower entrepreneurs like
            you to accelerate and scale your business successfully by unlocking:
            <h1 className="flex mt-6 font-semibold small text-sm lg:text-lg gap-3 justify-start items-center">
              <img
                src="/points.svg"
                alt=""
                className="lg:w-5 w-4 h-4  lg:h-5 object-cover"
              />
             Your Unique competencies
            </h1>
            <h1 className="flex small  font-semibold mt-2 text-sm lg:text-lg gap-3 justify-start items-center">
              <img
                src="/points.svg"
                alt=""
                className="lg:w-5 w-4 h-4  lg:h-5 object-cover"
              />
             Your driving forces
            </h1>
            <h1 className="flex small font-semibold mt-2 text-sm lg:text-lg gap-3 justify-start items-center">
              <img
                src="/points.svg"
                alt=""
                className="lg:w-5 w-4 h-4  lg:h-5 object-cover"
              />
            Behaviors
            </h1>
            <Link
              href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className=" mt-8 lg:mt-10 text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-sm lg:text-[16px] bg-[#ff0000]   w-fit px-6 h-14 rounded-3xl">
                Join the Impact – Fill Out the Form!
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Clients Section */}{" "}
    </div>
  );
}
