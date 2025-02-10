import React from "react";
import FitCard from "./FitCard";
import { fitcardData } from "./fitcardData";
import IdealCard from "./IdealCard";
import { idealData } from "./idealData";
import Link from "next/link";
const RightFit = () => {
  return (
    <div className="lg:px-20 px-4 my-28 mx-auto ">
      <div className="lg:grid items-center lg:grid-cols-5 gap-4 ">
        <div className="lg:col-span-3">
        
          <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#0c0c0c] text-2xl lg:text-5xl">
            Is This Program Right for You?
          </h1>
        </div>
        <div className="lg:col-span-2 flex mt-5 lg:justify-end">
          <Link
            href="https://www.surveymonkey.com/r/Entrepreneur_Edge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="  text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-sm text-[18px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
              Make Your Mark – Take the Survey!
            </button>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 mt-20 w-full gap-6">
        {fitcardData.map((data, id) => (
          <FitCard key={id} {...data} />
        ))}
      </div>
      <h1 className="gsans mt-20 dark:text-[#ffffff] text-center lg:text-left font-semibold   text-[#0c0c0c] text-2xl lg:text-5xl">
        Ideal Entrepreneur Profile
      </h1>
      <div className="grid lg:grid-cols-3 lg:mt-20 mt-12 w-full gap-6">
        {idealData.map((data, id) => (
          <IdealCard key={id} {...data} isLast={id === idealData.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default RightFit;
