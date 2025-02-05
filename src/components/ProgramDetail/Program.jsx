import React from "react";
import ProgramCard from "./ProgramCard";
import { programData } from "./programData";
import { programDateData } from "./programDateData";

const StatsCard = () => {
  const backgroundImage = {
    backgroundImage: "url('/programbgs.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="relative bg-[#e8e8e8]/40  py-20 h-auto">
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/70"></div> */}

        <div className="relative max-w-7xl px-16 mx-auto z-10">
          <div>
            <h1 className="small gap-2 tracking-tight max-w-2xl items-center flex text-[17px] lg:text-[20px] text-[#616161]">
              <span className="bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
              The Power of Entrepreneur’s EDGE
            </h1>
            <h1 className="gsans text-[#0c0c0c] font-semibold mt-6 text-3xl lg:text-5xl">
              Program Details
            </h1>
          </div>
          <div className="grid mt-12 grid-cols-3 gap-6">
            {programData.map((data, index) => (
              <ProgramCard key={index} {...data} />
            ))}
          </div>
          <h1 className="gsans text-[#0c0c0c] font-semibold mt-20 text-3xl lg:text-5xl">
            Next Cohort Start Dates
          </h1>
          <div className="grid mt-12 grid-cols-2 gap-6">
            {programDateData.map((data, index) => (
              <ProgramCard key={index} {...data} />
            ))}
          </div>

          {/* Enrollment Section */}
          <div className="relative bg-gradient-to-r from-[#ff0000] via-red-500 to-red-600 mt-16 flex flex-col justify-center items-center w-full h-auto py-12 rounded-[35px] ">
            {/* Dark overlay */}

            {/* Content */}
            <h1 className="relative text-5xl text-white font-bold gsans z-10">
              Enrollment Deadline - February 28th, 2025
            </h1>

            <button className="relative mt-16 text-[#0c0c0c] tracking-wide font-semibold border border-white/20 small text-[18px] bg-[#ffffff] w-fit px-6 h-14 rounded-2xl z-10">
              Secure Your Spot Now – Limited Seats Available
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
