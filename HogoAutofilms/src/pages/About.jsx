import HeroSection from "../components/HeroSection";
import Aboutsection2 from "../components/Aboutsection2"
import WayForwardSection from "../components/WayForwardSection"
import aboutbg from "../assets/aboutbg.png"



function About() {

  return (
    <> 
   <HeroSection 
        backgroundImage={aboutbg}
        title="About Us"
        breadcrumbText="About Us"
      />

<Aboutsection2/>  
<WayForwardSection/>  
    </>
  
)
}

export default About;