import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;