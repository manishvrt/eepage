import React from "react";

const FitCard = (
    {
        id,
        title,
        title2,
        desc
    }
) => {
  return (
    <>
     
        <div className="bg-[#b8b8b8]/10 p-5 lg:p-8 flex flex-col gap-4 w-full h-auto rounded-[35px]">
          <span className="flex justify-center small text-[#ffffff] items-center rounded-full text-sm font-semibold w-8 h-8 bg-[#ff0000]">
           {id}
          </span>
          <h1 className=" lg:text-3xl text-2xl gsans font-semibold">
            {title}<br/>{title2}
          </h1>
          <p className="mt-4 small text-md tracking-tight lg:text-lg">
           
        {desc}
          </p>
        </div>
     
    </>
  );
};

export default FitCard;
