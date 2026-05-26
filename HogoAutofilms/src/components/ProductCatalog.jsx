import React, { useState } from 'react';

// Import images from assets
import yuvaGlossImg from '../assets/yuva-gloss-6years.jpg';
import vayuGlossImg from '../assets/vayu-gloss-8years.jpg';
import vajraGlossImg from '../assets/vajra-gloss-10years.jpg';
import vayuMatteImg from '../assets/vayu-matte-8years.jpg';
import vayuBlackGlossImg from '../assets/vayu-black-gloss-8years.jpg';
import vayuBlackMatteImg from '../assets/vayu-black-matte-8years.jpg';
import yukiSafetyGlaze50Img from '../assets/yuki-safety-glaze-50.png';
import yukiSafetyGlaze70BlackImg from '../assets/yuki-safety-glaze-70-black.png';
import yukiSafetyGlaze70BlueImg from '../assets/yuki-safety-glaze-70-blue.png';
import sunroofProtectionImg from '../assets/sunroof-protection-3years.png';
import windshieldProtectionImg from '../assets/windshield-protection-2years.png';

const ProductCatalog = () => {
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
      name: 'Yuva - Gloss 6 Years',
      category: 'paint',
      image: yuvaGlossImg,
      url: '/product/21'
    },
    {
      id: 22,
      name: 'Vayu - Gloss 8 Years',
      category: 'paint',
      image: vayuGlossImg,
      url: '/product/22'
    },
    {
      id: 24,
      name: 'Vajra - Gloss 10 Years',
      category: 'paint',
      image: vajraGlossImg,
      url: '/product/24'
    },
    {
      id: 23,
      name: 'Vayu - Matte 8 Years',
      category: 'paint',
      image: vayuMatteImg,
      url: '/product/23'
    },
    {
      id: 26,
      name: 'Vayu - Black Gloss 8 Years',
      category: 'paint',
      image: vayuBlackGlossImg,
      url: '/product/26'
    },
    {
      id: 25,
      name: 'Vayu - Black - Matte 8 Years',
      category: 'paint',
      image: vayuBlackMatteImg,
      url: '/product/25'
    },
    {
      id: 18,
      name: 'YUKI Safety Glaze 50% - 10 Years',
      category: 'safety',
      image: yukiSafetyGlaze50Img,
      url: '/product/18'
    },
    {
      id: 7,
      name: 'YUKI Safety Glaze - 70% Black 10 Years',
      category: 'safety',
      image: yukiSafetyGlaze70BlackImg,
      url: '/product/7'
    },
    {
      id: 20,
      name: 'YUKI Safety Glaze - 70% Blue 10 Years',
      category: 'safety',
      image: yukiSafetyGlaze70BlueImg,
      url: '/product/20'
    },
    {
      id: 5,
      name: 'Sunroof Protection 3 Years',
      category: 'sunroof',
      image: sunroofProtectionImg,
      url: '/product/5'
    },
    {
      id: 6,
      name: 'Windshield Protection 2 Years',
      category: 'windshield',
      image: windshieldProtectionImg,
      url: '/product/6'
    }
  ];

  
  

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10 transition-all duration-700 ease-out opacity-100 translate-y-0">
      {/* Sidebar - Categories */}
      <div className="lg:col-span-1">
        <div className="w-full lg:sticky lg:top-28 transition-all duration-700 ease-out opacity-100 translate-x-0">
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
                    onChange={() => setSelectedCategory(category.id)}
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
              <a
                key={product.id}
                className="block h-full w-full"
                href={product.url}
                data-discover="true"
              >
                <div 
                  className={`group rounded-xl overflow-hidden shadow-lg border border-white/20 transition-all duration-700 ease-out flex flex-col h-[380px] w-full hover:-translate-y-2 hover:shadow-2xl ${
                    index < 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    background: 'rgb(255, 255, 255)',
                    animation: index >= 3 ? `fadeInUp 0.7s ease-out ${(index - 3) * 0.1}s forwards` : 'none'
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
              </a>
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
  );
};

export default ProductCatalog;
