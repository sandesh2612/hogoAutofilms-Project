import car from "../assets/startcarbg.png";
import bgblue from"../assets/bgblue.png";

export default function Hero() {
  return (
<div
  className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-36 pb-6 bg-cover bg-center"
  style={{
    backgroundImage: `url(${bgblue})`,
  }}
>
      {/* Background Subtle Wavy Glows */}
      <div className="absolute inset-0 bg-[#0f172a]/20 z-0"></div>

      <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[80%] bg-[#1e293b]/10 rounded-full blur-3xl transform -rotate-12 pointer-events-none"></div>

      {/* Hero Copy Typography */}
      <div className="relative z-10 text-center flex-1 flex flex-col justify-center items-center px-4 max-w-5xl mx-auto">
        
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase text-center leading-tight mb-6">
          Ultimate Shield <br />
          For Your Car's <br />
          Perfection
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium tracking-wide mb-8">
          Our Advanced Paint Protection Films
        </p>

        {/* Button */}
        <button className="relative overflow-hidden px-6 sm:px-8 py-3 rounded-[6px] font-semibold cursor-pointer transition-all duration-300 bg-red-600 text-white active:bg-red-700 shadow-xl shadow-red-600/20">
          
          <span className="relative block h-auto overflow-hidden">
            <span
              className="inline-block transition-transform duration-300 hover:translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:-top-full after:w-full"
              data-text="Get Quote"
            >
              Get Quote
            </span>
          </span>

        </button>
      </div>

      {/* Hero Car Image */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex justify-center mt-4">
        
        <img
          src={car}
          alt="Red Premium Vehicle Profile"
          className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]"
        />

      </div>
    </div>
  );
}