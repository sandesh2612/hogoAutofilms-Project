import React from 'react';
import { MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import DistributerBg from '../assets/Distributer-Bg.png'

export default function DistributorLocations({ distributors = null }) {
  const defaultDistributors = [
    {
      state: 'Gujarat',
      locations: [
        {
          id: 1,
          city: 'Ahmedabad',
          name: 'HOGOO',
          address: 'AVDFDF, ahmedabad, gujrat - 356210',
        },
        {
          id: 2,
          city: 'Ahmedabad',
          name: 'Test',
          address: 'ahmedabad, Ahmedabad, Gujarat - 380001',
        },
      ],
    },
    {
      state: 'Maharashtra',
      locations: [
        {
          id: 3,
          city: 'Mumbai',
          name: 'quality one mumbai',
          address: 'Mumbai, Hirawadi, Mumbai, Maharashtra - 422004',
        },
      ],
    },
  ];

  const data = distributors || defaultDistributors;

  return (
    <>

    <HeroSection 
            backgroundImage={DistributerBg}
            title="Our Distributor"
            breadcrumbText="Distributor"
          />

    <div className="w-full bg-[#7e7e7e] px-4 sm:px-8 md:px-12 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {data.map((region, regionIndex) => (
          <div key={regionIndex}>
            {/* Region Header */}
            <div className="flex items-center gap-6 mb-10">
              <h2 
                className="text-3xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-[0.15em] whitespace-nowrap"
                style={{ fontFamily: 'Oxanium, sans-serif' }}
              >
                {region.state}
              </h2>
              <div className="flex-grow h-0.5 bg-[#d20000]" />
            </div>

            {/* Distributor Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.locations.map((distributor) => (
                <div
                  key={distributor.id}
                  className="bg-[#00001a] rounded-3xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {/* City Label */}
                  <span className="text-[#d20000] text-[10px] font-bold uppercase tracking-widest block mb-3">
                    {distributor.city}
                  </span>

                  {/* Distributor Name */}
                  <h3 className="text-xl font-bold text-white mb-6 capitalize">
                    {distributor.name}
                  </h3>

                  {/* Address with Icon */}
                  <div className="flex items-start gap-4">
                    <MapPin 
                      className="text-[#d20000] flex-shrink-0 mt-1" 
                      size={24}
                      strokeWidth={2.5}
                    />
                    <p className="text-gray-300 text-base leading-relaxed">
                      {distributor.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}