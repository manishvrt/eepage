import React from "react";
import UnlockGen from "../Unlock/UnlockGen";
import { moduleOneData } from "./moduleOneData";
import { moduleTwoData } from "./moduleTwoData";
import { moduleThreeData } from "./moduleThreeData";
import { moduleFourData } from "./moduleFourData";
const Growth = () => {
  return (
    <div>
      <div className="px-20 my-24 mx-auto">
        <div className="relative w-full overflow-hidden bg-[#989999] h-96 rounded-[40px]">
          {/* Background Image */}
          <img
            src="https://assets.lummi.ai/assets/QmNvHJKQTD4z8WADNUzriA3z1KGFjZVbbvk27HJwRn5Wdw?auto=format&w=1500"
            alt=""
            className="h-full w-full object-cover"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-[40px]" />

          {/* Text Content */}
          <div className="absolute bottom-10 left-6 text-white">
            <p className="text-xl small">Our Goals</p>
            <h2 className="text-5xl gsans font-bold">Your Growth Journey</h2>
          </div>
        </div>
        <div className="grid mt-10 grid-cols-2 gap-6">
          <div className="bg-[#989999]/10 p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm w-fit px-6 p-2 ">
                Module 1
              </span>
              <h1 className=" mt-8 text-4xl gsans font-semibold">
                Discover Your Entrepreneurial Profile
              </h1>
            </div>
            <div className="space-y-1">
              {moduleOneData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#989999]/10 p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 2
              </span>
              <h1 className=" mt-8 text-4xl gsans font-semibold">
              Master Leadership Excellence
              </h1>
            </div>
            <div className="space-y-1 mt-12">
              {moduleTwoData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#989999]/10 p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 3
              </span>
              <h1 className=" mt-8 text-4xl gsans font-semibold">
              Strategic Business Growth
              </h1>
            </div>
            <div className="space-y-1 mt-12">
              {moduleThreeData.map((data, index) => (
                <UnlockGen key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="bg-[#989999]/10 p-8 flex flex-col justify-between gap-4 w-full h-auto rounded-[35px]">
            <div>
              <span className="flex justify-center border border-zinc-300 small text-[#0c0c0c] tracking-wide items-center rounded-full text-sm  w-fit px-6 p-2 ">
                Module 4
              </span>
              <h1 className=" mt-8 text-4xl gsans font-semibold">
              TARGET Sales Mastery
              </h1>
            </div>
            <div className="space-y-1 mt-12">
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
