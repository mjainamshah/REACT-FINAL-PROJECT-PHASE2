import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';
import SingleProduct from './pages/SingleProduct';
import Products from './components/Products';
import Navbar from './layout/Navbar';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/singleProduct' element={<SingleProduct />} />
    </Routes>

    </>
  );
}

export default App;
