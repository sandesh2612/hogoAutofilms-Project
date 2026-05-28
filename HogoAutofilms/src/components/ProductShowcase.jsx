import { useState } from 'react';
import productimg1 from "../assets/productimg1.jpg";

export default function ProductShowcase({ 
  title, 
  description, 
  image,
  descriptionLabel = "Description :"
}) {
  return (
    <section className="max-w-full bg-[#00001a] mx-auto px-4 sm:px-6 py-12 sm:py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="bg-[#0a0a2a] p-6 sm:p-8 rounded-xl">
        <div className="relative flex items-center justify-center">
          <img
            alt={title}
            className="w-full max-w-[420px] object-contain transition-opacity duration-500"
            src={image}
            style={{ maxHeight: '420px' }}
          />
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {title}
        </h2>

        <div className="text-sm space-y-2 text-[#d20000]">
          <p className="text-lg">
            {descriptionLabel && <span>{descriptionLabel}</span>}
            <span 
              className="ml-2 text-lg text-[#7e7e7e]"
              style={{ fontFamily: 'Oxanium, sans-serif' }}
            >
              {description}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}