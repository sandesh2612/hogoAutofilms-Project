import HeroSection from "../components/HeroSection";
import gallerybg from "../assets/gallerybg.jpg"
import GallerySection from "../components/GallerySection"

function Gallery() {

  return (
    <> 
    <HeroSection 
           backgroundImage={gallerybg}
           title="Gallery"
           breadcrumbText="Gallery"
         />
    
    <GallerySection/>
    </>
  
)
}

export default Gallery;