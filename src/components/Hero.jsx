import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import DynamicNavbar from "./DynamicNav";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <div className="relative">
        <DynamicNavbar />

        <section className="bg-[#fafafa]  mt-10  overflow-hidden">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:items-stretch h-screen ">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
              <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-14  lg:py-24 lg:text-left">
                <h1 className="text-4xl gsans font-bold text-black lg:text-5xl">
                  Unlock Your Entrepreneurial Potential with
                  <span className="text-[#ff0000]"> Entrepreneur’s EDGE™</span>
                </h1>
                <p className="text-gray-700 tracking-tight small mt-4 text-md lg:text-xl">
                  Transform your Business through proven psychometric assessment
                  and research backed insights
                </p>
                <h1 className="mt-10 text-[#000000] font-semibold  text-md lg:text-2xl tracking-tight small">
                  A 4 - week intensive program designed to unlock your unique
                  competencies, driving forces, and behaviors empowering you to
                  accelerate your entrepreneurial success.
                </h1>
                <Link
                  href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className=" mt-8 lg:mt-16 text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-sm lg:text-[16px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
                    Join the Impact – Fill Out the Form!
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src="/heropic.jpg"
                  alt=""
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
