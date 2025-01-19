import React, { useState } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

// Define types for filters
type FilterType = "price" | "color" | "size" | "dressStyle";

interface Filters {
  price: number[];
  color: string[];
  size: string[];
  dressStyle: string[];
}

// Map filter types to their corresponding value types
type FilterValueType<T extends FilterType> = T extends "price" ? number[] : string;

const Home = () => {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({
    price: [50, 200],
    color: [],
    size: [],
    dressStyle: [],
  });

  // Type-safe handler function
  const handleFilterChange = <T extends FilterType>(
    filterType: T,
    value: FilterValueType<T>
  ) => {
    setSelectedFilters((prevFilters) => {
      if (filterType === "price" && Array.isArray(value)) {
        return {
          ...prevFilters,
          [filterType]: value,
        };
      } else if (typeof value === "string") {
        return {
          ...prevFilters,
          [filterType]: prevFilters[filterType as "color" | "size" | "dressStyle"].includes(value)
            ? prevFilters[filterType].filter((item) => item !== value)
            : [...prevFilters[filterType], value],
        };
      }
      return prevFilters;
    });
  };

  const products = [
    {
      image: "/gradient-graphic-t-shirt.jpg",
      title: "Gradient Graphic T-shirt",
      rating: 3.5,
      price: 145,
      link: "/product/gradient-graphic-tshirt", // Add a unique link for the product
    },
    {
      image: "/polo-with-tipping-details.jpg",
      title: "Polo with Tipping Details",
      rating: 4.5,
      price: 180,
      link: "/product/polo-tipping-details",
    },
    {
      image: "/black-striped-t-shirt.jpg",
      title: "Black Striped T-shirt",
      rating: 5,
      price: 120,
      discount: 30,
      link: "/product/black-striped-tshirt",
    },
    {
      image: "/skinny-fit-jeans.jpg",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      discount: 20,
      link: "/product/skinny-fit-jeans",
    },
    {
      image: "/checked-shirt.jpg",
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      link: "/product/checked-shirt",
    },
    {
      image: "/sleeve-striped-t-shirt.jpg",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 150,
      discount: 10,
      link: "/product/sleeve-striped-tshirt",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Casual Wear Section */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Casual Wear Collection</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:w-1/4">
            {/* Filters content here */}
          </aside>

          {/* Products Grid */}
          <section className="lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <Link href={product.link}>
                    {/* Link wraps the image */}
                    <a>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="w-full h-64 object-cover"
                      />
                    </a>
                  </Link>
                  <div className="p-4">
                    <Link href={'product.link'}>
                      {/* Link wraps the product title */}
                      <a className="text-xl font-semibold hover:underline">
                        {product.title}
                      </a>
                    </Link>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">
                        {"★".repeat(Math.floor(product.rating))}
                      </span>
                      <span className="text-gray-500 ml-2">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-lg font-bold mt-2">${product.price}</p>
                    {product.discount && (
                      <p className="text-red-500 line-through">
                        ${product.price + product.discount}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <button className="px-4 py-2 bg-gray-200 text-black rounded-md">
                Previous
              </button>
              <span>Page 1 of 10</span>
              <button className="px-4 py-2 bg-gray-200 text-black rounded-md">
                Next
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
