import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Range = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[1vh] px-4 sm:mt-8">
      <div className="w-full max-w-screen-lg text-center p-4 mb-4">
        <h1 className="font-poppins text-3xl sm:text-4xl font-extrabold leading-[48px] text-[#333333] underline decoration-transparent text-underline-position-from-font mt-16 sm:mt-20 lg:mt-12">
          Browse The Range
        </h1>

        <p className="font-poppins text-lg sm:text-xl font-normal leading-[30px] text-center mt-4 sm:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 sm:mt-12 gap-6 sm:gap-8">
          {/* Image 1 */}
          <Link href="/Shop">
            <div className="relative w-full h-[300px] sm:h-[480px] sm:mt-16 lg:mt-20 cursor-pointer">
              <Image
                src="/one.png"
                alt="Dining"
                width={381}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="font-poppins text-xl font-semibold text-center mt-6 text-[#333333]">
                Dining
              </div>
            </div>
          </Link>

          {/* Image 2 */}
          <Link href="/Shop">
            <div className="relative w-full h-[300px] sm:h-[480px] mt-12 sm:mt-16 lg:mt-20 cursor-pointer">
              <Image
                src="/two.png"
                alt="Living"
                width={381}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="font-poppins text-xl font-semibold text-center mt-6 text-[#333333]">
                Living
              </div>
            </div>
          </Link>

          {/* Image 3 */}
          <Link href="/Shop">
            <div className="relative w-full h-[300px] sm:h-[480px] mt-12 sm:mt-16 lg:mt-20 cursor-pointer">
              <Image
                src="/three.png"
                alt="Bedroom"
                width={381}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="font-poppins text-xl font-semibold text-center mt-6 text-[#333333]">
                Bedroom
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Range;
