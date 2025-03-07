"use client";
import React from "react";
import UnlockGen from "./UnlockGen";
import { unlockData } from "./unlockData";
const Unlock = () => {
  return (
    <div className=" bg-[#ffffff]  lg:px-20 ">
      <div className=" --bg-[#0c0c0c]    w-full h-auto  lg:py-16 rounded-[40px]">
        <div className="grid items-center lg:gap-12 grid-cols-1 lg:grid-cols-5">
          
          <div className="lg:col-span-3 p-4 lg:mt-10 lg:mt-0">
            {/* <h1 className="small gap-2 tracking-tight  max-w-2xl items-center flex text-[14px] lg:text-[20px] text-[#0c0c0c] --text-[#ffffff]">
              <span className="--bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
              The Power of Entrepreneur’s EDGE™
            </h1> */}
            <h1 className="gsans --text-[#ffffff] font-semibold lg:mt-6  text-[#0c0c0c] text-3xl lg:text-5xl">
              Are you ready to unlock your full potential as an Entrepreneur?
            </h1>
            <p className="small --text-[#989999] mt-4 text-md lg:text-lg text-gray-700">
              Entrepreneur’s EDGE™ is your gateway to understanding and mastering
              the core traits of successful entrepreneurs. Through our
              research-backed assessment and expert mentorship, you’ll gain deep
              insights into:
            </p>
            <div className="mt-10 flex space-y-4 flex-col">
              {unlockData.map((serve, index) => (
                <UnlockGen serveText={serve.serveText} key={index} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 mt-10 flex justify-center lg:justify-end">
            <img
              src="/unlock.jpg"
              alt="impact"
              className="lg:w-[30svw] lg:rounded-full h-60  lg:h-[60svh] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
