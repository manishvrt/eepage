import React from 'react'

const ProgramCard = ({
    imgSrc,
    title,
    desc
}) => {
  return (
    <div>
      <div className="w-full bg-[#ffffff]  border-zinc-800 dark:bg-[#101010] p-4 flex gap-4 justify-start items-center h-24 rounded-3xl">
      <span className="bg-zinc-100 dark:bg-[#1A1B1E] flex justify-center items-center rounded-full h-12 w-12">
        <img src={imgSrc} alt="Stat Icon" className="w-6 h-6" />
      </span>
      <div className="flex flex-col">
        <h1 className="text-2xl gsans tracking-wide font-semibold dark:text-[#ffffff] text-[#ff0000]">
       {title}
        </h1>
        <p className="text-sm small text-[#0c0c0c] dark:text-[#989999] mt-1">
        {desc}
        </p>
      </div>
    </div>
    </div>
  )
}

export default ProgramCard
