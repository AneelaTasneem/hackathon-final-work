import React from 'react';
import Image from 'next/image';
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";


const YourComponent = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Section */}
      <div className="relative w-full h-64 sm:h-48">
        <Image
          src="/shop.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        {/* Overlay content */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4 px-4">
          <h1 className="text-black font-poppins font-medium text-[36px] sm:text-[28px] md:text-[48px] leading-[48px] md:leading-[72px] text-center">
            Shop
          </h1>
          <p className="font-poppins text-black font-medium text-[14px] sm:text-[12px] md:text-[16px] leading-[20px] md:leading-[24px] text-center">
            Home -{" "}
            <span className="font-poppins font-light">
              Shop
            </span>
          </p>
        </div>
      </div>


      

      {/* Product Grid Section */}
      <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-24"> {/* Add padding and grid columns */}
        {/* Product 1 */}
        <div className="w-full h-auto relative">
        <Image
            src="/18.jpeg"
            alt="Product 1"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/30.png"
            alt="30% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto relative">
          <Image
            src="/vip.png"
            alt="Product 2"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover opacity-35"
          />
          <Image
            src="/Button.png"
            alt="Center Overlay"
            width={252}
            height={96}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[252px] h-[96px]"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp2,500,000
            </div>
          </div>
        </div>

           {/* Product 3 */}
        <div className="w-full h-auto relative">
          <Image
            src="/14.png"
            alt="Product 3"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Lolito
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Luxury big sofa
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

          {/* Product 4 */}
          <div className="w-full h-auto relative">
          <Image
            src="/15.jpeg"
            alt="Product 4"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Respira
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Outdoor bar and table stool
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp500,000
            </div>
          </div>
        </div>

             {/* Product 1 */}
             <div className="w-full h-auto relative">
        <Image
            src="/18.jpeg"
            alt="Product 1"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/30.png"
            alt="30% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto relative">
          <Image
            src="/vip.png"
            alt="Product 2"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
         
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp2,500,000
            </div>
          </div>
        </div>

           {/* Product 3 */}
        <div className="w-full h-auto relative">
          <Image
            src="/14.png"
            alt="Product 3"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Lolito
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Luxury big sofa
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

          {/* Product 4 */}
          <div className="w-full h-auto relative">
          <Image
            src="/15.jpeg"
            alt="Product 4"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Respira
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Outdoor bar and table stool
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp500,000
            </div>
          </div>
        </div>

             {/* Product 1 */}
             <div className="w-full h-auto relative">
        <Image
            src="/18.jpeg"
            alt="Product 1"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/30.png"
            alt="30% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto relative">
          <Image
            src="/vip.png"
            alt="Product 2"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
         
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp2,500,000
            </div>
          </div>
        </div>

           {/* Product 3 */}
        <div className="w-full h-auto relative">
          <Image
            src="/14.png"
            alt="Product 3"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Lolito
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Luxury big sofa
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

          {/* Product 4 */}
          <div className="w-full h-auto relative">
          <Image
            src="/15.jpeg"
            alt="Product 4"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Respira
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Outdoor bar and table stool
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp500,000
            </div>
          </div>
        </div>

             {/* Product 1 */}
             <div className="w-full h-auto relative">
        <Image
            src="/18.jpeg"
            alt="Product 1"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/30.png"
            alt="30% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Pingky
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              cute bed set
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full h-auto relative">
          <Image
            src="/vip.png"
            alt="Product 2"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
         
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Leviosa
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Stylish cafe chair
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp2,500,000
            </div>
          </div>
        </div>

           {/* Product 3 */}
        <div className="w-full h-auto relative">
          <Image
            src="/14.png"
            alt="Product 3"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/50.png"
            alt="50% Off"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Lolito
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Luxury big sofa
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              <span className="text-[#3A3A3A]">Rp7,000,000</span>
              <span className="text-gray-400 line-through mr-2">
                Rp14,000,000
              </span>
            </div>
          </div>
        </div>

          {/* Product 4 */}
          <div className="w-full h-auto relative">
          <Image
            src="/15.jpeg"
            alt="Product 4"
            width={300}
            height={301}
            className="w-full h-[200px] md:h-[301px] object-cover"
          />
          <Image
            src="/New.png"
            alt="New Arrival"
            width={48}
            height={48}
            className="absolute top-2 right-2 w-12 h-12"
          />
          <div className="w-full h-[99px] mt-[16px]">
            <h1 className="font-poppins text-xl sm:text-lg md:text-2xl font-semibold text-[#3A3A3A]">
              Respira
            </h1>
            <p className="font-poppins text-sm sm:text-xs md:text-base font-medium leading-6 text-left underline decoration-skip-ink">
              Outdoor bar and table stool
            </p>
            <div className="font-poppins text-lg sm:text-base md:text-xl font-semibold text-[#3A3A3A]">
              Rp500,000
            </div>
          </div>
        </div>
      </div>

       {/* Icons Section */}
       <div className="w-full py-16 px-4 bg-[#faf3ea]">
        <div className="max-w-7xl mx-auto">
          {/* Icons with Titles and Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* High Quality */}
            <div className="flex flex-col items-center">
              <GrTrophy size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">
                High Quality
              </h3>
              <p className="text-sm text-gray-500">
                Crafted from top material.
              </p>
            </div>

            {/* Warranty Protection */}
            <div className="flex flex-col items-center">
              <GoVerified size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">
                Warranty Protection
              </h3>
              <p className="text-sm text-gray-500">Over 2 years.</p>
            </div>

            {/* Free Shipping */}
            <div className="flex flex-col items-center">
              <FaPeopleCarryBox size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">
                Free Shipping
              </h3>
              <p className="text-sm text-gray-500">Order over $150</p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center">
              <MdOutlineSupportAgent size={40} className="mb-4 text-gray-700" />
              <h3 className="text-lg font-medium text-gray-800">
                24/7 Support
              </h3>
              <p className="text-sm text-gray-500">Dedicated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
