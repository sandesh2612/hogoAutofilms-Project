import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/t1.jpeg";
import instagram from "../assets/t1.jpeg";

const Footer = () => {
  return (
    <footer className="pt-16 bg-secondary text-white">
      
      {/* Top Footer */}
      <div
        className="
          max-w-7xl mx-auto px-4
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        {/* Logo Section */}
        <div className="text-center lg:text-left space-y-4">
          <Link
            to="/"
            className="flex justify-center lg:justify-start items-center gap-3"
          >
            <img
              src={logo}
              alt="logo"
              className="h-[60px] sm:h-[70px] object-contain"
            />

            <span className="font-semibold text-lg">
              HOGO AUTOFILMS
            </span>
          </Link>

          <p className="text-sm text-white/80 leading-7 max-w-md mx-auto lg:mx-0">
            HOGO AUTOFILMS India Pvt. Ltd. is built on a strong
            legacy of over 46 years in the automotive industry.
          </p>
        </div>

        {/* Products Column 1 */}
        <div className="text-center lg:text-left">
          <h3 className="mb-5 text-lg font-semibold">
            Our Products
          </h3>

          <ul className="space-y-3">
            {[
              "Yuva - Gloss 6 Years",
              "Vayu - Gloss 8 Years",
              "Vajra - Gloss 10 Years",
              "Vayu - Matte 8 Years",
              "Vayu - Black Gloss 8 Years",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  cursor-pointer
                  text-white/80
                  hover:text-primary
                  transition
                  duration-300
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column 2 */}
        <div className="text-center lg:text-left">
          <h3 className="mb-5 text-lg font-semibold">
            More Products
          </h3>

          <ul className="space-y-3">
            {[
              "Vayu - Black Matte 8 Years",
              "YUKI Safety Glaze 50% - 10 Years",
              "YUKI Safety Glaze 70% Black - 10 Years",
              "YUKI Safety Glaze 70% Blue - 10 Years",
              "Sunroof Protection 3 Years",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  cursor-pointer
                  text-white/80
                  hover:text-primary
                  transition
                  duration-300
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div
        className="
          flex justify-center items-center
          gap-4 sm:gap-5
          mt-12 px-4 flex-wrap
        "
      >
        {/* Facebook */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-2xl
            bg-gray-800
            hover:scale-110
            transition duration-300
          "
        >
          <span className="text-xl">📘</span>
        </a>

        {/* X */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-2xl
            bg-gray-800
            hover:scale-110
            transition duration-300
          "
        >
          <span className="text-xl">𝕏</span>
        </a>

        {/* YouTube */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-2xl
            bg-gray-800
            hover:scale-110
            transition duration-300
          "
        >
          <span className="text-xl">▶</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hogoautofilms_india"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-2xl
            bg-gray-800
            hover:scale-110
            transition duration-300
          "
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-6 h-6 object-contain"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-12 h-12
            flex items-center justify-center
            rounded-2xl
            bg-gray-800
            hover:scale-110
            transition duration-300
          "
        >
          <span className="text-xl">💬</span>
        </a>
      </div>

      {/* Bottom Footer */}
      <div
        className="
          mt-10
          border-t border-gray-700
          py-5
          text-center
          text-sm
          text-white/70
        "
      >
        © 2026 - Hogo Autofilms
      </div>
    </footer>
  );
};

export default Footer;