import Image from "next/image";
import Link from "next/link"; // Import the Link component

const HeroSection = () => {
  return (
    <section className="relative md:h-screen w-full">
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
        {/* Image Section (Visible only on mobile) */}
        <div className="block md:hidden relative mb-6 md:mb-0">
          <div className="flex justify-center items-center">
            <Image
              src="/home.jpeg" // Replace with your image path
              alt="Centered Image"
              width={600}
              height={600}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-[#fff3e3] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-left max-w-xs sm:max-w-md w-full md:w-1/2 md:ml-auto md:mr-24 md:order-1">
          <p className="text-xs sm:text-sm font-medium text-gray-500">
            New Arrival
          </p>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#b88e2f] mt-2">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-3 text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          {/* Wrap the button with Link */}
          <Link href="/Shop">
            <button className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#b88e2f] text-white font-semibold rounded-md hover:bg-gray-800">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
