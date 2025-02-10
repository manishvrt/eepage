import React from "react";

const IdealCard = ({ id, title, desc,desc2, isLast }) => {
  return (
    <div className="bg-[#989999]/10 p-8 flex flex-col gap-4 w-full h-auto rounded-[35px]  lg:min-h-[250px] justify-between">
      <div>
        <img 
          src="/points.svg"  
          alt="" 
          className="w-8 h-8" 
        />
        <h1 className="lg:text-3xl text-2xl tracking-wide text-[#0c0c0c] gsans font-semibold mt-6">
          {desc}<br/><span className="text-[#ff0000]">{desc2}</span>
        </h1>
      </div>
      <p className="mt-4 text-[#0c0c0c] tracking-tight small text-md lg:text-xl">{title}</p>
    </div>
  );
};

export default IdealCard;
