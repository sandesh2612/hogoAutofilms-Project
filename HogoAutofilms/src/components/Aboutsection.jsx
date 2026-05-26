import aboutImg1 from "../assets/aboutpage3.jpeg";
import aboutImg2 from "../assets/aboutpage2.jpeg";

const stats = [
  {    
    label: "Hours of Works",
    value: "65250+",
    icon: (
      <svg className="w-10 h-10" fill="#D20000" viewBox="0 0 24 24">
        <path d="M10 2h4a2 2 0 012 2v2h4a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h4V4a2 2 0 012-2zm0 4h4V4h-4v2z" />
      </svg>
    ),
  },
  {
    label: "Happy Customers",
    value: "23160+",
    icon: (
      <svg className="w-10 h-10" fill="#D20000" viewBox="0 0 24 24">
        <path d="M2 10h4v12H2zm20 1c0-1.1-.9-2-2-2h-6l1-4V3c0-.6-.4-1-1-1h-1l-4 7v13h9c.8 0 1.5-.5 1.8-1.2l2-5c.1-.3.2-.6.2-.8v-4z" />
      </svg>
    ),
  },
  {
    label: "Experienced Workers",
    value: "1500+",
    icon: (
      <svg className="w-10 h-10" fill="#D20000" viewBox="0 0 24 24">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-2.7-5.3-4-2-4zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 1.9 2 2.9v3h7v-3c0-2.7-5.3-4-8-4z" />
      </svg>
    ),
  },
  {
    label: "Years of Experience",
    value: "46+",
    icon: (
      <svg className="w-10 h-10" fill="#D20000" viewBox="0 0 24 24">
        <path d="M12 2l3 6 6 .9-4.5 4.4L17.8 20 12 17l-5.8 3 1.1-6.7L2.8 8.9 9 8z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <div className="py-16" style={{ backgroundColor: "rgb(126,126,126)" }}>

      {/* ── About + Images ── */}
      <section style={{ color: "rgb(255,255,255)" }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT: stacked images */}
          <div className="relative w-full h-[340px] sm:h-[420px] md:h-[520px]">
            {/* back image — top-left */}
            <img
              src={aboutImg1}
              alt="Detailing"
              className="absolute top-0 left-0 w-[62%] h-[78%] rounded-2xl object-cover shadow-xl z-10"
            />
            {/* front image — bottom-right */}
            <img
              src={aboutImg2}
              alt="Detailing"
              className="absolute bottom-0 right-0 w-[62%] h-[78%] rounded-2xl object-cover shadow-xl z-20"
            />
          </div>

          {/* RIGHT: text */}
          <div className="space-y-6 sm:space-y-8">
            {/* label */}
            <div className="inline-flex flex-col gap-1 w-fit">
              <div className="h-[2px] w-10 ml-auto bg-red-600" />
              <span
                className="tracking-[0.22em] text-xs sm:text-sm font-semibold uppercase"
                style={{ color: "rgb(0,0,26)" }}
              >
                About Us
              </span>
              <div className="h-[2px] w-10 bg-red-600" />
            </div>

            <p
              className="leading-relaxed max-w-xl text-left md:text-justify text-sm sm:text-base"
              style={{ color: "rgb(0,0,26)" }}
            >
              HOGO AUTOFILMS India Pvt. Ltd. is built on a strong legacy of over 46
              years in the automotive industry. Since its inception in 1979, the group
              has been driven by a clear vision to deliver uncompromised quality and
              lasting value to customers.
            </p>

            <p
              className="leading-relaxed max-w-xl text-left md:text-justify text-sm sm:text-base"
              style={{ color: "rgb(0,0,26)" }}
            >
              With an unwavering focus on quality and consistency, the organization
              established a strong presence across automotive accessories and auto
              components. Over the years, it expanded its portfolio to include premium
              seat covers, body covers, floor mats, steering covers, and a wide range
              of auto components, serving both the aftermarket and leading automobile
              manufacturers.
            </p>

            <p
              className="leading-relaxed max-w-xl text-left md:text-justify text-sm sm:text-base"
              style={{ color: "rgb(0,0,26)" }}
            >
              This commitment to excellence has earned approvals from major OEMs such
              as Maruti Suzuki, Hyundai Motor India, Mahindra &amp; Mahindra, and MG
              Motor — reinforcing its reputation as a trusted partner for high-quality
              automotive solutions.
            </p>

            {/* CTA */}
            <button className="group relative overflow-hidden rounded-md bg-red-600 px-5 sm:px-6 py-2.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-red-500 active:scale-95 cursor-pointer">
              <span className="relative z-10">Read More</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {stats.map(({ label, value, icon }, i) => (
            <div key={i} className="flex flex-col items-center gap-3 text-center">
              {icon}
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "rgb(0,0,26)" }}
              >
                {value}
              </h3>
              <p className="text-sm sm:text-base" style={{ color: "rgb(0,0,26)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}