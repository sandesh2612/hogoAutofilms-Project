import { useState, useRef, useCallback, useEffect } from "react";
import beforeImg from "../assets/beforeImg.jpeg";
import afterImg from "../assets/afterImg.jpeg";

export default function BeforeAfterSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    const x = clientX - rect.left;
    return Math.min(100, Math.max(0, (x / rect.width) * 100));
  }, []);

  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      setSliderPos(getPos(e.clientX));
    },
    [isDragging, getPos]
  );

  const onMouseUp = useCallback(() => setIsDragging(false), []);

  const onTouchMove = useCallback(
    (e) => {
      e.preventDefault();
      setSliderPos(getPos(e.touches[0].clientX));
    },
    [getPos]
  );

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <section
      className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      style={{ backgroundColor: "#00001a" }}
    >
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── TEXT SIDE ── */}
        <div className="flex flex-col gap-6">
          {/* label */}
          <div className="inline-flex flex-col gap-1 w-fit">
            <div className="h-[2px] w-10 ml-auto bg-red-600" />
            <span className="tracking-[0.28em] text-xs sm:text-sm font-semibold text-white uppercase">
              Real Results
            </span>
            <div className="h-[2px] w-10 bg-red-600" />
          </div>

          {/* headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Before &amp; After:<br className="hidden sm:block" /> Complete
            <span className="text-red-500"> Auto</span> Transformations
          </h2>

          {/* body */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg">
            Experience stunning before-and-after transformations with{" "}
            <span className="text-white font-semibold">HOGO AUTOFILMS</span>,
            where advanced protection solutions restore shine, enhance
            aesthetics, and deliver a flawless, showroom-like finish that keeps
            your vehicle looking brand new.
          </p>

          {/* CTA */}
          <div>
            <button className="group relative overflow-hidden rounded-md bg-red-600 px-6 py-2.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-red-500 active:scale-95 cursor-pointer">
              <span className="relative z-10">View More</span>
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </div>
        </div>

        {/* ── SLIDER SIDE ── */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl overflow-hidden select-none shadow-2xl shadow-black/60"
          style={{
            aspectRatio: "16/10",
            cursor: isDragging ? "grabbing" : "ew-resize",
          }}
          onMouseDown={onMouseDown}
          onTouchStart={(e) => {
            setIsDragging(true);
            setSliderPos(getPos(e.touches[0].clientX));
          }}
          onTouchMove={onTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* AFTER image (full) */}
          <img
            src={afterImg}
            alt="After"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* BEFORE image (clipped) */}
          <img
            src={beforeImg}
            alt="Before"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />

          {/* Labels */}
          <span
            className="absolute top-3 left-3 z-20 text-xs font-bold tracking-widest uppercase bg-black/50 text-white px-2 py-1 rounded"
            style={{ opacity: sliderPos > 10 ? 1 : 0, transition: "opacity 0.2s" }}
          >
            Before
          </span>
          <span
            className="absolute top-3 right-3 z-20 text-xs font-bold tracking-widest uppercase bg-black/50 text-white px-2 py-1 rounded"
            style={{ opacity: sliderPos < 90 ? 1 : 0, transition: "opacity 0.2s" }}
          >
            After
          </span>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] z-10 bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          />

          {/* Handle */}
          <div
            className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${sliderPos}%` }}
            onMouseDown={onMouseDown}
          >
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-black/40 backdrop-blur-sm flex items-center justify-center gap-1 shadow-lg transition-transform duration-150"
              style={{ transform: isDragging ? "scale(1.15)" : "scale(1)" }}
            >
              {/* left arrow */}
              <svg width="10" height="14" viewBox="0 0 10 14" fill="white">
                <path d="M8 1L2 7l6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              {/* right arrow */}
              <svg width="10" height="14" viewBox="0 0 10 14" fill="white">
                <path d="M2 1l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}