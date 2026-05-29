export default function WarrantySection() {
  const handleWarrantyAction = (action) => {
    console.log(`${action} clicked`);
    
  };

  return (
    <div id="warranty" className="bg-[#7e7e7e]">
      <section className="py-16 bg-[#d20000]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left text-white">
            Protection You Can Trust, Warranty You Can Count On.
          </h2>

          <div className="flex gap-3 flex-wrap justify-center">
            {['Add Warranty', 'Check Warranty'].map((label) => (
              <button
                key={label}
                onClick={() => handleWarrantyAction(label)}
                className="relative overflow-hidden px-4 sm:px-6 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 border border-white bg-transparent text-white hover:bg-white hover:text-red-600"
              >
                <span className="relative block h-auto overflow-hidden">
                  <span className="inline-block transition-transform duration-300 hover:translate-y-full">
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