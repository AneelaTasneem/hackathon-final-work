import React from "react";
import Image from "next/image";

// Define the type for props
interface Overlayprops {
  heading: string;
  breadcrumb: string;
  imageSrc: string;
}

const Overlay = (props: Overlayprops) => {
  const { heading, breadcrumb, imageSrc } = props;
  return (
    <div className="relative w-full h-64 sm:h-48 md:h-64">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      {/* Overlay content */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center space-y-4 px-4">
        <h1 className="text-black font-poppins font-medium text-[36px] sm:text-[28px] md:text-[48px] leading-[48px] md:leading-[72px] text-center">
          {heading}
        </h1>
        <p className="font-poppins text-black font-medium text-[14px] sm:text-[12px] md:text-[16px] leading-[20px] md:leading-[24px] text-center">
          Home - <span className="font-poppins font-light">{breadcrumb}</span>
        </p>
      </div>
    </div>
  );
};

export default Overlay;
