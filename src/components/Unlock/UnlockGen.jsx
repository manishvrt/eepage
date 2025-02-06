import React from "react";

const UnlockGen = (
    { serveText }
) => {
  return (
    <>
      <h1 className="flex small text-sm lg:text-lg gap-3 justify-start items-center">
        <img src="/points.svg" alt="" className="lg:w-5 w-4 h-4  lg:h-5 object-cover" />
        {serveText}
      </h1>
    </>
  );
};

export default UnlockGen;