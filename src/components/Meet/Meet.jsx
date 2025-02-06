"use client";
import React from "react";

const Meet = () => {
  return (
    <div className="bg-[#ffffff] pb-16 overflow-hidden  h-auto ">
      <div className="grid items-center  lg:grid-cols-5">
        <div className="lg:col-span-3 pt-14 px-4 lg:px-20">
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
          <div className="bg-[#989999]/10  p-4 lg:p-4 flex  justify-start gap-4 items-center mt-10 lg:mt-14 relative w-full h-auto lg:h-auto py-4 rounded-3xl">
            <img src="/points.svg" alt="" className="w-5  h-5 object-cover" />

            <h1 className=" text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Former Senior Vice President at General Electric (GE)
            </h1>
          </div>
          <div className="bg-[#989999]/10  p-4 lg:p-4 flex  justify-start gap-4 items-center mt-5 lg:mt-4 relative w-full h-auto lg:h-auto py-4 rounded-3xl">
            <img src="/points.svg" alt="" className="w-5  h-5 object-cover" />

            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Stanford Entrepreneurship Trainer
            </h1>
          </div>
          <div className="bg-[#989999]/10  p-4 lg:p-4 flex  justify-start gap-4 items-center mt-5 lg:mt-4 relative w-full h-auto lg:h-auto py-4 rounded-3xl">
            <img src="/points.svg" alt="" className="w-5  h-5 object-cover" />

            <h1 className="col-span-11 text-md lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Transformed 1,400+ businesses and 14,573 Executives and CEOs
            </h1>
          </div>
          <div className="bg-[#989999]/10 p-2 lg:p-4 flex  justify-start gap-4 items-center mt-5 lg:mt-4 relative w-full h-auto lg:h-auto py-4 rounded-3xl">
            <img src="/points.svg" alt="" className="lg:w-5 w-5 h-5  lg:h-5 object-cover" />

            <h1 className="col-span-11 text-md  lg:text-lg text-[#0c0c0c] font-semibold tracking-wide  small">
              Expert in People, Process and Strategy transformation, his proven
              strategies have helped many struggling Entrepreneurs to scale and succeed
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
            className="w-full h-96 lg:h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Meet;
