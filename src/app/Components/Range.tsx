import React from 'react';
import Image from 'next/image';

const Range = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      {/* Centered Div */}
      <div className="w-full max-w-screen-lg text-center p-4">
        {/* Heading with added margin on mobile and tablet */}
        <h1 className="font-poppins text-3xl sm:text-4xl font-extrabold leading-[48px] text-[#333333] underline decoration-transparent text-underline-position-from-font mt-6 sm:mt-8 lg:mt-10">
          Browse The Range
        </h1>
        
        {/* Paragraph with margin for spacing */}
        <p className="font-poppins text-lg sm:text-xl font-normal leading-[30px] text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Image Section with responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6">
          {/* Image 1 */}
          <div className="relative w-full h-[480px] mt-6 sm:mt-8 lg:mt-10">
            <Image
              src="/one.png" // Update image path
              alt="Image 1"
              width={381} // specify the width of the image
              height={480} // specify the height of the image
              className="w-full h-full object-cover"
            />
            <div className="font-poppins text-xl font-semibold text-center mt-2 text-[#333333]">
              Dining
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-[480px] mt-6 sm:mt-8 lg:mt-10">
            <Image
              src="/two.png" // Update image path
              alt="Image 2"
              width={381} // specify the width of the image
              height={480} // specify the height of the image
              className="w-full h-full object-cover"
            />
            <div className="font-poppins text-xl font-semibold text-center mt-2 text-[#333333]">
              Living
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-[480px] mt-6 sm:mt-8 lg:mt-10">
            <Image
              src="/three.png" // Update image path
              alt="Image 3"
              width={381} // specify the width of the image
              height={480} // specify the height of the image
              className="w-full h-full object-cover"
            />
            <div className="font-poppins text-xl font-semibold text-center mt-2 text-[#333333]">
              Bedroom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Range;
