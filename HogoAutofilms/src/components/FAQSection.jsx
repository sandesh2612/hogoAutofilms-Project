import { useState } from "react";

const faqs = [
  {
    q: "1. What is Paint Protection Film (PPF) and why should I use it?",
    a: "Paint Protection Film (PPF) is a transparent, durable layer applied to your vehicle's surface to protect it from scratches, stone chips, UV rays, and environmental damage. It helps maintain your car's original paint, gloss, and resale value while offering long-lasting protection.",
  },
  {
    q: "2. How long do HOGO AUTOFILMS products last?",
    a: `HOGO AUTOFILMS offers different product variants with warranties ranging from 3 years to 10 years, depending on the product.\n\n• PPF YUVA – 6 Years\n• PPF VAYU – 8 Years\n• PPF VAJRA – 10 Years\n• Windshield PPF – 3 Years\n• Window Tints – 10 Years`,
  },
  {
    q: "3. Do your PPF products have self-healing properties?",
    a: "Yes, most of our PPF products come with advanced self-healing technology. Minor scratches and swirl marks disappear when exposed to heat, keeping your vehicle's surface smooth and flawless.",
  },
  {
    q: "4. Can these films be applied only on cars?",
    a: `No, our films are versatile and can be applied on multiple vehicles including:\n\n• Cars\n• Motorbikes\n• Scooters\n• Trucks\n• Buses and even trains`,
  },
  {
    q: "5. What are the benefits of HOGO window tint films?",
    a: `HOGO window tints provide:\n\n• High heat rejection for better cabin comfort\n• UV protection (up to 99%)\n• Reduced glare for safer driving\n• Enhanced privacy with multiple VLT options\n• Long-lasting color stability with up to 10 years warranty`,
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: "rgb(126,126,126)" }}
      onClick={onToggle}
    >
      <div className="flex justify-between items-center gap-4 py-5">
        <h3 className="text-base sm:text-lg font-medium text-white pr-2">
          {item.q}
        </h3>
        <span
          className="shrink-0 text-white text-sm transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </div>

      {/* Animated answer panel */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "600px" : "0px" }}
      >
        <p className="pb-5 text-sm sm:text-base leading-relaxed text-white/75 whitespace-pre-line">
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div style={{ backgroundColor: "rgb(0,0,26)" }}>
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6" style={{ backgroundColor: "rgb(0,0,26)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── LEFT: heading ── */}
          <div className="flex flex-col justify-start gap-4">
            {/* label */}
            <div className="inline-flex flex-col gap-1 w-fit">
              <div className="h-[2px] w-10 ml-auto bg-red-600" />
              <span className="tracking-[0.2em] sm:tracking-[0.28em] text-xs sm:text-sm font-semibold text-white uppercase">
                Everything You Need To Know
              </span>
              <div className="h-[2px] w-10 bg-red-600" />
            </div>

            {/* headline */}
            <h2
              className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "Oxanium, sans-serif" }}
            >
              Frequently
              <br />
              Asked
              <br />
              Question
            </h2>
          </div>

          {/* ── RIGHT: accordion ── */}
          <div className="flex flex-col">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}