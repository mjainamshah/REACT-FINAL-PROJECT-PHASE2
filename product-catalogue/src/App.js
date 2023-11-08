import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<Products />} />
      <Route path="/product/:productId" element={<SingleProduct />} />
      <Route path='/addproduct' element={<AddProduct />} />
    </Routes>
    <Footer />

    </>
  );
}

export default App;
