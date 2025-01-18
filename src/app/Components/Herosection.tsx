import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Full Background Image (Visible on Medium to Larger Screens) */}
      <div className="absolute inset-0 -z-10 hidden md:block mt-4">
        <Image
          src="/home.jpeg" // Replace with your image path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="flex flex-col md:flex-row items-center justify-center h-full px-4 sm:px-6">
        {/* Image Section for Small Screens */}
        <div className="block md:hidden w-full relative mb-0 mt-[-40px]"> {/* Adjusted negative margin to move image up closer to navbar */}
          <div className="flex justify-center items-center">
            <Image
              src="/home.jpeg" // Replace with your image path
              alt="Centered Image"
              width={600} // Adjust size for small screens
              height={600}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Text Section with Pink Box */}
        <div className="absolute md:static bottom-0 md:mr-8 lg:mr-16 bg-[#fff3e3] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-left max-w-xs sm:max-w-md w-full md:w-auto md:ml-auto mt-[-40px]"> {/* Adjusted negative margin to move text box up */}
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            New Arrival
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#b88e2f] mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-3 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#b88e2f] text-white font-semibold rounded-md hover:bg-gray-800">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
