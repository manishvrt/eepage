"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div id="testi" className=" lg:px-20 px-4 lg:mt-10 mx-auto lg:pb-20">
      <div className="overflow-hidden ">
        <div className="flex flex-col items-start lg:items-center justify-center gap-4">
          <h1 className="small gap-2 mt-14 max-w-2xl items-center flex justify-center text-[19px] text-[#0c0c0c] --text-[#ffffff]">
            <span className="--bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
           Testimonials
          </h1>
          <h1 className="gsans  font-semibold tracking-tight text-4xl lg:text-7xl  --text-[#ffffff] text-[#0c0c0c]">
            <span className="text-[#ff0000]">Success </span> Stories
          </h1>
        </div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonial;
