import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function BlogDetails() {
  const slug = "going-all-in-with-millennial-design"; // Static slug

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      author,
      date,
      "imageUrl": image.asset->url,
      content
    }`,
    { slug }
  );

  if (!blog) {
    return <div>Blog not found. Please check the URL.</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>{blog.title}</h1>
      <p>By {blog.author}</p>
      <p>{blog.date}</p>

      <Image
        src={blog.imageUrl}
        alt={blog.title}
        width={600} // Adjust the width and height based on your needs
        height={400} // Adjust the width and height based on your needs
        style={{
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'block',
          margin: '20px 0',
        }}
      />

      <div>
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
