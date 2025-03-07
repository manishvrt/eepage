import React, { useRef } from 'react';

const GainCard = ({ id, imgSrc, title, bgcolor,title2, videoSrc ,description}) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from the beginning
      videoRef.current.play(); // Play the video
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
    }
  };

  return (
    <div className=' '>
      <div
        className="rounded-full  w-full group "
        
      >
        {/* Video Background */}
        {/* <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          className="absolute hidden  inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        /> */}

        {/* Black Overlay */}
        {/* <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div> */}

        <div className="lg:grid bg-[#ffffff]/80    --bg-[#101010] rounded-[35px]  --border-gray-900 flex  max-w-7xl mx-auto px-6 justify-between lg:grid-cols-12 items-center w-full lg:w-[40svw] h-auto py-6  lg:h-36 relative z-10">
          <div className="lg:col-span-2 hidden lg:block flex justify-start">
            <span className="--text-zinc-200 text-zinc-400 font-semibold small text-xl">
              0{id}
            </span>
          </div>

          <div className="lg:col-span-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-start items-start lg:space-x-10">
              
              <div className="flex lg:mt-0 flex-col">
                
                <h1 className="lg:text-[1.5rem] tracking-wide text-2xl font-semibold gsans  text-[#0c0c0c] --text-[#ffffff]">
                  {title}<span className='mx-1'></span>{title2}
                </h1>
                <p className="mt-5 text-[#0c0c0c]/80 --text-[#989999] text-sm lg:text-[16px] small ">
                  {description}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="col-span-1  flex justify-end">
            <span className='bg-[#c2ff47] h-7 w-7 lg:w-10 flex justify-center items-center lg:h-10 rounded-full'>
           
            <img
              src="/lbarrow.svg"
              alt="Arrow White"
              className="w-5 h-5 lg:w-6 lg:h-6"
            />
            </span>
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GainCard;