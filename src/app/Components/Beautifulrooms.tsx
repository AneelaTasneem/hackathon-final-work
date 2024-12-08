import React from "react";
import Image from "next/image";

const Beautifulrooms = () => {
  return (
    <div className="w-full h-auto bg-[#FCF8F3] flex items-center justify-start pl-12 sm:pl-20 md:pl-28 lg:pl-52">
      {/* Text Section */}
      <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[422px]">
        <h1 className="font-poppins font-bold text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] leading-[32px] sm:leading-[35px] md:leading-[40px]">
          50+ Beautiful rooms <br /> inspiration
        </h1>
        <p className="font-poppins font-medium text-[10px] sm:text-[12px] md:text-[14px] text-[#616161] mt-4">
          Our designer already made a lot of beautiful <br /> prototypes of
          rooms that inspire you
        </p>

        <button className="w-[140px] sm:w-[160px] md:w-[176px] h-10 sm:h-11 md:h-12 bg-[#B88E2F] mt-5">
          Explore More
        </button>
      </div>

      {/* Image Container */}
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-5 w-full sm:w-full md:w-[1196px] h-auto mt-8 pl-0 sm:pl-10 md:pl-20 lg:pl-20">
        <div className="relative w-full sm:w-[45%] md:w-[404px] lg:w-[404px]">
          {/* Image 1 */}
          <Image
            src="/room1.png"
            alt="Room 1"
            width={404}
            height={582}
            className="object-cover w-full h-auto"
          />

          {/* Add a div at the bottom left of Image 1 */}
          <div className="absolute bottom-5 left-5 w-[170px] sm:w-[180px] md:w-[217px] h-[110px] sm:h-[120px] md:h-[130px] bg-white p-4 shadow-lg rounded">
            <h1 className="font-poppins text-[10px] sm:text-[12px] md:text-[12px] text-[#616161] mt-5 px-4 sm:px-6 md:px-8">
              01-Bed Room
            </h1>
            <p className="font-poppins font-bold text-[14px] sm:text-[15px] md:text-[16px] text-[#333] px-4 sm:px-6 md:px-8">
              Inner Peace
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full sm:w-[45%] md:w-[372px] lg:w-[372px]">
          <Image
            src="/room2.png"
            alt="Room 2"
            width={372}
            height={486}
            className="object-contain w-full h-auto"
          />
          {/* Add 3 dots below the second image */}
          <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-gray-500 text-lg sm:text-xl md:text-xl lg:text-xl">
            ...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Beautifulrooms;
