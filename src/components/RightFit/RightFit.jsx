import React from "react";
import FitCard from "./FitCard";
import { fitcardData } from "./fitcardData";
import IdealCard from "./IdealCard";
import { idealData } from "./idealData";
const RightFit = () => {
  return (
    <div className="px-20 my-28 mx-auto ">
      <div className="grid items-center grid-cols-5 gap-4 ">
        <div className="col-span-3">
          <h1 className="small gap-2 tracking-tight  max-w-2xl items-center flex text-[17px] lg:text-[20px] text-[#0c0c0c] dark:text-[#ffffff]">
            <span className="dark:bg-[#ffffff] bg-[#0c0c0c] w-2 h-2 rounded-full inline-block"></span>
            The Power of Entrepreneur’s EDGE
          </h1>
          <h1 className="gsans dark:text-[#ffffff] font-semibold mt-6  text-[#0c0c0c] text-3xl lg:text-5xl">
            Is This Program Right for You?
          </h1>
        </div>
        <div className="col-span-2 flex justify-end">
          <button className="  text-[#ffffff] tracking-wide font-semibold border border-[#ffffff]/20 small text-[18px] bg-[#ff0000]   w-fit px-6 h-14 rounded-2xl">
            Get started now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-20 w-full gap-6">
        {fitcardData.map((data, id) => (
          <FitCard key={id} {...data} />
        ))}
      </div>
      <h1 className="gsans mt-20 dark:text-[#ffffff] font-semibold   text-[#0c0c0c] text-3xl lg:text-5xl">
        Ideal Entrepreneur Profile
      </h1>
      <div className="grid grid-cols-3 mt-20 w-full gap-6">
        {idealData.map((data, id) => (
          <IdealCard key={id} {...data} isLast={id === idealData.length - 1} />
        ))}
      </div>
    </div>
  );
};

export default RightFit;
