import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';

import Product from './pages/Product';
import ProductDetails from "./pages/ProductDetails";
import Distributor from "./pages/Distributor";
import Contact from "./pages/Contact";

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
        <Route path="/distributor" element={<Distributor/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;