export default function WarrantySection() {
  return (
    <div id="warranty" style={{ backgroundColor: "rgb(126,126,126)" }}>
      <section className="py-16" style={{ backgroundColor: "rgb(210,0,0)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2
            className="text-2xl md:text-3xl font-semibold text-center md:text-left"
            style={{ color: "rgb(255,255,255)" }}
          >
            Protection You Can Trust, Warranty You Can Count On.
          </h2>

          <div className="flex gap-3 flex-wrap justify-center">
            {["Add Warranty", "Check Warranty"].map((label) => (
              <button
                key={label}
                className="relative overflow-hidden px-4 sm:px-6 py-2 rounded-[6px] font-medium cursor-pointer transition-all duration-300 border border-white bg-transparent text-white"
              >
                <span className="relative block h-auto overflow-hidden">
                  <span
                    className="inline-block transition-transform duration-300 hover:translate-y-full after:absolute after:left-0 after:-top-full after:w-full"
                    style={{ "--tw-content": `"${label}"` }}
                    data-text={label}
                  >
                    {label}
                  </span>
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}