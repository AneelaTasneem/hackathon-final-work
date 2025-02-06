import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
}

const BlogPage = async () => {
  const blogs = await client.fetch(`
    *[_type == "blog"] | order(date desc) {
      _id,
      title,
      slug,
      author,
      date,
      "imageUrl": image.asset->url,
      content
    }
  `);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Blog Cards */}
        <div className="flex flex-col space-y-6">
          {blogs.map((blog: Blog) => (
            <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Blog Image */}
              <div className="relative w-full h-56 sm:h-72">
              <Image
  src={blog.imageUrl}
  alt={blog.title}
  style={{ objectFit: 'cover' }} // Use style instead of layout="fill"
  sizes="(max-width: 768px) 100vw, 50vw" // Define sizes for performance optimization
  fill // Use the `fill` prop directly
/>

              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="text-gray-500 text-sm mb-3">
                  <span className="mr-2">{blog.author}</span> | 
                  <span className="mr-2">{new Date(blog.date).toLocaleDateString()}</span> | 
                  <span>{blog.category}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>

                {/* Read More */}
                <Link href={`/blog/${blog.slug.current}`} className="text-blue-500 font-medium hover:underline">
  Read more
</Link>

              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Categories & Recent Posts */}
        <div className="shadow-lg p-6 w-full max-w-xs mx-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
          <ul className="space-y-2">
            {["Craft", "Design", "Handmade", "Interior", "Wood"].map((category) => (
              <li key={category} className="text-gray-700">{category}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;



