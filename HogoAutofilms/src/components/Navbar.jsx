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

      
    </>
  );
};

export default Navbar;