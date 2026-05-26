const features = [
  { title: "Expert Technicians" },
  { title: "Premium Products" },
  { title: "Affordable Pricing" },
  { title: "Customer Satisfaction" },
];

export default function WhyChooseSection() {
  return (
    <div style={{ backgroundColor: "rgb(0,0,26)" }}>
      <section
        className="relative w-full min-h-[10vh] py-12 md:py-16"
        style={{
          backgroundColor: "rgb(126,126,126)",
          fontFamily: "Oxanium, sans-serif",
        }}
      >
        {/* ── Heading block ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center gap-6">
          {/* label */}
          <div className="inline-block">
            <div className="relative inline-block">
              <span className="absolute -top-3 right-0 w-[35%] sm:w-[40%] md:w-[45%] h-[2px] bg-red-600" />
              <h2
                className="font-semibold tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em]"
                style={{ color: "rgb(0,0,26)" }}
              >
                Trusted &amp; Affordable
              </h2>
              <span className="absolute -bottom-3 left-0 w-[35%] sm:w-[40%] md:w-[45%] h-[2px] bg-red-600" />
            </div>
          </div>

          {/* headline + sub */}
          <div>
            <h2
              className="uppercase text-center mx-auto text-[clamp(24px,3.6vw,56px)] leading-[1.08] mb-3"
              style={{ fontFamily: "Oxanium, sans-serif", color: "rgb(0,0,26)" }}
            >
              WHY CHOOSE HOGO AUTOFILMS
            </h2>
            <p
              className="max-w-3xl mx-auto"
              style={{ color: "rgb(0,0,26)", opacity: 0.8 }}
            >
              HOGO AUTOFILMS delivers premium-quality protection with advanced
              technology, exceptional durability, and trusted OEM heritage—ensuring
              superior shine, long-term performance, and reliable protection for your
              vehicle in every condition.
            </p>
          </div>
        </div>

        {/* ── Feature cards ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-10 md:pt-8 lg:pt-6 pb-12 md:pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {features.map(({ title }, i) => (
            <div
              key={i}
              className="p-7 sm:p-8 rounded-lg transition-all duration-300"
              style={{ backgroundColor: "rgb(0,0,26)" }}
            >
              <h3
                className="text-lg sm:text-xl font-semibold mb-2 text-center"
                style={{ color: "rgb(255,255,255)" }}
              >
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}