'use client';
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image"; // Import Image component

interface Product {
  title: string;
  imageUrl: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [results, setResults] = useState<Product[]>([]); // Fetched results

  // Fetch data from Sanity
  const fetchData = async (query: string) => {
    try {
      const wildcardQuery = `${query}*`; // Add wildcard for partial matches
      const data = await client.fetch(
        `*[_type == "product" && title match $wildcardQuery]{
          title,
          "imageUrl": productImage.asset->url
        }`,
        { wildcardQuery } // Pass the wildcard query as a parameter
      );
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Call fetchData when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]); // Clear results if query is empty
    } else {
      fetchData(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((item: Product, index: number) => (
              <li key={index} className="flex items-center gap-4 p-3 border-b">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={64} // Define width
                  height={64} // Define height
                  className="object-cover rounded-md"
                />
                <span className="font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          searchQuery && <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
