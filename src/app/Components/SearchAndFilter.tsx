'use client';
import React, { useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { FaFilter } from "react-icons/fa"; // Import the filter icon

interface PriceRange {
  min: number;
  max: number;
}

interface ImageSource {
  asset: {
    _ref: string;
    _type: string;
  };
}

interface CategoryImage {
  title: string;
  category: string;
  price: number;
  image: ImageSource;
}

const urlFor = (source: ImageSource): string => {
  const imageUrl = imageUrlBuilder(client).image(source).url();
  console.log("Generated image URL:", imageUrl);  // Log the generated URL
  return imageUrl;
};

interface SearchAndFilterProps {
  products: Product[];
  onFilter: (filteredProducts: Product[]) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ products, onFilter }) => {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState<PriceRange | null>(null);
  const [categoryImages, setCategoryImages] = useState<CategoryImage[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar visibility state

  const fetchCategoryImages = async (category: string) => {
    const query = `*[_type == "product" && category == $category] {
      title,
      category,
      price,
      image
    }`;

    try {
      const data: CategoryImage[] = await client.fetch(query, { category });
      console.log("Fetched category data:", data);  // Log the fetched data
      setCategoryImages(data);
    } catch (error) {
      console.error("Error fetching category images:", error);
    }
  };

  useEffect(() => {
    if (category) {
      fetchCategoryImages(category);
    }
  }, [category]);

  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const matchesCategory = category
        ? Array.isArray(product.category) && product.category.some((cat: string) => cat === category) // Check if any of the categories match
        : true;
      const matchesPrice =
        priceRange
          ? product.price >= priceRange.min && product.price <= priceRange.max
          : true;
      return matchesCategory && matchesPrice;
    });
    onFilter(filtered);
  };

  // Price options for dropdown
  const priceOptions = [
    { label: "Under $50", value: { min: 0, max: 50 } },
    { label: "$50 - $100", value: { min: 50, max: 100 } },
    { label: "$100 - $200", value: { min: 100, max: 200 } },
    { label: "$200 - $500", value: { min: 200, max: 500 } },
    { label: "$500+", value: { min: 500, max: 1000 } },
  ];

  return (
    <div>
      {/* Button to open or close the sidebar */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-[#fff3e3] text-black p-2 rounded mb-4 flex items-center"
      >
        <FaFilter className="mr-2" />
        {isSidebarOpen ? "Close Filters" : "Open Filters"}
      </button>

      {/* Sidebar with smaller width */}
      <div
        className={`fixed left-0 top-0 w-[250px] h-full bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl mb-4">Filters</h2>

          {/* Category Dropdown */}
          <select
            value={category}
            onChange={(e) => {
              const selectedCategory = e.target.value;
              setCategory(selectedCategory);
              console.log("Selected Category:", selectedCategory);  // Log selected category
            }}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">All Categories</option>
            <option value="craft">Craft</option>
            <option value="design">Design</option>
            <option value="handmade">Handmade</option>
            <option value="interior">Interior</option>
            <option value="wood">Wood</option>
          </select>

          {/* Price Range Dropdown */}
          <select
            onChange={(e) => setPriceRange(JSON.parse(e.target.value))}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">Select Price Range</option>
            {priceOptions.map((option) => (
              <option key={option.label} value={JSON.stringify(option.value)}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Apply Filters Button */}
          <button
            onClick={handleFilter}
            className="bg-[#fff3e3] text-black p-2 rounded w-full"
          >
            Apply Filters
          </button>

          {/* Close Sidebar Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="bg-red-500 text-white p-2 rounded mt-4 w-full"
          >
            Close Filters
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="ml-[270px]">
        {/* Display Category Images if Available */}
        <div className="category-images">
          {categoryImages.length > 0 ? (
            categoryImages.map((product) => (
              <div key={product.title} className="category-image-item">
                <Image
                  src={urlFor(product.image) || "/fallback-image.jpg"}
                  alt={product.title}
                  className="rounded-md w-full h-64 object-cover"
                  width={200}
                  height={250}
                />
                <p>{product.title}</p>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
