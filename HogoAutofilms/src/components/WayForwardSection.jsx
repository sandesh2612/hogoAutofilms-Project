import { useEffect, useRef } from 'react';
import backgroundCar from '../assets/bg.jpeg';

export default function WayForwardSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrolled = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate parallax offset
      const offset = (scrolled - sectionTop) * 0.5;
      
      // Only apply parallax when section is in viewport
      if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        sectionRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <section 
        ref={sectionRef}
        className="relative w-full py-24 md:py-36 bg-cover bg-center bg-no-repeat bg-[#00001a]"
        style={{ 
          backgroundImage: `url(${backgroundCar})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Top gradient fade */}
        <div 
          className="absolute top-0 left-0 w-full h-[30%]"
          style={{ 
            background: 'linear-gradient(rgb(0, 0, 26) 0%, rgba(15, 15, 15, 0.5) 60%, rgba(15, 15, 15, 0) 100%)' 
          }}
        />
        
        {/* Bottom gradient fade */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[30%]"
          style={{ 
            background: 'linear-gradient(to top, rgb(0, 0, 26) 0%, rgba(15, 15, 15, 0.5) 60%, rgba(15, 15, 15, 0) 100%)' 
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Title Section */}
          <div className="text-left w-full">
            <div className="flex flex-col items-end">
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-semibold leading-tight tracking-wide text-white">
                HOGO AUTOFILMS
              </h2>
              <h3 className="text-[26px] sm:text-[34px] md:text-[42px] font-semibold opacity-75 tracking-widest text-[#d20000] mt-2">
                WAY FORWARD
              </h3>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-[#0a0a0a]/80 backdrop-blur-md p-8 sm:p-10 shadow-2xl border border-white/5 rounded-xl">
            <div className="space-y-6 text-[14px] sm:text-[15px] leading-[1.9] text-white/80">
              <p>
                Recognizing the rapid growth of the car detailing industry, the group 
                strategically diversified into the premium automotive care segment with 
                the launch of advanced solutions under the brand HOGONN.
              </p>
              
              <p>
                At the heart of this journey lies a guiding principle "Quality and 
                Consistency in Quality."
              </p>
              
              <p>
                Our products are developed using advanced technologies, premium raw 
                materials, and rigorous quality control processes.
              </p>
              
              <p>
                With a strong legacy and a forward-looking vision, HOGO AUTOFILMS India 
                Pvt. Ltd. remains committed to delivering innovative, reliable, and 
                world-class automotive care solutions ensuring exceptional value and 
                complete customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}