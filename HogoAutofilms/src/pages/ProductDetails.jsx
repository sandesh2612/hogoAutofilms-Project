import ProductShowcase from "../components/ProductShowcase";
import products from "../data/products.json";
import { useParams } from "react-router-dom";

import productimg1 from "../assets/productimg1.jpg";
import SpecificationSection from "../components/SpecificationSection";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  const imageMap = {
    "productimg1.jpg": productimg1,
    
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