"use client";
import React from "react";

const Meet = () => {
  return (
    <div className="bg-[#ffffff] overflow-hidden  h-auto ">
      <div className="grid   lg:grid-cols-5">
        <div className="lg:col-span-3 pt-14 px-20">
          <h1 className="gsans text-3xl lg:text-4xl font-semibold text-[#0c0c0c]">
            Meet{" "}
            <span className="text-[#0c0c0c] tracking-wide">Your Mentor </span>
          </h1>
          <h1 className="gsans  text-3xl lg:text-5xl mt-2 font-semibold text-[#ff0000]">
            Rajesh Tedla
          </h1>
          <h1 className="small tracking-tight text-md lg:text-2xl mt-2  text-[#8a8a8a]">
            A Trusted Expert with Proven Success
          </h1>
          <p className="mt-8 small text-[15px] lg:text-xl text-[#424242]">
            With over
            <span className="font-semibold text-[#0c0c0c]"> 35 years</span> of
            business excellence, Rajesh is a trusted mentor and business growth
            expert.
          </p>
          <div className="bg-[#989999]/10  p-4 grid grid-cols-12 justify-start gap-4 items-center mt-20 lg:mt-14 relative w-full h-28 lg:h-auto py-4 rounded-3xl">
            <span className="small col-span-1 w-10 h-10  flex justify-center items-center rounded-full border font-semibold text-[#ff0000] text-sm lg:text-md ">
              01
            </span>
            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Former Vice President at General Electric (GE)
            </h1>
          </div>
          <div className="bg-[#989999]/10  p-4 grid grid-cols-12 justify-start gap-4 items-center mt-4 lg:mt-4 relative w-full h-28 lg:h-auto py-4 rounded-3xl">
            <span className="small col-span-1 w-10 h-10  flex justify-center items-center rounded-full border font-semibold text-[#ff0000] text-sm lg:text-md ">
              02
            </span>
            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Stanford Entrepreneurship Trainer
            </h1>
          </div>
          <div className="bg-[#989999]/10  p-4 grid grid-cols-12 justify-start gap-4 items-center mt-4 lg:mt-4 relative w-full h-28 lg:h-auto py-4 rounded-3xl">
            <span className="small col-span-1 w-10 h-10  flex justify-center items-center rounded-full border font-semibold text-[#ff0000] text-sm lg:text-md ">
              03
            </span>
            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Transformed 1,400+ businesses and 14,573 Executives and CEOs
            </h1>
          </div>
          <div className="bg-[#989999]/10  p-4 grid grid-cols-12 justify-start gap-4 items-center mt-4 lg:mt-4 relative w-full h-28 lg:h-auto py-4 rounded-3xl">
            <span className="small col-span-1 w-10 h-10  flex justify-center items-center rounded-full border font-semibold text-[#ff0000] text-sm lg:text-md ">
              04
            </span>
            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Expert in People, Process and Strategy transformation. His proven
              strategies have helped Entrepreneurs to scale and succeed
            </h1>
          </div>
          <div className="flex justify-center lg:justify-start">
            {/* <CustomButton className="mt-8 bg-vrtcolor text-sm lg:text-lg px-14 py-4 w-fit rounded-2xl text-[#ffffff]">
          Know More About Rajesh Tedla
          </CustomButton> */}
          </div>
        </div>
        <div className="lg:col-span-2  order-first lg:order-last">
          <img
            src="/RajeshTedla.jpg"
            alt="meet"
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Meet;
