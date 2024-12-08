import React from 'react';
import Image from 'next/image';

const Furniture = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Text Section */}
      <div className="text-center mt-10">
        <h1 className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px]">
          Share your setup with
        </h1>
        <p className="font-poppins font-bold text-[32px] sm:text-[36px] md:text-[40px] text-[#3a3a3a]">
          #FuniroFurniture
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10 place-items-center">
        {/* First Row */}
        <div className="p-4">
          <Image
            src="/f1.png"
            alt="f1.png"
            width={274}
            height={382}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <Image
            src="/f2.png"
            alt="Image 2"
            width={451}
            height={312}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4 col-span-1">
          <Image
            src="/f3.png"
            alt="Center Image"
            width={350}
            height={600}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <Image
            src="/f4.png"
            alt="Image 4"
            width={290}
            height={348}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <Image
            src="/f5.png"
            alt="Image 5"
            width={425}
            height={433}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Second Row */}
        <div className="p-4 relative">
          <Image
            src="/f7.png"
            alt="Image 6"
            width={281}
            height={250}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4">
          <Image
            src="/f8.png"
            alt="Image 7"
            width={344}
            height={242}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Move Images 8 and 9 to the right side below Images 4 and 5 */}
        <div className="p-4 col-span-1 md:col-span-1 lg:col-span-1 md:ml-12 lg:ml-12">
          <Image
            src="/f9.png"
            alt="Image 8"
            width={178}
            height={342}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="p-4 col-span-1 md:col-span-1 lg:col-span-1 md:ml-12 lg:ml-12">
          <Image
            src="/f10.png"
            alt="Image 9"
            width={258}
            height={300}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Furniture;
