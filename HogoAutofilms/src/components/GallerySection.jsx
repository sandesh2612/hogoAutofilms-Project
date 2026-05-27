import { useState } from 'react';

import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';
import gallery9 from '../assets/gallery9.jpeg';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  const galleryImages = [
    { id: 1, src: gallery1, alt: 'Gallery 1' },
    { id: 2, src: gallery2, alt: 'Gallery 2' },
    { id: 3, src: gallery3, alt: 'Gallery 3' },
    { id: 4, src: gallery4, alt: 'Gallery 4' },
    { id: 5, src: gallery5, alt: 'Gallery 5' },
    { id: 6, src: gallery6, alt: 'Gallery 6' },
    { id: 7, src: gallery7, alt: 'Gallery 7' },
    { id: 8, src: gallery8, alt: 'Gallery 8' },
    { id: 9, src: gallery9, alt: 'Gallery 9' },
  ];

  const handleView = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(2rem); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#7e7e7e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-xl group cursor-pointer bg-[#00001a]"
                style={{
                  opacity: 0,
                  animation: `fadeUp 0.8s ease-out ${index * 120}ms forwards`,
                }}
              >
                <img
                  draggable="false"
                  alt={image.alt}
                  className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-contain transition-transform duration-700 group-hover:scale-110 bg-white"
                  src={image.src}
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#00001a]/60">
                  <button
                    onClick={() => handleView(image)}
                    className="px-4 sm:px-6 py-2 rounded-[6px] font-medium cursor-pointer transition-all duration-300 bg-[var(--primary)] text-white active:bg-[var(--active)] text-xs sm:text-sm"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition"
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            
          </div>
        </div>
      )}
    </>
  );
}