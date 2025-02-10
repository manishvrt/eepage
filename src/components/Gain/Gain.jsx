"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GainCard from "./GainCard";
import { gainData } from "./gainData";
import Link from "next/link"; // Import Link from Next.js

gsap.registerPlugin(ScrollTrigger);

const Gain = () => {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    serviceCardsRef.current = serviceCardsRef.current.slice(0, gainData.length);

    serviceCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#eeeeee]/60 py-10   dark:bg-[#0c0c0c] h-auto">
      <div className="grid grid-cols-1 gap-6  mx-auto ">
        {/* Left Section - Sticky */}
        <div className=" px-6 lg:px-0   flex flex-col lg:justify-center items-start lg:items-center">
       
          <h1 className="gsans mt-6 font-semibold tracking-tight text-3xl lg:text-7xl  dark:text-[#ffffff] text-[#0c0c0c]">
          What you’ll gain  in this <span className="text-[#ff0000]">program</span> 
          </h1>
          {/* <p className="small hidden lg:block text-sm lg:text-lg dark:text-zinc-200 text-[#0c0c0c] mt-28">
            Ready to take your business to the next level?
          </p> */}
          {/* <Button className="mt-6 h-14 gap-1 px-6" text="Get in touch" /> */}
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="mt-12 overflow-y-auto">
          <div className="flex flex-wrap justify-center px-4 gap-6 lg:px-20 mb-20">
            {gainData.map((data, index) => (
              
                <div>
                  <GainCard
                  key={index}
                    id={data.id}
                    videoSrc={data.videoSrc}
                    bgcolor={data.bgcolor}
                    imgSrc={data.imgSrc}
                    title={data.title}
                    title2={data.title2}
                    description={data.description}
                  />
                </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;