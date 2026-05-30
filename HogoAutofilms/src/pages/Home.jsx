import AboutSection from "../../src/components/Aboutsection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import FAQSection from "../components/FAQSection";
import Instagramsection from "../components/Instagramsection";
import ParallaxSection from "../components/ParallaxSection";
import Warrantysection from "../components/Warrantysection";
import TestimonialsSection from "../components/TestimonialsSection";
import Whychoosesection from "../components/Whychoosesection";
import Hero from "../components/Hero";

function Home() {

  return (
    <> 
    <Hero />
    <AboutSection />
    <Warrantysection/>
    <TestimonialsSection/>
    <Whychoosesection/>
    <BeforeAfterSection/>
    <ParallaxSection/>
    <FAQSection/>
    <Instagramsection/>
    
    </>
  
)
}

export default Home;