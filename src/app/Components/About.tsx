import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image'; // Import Next.js Image component

const AboutSection = () => {
  return (
    <div className="bg-white">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:py-16">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 px-4">
          <nav className="text-sm font-poppins text-gray-500 mb-4">
            <a href="/" className="hover:text-black">Home</a> / <span className="text-black">About</span>
          </nav>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a very
            fast pace. Exclusive offers a diverse assortment in categories ranging
            from consumer products to services.
          </p>
        </div>

        {/* Right Side - Image Section */}
        <div className="md:w-1/2 flex justify-center px-4">
          <Image
            src="/ladies.jpg"
            alt="Our Story"
            width={470}
            height={406}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 mt-8">
        {[{
          count: "10.5k",
          description: "Sellers active on our site",
          imgSrc: "/Services.png"
        },
        {
          count: "33k",
          description: "Monthly product sales",
          imgSrc: "/Services (1).png"
        },
        {
          count: "45.5k",
          description: "Customers active on our site",
          imgSrc: "/Services (2).png"
        },
        {
          count: "25k",
          description: "Annual gross sales in our site",
          imgSrc: "/Services (3).png"
        }].map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-6 border rounded-lg shadow-md ${
              index === 1 ? 'bg-[#DB4444] text-white' : ''
            }`}
          >
            {/* Image Section */}
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={stat.imgSrc}
                alt={`Icon ${index}`}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Count Section */}
            <h2 className="text-2xl font-bold mt-4">{stat.count}</h2>

            {/* Description Section */}
            <p className="text-sm text-center mt-2">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="px-4 md:px-16 mt-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            name: "Tom Cruise",
            role: "Founder & Chairman",
            imgSrc: "/1.png"
          },
          {
            name: "Emma Watson",
            role: "Managing Director",
            imgSrc: "/2.png"
          },
          {
            name: "Will Smith",
            role: "Product Designer",
            imgSrc: "/3.png"
          }].map((person, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center"
            >
              <Image
                src={person.imgSrc}
                alt={person.name}
                width={294}
                height={294}
                className="rounded-md object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{person.name}</h3>
              <p className="text-gray-600">{person.role}</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-black"><FaTwitter /></a>
                <a href="#" className="text-gray-500 hover:text-black"><FaInstagram /></a>
                <a href="#" className="text-gray-500 hover:text-black"><FaLinkedinIn /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
