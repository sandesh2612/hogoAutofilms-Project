import insta1 from "../assets/insta1.jpeg";
import insta2 from "../assets/insta2.jpeg";
import insta3 from "../assets/insta3.jpeg";
import insta4 from "../assets/insta4.jpeg";
import insta5 from "../assets/insta5.jpg";
import insta6 from "../assets/insta6.jpg";
import insta7 from "../assets/insta7.jpg";
import insta8 from "../assets/insta8.jpg";

const INSTAGRAM_URL =
  "https://www.instagram.com/hogoautofilms_india?igsh=MTVldDk3cXF1c3kzbw==";

const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8];

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="white"
    width="28"
    height="28"
  >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export default function InstagramSection() {
  return (
    <div style={{ backgroundColor: "rgb(0,0,26)" }}>
      <section
        className="py-16 sm:py-20 md:py-24 overflow-hidden"
        style={{ backgroundColor: "rgb(126,126,126)" }}
      >
        {/* ── Heading ── */}
        <div className="text-center mb-10 sm:mb-14 px-4 sm:px-6">
          {/* Label with offset lines exactly like the image */}
          <div className="inline-block relative py-2 px-8 mb-4">
            {/* Top Red Line (Shifted Right) */}
            <div className="absolute top-0 right-4 h-[2px] w-12 bg-red-600" />
            
            {/* Text */}
            <span 
              className="tracking-[0.25em] text-sm sm:text-base font-bold uppercase block dynamic-font"
              style={{ color: "rgb(0,0,26)", fontFamily: "sans-serif" }}
            >
              Our Instagram
            </span>
            
            {/* Bottom Red Line (Shifted Left) */}
            <div className="absolute bottom-0 left-4 h-[2px] w-12 bg-red-600" />
          </div>

          {/* Handle */}
          <div className="mt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl sm:text-4xl md:text-5xl font-bold hover:opacity-80 transition-opacity duration-200 block tracking-wide"
              style={{ color: "rgb(0,0,26)", fontFamily: "sans-serif" }}
            >
              @hogoautofilms_india
            </a>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {images.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden cursor-pointer block"
            >
              {/* image */}
              <img
                src={src}
                alt={`Instagram ${i + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />

              {/* icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="p-1.5 rounded-full bg-black/20 backdrop-blur-[2px]">
                  <InstagramIcon />
                </div>
              </div>

              {/* dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}