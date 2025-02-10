import React from "react";
import UnlockGen from "../Unlock/UnlockGen";
import { moduleOneData } from "./moduleOneData";
import { moduleTwoData } from "./moduleTwoData";
import { moduleThreeData } from "./moduleThreeData";
import { moduleFourData } from "./moduleFourData";
const Growth = () => {
  return (
    <div>
      <div className="lg:px-20 my-24 mx-auto">
        <div className="relative w-full overflow-hidden bg-[#989999] h-60 lg:h-96 lg:rounded-[40px]">
          {/* Background Video */}
          <video
            src="/growth.mp4" // Replace with your actual video URL
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-black/50 lg:rounded-[40px]" />

          {/* Text Content */}
          <div className="absolute bottom-10 left-6 text-white">
            <p className="lg:text-xl tracking-tight small">Our Goal</p>
            <h2 className="lg:text-5xl text-3xl gsans font-bold">
              Your Growth Journey
            </h2>
          </div>
        </div>

        <div className="grid px-4  mt-10 lg:grid-cols-2 gap-6">
          <div className="bg-[#b8b8b8]/10 p-5 lg:p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm w-fit px-6 p-2 ">
                Module 1
              </span>
              <h1 className=" mt-5 lg:mt-8 text-2xl lg:text-4xl gsans font-semibold">
                Discover Your Entrepreneurial Profile
              </h1>
            </div>
            <div className="space-y-4 mt-0 lg:mt-6 lg:space-y-1 ">
              {moduleOneData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#b8b8b8]/10 p-5 lg:p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 2
              </span>
              <h1 className=" mt-5 lg:mt-8 text-2xl lg:text-4xl gsans font-semibold">
                Master Leadership Excellence
              </h1>
            </div>
            <div className="space-y-4 mt-0 lg:mt-6 lg:space-y-1 ">
              {moduleTwoData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#b8b8b8]/10 p-5 lg:p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 3
              </span>
              <h1 className=" mt-5 lg:mt-8 text-2xl lg:text-4xl gsans font-semibold">
                Strategic Business Growth
              </h1>
            </div>
            <div className="space-y-4 mt-0 lg:mt-6 lg:space-y-1 ">
              {moduleThreeData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#b8b8b8]/10 p-5 lg:p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 4
              </span>
              <h1 className=" mt-5 lg:mt-8 text-2xl lg:text-4xl gsans font-semibold">
                TARGET Sales Mastery
              </h1>
            </div>
            <div className="space-y-4 mt-0 lg:mt-6 lg:space-y-1 ">
              {moduleFourData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
