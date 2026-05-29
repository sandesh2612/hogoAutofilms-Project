// import React from "react";
import contactImg from "../assets/contactBg.jpg";
import HeroSection from "../components/HeroSection";
import contactImg1 from "../assets/contactImg.jpg";

const ContactSection = () => {
  return (
<>
     <HeroSection 
            backgroundImage={contactImg}
            title="Contact Us"
            breadcrumbText="Contact Us"
          />
    
    <section className="py-20 px-4 sm:px-6 bg-[#7e7e7e] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* Left Content */}
        <div
          className="relative rounded-2xl overflow-hidden min-h-[450px] bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage: `url(${contactImg1})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#00001a]/70"></div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 h-full flex flex-col justify-center">

            {/* Small Heading */}
            <div className="inline-block mb-8">
              <div className="relative inline-block">

                {/* Top Line */}
                <span className="absolute -top-3 right-0 w-[40%] h-[2px] bg-red-600"></span>

                {/* Text */}
                <h2 className="text-white font-semibold tracking-[0.25em] text-sm sm:text-base">
                  GET IN TOUCH
                </h2>

                {/* Bottom Line */}
                <span className="absolute -bottom-3 left-0 w-[40%] h-[2px] bg-red-600"></span>

              </div>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white mb-6"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              We are always ready <br />
              to help you
            </h2>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg max-w-md leading-relaxed">
              Whether you have a question, a suggestion, or just
              want to say hello, this is the place to do it.
              Fill the form and we’ll get back to you.
            </p>

          </div>
        </div>

        {/* Right Form */}
        <div className="rounded-2xl bg-[#00001a] p-8 sm:p-12">

          {/* Heading */}
          <h3
            className="text-2xl sm:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            Get In Touch
          </h3>

          {/* Form */}
          <form className="space-y-6">

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-lg bg-transparent border border-white text-white outline-none placeholder:text-gray-400 focus:border-red-500 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-lg bg-transparent border border-white text-white outline-none placeholder:text-gray-400 focus:border-red-500 transition-all duration-300"
              />
            </div>

            {/* Mobile */}
            <div>
              <input
                type="tel"
                placeholder="Your Mobile"
                className="w-full px-5 py-3 rounded-lg bg-transparent border border-white text-white outline-none placeholder:text-gray-400 focus:border-red-500 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-3 rounded-lg bg-transparent border border-white text-white outline-none resize-none placeholder:text-gray-400 focus:border-red-500 transition-all duration-300"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="relative overflow-hidden px-6 py-3 rounded-md font-medium bg-red-600 text-white transition-all duration-300 hover:bg-red-700"
            >
              <span className="relative block overflow-hidden">
                <span
                  className="inline-block transition-transform duration-300 hover:-translate-y-full after:content-[attr(data-text)] after:absolute after:left-0 after:top-full after:w-full"
                  data-text="Send Message"
                >
                  Send Message
                </span>
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
    </>
  );
};

export default ContactSection;