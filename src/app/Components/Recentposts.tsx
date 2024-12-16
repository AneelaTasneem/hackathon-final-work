// components/RecentPosts.tsx
import React from "react";
import Image from "next/image"; // Import Image from Next.js

const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "05 Aug 2022",
    image: "/blog-4.jpeg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "05 Aug 2022",
    image: "/blog-5.jpeg",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/blog-6.jpeg",
  },
  {
    id: 4,
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/blog-7.jpeg",
  },
  {
    id: 5,
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/blog-8.jpeg",
  },
];

const RecentPosts = () => {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl font-bold mt-6 mb-4">Recent Posts</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex items-center space-x-4 flex-col sm:flex-row sm:space-x-6"
          >
            {/* Image with Next.js Image component */}
            <div className="w-20 h-20 sm:w-16 sm:h-16 relative mb-4 sm:mb-0">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-md"
              />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left">
              <h3 className="text-gray-800 font-medium text-lg sm:text-base">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPosts;
