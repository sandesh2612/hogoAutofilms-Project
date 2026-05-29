import { Link } from 'react-router-dom';

export default function HeroSection({
  backgroundImage,
  title,
  title2,
  breadcrumbText
}) {
  return (
    <section
      className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center text-center px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full transition-all duration-700 ease-out opacity-100 translate-y-0">

        {/* Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white"
          style={{ fontFamily: 'Oxanium, sans-serif' }}
        >
          {title}
        </h1>

        {/* Divider */}
        <div className="w-full h-px my-4 sm:my-6 bg-white/20" />

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-base">

          <Link
            to="/"
            className="font-bold text-[#7e7e7e] hover:opacity-80 transition"
          >
            Home
          </Link>

          <span className="text-white">›</span>

          {/* Show Products only if title2 exists */}
          {title2 && (
            <>
              <Link
                to="/product"
                className="font-bold text-[#7e7e7e] hover:opacity-80 transition"
              >
                Products
              </Link>

              <span className="text-white">›</span>
            </>
          )}

          <span className="font-bold text-white">
            {breadcrumbText || title}
          </span>

        </div>
      </div>
    </section>
  );
}