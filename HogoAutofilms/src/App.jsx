import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';

import Product from './pages/Product';
import ProductDetails from "./pages/ProductDetails";

function App() {
    return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product" element={<Product />} />
        <Route path="/products/:slug" element={<ProductDetails />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;