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
    <div className="bg-[#eeeeee]/60 dark:bg-[#0c0c0c] h-auto">
      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto ">
        {/* Left Section - Sticky */}
        <div className=" px-6 lg:px-0   flex flex-col lg:justify-center items-center">
          <h1 className="small gap-2 mt-14 max-w-2xl items-center flex justify-center text-[19px] text-[#0c0c0c] dark:text-[#ffffff]">
            <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
            our services
          </h1>
          <h1 className="gsans mt-6 font-semibold tracking-tight text-7xl lg:text-8xl  dark:text-[#ffffff] text-[#0c0c0c]">
          What you’ll gain  in this <span className="text-[#0c0c0c]">program</span> 
          </h1>
          {/* <p className="small hidden lg:block text-sm lg:text-lg dark:text-zinc-200 text-[#0c0c0c] mt-28">
            Ready to take your business to the next level?
          </p> */}
          {/* <Button className="mt-6 h-14 gap-1 px-6" text="Get in touch" /> */}
        </div>

        {/* Right Section - Scrollable Content */}
        <div className="mt-12 overflow-y-auto">
          <div className="grid gap-4 grid-cols-2 max-w-7xl mx-auto  mb-20">
            {gainData.map((data, index) => (
              
                <div>
                  <GainCard
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