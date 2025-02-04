import React from "react";

const IdealCard = ({ id, title, desc,desc2, isLast }) => {
  return (
    <div className="bg-[#989999]/10 p-8 flex flex-col gap-4 w-full h-auto rounded-[35px] min-h-[250px] justify-between">
      <div>
        <img 
          src="/eligible.svg"  
          alt="" 
          className="w-8 h-8" 
        />
        <h1 className="text-3xl tracking-wide text-[#0c0c0c] gsans font-semibold mt-6">
          {desc}<br/><span className="text-[#ff0000]">{desc2}</span>
        </h1>
      </div>
      <p className="mt-4 text-[#0c0c0c] small text-xl">{title}</p>
    </div>
  );
};

export default IdealCard;
