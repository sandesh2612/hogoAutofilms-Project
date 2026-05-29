import t1 from "../assets/t1.jpeg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";

const testimonials = [
  {
    name: "Anjali Mehta",
    date: "07 Mar 2026",
    img: t3,
    text: "Got my new Defender treated with TPU PPF. The finish is invisible and the self-healing property actually works! Best detailing studio in India for high-end cars.",
  },
  {
    name: "Priya Sharma",
    date: "14 Mar 2026",
    img: t1,
    text: "The gloss on my Thar after the Ceramic Coating is unbelievable. It's been 3 months and the water still beads right off. Excellent professional service by the HOGO team!",
  },
  {
    name: "Vikram Malhotra",
    date: "27 Mar 2026",
    img: t2,
    text: "I was worried about highway stone chips on my BMW. The matte PPF installation was flawless and it gave my car a whole new aggressive look. Truly premium work.",
  },
  // {
  //   name: "Rohan Deshmukh",
  //   date: "5 Apr 2026",
  //   img: t4,
  //   text: "Professional staff and top-tier materials. They explained the difference between TPH and TPU clearly. My Virtus looks better than it did at the showroom delivery.",
  // },
];

function TestimonialCard({ t }) {
  return (
    <div
      className="min-w-[85vw] sm:min-w-[360px] md:min-w-[380px] max-w-[380px] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 mx-3"
      style={{ backgroundColor: "rgb(126,126,126)" }}
    >
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <img
          src={t.img}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover shrink-0"
        />
        <div>
          <h4 className="font-semibold text-white text-base">{t.name}</h4>
          <p className="text-white/60 text-sm">{t.date}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 text-yellow-400 text-lg">
        {"★★★★★"}
      </div>

      {/* Review */}
      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
        {t.text}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: "rgb(0,0,26)" }}>
      <section className="py-16 sm:py-20 md:py-24 overflow-hidden" style={{ backgroundColor: "rgb(0,0,26)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">

          {/* ── LEFT: heading ── */}
          <div className="flex flex-col gap-4">
            <div className="inline-flex flex-col gap-1 w-fit">
              <div className="h-[2px] w-10 ml-auto bg-red-600" />
              <span className="tracking-[0.22em] text-xs sm:text-sm font-semibold text-white uppercase">
                Testimonials
              </span>
              <div className="h-[2px] w-10 bg-red-600" />
            </div>

            <h2
              className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              What
              <br />
              They Say
            </h2>
          </div>

          {/* ── RIGHT: marquee ── */}
          <div className="lg:col-span-2 overflow-hidden w-full">
            {/* Inject keyframe + pause-on-hover via a style tag */}
            <style>{`
              @keyframes marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-track {
                display: flex;
                width: max-content;
                animation: marquee 28s linear infinite;
              }
              .marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="marquee-track">
              {items.map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}