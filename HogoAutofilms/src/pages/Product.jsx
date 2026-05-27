import React, { useState } from 'react';
import gallerybg from "../assets/gallerybg.jpg";
import {Link}from "react-router-dom";
// Import images from assets
import productimg1 from '../assets/productimg1.jpg';
import productimg2 from '../assets/productimg2.jpg';
import productimg3 from '../assets/productimg3.jpg';
import productimg4 from '../assets/productimg4.jpg';
import productimg5 from '../assets/productimg5.jpg';
import productimg6 from '../assets/productimg6.jpg';
import productimg7 from '../assets/productimg7.png';
import productimg8 from '../assets/productimg8.png';
import productimg9 from '../assets/productimg9.png';
import productimg10 from '../assets/productimg10.png';
import productimg11 from '../assets/productimg11.png';

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'paint', label: 'Paint Protection Films' },
    { id: 'sunroof', label: 'Sunroof Protection Film' },
    { id: 'windshield', label: 'Windshield Protection Film' },
    { id: 'safety', label: 'Safety Glaze' }
  ];

 const products = [
  {
    id: 21,
    slug: "21",
    name: "Yuva - Gloss 6 Years",
    category: "paint",
    image: productimg1
  },
  {
    id: 22,
    slug: "22",
    name: "Vayu - Gloss 8 Years",
    category: "paint",
    image: productimg2
  },
  {
    id: 24,
    slug: "24",
    name: "Vajra - Gloss 10 Years",
    category: "paint",
    image: productimg3
  },
  {
    id: 23,
    slug: "23",
    name: "Vayu - Matte 8 Years",
    category: "paint",
    image: productimg4
  },
  {
    id: 26,
    slug: "26",
    name: "Vayu - Black Gloss 8 Years",
    category: "paint",
    image: productimg5
  },
  {
    id: 25,
    slug: "25",
    name: "Vayu - Black - Matte 8 Years",
    category: "paint",
    image: productimg6
  },
  {
    id: 18,
    slug: "18",
    name: "YUKI Safety Glaze 50% - 10 Years",
    category: "safety",
    image: productimg7
  },
  {
    id: 7,
    slug: "7",
    name: "YUKI Safety Glaze - 70% Black 10 Years",
    category: "safety",
    image: productimg8
  },
  {
    id: 20,
    slug: "20",
    name: "YUKI Safety Glaze - 70% Blue 10 Years",
    category: "safety",
    image: productimg9
  },
  {
    id: 5,
    slug: "5",
    name: "Sunroof Protection 3 Years",
    category: "sunroof",
    image: productimg10
  },
  {
    id: 6,
    slug: "6",
    name: "Windshield Protection 2 Years",
    category: "windshield",
    image: productimg11
  }
];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <>
      {/* Top Banner Image */}
{/* Product Banner Section */}
<div className="relative w-full h-[300px] bg-[#00001a] sm:h-[380px] md:h-[450px] overflow-hidden">

  {/* Background Image */}
  <img
    src={gallerybg}
    alt="Product Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white font-[Oxanium]">
  Product
</h1>

    {/* Line */}
    <div className="w-full max-w-4xl border-t border-white/20 my-6"></div>

    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-white text-sm sm:text-base font-medium">
      <span className="hover:text-red-500 transition duration-300 cursor-pointer">
        Home
      </span>

      <span className="text-gray-300">›</span>

      <span className="text-white font-semibold">
        Shop
      </span>
    </div>

  </div>
</div>

      {/* Product Section */}
      <section className="max-w-full  bg-[#00001a] mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 transition-all duration-700 ease-out opacity-100 translate-y-0">

        {/* Sidebar - Categories */}
        <div className="lg:col-span-1">
          <div className="w-full  transition-all duration-700 ease-out opacity-100 translate-x-0">
            <div
              className="p-5 sm:p-6 rounded-xl border border-white/10 transition duration-300 hover:border-white/30"
              style={{ background: 'rgb(0, 0, 26)' }}
            >
              <h3 className="mb-5 text-lg sm:text-xl font-bold text-white">
                Categories
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-gray-300">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      className="accent-red-500"
                      type="radio"
                      name="category"
                      checked={selectedCategory === category.id}
                      onChange={() =>
                        setSelectedCategory(category.id)
                      }
                    />

                    <span
                      className={`transition-all duration-300 group-hover:text-white ${
                        selectedCategory === category.id
                          ? 'text-white font-semibold scale-105'
                          : ''
                      }`}
                    >
                      {category.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">

              {filteredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  className="block h-full w-full"
                  to={`/products/${product.slug}`}
                >
                  <div
                    className={`group rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-700 ease-out flex flex-col h-[380px] w-full hover:-translate-y-2 hover:shadow-2xl ${
                      index < 3
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      background: 'rgb(255, 255, 255)',
                      animation:
                        index >= 3
                          ? `fadeInUp 0.7s ease-out ${
                              (index - 3) * 0.1
                            }s forwards`
                          : 'none'
                    }}
                  >
                    {/* Product Image */}
                    <div className="h-[200px] sm:h-[200px] md:h-[300px] overflow-hidden flex items-center justify-center bg-[#f7f7f7] flex-shrink-0">
                      <img
                        alt={product.name}
                        className="max-h-full object-contain transition duration-500 group-hover:scale-110"
                        src={product.image}
                      />
                    </div>

                    {/* Product Title */}
                    <div
                      className="p-2 sm:p-3 md:p-4 text-center flex-1 flex flex-col justify-center"
                      style={{ background: 'rgb(0, 0, 26)' }}
                    >
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white leading-snug line-clamp-2 px-6">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(2.5rem);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Product;