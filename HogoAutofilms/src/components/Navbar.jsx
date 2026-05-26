import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import car from "../assets/startcarbg.png"

// 1. Import your logo asset
import logoImg from '../assets/logo.png'; // Adjust path if your navbar is inside a components folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  // Navigation Links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Product', href: '/product' },
    { name: 'Warranty', href: '/warranty' },
    { name: 'Media', href: '/media' },
    { name: 'Our Team', href: '/team' },
    { name: 'Distributor', href: '/distributor' },
    { name: 'Contact us', href: '/contact' },
  ];

  // Product Links
  const products = [
    {
      name: 'Paint Protection Film - Gloss/Matte/Color',
      path: '/paint-protection-film',
    },
    {
      name: 'Safety Glaze',
      path: '/safety-glaze',
    },
    {
      name: 'Sunroof Protection Film',
      path: '/sunroof-protection-film',
    },
    {
      name: 'Windshield Protection Film',
      path: '/windshield-protection-film',
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0e27] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Desktop Logo Area */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoImg} 
                alt="HOGO Autofilms" 
                className="h-14 w-auto object-contain cursor-pointer" 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-red-500 ${
                    index === 0
                      ? 'text-red-500'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <div className="flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col justify-center items-center w-10 h-10 z-50 relative"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen
                      ? 'rotate-45 translate-y-1'
                      : '-translate-y-1'
                  }`}
                ></span>

                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isOpen
                      ? '-rotate-45 -translate-y-0.5'
                      : 'translate-y-1'
                  }`}
                ></span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-50 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0a0e27] z-50 shadow-2xl transition-transform duration-300 overflow-y-auto ${
          isOpen
            ? 'translate-x-0'
            : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-red-500"
        >
          ✕
        </button>

        <div className="px-8 py-12">

          {/* Sidebar Logo Area */}
          <div className="mb-10">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
              <img 
                src={logoImg} 
                alt="HOGO Autofilms" 
                className="h-8 w-auto object-contain" 
              />
              <div className="ml-2 text-xs text-gray-400 uppercase tracking-widest">
                Autofilms
              </div>
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Products */}
          <div className="mb-10">
            <h3 className="text-white text-lg font-semibold mb-6">
              Our Products
            </h3>

            <div className="space-y-4">
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Contact */}
          <div className="mb-10">
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-3">
              <a
                href="mailto:info@hogoautofilms.in"
                className="block text-sm text-gray-400 hover:text-white"
              >
                info@hogoautofilms.in
              </a>

              <a
                href="mailto:sales@hogoautofilms.in"
                className="block text-sm text-gray-400 hover:text-white"
              >
                sales@hogoautofilms.in
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Distributor Login */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Distributor Login
            </h3>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300">
              Distributor Login
            </button>
          </div>

        </div>
      </div>

      {/* Hero Section (Matching Image Layout) */}
      <div className="relative min-h-screen flex flex-col items-center justify-between bg-[#030712] overflow-hidden pt-36 pb-6">
        
        {/* Background Subtle Wavy Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/20 via-[#030712] to-[#030712] z-0"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[80%] bg-[#1e293b]/10 rounded-full blur-3xl transform -rotate-12 pointer-events-none"></div>

        {/* Hero Copy Typography */}
        <div className="relative z-10 text-center flex-1 flex flex-col justify-center items-center px-4 max-w-5xl mx-auto">
          <h1 className="text-white font-medium text-4xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase text-center leading-tight mb-6">
           
            Ultimate Shield <br /> For Your Car's <br /> Perfection
          </h1>
          
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium tracking-wide mb-8">
            Our Advanced Paint Protection Films
          </p>

          {/* Your Custom Interactive Button */}
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

        {/* Hero Car Asset Layout */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex justify-center mt-4">
          {/* Note: Swap out this placeholder URL with your local red car image asset if available */}
          <img 
            src={car} 
            alt="Red Premium Vehicle Profile" 
            className="w-full h-auto max-h-[380px] object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

      </div>
    </>
  );
};

export default Navbar;