import bgCar from "../assets/bg.jpeg";

export default function ParallaxSection() {
  return (
    <div className="py-8 sm:py-12 md:py-16" style={{ backgroundColor: "#00001a" }}>
      <section
        className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgCar})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundColor: "#00001a",
        }}
      >
        {/* Top fade */}
        <div
          className="absolute top-0 left-0 w-full h-1/4"
          style={{
            background:
              "linear-gradient(#00001a 0%, rgba(15,15,15,0.6) 60%, rgba(15,15,15,0) 100%)",
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,26,0.25)" }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/5 sm:h-[22%] md:h-1/4"
          style={{
            background:
              "linear-gradient(to top, #00001a 0%, rgba(15,15,15,0.6) 60%, rgba(15,15,15,0) 100%)",
          }}
        />
      </section>
    </div>
  );
}