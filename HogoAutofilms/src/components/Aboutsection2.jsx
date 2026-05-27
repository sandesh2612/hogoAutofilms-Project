import aboutImage1 from '../assets/aboutpage1.jpeg';
import aboutImage4 from '../assets/aboutpage4.jpeg';

export default function Aboutsection2() {
  return (
    <section className="sm:py-16 px-4 sm:px-6 bg-[#7e7e7e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:pb-0 md:pb-0 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image Grid */}
        <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] mt-5">
          {/* First Image - Top Left */}
          <div className="absolute z-20 left-0 top-0 w-[62%] h-[78%] lg:w-[48%] lg:h-auto lg:aspect-[4/5]">
            <img 
              alt="Expert" 
              className="w-full h-full object-cover rounded-xl shadow-2xl" 
              src={aboutImage1}
            />
          </div>
          
          {/* Second Image - Bottom Right / Overlapping */}
          <div className="absolute z-10 right-0 bottom-0 lg:right-auto lg:bottom-auto lg:left-[38%] lg:top-[14%] w-[62%] h-[78%] lg:w-[48%] lg:h-auto lg:aspect-[4/5]">
            <img 
              alt="Workshop" 
              className="w-full h-full object-cover rounded-xl shadow-xl" 
              src={aboutImage4}
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          {/* Section Header with Decorative Lines */}
          <div className="flex justify-center lg:justify-start mb-12">
            <div className="inline-block">
              <div className="relative inline-block">
                {/* Top decorative line */}
                <span className="absolute -top-3 right-0 w-[35%] sm:w-[40%] md:w-[45%] h-[2px] bg-[var(--primary)]" />
                
                <h2 className="font-semibold tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] text-[#00001a]">
                  ABOUT US
                </h2>
                
                {/* Bottom decorative line */}
                <span className="absolute -bottom-3 left-0 w-[35%] sm:w-[40%] md:w-[45%] h-[2px] bg-[var(--primary)]" />
              </div>
            </div>
          </div>

          {/* Content Paragraphs */}
          <p className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-[#00001a]">
            HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over 46 years 
            in the automotive industry. Since its inception in 1979, the group has been 
            driven by a clear vision to deliver uncompromised quality and lasting value 
            to customers.
          </p>

          <p className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-[#00001a]">
            With an unwavering focus on quality and consistency, the organization 
            established a strong presence across automotive accessories and auto 
            components. Over the years, it expanded its portfolio to include premium 
            seat covers, body covers, floor mats, steering covers, and a wide range of 
            auto components, serving both the aftermarket and leading automobile 
            manufacturers.
          </p>

          <p className="leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 text-[#00001a]">
            This commitment to excellence has earned approvals from major OEMs such as 
            Maruti Suzuki, Hyundai Motor India, Mahindra &amp; Mahindra, and MG Motor 
            reinforcing its reputation as a trusted partner for high-quality automotive 
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}