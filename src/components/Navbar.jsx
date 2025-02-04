import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[#0c0c0c]  w-full'> {/* Added padding to create space around the navbar */}
      <div className='max-w-7xl mx-auto  p-6 flex justify-between items-center backdrop-blur-xl w-full  z-10  h-16 '> {/* Added padding inside the navbar */}
      <div>
        <h1 className='text-xl font-semibold tracking-wide gsans text-[#ffffff]'>
            VRT Management
        </h1>
      </div>
      <div className='flex gap-2 items-center'>
        <button className=' border text-[#ffffff] small text-[14px] border-zinc-700 w-fit px-4 h-12 rounded-2xl'>
            Home
        </button>
        <button className=' border text-[#ffffff] small text-[14px] border-zinc-700 w-fit px-4 h-12 rounded-2xl'>
            Solutions
        </button>
        <button className=' border text-[#ffffff] small text-[14px] border-zinc-700 w-fit px-4 h-12 rounded-2xl'>
            Resources
        </button>
        <button className=' border text-[#ffffff] small text-[14px] border-zinc-700 w-fit px-4 h-12 rounded-2xl'>
            About us
        </button>
        <button className='  text-[#ffffff] bg-[#ff0000] border  border-[#ffffff]/10 small text-[14px]   w-fit px-4 h-12 rounded-2xl'>
            Talk to Rajesh Tedla Sir
        </button>
      </div>
      </div>
    </div>
  )
}

export default Navbar
