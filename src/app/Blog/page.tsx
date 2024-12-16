import React from 'react';
import Image from 'next/image';
import Overlay from '../Components/Overlay';
import Iconsection from '../Components/Iconssection';
import Recentposts from '../Components/Recentposts';

const page = () => {
  const cards = [
    {
      id: 1,
      image: '/blog-1.jpeg',
      author: 'Admin',
      date: '14 Oct 2022',
      category: 'Wood',
      title: 'Going all-in with millennial design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      image: '/blog-2.jpeg',
      author: 'Editor',
      date: '15 Nov 2022',
      category: 'Technology',
      title: 'Exploring new-age tools for creators',
      description:
        'Mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices.',
    },
    {
      id: 3,
      image: '/blog-3.jpeg',
      author: 'Writer',
      date: '10 Dec 2022',
      category: 'Travel',
      title: 'The art of minimalist travel',
      description:
        'Cursus mattis molestie a iaculis at erat. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <Overlay heading="Blog" breadcrumb="Blog" imageSrc="/shop.jpeg" />
      
      {/* Two-column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-8 mt-10">
        {/* Left Side: Cards Section */}
        <div className="flex flex-col space-y-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Card Image */}
              <div className="relative w-full h-56 sm:h-72">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <span className="mr-2">{card.author}</span>
                  <span className="mr-2">|</span>
                  <span className="mr-2">{card.date}</span>
                  <span className="mr-2">|</span>
                  <span>{card.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>

                {/* Read More */}
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Work Section */}
        <div className="shadow-lg flex flex-col justify-start items-center mx-auto">
          <div className="w-full max-w-xs mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {/* Search Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <h2 className="text-lg font-semibold text-gray-800 mb-12">Categories</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-gray-700">
                <span className="text-sm font-medium">Crafts</span>
                <span className="text-sm text-gray-500">2</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span className="text-sm font-medium">Design</span>
                <span className="text-sm text-gray-500">8</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span className="text-sm font-medium">Handmade</span>
                <span className="text-sm text-gray-500">7</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span className="text-sm font-medium">Interior</span>
                <span className="text-sm text-gray-500">1</span>
              </li>
              <li className="flex justify-between items-center text-gray-700">
                <span className="text-sm font-medium">Wood</span>
                <span className="text-sm text-gray-500">6</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="w-full mt-10">
            <Recentposts />
          </div>
        </div>
      </div>

      {/* Icon Section */}
      <div className="w-full py-16 px-4 bg-[#faf3ea]">
        <div className="max-w-7xl mx-auto">
          <Iconsection />
        </div>
      </div>
    </div>
  );
};

export default page;
