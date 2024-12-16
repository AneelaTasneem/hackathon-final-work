import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Full Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home.jpeg" // Replace with your image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Text Section */}
      <div className="flex justify-center md:justify-end items-center h-full px-4 sm:px-6">
        <div className="bg-[#fff3e3] p-6 sm:p-8 rounded-lg shadow-lg text-left max-w-xs sm:max-w-md w-full md:mr-6 lg:mr-[58px]">
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            New Arrival
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#b88e2f] mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-4 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-[#b88e2f] text-white font-semibold rounded-md hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
