import React from "react";

const ProgramCard = ({ imgSrc, title, desc, isLast }) => {
  return (
    <div>
      <div className="w-full bg-[#ffffff] border-zinc-800 dark:bg-[#101010] p-4 flex gap-4 justify-start items-center h-24 rounded-3xl">
        <span className="bg-zinc-100 dark:bg-[#1A1B1E] flex justify-center items-center rounded-full h-12 w-12">
          <img src={imgSrc} alt="Stat Icon" className="w-6 h-6" />
        </span>
        <div className="flex flex-col">
          {/* Apply strikethrough if it's the last card */}
          <div className="flex gap-3">
          
            <h1
              className={` text-xl gsans tracking-wide font-semibold dark:text-[#ffffff] text-[#0c0c0c] ${
                isLast
                  ? "line-through text-[.8rem] text-zinc-300"
                  : "lg:text-2xl"
              }`}
            >
              {title}{" "}
            </h1>
            {isLast ? (
              <h1
                className={` text-xl gsans tracking-wide font-semibold dark:text-[#ffffff] text-[#00c49a] ${
                  isLast
                    ? ""
                    : "lg:text-2xl"
                }`}
              >
                $0 USD
              </h1>
            ) : (
              ""
            )}
            
          </div>
          <p className="text-sm small text-[#ff0000] tracking-wide font-semibold dark:text-[#989999] mt-1">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
