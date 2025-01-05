import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Router-г энд ашиглахгүй
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Products from '../Products';
import ServicesPage from '../Services';
import ProjectsPage from '../Projects';
import Join from '../Join';
import JoinUsForm from '../../components/JoinUsForm';
import ProductDetail from '../../components/ProductDetails';
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import FooterTop from "../../components/FooterTop";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  // state-г өөрчлөх функц
  const toggleSideBar = () => {
    setShowSidebar(prevState => !prevState);
  };

  return (
    <div>
      {/* toggleSideBar функцыг Toolbar руу дамжуулна */}
      <Toolbar toggleSideBar={toggleSideBar} />
      {/* SideBar-д showSidebar болон toggleSideBar props дамжуулна */}
      <Sidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />

      <main className={css.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/joinUs" element={<JoinUsForm />} />   {/* Join Us page */}
           {/* Product detail page */}
           <Route path="/product/:id" element={<ProductDetail />} /> {/* Product detail */}
        </Routes>
      </main>
      <FooterTop />

      <Footer />
    </div>
  );
}

export default App;
