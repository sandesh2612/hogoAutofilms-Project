import ProductShowcase from "../components/ProductShowcase";
import products from "../data/products.json";
import { useParams } from "react-router-dom";
import gallerybg from "../assets/gallerybg.jpg"
import HeroSection from "../components/HeroSection";

import productimg1 from "../assets/productimg1.jpg";
import productimg2 from "../assets/productimg2.jpg";
import productimg3 from "../assets/productimg3.jpg";
import productimg4 from "../assets/productimg4.jpg";
import productimg5 from "../assets/productimg5.jpg";
import productimg6 from "../assets/productimg6.jpg";
import productimg7 from "../assets/productimg7.png";
import productimg8 from "../assets/productimg8.png";
import productimg9 from "../assets/productimg9.png";
import productimg10 from "../assets/productimg10.png";
import productimg11 from "../assets/productimg11.png";
import SpecificationSection from "../components/SpecificationSection";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  const imageMap = {
    "productimg1.jpg": productimg1,
    "productimg2.jpg": productimg2,
    "productimg3.jpg": productimg3,
    "productimg4.jpg": productimg4,
    "productimg5.jpg": productimg5,
    "productimg6.jpg": productimg6,
    "productimg7.jpg": productimg7,
    "productimg8.jpg": productimg8,
    "productimg9.jpg": productimg9,
    "productimg10.jpg": productimg10,
    "productimg11.jpg": productimg11,

  };

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-white">
          Product not found
        </h1>
      </div>
    );
  }

  

  return (
    <>

     <HeroSection 
            backgroundImage={gallerybg}
            title={product.title}
            title2="Product"
            breadcrumbText={product.title}
          />

      <ProductShowcase
        title={product.title}
        description={product.description}
        image={imageMap[product.image]}
        descriptionLabel=""
      />
      <SpecificationSection/>
    </>


  );
}

export default ProductDetails;